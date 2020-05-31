import React from 'react'
import { Link} from 'react-router-dom'

import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = () =>(
    <header className="header">
        <Link to="/">
            <img className="header__img" src={logo} alt="Platzi Video"/>
        </Link>

        <div className="header__menu">
        <div className="header__menu--profile">
            <Link to="/login">
                <img src={userIcon} alt=""/>
            </Link>
            
            <p>User</p>
        </div>
        <ul>
            <li><a href="/">Account</a></li>
            <li><a href="/">Log out</a></li>
        </ul>
        </div>
    </header>
        
);

export default Header