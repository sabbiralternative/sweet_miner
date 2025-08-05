import { useState } from "react";
import { cn } from "../../utils/cn";
import {
  playDynamiteExplosion,
  playGoldReveal,
  playStoneClick,
  playStoneHover,
} from "../../utils/sound";
import { useSound } from "../../context/ApiProvider";

const MinesBox = ({
  boxData,
  isGameStart,
  setBoxData,
  setIsGameStart,
  addOrder,
  activeBoxCount,
  selectedBoxes,
  setSelectedBoxes,
}) => {
  const { sound } = useSound();
  const [shakeBoxId, setShakeBoxId] = useState(null);
  const handleBoxClick = async (box) => {
    if (isGameStart) {
      if (sound) {
        playStoneClick();
      }
      setShakeBoxId(box?.id);
      const round_id = sessionStorage.getItem("round_id");
      const payload = [
        {
          round_id: Number(round_id),
          type: "select_box",
          box_id: box?.id,
          box_count: activeBoxCount,
          eventId: 20002,
          selected_tiles: [...selectedBoxes, box?.id],
        },
      ];
      setTimeout(async () => {
        const res = await addOrder(payload).unwrap();
        if (res.success) {
          setSelectedBoxes((prev) => [...prev, box?.id]);
          setShakeBoxId(null);
          if (res?.gem === 0) {
            if (sound) {
              playDynamiteExplosion();
            }
            setIsGameStart(false);
            const updatedBox = boxData?.map((boxObj, i) => ({
              ...boxObj,
              disable: true,
              isGold: res?.all?.[i] === 0 ? false : true,
              mine: res?.all?.[i] === 0 ? true : false,
              roundEnd: true,
              opacity: boxObj.isGold || box.id === boxObj.id ? 1 : 0.5,
            }));
            setBoxData(updatedBox);
          } else {
            if (sound) {
              playGoldReveal();
            }
            const updatedBox = boxData?.map((boxObj) =>
              boxObj.id === box.id
                ? {
                    ...boxObj,
                    disable: true,
                    isGold: true,
                  }
                : { ...boxObj }
            );
            setBoxData(updatedBox);
          }
        }
      }, 500);
    }
  };

  return (
    <div className="sc-crzoAE DykGo">
      <div className={cn("sc-dIsUp  ", isGameStart ? "jcVkZR" : "dhkxbB")}>
        {boxData.map((box) => {
          return (
            <button
              onMouseEnter={() => {
                if (sound) {
                  playStoneHover();
                }
              }}
              style={{ opacity: box?.opacity }}
              onClick={() => handleBoxClick(box)}
              key={box.id}
              disabled={!isGameStart || box?.disable}
              className={cn(
                "sc-dlnjwi dJXsSm flip-card",
                box?.isGold && "is-last is-gold selected",
                shakeBoxId === box?.id && "stone-shake-anim"
              )}
            >
              <div
                className={cn("sc-hKFxyN kksiKu", box?.isGold && "opened")}
                style={{ flipAnimationDelay: "0s" }}
              >
                <span className="sc-eCApnc iylGhi">
                  {box?.mine && box?.roundEnd ? (
                    <img src="/mine.min.b651699b.png" alt="part" />
                  ) : box?.isGold ? (
                    <img src="/prize.min.ae3c1949.png" alt="part" />
                  ) : (
                    <img src="/t.min.9ebadef9.png" alt="part" />
                  )}
                </span>
                <span
                  className={cn(
                    "sc-jSFjdj jcTaHb",
                    box?.isGold && "selectedGold"
                  )}
                >
                  <span
                    className={cn(
                      "sc-gKAaRy hydYaP",
                      box?.isGold && "is-gold selected"
                    )}
                  />
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MinesBox;
