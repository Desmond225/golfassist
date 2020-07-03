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

        {
            currentUser ?
            <div className="option" onClick={() => auth.signOut()}>Sign out</div>
            :
            <Link className="option" to="/signin">Sign in</Link>
        }
        </div>
    </div>
  );

export default Header;
