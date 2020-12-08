import React from 'react';
import {NavLink} from 'react-router-dom';
import profileLogo from './../../assets/icons/user.svg';
import community from './../../assets/icons/community.svg';
import news from './../../assets/icons/news.svg';
import messages from './../../assets/icons/messages.svg';
import friends from './../../assets/icons/friends1.svg';
import users from './../../assets/icons/group.svg';
import s from './Nav.module.css';

function Nav() {
    return (
        <aside className={s.sidebar__nav}>
            <ul className={s.nav}>
            <li>
                <NavLink to="/profile" className={s.nav__item} activeClassName={s.activeLink} href="#">
                    <img className={s.navItemLogoImg} src={profileLogo} alt="profile"/>
                    <span>My profile</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/news" className={s.nav__item} activeClassName={s.activeLink}  href="#">
                {/* <img className={s.navItemLogoImg} src={news} alt="news nav"/> */}
                <svg className={s.navItemLogoImg} id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path className={s.navItemLogoImg} fill="#8c91b6" d="m497 121h-114v-89c0-8.284-6.716-15-15-15h-353c-8.284 0-15 6.716-15 15v388c0 41.355 33.645 75 75 75h362c41.355 0 75-33.645 75-75v-284c0-8.284-6.716-15-15-15zm-422 344c-24.813 0-45-20.187-45-45v-373h323c0 396.466-.189 374.424.344 380.077 1.304 13.906 6.49 27.019 14.691 37.923zm407-45c0 24.813-20.187 45-45 45-3.366 0-5.695 0-9 0-24.813 0-45-20.187-45-45v-269h99z"/><path className={s.navItemLogoImg} fill="#8c91b6" d="m304 89h-224c-8.284 0-15 6.716-15 15s6.716 15 15 15h224c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path className={s.navItemLogoImg} fill="#8c91b6" d="m304 153h-224c-8.284 0-15 6.716-15 15s6.716 15 15 15h224c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path className={s.navItemLogoImg} fill="#8c91b6" d="m304 393h-224c-8.284 0-15 6.716-15 15s6.716 15 15 15h224c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path className={s.navItemLogoImg} fill="#8c91b6" d="m304 217h-112c-8.284 0-15 6.716-15 15v112c0 8.284 6.716 15 15 15h112c8.284 0 15-6.716 15-15v-112c0-8.284-6.716-15-15-15zm-15 112h-82v-82h82z"/><path className={s.navItemLogoImg} fill="#8c91b6" d="m80 271h48c8.284 0 15-6.716 15-15s-6.716-15-15-15h-48c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path className={s.navItemLogoImg} fill="#8c91b6" d="m80 335h48c8.284 0 15-6.716 15-15s-6.716-15-15-15h-48c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/></g></svg>
                    News
                </NavLink>
            </li>
            <li>
                <NavLink to="/messages" className={s.nav__item} activeClassName={s.activeLink}  href="#">
                    <img className={s.navItemLogoImg} src={messages} alt="messages nav"/>
                    Messages
                </NavLink>
            </li>
            <li>
                <NavLink to="/friends" className={s.nav__item} activeClassName={s.activeLink}  href="#">
                    <img className={s.navItemLogoImg} src={friends} alt="friends nav"/>
                    Friends
                </NavLink>
            </li>
            <li>
                <NavLink to="/users" className={s.nav__item} activeClassName={s.activeLink}  href="#">
                    <img className={s.navItemLogoImg} src={users} alt="users nav"/>
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink to="/group" className={s.nav__item} activeClassName={s.activeLink}  href="#">
                    <img className={s.navItemLogoImg} src={community} alt="community nav"/>
                    Communities
                </NavLink>
            </li>
            </ul>
        </aside>
    )
}

export default Nav
