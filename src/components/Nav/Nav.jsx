import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';

function Nav() {
    return (
        <aside className={s.sidebar__nav}>
            <ul className={s.nav}>
            <li>
                <NavLink to="/profile" className={s.nav__item} activeClassName={s.activeLink} href="#">
                    <div id={s.profileUser} className={s.imgSvg}></div>
                    <span>My profile</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/news" className={s.nav__item} activeClassName={s.activeLink}  href="#">
                    <div id={s.news} className={s.imgSvg}></div>
                    News
                </NavLink>
            </li>
            <li>
                <NavLink to="/messages" className={s.nav__item} activeClassName={s.activeLink}  href="#">
                    <div id={s.messages} className={s.imgSvg}></div>
                    Messages
                </NavLink>
            </li>
            <li>
                <NavLink to="/friends" className={s.nav__item} activeClassName={s.activeLink}  href="#">
                    <div id={s.friends} className={s.imgSvg}></div>
                    Friends
                </NavLink>
            </li>
            <li>
                <NavLink to="/users" className={s.nav__item} activeClassName={s.activeLink}  href="#">
                    <div id={s.users} className={s.imgSvg}></div>
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink to="/group" className={s.nav__item} activeClassName={s.activeLink}  href="#">
                    <div id={s.communities} className={s.imgSvg}></div>
                    Communities
                </NavLink>
            </li>
            </ul>
        </aside>
    )
}

export default Nav
