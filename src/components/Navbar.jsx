import React from 'react';
import '../assets/css/nav/Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '../assets/images/nav/home_icon.png';
import chatIcon from '../assets/images/nav/chat_icon.png';
import bellIcon from '../assets/images/nav/bell_icon.png';
import clipboardIcon from '../assets/images/nav/board_icon.png';

const Navbar = () => {

  const location = useLocation()

  if (location.pathname !== '/Login' && location.pathname !== '/' && location.pathname !== '/login') {
    return (
      <div className="navbar-container">
        <Link className="navbar-icon" to='/Main'>
          <img src={homeIcon} alt="Home" className="icon-img" />
          <p>홈</p>
        </Link>
        <Link className="navbar-icon" to='/Chat'>
          <img src={chatIcon} alt="Chat" className="icon-img" />
          <p>채팅</p>
        </Link>
        <Link className="navbar-icon" to="/Alarm">
          <img src={bellIcon} alt="Notifications" className="icon-img" />
          <p>알림</p>
        </Link>
        <Link className="navbar-icon" to="/Board">
          <img src={clipboardIcon} alt="Clipboard" className="icon-img" />
          <p>게시판</p>
        </Link>
      </div>
    );
  }

  return null;
};

export default Navbar;
