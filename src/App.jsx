import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const version = __APP_VERSION__;
  useEffect(() => {
    const fetchLeaderboardData = () => {
      fetch(`https://api.kypebot.xyz:2135/leaderboard-data`)
        .then(response => response.json())
        .then(data => setLeaderboardData(data))
        .catch(error => {
          toast.error(`Can't retrieve data from API`, {
            toastId: 'chuj'
          })
        });
    };

    const intervalId = setInterval(fetchLeaderboardData, 15000);

    fetchLeaderboardData();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="leaderboard">
      <ToastContainer
        position="top-right"
        autoClose={15000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        draggable={false}
        theme="dark"
      />
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
            title={row.username}
          >
            <div className="leaderboard-rank">{index + 1}</div>
            <div className="leaderboard-name">
              {row.username}
              {row.discord_id !== null && <img title="Połączono konto discord" draggable='false' src="discord.svg" alt="Discord Logo" className='Discord' />}
            </div>
            <div className="leaderboard-points">{row.points.toLocaleString()}</div>
          </div>
        ))}
        <p className="footer">Powered by <a href='https://kypebot.xyz'>Kype</a></p>
        <p className="version">Build: {version}</p>
      </div>
    </div>
  );
}

export default App;
