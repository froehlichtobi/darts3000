import React, { useState } from "react";
import "./App.css";

const GameBoard = () => {
  // Track current score, score history and multiplier
  const [currentScore, setCurrentScore] = useState(0);
  const [currentMultiplier, setCurrentMultiplier] = useState(1);
  const [pointsHistory, setPointsHistory] = useState([]);

  // this function lets you set the score (301 or 501)
  const handleSetScore = (value) => {
    setCurrentScore(value);
    setPointsHistory([]);
  };

  // this function handles the button clicks
  const handleScoreClick = (value, currentMultiplier) => {
    setCurrentScore(currentScore - value * currentMultiplier);
    setCurrentMultiplier(1); // Reset the multiplier

    setPointsHistory([
      ...pointsHistory,
      { score: value, multiplier: currentMultiplier },
    ]);
  };

  // this function handles the multiplier-button clicks (DOUBLE, TRIPLE)
  const handleMultiplierClick = (multiplier) => {
    if (currentMultiplier === multiplier) {
      setCurrentMultiplier(1); // Toggle the multiplier off if it's already selected
    } else {
      setCurrentMultiplier(multiplier);
    }
  };

  const handleUndo = () => {
    if (pointsHistory.length > 0) {
      const lastMove = pointsHistory.pop();
      setCurrentMultiplier(lastMove.multiplier);
      setCurrentScore(currentScore + lastMove.score * lastMove.multiplier);
      setPointsHistory([...pointsHistory]);
    }
  };

  return (
    <div className="container">
      <h1>Darts3000</h1>

      <button onClick={() => handleSetScore(301)}>301</button>
      <button onClick={() => handleSetScore(501)}>501</button>

      <p>Score: {currentScore}</p>

      <p>{currentMultiplier}</p>

      <p>
        {pointsHistory.map((point, index) => (
          <p key={index}>
            {point.score * point.multiplier} (Score: {point.score}, Multiplier:{" "}
            {point.multiplier})
          </p>
        ))}
      </p>

      <div>
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
    </div>
  );
};

export default GameBoard;
