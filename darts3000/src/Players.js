import React, { useState } from "react";

const Players = ({ addPlayer, removePlayer, players }) => {
  return (
    <div className="dartsPlayers">
      <h2>Players</h2>
      {players.map((player, index) => (
        <div 
        key={index}
        className="connectInputAndButton"
        >
          <input
            type="text"
            value={player}
            onChange={(e) => addPlayer(e.target.value, index)}
          />
          <button 
          onClick={() => removePlayer(index)}
          style={{
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            marginLeft: '0px',
          }}
          >
            X</button>
        </div>
      ))}
      <button 
        onClick={() => addPlayer("", players.length)}
        style={{
          borderRadius: '4px',
        }}
        >
        Add Player</button>
    </div>
  );
};

export default Players;
