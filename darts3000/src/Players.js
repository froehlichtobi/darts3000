import React, { useState } from "react";

const Players = ({ addPlayer, removePlayer, players }) => {
  return (
    <div>
      <h2>Players</h2>
      {players.map((player, index) => (
        <div key={index}>
          <input
            type="text"
            value={player}
            onChange={(e) => addPlayer(e.target.value, index)}
          />
          <button onClick={() => removePlayer(index)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addPlayer("", players.length)}>Add Player</button>
    </div>
  );
};

export default Players;
