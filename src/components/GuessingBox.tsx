import React from "react";

import rectangle from "../assets/rect.png";

const GuessingBox = () => {
  return (
    <main className="guess-box">
      <span className="guess-title">Guess The Word</span>
      {/* Result Div */}
      <div className="dashes">
        <svg
          width="60"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="demo"
        >
          <path
            d="M10,10 Q15,12 20,10 Q25,8 30,10 Q35,12 40,10 Q45,8 90,10"
            stroke="red"
            stroke-width="2"
            fill="none"
            stroke-dasharray="5,5"
          />
        </svg>
        <svg
          width="60"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="demo"
        >
          <path
            d="M10,10 Q15,12 20,10 Q25,8 30,10 Q35,12 40,10 Q45,8 90,10"
            stroke="red"
            stroke-width="2"
            fill="none"
            stroke-dasharray="5,5"
          />
        </svg>
        <svg
          width="60"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="demo"
        >
          <path
            d="M10,10 Q15,12 20,10 Q25,8 30,10 Q35,12 40,10 Q45,8 90,10"
            stroke="red"
            stroke-width="2"
            fill="none"
            stroke-dasharray="5,5"
          />
        </svg>
        <svg
          width="60"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="demo"
        >
          <path
            d="M10,10 Q15,12 20,10 Q25,8 30,10 Q35,12 40,10 Q45,8 90,10"
            stroke="red"
            stroke-width="2"
            fill="none"
            stroke-dasharray="5,5"
          />
        </svg>
        <svg
          width="60"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="demo"
        >
          <path
            d="M10,10 Q15,12 20,10 Q25,8 30,10 Q35,12 40,10 Q45,8 90,10"
            stroke="red"
            stroke-width="2"
            fill="none"
            stroke-dasharray="5,5"
          />
        </svg>
      </div>
      {/* Letter Pool Div */}
      <div className="letter-pool">
        <div className="">
          {Array(20)
            .fill(0)
            .map((_, index) => {
              return (
                <span key={index.toString()} className="letter">
                  h
                </span>
              );
            })}
        </div>
        <img src={rectangle} alt="rectangle" className="rect" />
      </div>
    </main>
  );
};

export default GuessingBox;
