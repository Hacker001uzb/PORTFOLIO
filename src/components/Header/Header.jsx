import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/img/logo.svg'

function Header() {
    // const [active, setActive] = useState('/')
    const location =useLocation().pathname
    console.log(location);

  return (
    <header className='header'>
        <Link className='nav__logo' to='/'>
            <img src={logo} alt="" />
        </Link>
        <ul className="nav__list">
            <li className={location === '/' ? "nav__item active" : "nav__item"}>
                <Link to="/">
                <i className="bi bi-house"></i>
                </Link>
            </li>
            <li className={location === '/percent' ? "nav__item active" : "nav__item"}>
                <Link to="percent">
                <i className="bi bi-percent"></i>
                </Link>
            </li>
            <li className={location === '/chart' ? "nav__item active" : "nav__item"}>
                <Link to="chart">
                <i className="bi bi-diagram-2"></i>
                </Link>
            </li>
            <li className={location === '/email' ? "nav__item active" : "nav__item"}>
                <Link to="email">
                <i className="bi bi-envelope"></i>
                </Link>
            </li>
            <li className={location === '/notification' ? "nav__item active" : "nav__item"}>
                <Link to="notification">
                <i className="bi bi-bell"></i>
                </Link>
            </li>
            <li className={location === '/setting' ? "nav__item active" : "nav__item"}>
                <Link to="setting">
                <i className="bi bi-gear"></i>
                </Link>
            </li>
            <li className={location === '/logout' ? "nav__item active" : "nav__item"}>
                <Link to="logout">
                <i className="bi bi-box-arrow-right"></i>
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header