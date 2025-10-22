import { isMobile } from "react-device-detect";
import { useContextState, useSound } from "../../context/ApiProvider";
import { playButtonEnable } from "../../utils/sound";
import Rules from "./Rules/Rules";
import { Settings } from "../../api";
import { useSelector } from "react-redux";

const BetSlip = ({
  stake,
  setStake,
  rottenEgs,
  setRottenEgs,
  handleGameStart,
  isGameStart,
  handleCashOut,
  isCashOutActive,
  current_multiplier,
}) => {
  const { token, balance } = useSelector((state) => state.auth);
  const { showRule, setShowRule } = useContextState();
  const { sound, setSound } = useSound();

  const handleChangeBetAmount = (type) => {
    if (sound) {
      playButtonEnable();
    }
    if (type === "minus") {
      if (stake > 0 && stake <= 100) {
        setStake((prev) => Math.max(prev - 10, 0));
      } else if (stake > 100 && stake <= 1000) {
        setStake((prev) => Math.max(prev - 100, 0));
      } else if (stake > 1000) {
        setStake((prev) => Math.max(prev - 500, 0));
      }
    }
    if (type === "plus") {
      if (stake >= 0 && stake < 100) {
        setStake((prev) => prev + 10);
      } else if (stake >= 100 && stake < 1000) {
        setStake((prev) => prev + 100);
      } else if (stake >= 1000) {
        setStake((prev) => prev + 500);
      }
    }
  };
  const handleOpenLobby = () => {
    const url = `${Settings.lobby}/${token}`;
    window.location.href = url;
  };
  return (
    <aside className="sc-jHcXXw lkkECO">
      <img src="/game_logo.min.cc3b93d3.png" className="sc-dWBRfb iWqacH" />

      <div data-box="toasts" className="sc-bdnxRM jvCTkj" />
      {showRule && !isMobile && (
        <div className={`sc-bXexck kmvQjn`}>
          <Rules setShowRule={setShowRule} />
        </div>
      )}

      <section data-box="informer" className="sc-eEVmNe illmTA">
        <div className="sc-fmdNqN hyACbC">
          <button
            data-mode="balance"
            className="sc-bqGGPW iPexDg"
            style={{
              flex: "0 0 calc(100% - 160px)",
              alignItems: "flex-start",
            }}
          >
            <span
              className="sc-ksluID kFmqyc"
              style={{ color: "var(--btn-c-informer-balance-label)" }}
            >
              Balance
            </span>
            <span
              className="sc-hBMUJo syKsX"
              style={{
                textAlign: "left",
                color: "var(--btn-c-informer-balance-text)",
              }}
            >
              <span>₹</span>
              <span>{balance}</span>
            </span>
          </button>
          <button
            onClick={() => setShowRule(true)}
            data-mode="default"
            className="sc-bqGGPW iPexDg"
            style={{ flex: "0 0 70px" }}
          >
            <span className="sc-hBMUJo syKsX">
              <i className="sc-uxdHp fiDOnB">
                <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm0 1.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm.798 7.185-1.326 6.646.311.094 2.57-2.378 1.147.992-1.146 1.166c-.612.63-1.15 1.086-1.613 1.37a2.74 2.74 0 0 1 -1.45.425c-.589 0-1.036-.15-1.342-.449s-.458-.7-.458-1.205c0-.147.01-.299.032-.456.022-.158.06-.362.115-.614l.802-4.016h-1.94l.278-1.575zm-.442-3.685c.459 0 .778.084.958.252s.27.373.27.614c0 .053-.005.12-.016.205-.011.084-.027.2-.05.346a1.148 1.148 0 0 1 -.4.717c-.213.173-.549.26-1.007.26-.459 0-.778-.084-.958-.252a.808.808 0 0 1 -.27-.614c0-.053.005-.121.016-.205l.02-.15.029-.197c.055-.304.188-.543.401-.716s.549-.26 1.007-.26z"
                    fill="#fff"
                  />
                </svg>
              </i>
            </span>
          </button>
          <button
            onClick={() => setSound((prev) => !prev)}
            data-mode="default"
            className="sc-bqGGPW iPexDg"
            style={{ flex: "0 0 70px" }}
          >
            <span className="sc-hBMUJo syKsX">
              <i className="sc-uxdHp fiDOnB">
                {sound ? (
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.375 2.61c4.906 4.905 4.978 12.815.216 17.809l-.216.222-1.06-1.061c4.324-4.325 4.392-11.295.202-15.702l-.203-.208 1.061-1.06zM12 5v14h-2l-4-4H3a1 1 0 01-1-1v-4a1 1 0 011-1h3l4-4h2zm4.375.438a8.75 8.75 0 01.18 12.19l-.18.184-1.06-1.06A7.25 7.25 0 0015.48 6.67l-.167-.172 1.061-1.06zm-2 2.828a4.75 4.75 0 01.15 6.56l-.15.158-1.06-1.06a3.25 3.25 0 00.126-4.463l-.127-.134 1.061-1.06z"
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m12 5v14h-2l-4-4h-3a1 1 0 0 1 -1-1v-4a1 1 0 0 1 1-1h3l4-4zm7.47 3.47 1.06 1.06-2.469 2.47 2.47 2.47-1.061 1.06-2.47-2.469-2.47 2.47-1.06-1.061 2.469-2.47-2.47-2.47 1.061-1.06 2.47 2.469 2.47-2.47z"
                      fill="#fff"
                    ></path>
                  </svg>
                )}
              </i>
            </span>
          </button>
        </div>
      </section>
      <section className="sc-eEVmNe illmTA">
        {isGameStart ? (
          <button
            onClick={handleCashOut}
            data-mode="danger"
            disabled={!isCashOutActive}
            className="sc-bqGGPW iPexDg"
          >
            <span className="sc-hBMUJo syKsX">
              <span>Cash out : {current_multiplier}</span>
            </span>
          </button>
        ) : (
          <button
            onClick={handleGameStart}
            data-mode="warning"
            className="sc-bqGGPW iPexDg"
          >
            <span className="sc-hBMUJo syKsX">Play!</span>
          </button>
        )}

        <div className={`sc-fnVZcZ  ${isGameStart ? "JIDDs" : "bEEyQA"}`}>
          <div className="sc-fFSPTT eEJWPz">
            <div className="sc-bkbkJK eraKfR">
              <button
                disabled={isGameStart}
                onClick={() => handleChangeBetAmount("minus")}
                className="sc-bCwfaz hzzSzX"
              >
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x={3}
                    y={9}
                    width={14}
                    height={2}
                    rx={1}
                    fill="#FFF"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <button
                disabled={isGameStart}
                onClick={() => {
                  setStake(10);
                  if (sound) {
                    playButtonEnable();
                  }
                }}
                className="sc-bCwfaz hzzSzX"
              >
                min
              </button>
            </div>
            <div className="sc-dIvrsQ biCrYn">
              <div className="sc-hHEiqL ccTnQh">
                <span className="sc-dlMDgC kpPvTx">
                  <span>Bet value</span>
                </span>
                <span className="sc-kfYoZR lpaEYv">
                  {/* <span>€</span> */}
                  <span>{stake}</span>
                </span>
              </div>
              <div className="sc-fKgJPI cxbltl">
                <input
                  disabled
                  type="range"
                  min={0}
                  max={9}
                  step={1}
                  className="sc-cxNHIi fHUQtx"
                  defaultValue={3}
                />
                {/* <span
                  className="sc-iwajpm kydRHc"
                  style={{ width: `${stake / 10000}%` }}
                /> */}
              </div>
            </div>
            <div className="sc-iemWCZ hKymwP">
              <button
                disabled={isGameStart}
                onClick={() => handleChangeBetAmount("plus")}
                className="sc-bCwfaz hzzSzX"
              >
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 010 2h-5v5a1 1 0 01-2 0v-5H4a1 1 0 010-2h5V4a1 1 0 011-1z"
                    fill="#FFF"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <button
                disabled={isGameStart}
                onClick={() => {
                  setStake(10000);
                  if (sound) {
                    playButtonEnable();
                  }
                }}
                className="sc-bCwfaz hzzSzX"
              >
                max
              </button>
            </div>
          </div>
        </div>
        <div className={`sc-fnVZcZ  ${isGameStart ? "JIDDs" : "bEEyQA"}`}>
          <div className="sc-fFSPTT eEJWPz">
            <div className="sc-bkbkJK eraKfR">
              <button
                disabled={isGameStart}
                onClick={() => {
                  if (sound) {
                    playButtonEnable();
                  }
                  if (rottenEgs > 1) {
                    setRottenEgs((prev) => prev - 1);
                  }
                }}
                className="sc-bCwfaz hzzSzX"
              >
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x={3}
                    y={9}
                    width={14}
                    height={2}
                    rx={1}
                    fill="#FFF"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <button
                disabled={isGameStart}
                onClick={() => {
                  setRottenEgs(1);
                  if (sound) {
                    playButtonEnable();
                  }
                }}
                className="sc-bCwfaz hzzSzX"
              >
                min
              </button>
            </div>
            <div className="sc-dIvrsQ biCrYn">
              <span disabled className="sc-lmgQwP jRxmXB" />
              <div className="sc-hHEiqL ccTnQh">
                <span className="sc-dlMDgC kpPvTx">
                  <span>Rotten eggs</span>
                </span>
                <span className="sc-kfYoZR lpaEYv">
                  <span />
                  <span>{rottenEgs}</span>
                </span>
              </div>
              <div className="sc-fKgJPI cxbltl">
                <input
                  disabled
                  type="range"
                  min={0}
                  max={8}
                  step={1}
                  className="sc-cxNHIi fHUQtx"
                  defaultValue={0}
                />
                {/* <span
                  className="sc-iwajpm kydRHc"
                  style={{ width: `${rottenEgs * 10}%` }}
                /> */}
              </div>
            </div>
            <div className="sc-iemWCZ hKymwP">
              <button
                disabled={isGameStart}
                onClick={() => {
                  if (sound) {
                    playButtonEnable();
                  }
                  if (rottenEgs < 24) {
                    setRottenEgs((prev) => prev + 1);
                  }
                }}
                className="sc-bCwfaz hzzSzX"
              >
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 010 2h-5v5a1 1 0 01-2 0v-5H4a1 1 0 010-2h5V4a1 1 0 011-1z"
                    fill="#FFF"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <button
                disabled={isGameStart}
                onClick={() => {
                  setRottenEgs(24);
                  if (sound) {
                    playButtonEnable();
                  }
                }}
                className="sc-bCwfaz hzzSzX"
              >
                max
              </button>
            </div>
          </div>
        </div>
        <div className="sc-EZqKI iONckA">
          {/* <span>With this number of rotten eggs the maximum win is </span>
          <span>€</span>
          <span>48.66</span> */}
        </div>
        <a onClick={handleOpenLobby} className="sc-fXgAZx erAkNO">
          Back to lobby
        </a>
      </section>
    </aside>
  );
};

export default BetSlip;
