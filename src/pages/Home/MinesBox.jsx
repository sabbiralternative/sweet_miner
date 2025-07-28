import { useState } from "react";
import { cn } from "../../utils/cn";
import {
  playDynamiteExplosion,
  playGoldReveal,
  playStoneClick,
  playStoneHover,
} from "../../utils/sound";
import { useSound } from "../../context/ApiProvider";

const MinesBox = ({ boxData, isGameStart, setBoxData, setIsGameStart }) => {
  const { sound } = useSound();
  const [shakeBoxId, setShakeBoxId] = useState(null);
  const handleBoxClick = (box) => {
    if (sound) {
      playStoneClick();
    }
    setShakeBoxId(box?.id);
    const timeout = setTimeout(() => {
      setShakeBoxId(null);
      if (box?.mine) {
        if (sound) {
          playDynamiteExplosion();
        }
        setIsGameStart(false);
        const updatedBox = boxData?.map((boxObj) => ({
          ...boxObj,
          disable: true,
          isGold: boxObj.mine ? false : true,
          roundEnd: true,
          opacity: boxObj.mine || boxObj.isGold ? 1 : 0.5,
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
    }, 500);
    return () => clearTimeout(timeout);
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
                    <img
                      src="https://curacao-sweet.gamingcorpsgames.com/static/media/mine.min.b651699b.png"
                      alt="part"
                    />
                  ) : box?.isGold ? (
                    <img
                      src="https://curacao-sweet.gamingcorpsgames.com/static/media/prize.min.ae3c1949.png"
                      alt="part"
                    />
                  ) : (
                    <img
                      src="https://curacao-sweet.gamingcorpsgames.com/static/media/t.min.9ebadef9.png"
                      alt="part"
                    />
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
