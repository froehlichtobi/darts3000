import React, { useState } from "react";

const PreGameBoard = ({
  startingScore,
  setStartingScore,
  finishingMode,
  setFinishingMode,
}) => {
  return (
    <div className="dartsFlexbox">

      <h3>Select Starting Score</h3>
      <select
        className="dartsStartMenuSelectMenu"
        type="number"
        value={startingScore}
        onChange={(e) => setStartingScore(parseInt(e.target.value))}
      >
        <option value="301">301</option>
        <option value="501">501</option>
      </select>
      <h3>Select Finishing Mode</h3>
      <select
        className="dartsStartMenuSelectMenu"
        type="string"
        value={finishingMode}
        onChange={(e) => setFinishingMode(e.target.value)}
      >
        <option value="Single Out">Single Out</option>
        <option value="Double Out">Double Out</option>
      </select>
    </div>
  );
};

export default PreGameBoard;
