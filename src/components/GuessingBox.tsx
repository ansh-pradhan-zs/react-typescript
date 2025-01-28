import rectangle from "../assets/rect.png";
import circle from "../assets/circle.png";
import { useEffect, useState } from "react";
import Letter from "./Letter";

// * GLOBALS start

const wordsArr = ["house", "money", "phone", "water", "bread"];
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

// * GLOBALS end

const GuessingBox = () => {
  const [marks, setMarks] = useState<number>(10);
  // const [guessState, setGuessState] = useState();
  const [letterPool, setLetterPool] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
  ]);
  const [randomWord, setRandomWord] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [fillCount, setFillCount] = useState<number>(5);
  const [gameOver, setGameOver] = useState(false);
  const [gameEndMessage, setGameEndMessage] = useState<string>("");

  function populateLetterBox(letter: string) {
    setError("");
    if (gameOver) return;
    const indexOfLetter = randomWord.indexOf(letter);
    const emptyIndex = wordToGuess.indexOf("");
    if (randomWord.includes(letter)) {
      if (indexOfLetter === emptyIndex) {
        setWordToGuess((prevWord) => {
          const emptyIndex = prevWord.indexOf("");

          if (emptyIndex !== -1) {
            const updatedWord = [...prevWord];
            updatedWord[emptyIndex] = letter;

            return updatedWord;
          }
          return prevWord;
        });
        setFillCount((count) => count - 1);
      } else {
        setError("The Letter is in the word, but position is incorrect!");
      }
    } else {
      setError("The letter is not in the word! Mark lost!");
      setMarks((marks) => marks - 1);
    }
  }

  function generateLetterPool(word: string) {
    const tempPool = [];
    for (let i = 0; i < 15; i++) {
      if (i < 5) {
        tempPool.push(word[i]);
      } else {
        const randomCharIndex = Math.floor(Math.random() * 25);
        const randomChar = alphabet[randomCharIndex];

        tempPool.push(randomChar);
      }
    }
    // ? shuffling logic
    for (let i = tempPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempPool[i], tempPool[j]] = [tempPool[j], tempPool[i]];
    }

    setLetterPool(tempPool);
  }

  function getRandomWord() {
    const index = Math.floor(Math.random() * 4);
    console.log(wordsArr[index]);
    setRandomWord(wordsArr[index]);
    generateLetterPool(wordsArr[index]);
  }

  useEffect(() => {
    getRandomWord();
  }, []);

  useEffect(() => {
    if (marks === 0) {
      setGameOver(true);
      setGameEndMessage("Try Again Champ");
    } else if (fillCount === 0) {
      setGameOver(true);
      if (marks >= 0 && marks <= 2) setGameEndMessage("Try Again Champ!");
      else if (marks >= 3 && marks <= 6) setGameEndMessage("Can Improve!");
      else setGameEndMessage("Excellent!");
    }
  }, [marks, fillCount]);

  return (
    <main className="guess-box">
      <span className="guess-title">Guess The Word</span>
      {/* Result Div */}
      <div className="dashes">
        <div className="drop-area">
          {wordToGuess.map((letter, index) => {
            return (
              <div key={index} className="letter-box">
                {letter}
              </div>
            );
          })}
        </div>
        <svg
          width="60"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="demo"
        >
          <path
            d="M10,10 Q15,12 20,10 Q25,8 30,10 Q35,12 40,10 Q45,8 90,10"
            stroke="red"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
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
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
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
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
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
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
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
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      </div>
      {error && <span className="error">*{error}</span>}
      {/* Letter Pool Div */}
      <div className="letter-pool">
        <div className="letter-pool-box">
          {letterPool.map((item, index) => {
            return (
              <div key={index} onClick={() => populateLetterBox(item)}>
                <Letter randomWord={randomWord} letter={item} />
              </div>
            );
          })}
        </div>

        <img src={rectangle} alt="rectangle" className="rect" />
      </div>

      {/*  Result Section */}

      {gameEndMessage && (
        <span className="game-message ">{gameEndMessage}</span>
      )}

      <div className="marks-circle">
        <span className="scored-marks">{marks}</span>
        <div className="teacher-marks-line"></div>
        <img src={circle} alt="circle pic" className="circle" />
        <span className="max-marks">10</span>
      </div>
    </main>
  );
};

export default GuessingBox;
