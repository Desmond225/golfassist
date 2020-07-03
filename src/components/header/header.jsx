import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";
import { ReactComponent as Logo } from '../../assets/dhd.svg'
import { auth } from 'firebase';

const Header = ({ currentUser })  => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/play">Play</Link>
        </div>
        {
            currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN IN</div>
            :
            <Link className="option" to="/signin">SIGN IN</Link>
        }
    </div>
  );

export default Header;
