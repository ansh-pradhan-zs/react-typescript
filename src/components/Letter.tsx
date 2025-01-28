import React, { useState } from "react";

enum GuessStates {
  notChecked = "not-touched",
  isInWord = "isInWord",
  isNotInWord = "isNotInWord",
}

const Letter = ({
  randomWord,
  letter,
}: {
  randomWord: string;
  letter: string;
}) => {
  const [letterState, setLetterState] = useState<GuessStates>(
    GuessStates.notChecked
  );

  function handleClick() {
    if (randomWord.includes(letter)) {
      setLetterState(GuessStates.isInWord);
    } else {
      setLetterState(GuessStates.isNotInWord);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`letter ${
        letterState === GuessStates.isInWord
          ? "green"
          : letterState === GuessStates.isNotInWord
          ? "red"
          : "transparent"
      }`}
    >
      {letter}
    </div>
  );
};

export default Letter;
