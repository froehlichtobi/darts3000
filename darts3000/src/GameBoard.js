import React from 'react';

const GameBoard = ({
  player,
  currentScore,
  currentMultiplier,
  handleScoreClick,
  handleMultiplierClick,
  handleUndo,
}) => {
  return (
    <>
      <h3>
        Score of {player}: {currentScore}
      </h3>
      {/* ------------------------------------------------------------------------------
        Buttons from 1 to 25 
        */}
      <div className="dartsValueButton-container">
        {[...Array(21).keys()].map((num) => (
          <button
            className="dartsValueButton"
            key={num}
            onClick={() => handleScoreClick(num, currentMultiplier)}
          >
            {num}
          </button>
        ))}
        {currentMultiplier !== 3 && (
          <button
            className="dartsValueButton"
            onClick={() => handleScoreClick(25, currentMultiplier)}
          >
            25
          </button>
        )}
      </div>
      {/* ------------------------------------------------------------------------------
        Buttons for Double, Triple and Undo 
        */}
      <div className="dartsValueButton-container">
        <button
          className="dartsValueButton"
          style={{
            backgroundColor: currentMultiplier === 2 ? "green" : "#0d0000",
            color: "white",
          }}
          onClick={() => handleMultiplierClick(2)}
        >
          DOUBLE
        </button>

        <button
          className="dartsValueButton"
          style={{
            backgroundColor: currentMultiplier === 3 ? "green" : "#0d0000",
            color: "white",
          }}
          onClick={() => handleMultiplierClick(3)}
        >
          TRIPLE
        </button>

        <button 
          className="dartsValueButton"
          style={{
            backgroundColor: "red"
          }}
          onClick={() => handleUndo()}>
          UNDO

        </button>
      </div>
    </>
  );
};

export default GameBoard;
