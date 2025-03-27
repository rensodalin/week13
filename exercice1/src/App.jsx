import React, { useState } from "react";
export default function App() {
  const [score, setScore] = useState();

  const getScoreBarStyle = () => {
    // 1- Compute width (score * 10% to get percentage)
    const scoreWidth = `${score * 10}%`;

    // 2- Compute color based on score
    let scoreColor;
    if (score <= 3) {
      scoreColor = '#ff4444'; 
    } else if (score <= 7) {
      scoreColor = '#f3bc47'; 
    } else {
      scoreColor = '#4CAF50'; 
    }
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  const handleScoreChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 0 && value <= 10) {
      setScore(value);
    }
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input 
          type="number" 
          min="0" 
          max="10" 
          value={score}
          onChange={handleScoreChange}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
