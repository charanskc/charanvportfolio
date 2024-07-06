import React from 'react'
import "./Header.css";
import DarkMode from './Darkmode';


function Header() {
  return (
    <div className="header__container">
        <h4 className="header__title">Sai Charan</h4>
        <DarkMode />
    </div>
  )
}

export default Header;