import React, { useState } from "react";

const GameBoard = ({
  handleScoreClick,
  handleMultiplierClick,
  handleUndo,
  currentMultiplier,
  currentScore,
  player,
}) => {
  return (
    <div>
      <p>
        Score of {player}: {currentScore}
      </p>
      {[...Array(21).keys()].map((num) => (
        <button
          key={num}
          onClick={() => handleScoreClick(num, currentMultiplier)}
        >
          {num}
        </button>
      ))}
      {currentMultiplier !== 3 && (
        <button onClick={() => handleScoreClick(25, currentMultiplier)}>
          25
        </button>
      )}
      <div>
        <button
          style={{
            backgroundColor: currentMultiplier === 2 ? "green" : "#0d0000",
            color: "white",
          }}
          onClick={() => handleMultiplierClick(2)}
        >
          DOUBLE
        </button>
        <button
          style={{
            backgroundColor: currentMultiplier === 3 ? "green" : "#0d0000",
            color: "white",
          }}
          onClick={() => handleMultiplierClick(3)}
        >
          TRIPLE
        </button>
        <button onClick={() => handleUndo()}>UNDO</button>
      </div>
    </div>
  );
};

export default GameBoard;
