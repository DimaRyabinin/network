import React from 'react';
import ReactDOM from 'react-dom';

function Nav() {
    return (
            <div className='nav'>
                <div className='wrap'><a href='#' className='link'>Profile</a></div>
                <div className='wrap'><a href='#' className='link'>Messages</a></div>
                <div className='wrap'><a href='#' className='link'>News</a></div>
                <div className='wrap'><a href='#' className='link'>Music</a></div>
                <div className='wrap wrap-last'><a href='#' className='link'>Settings</a></div>
            </div>
    )
}

export default Nav;