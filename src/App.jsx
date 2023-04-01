import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import './App.css'

function App() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const api_key = process.env.api_key;

  useEffect(() => {
    const fetchLeaderboardData = () => {
      fetch(`https://aws.pandadex.ml/leaderboard-data?api_key=${api_key}`)
        .then(response => response.json())
        .then(data => setLeaderboardData(data))
        .catch(error => console.error(error));
    };

    const intervalId = setInterval(fetchLeaderboardData, 15000);

    fetchLeaderboardData();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="leaderboard">
      <div className="top">
        <div>Miejsce</div>
        <div className="header">Nick</div>
        <div>Jagerki</div>
      </div>
      <div className="body">
      {leaderboardData.map((row, index) => (
        <div
          className={`leaderboard-row ${index === 0 ? 'first-place' : index === 1 ? 'second-place' : index === 2 ? 'third-place' : ''}`}
          key={index}
        >
          <div className="leaderboard-rank">{index + 1}</div>
          <div className="leaderboard-name">{row.username}</div>
          <div className="leaderboard-points">{row.points.toLocaleString()}</div>
        </div>
      ))}
      <div>
        <p className='footer'>Made with ❤️ by DEX</p>
      </div>
      </div>
    
    </div>
  );
}

export default App;
