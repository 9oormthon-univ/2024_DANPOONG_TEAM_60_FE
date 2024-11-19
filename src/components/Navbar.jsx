import React from 'react';
import './styles/Navbar.css';
import homeIcon from '../assets/images/main';
import chatIcon from './assets/chat_icon.png';
import bellIcon from './assets/bell_icon.png';
import clipboardIcon from './assets/board_icon.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-icon">
        <img src={homeIcon} alt="Home" className="icon-img" />
      </div>
      <div className="navbar-icon">
        <img src={chatIcon} alt="Chat" className="icon-img" />
      </div>
      <div className="navbar-icon">
        <img src={bellIcon} alt="Notifications" className="icon-img" />
      </div>
      <div className="navbar-icon">
        <img src={clipboardIcon} alt="Clipboard" className="icon-img" />
      </div>
    </div>
  );
};

export default Navbar;
