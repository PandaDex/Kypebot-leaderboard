import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Channels.css';

function Channels() {
    const [rowCount, setRowCount] = useState(0);
    const version = __APP_VERSION__;
    useEffect(() => {
        const fetchLeaderboardData = () => {
            fetch(`https://api.kypebot.xyz:2135/leaderboard-data?channel=madkrakers`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setRowCount(data.rowCount)
                })
                .catch((error) => {
                    console.log(error);
                    toast.error(`Can't retrieve data from API`, {
                        toastId: 'chuj',
                    });
                });
        };
        fetchLeaderboardData();
    }, []);

    return (
        <div className='channels-body'>
            <Helmet>
                <title>Channels | Kype</title>
            </Helmet>
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
            <p className='current'>Current channels</p>
            <div className='channels-list'>
                <div className='channel'>
                    <img className='channel-icon' src='https://static-cdn.jtvnw.net/jtv_user_pictures/cc5fdb94-35e4-4b6a-8ad5-740184053925-profile_image-70x70.png' draggable='false' />
                    <p className='channel-name'>MadKrakers</p>
                    <div className='channel-stats'>
                        <a className='channel-leaderboard' href='/top#madkrakers'>Leaderboard</a>
                        <div className='channel-sep'></div>
                        <div className='channel-total-users'>
                            <img src='/ic_fluent_people_24_filled.svg' draggable='false' ></img>
                            <p className='channel-total-user-count'>{rowCount}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="p404-version">Build: {version}</p>
        </div>
    );
}

export default Channels;
