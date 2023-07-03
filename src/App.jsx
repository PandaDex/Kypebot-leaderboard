import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboardData = () => {
      fetch(`https://api.kypebot.xyz:2135/leaderboard-data`)
        .then(response => response.json())
        .then(data => setLeaderboardData(data))
        .catch(error => console.error(error));
    };

    const intervalId = setInterval(fetchLeaderboardData, 15000);

    fetchLeaderboardData();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="leaderboard scrollbar">
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
            <div className="leaderboard-name">
              {row.username}
              {row.discord_id !== null && <img title="Połączono konto discord" draggable='false' src="discord.svg" alt="Discord Logo" className='Discord' />}
            </div>
            <div className="leaderboard-points">{row.points.toLocaleString()}</div>
          </div>
        ))}
        <div>
          <p className="footer">Powered by <a href='https://kypebot.xyz'>Kype</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
