import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture, faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
import search_icon_light from "../images/search-w.png";
import search_icon_dark from "../images/search-b.png";
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logoIcon = <FontAwesomeIcon className="plane-icon" icon={faPlaneDeparture} />;
  const searchIconSrc = theme === "light" ? search_icon_light : search_icon_dark;
  const toggleIcon = theme === "light" ? <FontAwesomeIcon className="dark-light-mode" icon={faMoon} /> : <FontAwesomeIcon className="dark-light-mode" icon={faSun} />;
  const menuIcon = <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />;

  return (
    <div className={`navbar ${theme === "dark" ? "dark" : ""}`}>
      <Link to="/">
        <div className="logo">{logoIcon}</div>
      </Link>
      <nav className={showMenu ? "show" : ""}>
        {menuIcon}
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>Domovská stránka</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>Info o zemích</Link>
          </li>
        </ul>
      </nav>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={searchIconSrc} alt="" />
      </div>
      <div className="theme-toggle" onClick={toggleTheme}>
        {toggleIcon}
      </div>
    </div>
  );
};

export default Navbar;