import React from 'react';
import '../assets/css/nav/Navbar.css';
import homeIcon from '../assets/images/nav/home_icon.png';
import chatIcon from './assets/images/nav/chat_icon.png';
import bellIcon from './assets/images/nav/bell_icon.png';
import clipboardIcon from './assets/images/nav/board_icon.png';

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
