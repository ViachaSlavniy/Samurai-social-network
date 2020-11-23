import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.header}>
            <div className={s.header__logo}>
            <a href="#">LOGO</a>
            </div>
            <div className={s.header__search}>
            <form action="/">
                <label htmlFor="search"></label>
                <input name="search" type="text" placeholder="Search..."/>
                <button type="submit">Search</button>
            </form>
            </div>
            <div className={s.header__info}>INFO</div>
      </div>
    )
}

export default Header
