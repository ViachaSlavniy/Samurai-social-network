import React from 'react';
import s from './Header.module.css';
import {Link} from 'react-router-dom';
import logo from './../../assets/img/logo2.png';
import loupe from './../../assets/icons/loupe.svg';

function Header() {
    return (
        <div className={s.header}>
            <div className={s.header__logo}>
                <Link className={s.logo__link} to="/">
                    <img className={s.logo} src={logo} alt="Samurai logo"/>
                    SAMURAI SOCIAL
                </Link>
            </div>
            <div className={s.header__search}>
            <form action="/">
                <label htmlFor="search"></label>
                <input name="search" type="text" placeholder="Search..."/>
                <button type="submit">
                    <img src={loupe} alt="Search"/>
                </button>
            </form>
            </div>
            <div className={s.header__info}>INFO</div>
      </div>
    )
}

export default Header
