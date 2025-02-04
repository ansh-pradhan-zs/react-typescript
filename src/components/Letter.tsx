import React, { useState } from "react";

enum GuessStates {
  notChecked = "not-touched",
  isInWordCorrectPos = "isInWordCorrectPos",
  isNotInWord = "isNotInWord",
  isInWordPosWrong = "isInWordPosWrong",
}

const Letter = ({
  randomWord,
  gameOver,
  letter,
  position,
  wordToGuessArr,
}: {
  randomWord: string;
  gameOver: boolean;
  letter: string;
  position: number;
  wordToGuessArr: string[];
}) => {
  const [letterState, setLetterState] = useState<GuessStates>(
    GuessStates.notChecked
  );

  function handleClick() {
    if (gameOver) return;
    // if (randomWord.includes(letter)) {
    //   setLetterState(GuessStates.isInWord);
    // } else {
    //   setLetterState(GuessStates.isNotInWord);
    // }

    if (
      randomWord.includes(letter) &&
      wordToGuessArr.indexOf("") === position
    ) {
      setLetterState(GuessStates.isInWordCorrectPos);
    } else if (!randomWord.includes(letter)) {
      setLetterState(GuessStates.isNotInWord);
    } else {
      setLetterState(GuessStates.isInWordPosWrong);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`letter ${
        letterState === GuessStates.isInWordCorrectPos
          ? "green"
          : letterState === GuessStates.isNotInWord
          ? "red"
          : letterState === GuessStates.isInWordPosWrong
          ? "orange"
          : "transparent"
      }`}
    >
      {letter}
    </div>
  );
};

export default Letter;
