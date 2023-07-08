import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/404.css';

function P404() {
    const version = __APP_VERSION__;
    return (
        <div className='p404-body'>
            <Helmet>
                <title>404 | Kype</title>
            </Helmet>
            <p className='p404-big-text'>404</p>
            <p className="p404-version">Build: {version}</p>
        </div>
    )
}

export default P404