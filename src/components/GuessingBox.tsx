import rectangle from "../assets/rect.png";
import circle from "../assets/circle.png";
import { useEffect, useState } from "react";
import Letter from "./Letter";
import { generate } from "random-words";
import arrow from "../assets/arrow.png";

// * GLOBALS start

// const wordsArr = ["house", "money", "phone", "water", "bread"];
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

// * GLOBALS end

type LetterPoolType = {
  letter: string;
  position: number;
};

const GuessingBox = () => {
  const [marks, setMarks] = useState<number>(10);
  const [letterPool, setLetterPool] = useState<LetterPoolType[]>([]);
  const [wordToGuess, setWordToGuess] = useState<string[]>([]);
  const [randomWord, setRandomWord] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [fillCount, setFillCount] = useState<number>(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameEndMessage, setGameEndMessage] = useState<string>("");
  const [isFirstRender, setIsFirstRender] = useState(false);

  function populateLetterBox(letter: string, position: number) {
    setError("");
    if (gameOver) return;
    const emptyIndex = wordToGuess.indexOf("");
    if (randomWord.includes(letter)) {
      if (position === emptyIndex) {
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
      } else if (position === emptyIndex + 1) {
        setError("The Letter is in the word, but position is incorrect!");
      }
    } else {
      setError("The letter is not in the word! Mark lost!");
      setMarks((marks) => marks - 1);
    }
  }

  function generateLetterPool(word: string) {
    const tempPool: LetterPoolType[] = [];
    const tempPoolArr: string[] = [];
    for (let i = 0; i < 20; i++) {
      if (i < word.length) {
        tempPool.push({ letter: word[i], position: i });
        tempPoolArr.push(word[i]);
      } else {
        let flag = true;
        while (flag) {
          const randomCharIndex = Math.floor(Math.random() * 25);
          const randomChar = alphabet[randomCharIndex];
          if (!tempPoolArr.includes(randomChar)) {
            tempPool.push({ letter: randomChar, position: -1 });
            tempPoolArr.push(randomChar);
            flag = false;
          }
        }
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
    const randomWord = generate({ minLength: 5, maxLength: 7 });
    // ? generating the number of dashes, based on the length of the randomWord
    const dashes = [];
    for (let i = 0; i < randomWord.length; i++) {
      dashes.push("");
    }
    setWordToGuess(dashes);
    // ? setting the random word
    setRandomWord(randomWord.toString());
    setFillCount(randomWord.length);
    // ? generating the pool of letters the user can choose from
    generateLetterPool(randomWord.toString());
  }

  useEffect(() => {
    getRandomWord();
    setIsFirstRender(true);
  }, []);

  useEffect(() => {
    if (marks === 0) {
      setGameOver(true);
      setGameEndMessage("Try Again Champ");
    } else if (fillCount === 0 && isFirstRender) {
      setGameOver(true);
      if (marks >= 0 && marks <= 2) setGameEndMessage("Try Again Champ!");
      else if (marks >= 3 && marks <= 6) setGameEndMessage("Can Improve!");
      else setGameEndMessage("Excellent!");
    }
  }, [marks, fillCount, isFirstRender]);

  return (
    <main className="guess-box">
      <span className="guess-title">Guess The Word</span>
      {/* Result Div */}
      <div className="dashes">
        <div className="drop-area">
          {wordToGuess.map((letter, index) => {
            return (
              <div key={index} className="letter-box">
                <span className="letter-container">{letter}</span>
                <svg
                  key={index}
                  width="60"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
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
            );
          })}
        </div>
      </div>
      {error && <span className="error">*{error}</span>}
      {/* Letter Pool Div */}
      <div className="letter-pool">
        <div className="letter-pool-box">
          {letterPool.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => populateLetterBox(item.letter, item.position)}
              >
                <Letter
                  randomWord={randomWord}
                  letter={item.letter}
                  gameOver={gameOver}
                />
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

      {gameOver && (
        <div className="practice">
          <img src={arrow} alt="" className="arrow" />
          <button onClick={() => window.location.reload()}>
            Practice More...
          </button>
        </div>
      )}
    </main>
  );
};

export default GuessingBox;
