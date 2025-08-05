import { useState } from "react";
import About from "./About";
import Tutorial from "./Tutorial";

const Rules = ({ setShowRule }) => {
  const [tab, setTab] = useState(1);
  const closeModal = () => {
    setShowRule(false);
  };
  return (
    <div data-box="intro" className={`sc-bTDOke dXiuJH`}>
      <div className="sc-kHWWYL zRuTu">
        <img src="/game_logo.min.cc3b93d3.png" alt="Sweet Miner" />
      </div>
      <div className="sc-eGJWMs gQYBcx">
        <header className="sc-csTbgd kglWtV">
          <div className="sc-dFRpbK bFgzLZ">
            <button
              onClick={() => setTab(1)}
              className={`sc-bsatvv  ${tab === 1 ? "kXXMoP" : "eJsIgJ"}`}
            >
              Tutorial
            </button>
            <button
              onClick={() => setTab(2)}
              className={`sc-bsatvv ${tab === 2 ? "kXXMoP" : "eJsIgJ"}`}
            >
              About
            </button>
          </div>
        </header>
        {tab === 1 ? <Tutorial /> : <About />}
      </div>
      <footer className="sc-GvhzO kSqeJg">
        <button
          onClick={closeModal}
          data-mode="warning"
          className="sc-bqGGPW iPexDg"
        >
          Close
        </button>
      </footer>
    </div>
  );
};

export default Rules;
