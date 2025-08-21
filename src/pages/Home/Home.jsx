import { useEffect, useRef, useState } from "react";
import BetSlip from "./BetSlip";
import MinesBox from "./MinesBox";
import Navbar from "./Navbar";
import { generateBoxDataWithMines } from "./home.utils";
import { useSound } from "../../context/ApiProvider";
import { playButtonEnable, playWin } from "../../utils/sound";
import soundAudio from "../../assets/sound";
import { useOrderMutation } from "../../redux/features/events/events";
import { generateRoundId } from "../../utils/generateRoundId";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/auth";
import { useSelector } from "react-redux";

const Home = () => {
  const errorMessage = sessionStorage.getItem("errorMessage");
  const { token } = useSelector((state) => state.auth);
  const { mutate: handleAuth } = useAuth();
  const [addOrder] = useOrderMutation();
  const audioRef = useRef(null);
  const { sound } = useSound();
  const [isGameStart, setIsGameStart] = useState(false);
  const [stake, setStake] = useState(10);
  const [rottenEgs, setRottenEgs] = useState(1);
  const [boxData, setBoxData] = useState(generateBoxDataWithMines(rottenEgs));
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const handleGameStart = async () => {
    if (stake) {
      if (sound) {
        playButtonEnable();
      }
      setSelectedBoxes([]);
      setBoxData(generateBoxDataWithMines(rottenEgs));
      const round_id = generateRoundId();
      sessionStorage.removeItem("round_id");
      sessionStorage.setItem("round_id", round_id);
      const payload = [
        {
          eventId: 20002,
          eventName: "Mines",
          isback: 0,
          stake,
          type: "bet",
          mines_count: rottenEgs,
          round_id,
        },
      ];
      const res = await addOrder(payload).unwrap();
      if (res?.success) {
        handleAuth(token);
        setIsGameStart(true);
        setTimeout(() => {
          let recentResult = [];
          const recentStoredResult = localStorage.getItem("recentResult");
          if (recentStoredResult) {
            recentResult = JSON.parse(recentStoredResult);
          }
          //push
          localStorage.setItem("recentResult", JSON.stringify(recentResult));
        }, 500);
      } else {
        setIsGameStart(false);
        toast.error(res?.Message);
      }
    } else {
      toast.error("Amount is required");
    }
  };

  const handleCashOut = async () => {
    if (sound) {
      playWin();
    }
    const round_id = sessionStorage.getItem("round_id");
    const payload = [
      {
        round_id: Number(round_id),
        type: "cashout",
        box_count: activeBoxCount,
        eventId: 20002,
        selected_tiles: selectedBoxes,
      },
    ];

    const res = await addOrder(payload).unwrap();
    if (res?.success) {
      handleAuth(token);
      const updatedBox = boxData?.map((boxObj, i) => ({
        ...boxObj,
        disable: true,
        isGold: res?.all?.[i] === 1 ? true : false,
        mine: res?.all?.[i] === 0 ? true : false,
        roundEnd: true,
        opacity: boxObj.isGold ? 1 : 0.5,
      }));
      setIsGameStart(false);
      setBoxData(updatedBox);
    }
  };

  useEffect(() => {
    setBoxData(generateBoxDataWithMines(rottenEgs));
  }, [rottenEgs]);

  useEffect(() => {
    audioRef.current = new Audio(soundAudio.main_theme);
    audioRef.current.loop = true;
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (sound) {
      console.log({ sound });
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [sound]);

  const isCashOutActive = boxData.some((box) => box.isGold);
  const activeBoxCount = boxData.filter((box) => box.isGold).length;

  return token ? (
    <div id="app" className="sc-iGkqmO ckwDLe">
      <section className="sc-xGAEC cBoHoo">
        <section className="sc-bQCEYZ irmCui">
          <Navbar />
          <div id="character" className="sc-kYPZxB kZgSIK">
            <div
              className="spine-player"
              style={{ position: "relative", height: "100%" }}
            >
              <canvas
                className="spine-player-canvas"
                style={{ display: "block", width: "100%", height: "100%" }}
                width={600}
                height={200}
              />
            </div>
          </div>
          <MinesBox
            setSelectedBoxes={setSelectedBoxes}
            selectedBoxes={selectedBoxes}
            activeBoxCount={activeBoxCount}
            addOrder={addOrder}
            setIsGameStart={setIsGameStart}
            isGameStart={isGameStart}
            boxData={boxData}
            setBoxData={setBoxData}
          />
        </section>
        <BetSlip
          isCashOutActive={isCashOutActive}
          handleGameStart={handleGameStart}
          handleCashOut={handleCashOut}
          isGameStart={isGameStart}
          rottenEgs={rottenEgs}
          setRottenEgs={setRottenEgs}
          setStake={setStake}
          stake={stake}
        />
      </section>
    </div>
  ) : (
    <div className="error-container">
      <div className="alert alert-danger text-center m-0 " role="alert">
        {errorMessage ||
          "URL parameters are missing or invalid. Key: token | Value"}
      </div>
    </div>
  );
};

export default Home;
