import { useSelector } from "react-redux";
import { useContextState, useSound } from "../../context/ApiProvider";
import { isMobile } from "react-device-detect";
import Rules from "./Rules/Rules";

const Navbar = () => {
  const { showRule, setShowRule } = useContextState();
  const { sound, setSound } = useSound();
  const { balance } = useSelector((state) => state.auth);

  return (
    <>
      {showRule && isMobile && (
        <div className={`sc-hmbstg iriXCP`}>
          <div className="sc-eKYRIR llyViG">
            <Rules setShowRule={setShowRule} />
          </div>
        </div>
      )}
      <header className="sc-iJCRrE bojiJp">
        <div data-box="toasts" className="sc-bdnxRM jvCTkj" />
        <section data-box="informer-header" className="sc-eEVmNe illmTA">
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
                <span>{balance}</span>
              </span>
            </button>
            {isMobile && (
              <button
                onClick={() => setShowRule(true)}
                data-mode="default"
                className="sc-bqGGPW iPexDg"
                style={{ flex: "0 0 70px" }}
              >
                <span className="sc-hBMUJo syKsX">
                  <i className="sc-uxdHp fiDOnB">
                    <svg
                      height={24}
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm0 1.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm.798 7.185-1.326 6.646.311.094 2.57-2.378 1.147.992-1.146 1.166c-.612.63-1.15 1.086-1.613 1.37a2.74 2.74 0 0 1 -1.45.425c-.589 0-1.036-.15-1.342-.449s-.458-.7-.458-1.205c0-.147.01-.299.032-.456.022-.158.06-.362.115-.614l.802-4.016h-1.94l.278-1.575zm-.442-3.685c.459 0 .778.084.958.252s.27.373.27.614c0 .053-.005.12-.016.205-.011.084-.027.2-.05.346a1.148 1.148 0 0 1 -.4.717c-.213.173-.549.26-1.007.26-.459 0-.778-.084-.958-.252a.808.808 0 0 1 -.27-.614c0-.053.005-.121.016-.205l.02-.15.029-.197c.055-.304.188-.543.401-.716s.549-.26 1.007-.26z"
                        fill="#fff"
                      />
                    </svg>
                  </i>
                </span>
              </button>
            )}

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
        <button disabled className="sc-ikXwFM bJKYdx">
          <span>bonus</span>
        </button>
      </header>
    </>
  );
};

export default Navbar;
