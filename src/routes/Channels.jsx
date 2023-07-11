import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Channels.css';

function Channels() {
    const version = __APP_VERSION__;
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        fetchChannels();
        setInterval(() => {
            fetchChannels();
        }, 15000);
    }, []);

    const fetchChannels = async () => {
        try {
            const response = await fetch('https://api.kypebot.xyz:2135/channels');
            const data = await response.json();
            setChannels(data);
        } catch (error) {
            console.error('Error fetching channels:', error);
        }
    };

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
                {Object.entries(channels).map(([channelName, channelData]) => (
                    <div className='channel' key={channelName}>
                        <img className='channel-icon' src={channelData.icon_url} draggable='false' />
                        <p className='channel-name'>{channelName}</p>
                        <div className='channel-stats'>
                            <a className='channel-leaderboard' href={`/top#${channelName}`}>Leaderboard</a>
                            <div className='channel-sep'></div>
                            <div className='channel-total-users'>
                                <img src='/ic_fluent_people_24_filled.svg' draggable='false' alt='people icon'></img>
                                <p className='channel-total-user-count'>{channelData.users.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p404-version">
                Build: {version}
            </div>
        </div>
    );
}

export default Channels;
