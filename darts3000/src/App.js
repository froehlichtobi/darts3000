import React, { useState } from "react";
import "./App.css";
import Players from "./Players";
import GameBoard from "./GameBoard";
import PreGameBoard from "./PreGameBoard";

const Game = () => {
  const [players, setPlayers] = useState(["Player 1"]);
  const [startingScore, setStartingScore] = useState(301);
  const [finishingMode, setFinishingMode] = useState("Double Out");
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentMultiplier, setCurrentMultiplier] = useState(1);
  const [pointsHistory, setPointsHistory] = useState([]);

  // function to add players
  const handleAddPlayer = (playerName, index) => {
    const newPlayers = [...players];
    newPlayers[index] = playerName;
    setPlayers(newPlayers);
  };

  // function to remove players
  const handleRemovePlayer = (index) => {
    const newPlayers = players.filter((_, i) => i !== index);
    setPlayers(newPlayers);
  };

  // this function handles the state of the game and what will be rendered later
  const handleStartGame = () => {
    setGameStarted(true);
    setCurrentScore(startingScore);
  };

  // this function handles the button clicks
  const handleScoreClick = (dartValue, currentMultiplier) => {
    const newScore = currentScore - dartValue * currentMultiplier;
    setCurrentScore(newScore);
    setCurrentMultiplier(1); // Reset the multiplier

    setPointsHistory([
      ...pointsHistory,
      { score: dartValue, multiplier: currentMultiplier },
    ]);

    //check if the game is won
    if (newScore === 0) {
      handleGameWon();
    }
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

  const handleGameWon = () => {
    setGameWon(true);
  };

  return (
    <div className="container">
      <h1>
        <a
          href="#"
          onClick={() => window.location.reload()}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Darts3000
        </a>
      </h1>

      {!gameStarted && (
        <div>
          <Players
            players={players}
            addPlayer={handleAddPlayer}
            removePlayer={handleRemovePlayer}
          />

          <PreGameBoard
            startingScore={startingScore}
            setStartingScore={setStartingScore}
            finishingMode={finishingMode}
            setFinishingMode={setFinishingMode}
          />

          <button onClick={handleStartGame}>Play</button>
        </div>
      )}

      {gameStarted && (
        <div>
          <GameBoard
            handleScoreClick={handleScoreClick}
            handleMultiplierClick={handleMultiplierClick}
            handleUndo={handleUndo}
            currentMultiplier={currentMultiplier}
            currentScore={currentScore}
            player={players[0]}
          />
        </div>
      )}
      {gameWon && (
        <div>
          <h1>You've won!</h1>
        </div>
      )}
    </div>
  );
};

export default Game;
