import { useEffect, useRef, useState } from "react";
import BetSlip from "./BetSlip";
import MinesBox from "./MinesBox";
import Navbar from "./Navbar";
import { generateBoxDataWithMines } from "./home.utils";
import { useSound } from "../../context/ApiProvider";
import { playButtonEnable, playWin } from "../../utils/sound";
import soundAudio from "../../assets/sound";

const Home = () => {
  const audioRef = useRef(null);
  const { sound } = useSound();
  const [isGameStart, setIsGameStart] = useState(false);
  const [stake, setStake] = useState(10);
  const [rottenEgs, setRottenEgs] = useState(1);
  const [boxData, setBoxData] = useState(generateBoxDataWithMines(rottenEgs));

  const handleGameStart = () => {
    if (sound) {
      playButtonEnable();
    }
    setBoxData(generateBoxDataWithMines(rottenEgs));
    setIsGameStart(true);
  };

  const handleCashOut = () => {
    if (sound) {
      playWin();
    }
    setIsGameStart(false);
    const updatedBox = boxData?.map((boxObj) => ({
      ...boxObj,
      disable: true,
      isGold: boxObj.mine ? false : true,
      roundEnd: true,
      opacity: boxObj.isGold ? 1 : 0.5,
    }));
    setBoxData(updatedBox);
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

  return (
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
  );
};

export default Home;
