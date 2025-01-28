import GuessingBox from "./GuessingBox";

const WordGuessingGame = () => {
  return (
    <main className="game-container">
      {/* Lines Div */}
      <div className="lines">
        {Array(19)
          .fill(0)
          .map((_, index) => {
            if (index === 0 || index === 1 || index == 2) {
              return <div key={index} className="empty-line"></div>;
            } else if (index === 3) {
              return <div key={index} className="top-line"></div>;
            } else {
              return (
                <div key={index} id={index.toString()} className="line"></div>
              );
            }
          })}
        <div className="side-line"></div>
      </div>
      {/* Title Span */}
      <span className="title">
        <span className="asterisk">*</span> Guess The Word !
      </span>
      {/* Rules Section */}
      <span className="rules-title"># How to play ?</span>
      <ol type="i" className="rules">
        <li>Pick a letter from the pool of letters.</li>
        <li>Drag it to any dash to make your guess for the word.</li>
        <li>Placing a letter in the wrong postion will loose you a mark.</li>
        <li>You start off with 10 marks.</li>
        <li>
          Scoring <span className="excellent">7 - 10 </span> gets you "
          <span className="excellent">Excellent!</span>"
        </li>
        <li>
          Scoring <span className="can-improve">3 - 6</span> gets you "
          <span className="can-improve">Can Improve!</span>"
        </li>
        <li>
          Scoring <span className="try-again">0 - 2</span> gets you "
          <span className="try-again">Try Again Champ!</span>"
        </li>
      </ol>
      {/* Pencil line svg */}

      <svg width="750" height="100" className="pencil-line">
        <path
          d="M10 50 C 150 45, 300 55, 450 50 S 600 45, 750 60"
          stroke="black"
          fill="transparent"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Word Guessing section */}
      <GuessingBox />
    </main>
  );
};

export default WordGuessingGame;
