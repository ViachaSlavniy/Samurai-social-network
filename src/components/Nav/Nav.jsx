import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';

function Nav() {
    return (
        <aside className={s.sidebar__nav}>
            <ul className={s.nav}>
            <li>
                <NavLink to="/profile" className={s.nav__item} activeClassName={s.activeLink} href="#">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/messages" className={s.nav__item} activeClassName={s.activeLink}  href="#">Messages</NavLink>
            </li>
            <li>
                <NavLink to="/news" className={s.nav__item} activeClassName={s.activeLink}  href="#">Newsfeed</NavLink>
            </li>
            <li>
                <NavLink to="/users" className={s.nav__item} activeClassName={s.activeLink}  href="#">Users</NavLink>
            </li>
            <li>
                <NavLink to="/group" className={s.nav__item} activeClassName={s.activeLink}  href="#">Group</NavLink>
            </li>
            </ul>
        </aside>
    )
}

export default Nav
