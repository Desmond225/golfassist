import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";

const Header = ()  => (
    <div className="header">
        <Link className="logo-container" to="/">
            {/* <Logo className="logo" /> */}
            logo
        </Link>
        <div className="options">
            <Link className="option" to="/play">Play</Link>
        </div>
    </div>
  );

export default Header;
