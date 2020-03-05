import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = ({ onClick }) => {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar_app">
          <ul className="navbar_card">
            <li className="navbar_logo">
              <Link to="/" className="navbar_link">
                <i className="fas fa-bars"></i>
                <span className="navbar_text">Muslim App</span>
              </Link>
            </li>
            <li className="navbar_list">
              <Link to="/quran" className="navbar_link">
                <i className="fas fa-quran"></i>
                <span className="navbar_text">Al-Qur'an</span>
              </Link>
            </li>

            <li className="navbar_list">
              <Link to="/dzikir" className="navbar_link">
                <i className="fas fa-pray"></i>
                <span className="navbar_text">Dzikir</span>
              </Link>
            </li>

            <li className="navbar_list">
              <Link to="/doa" className="navbar_link">
                <i className="fas fa-mosque"></i>
                <span className="navbar_text">Doa Harian</span>
              </Link>
            </li>

            <li className="navbar_list" onClick={onClick}>
              <span className="navbar_link">
                <i className="fas fa-arrow-circle-left"></i>

                <span className="navbar_text">Kembali</span>
              </span>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
