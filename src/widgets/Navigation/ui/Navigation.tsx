import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => {
    return (
        <aside className={styles.navigation}>
            <ul>
                <li className={styles['navigation-item']}>
                    <NavLink to="/profile" className={styles.nav__item} activeClassName={styles.activeLink} href="#">
                        <div id={styles.profileUser} className={styles.imgSvg}></div>
                        <span>My profile</span>
                    </NavLink>
                </li>
                <li className={styles['navigation-item']}>
                    <NavLink to="/news" className={styles.nav__item} activeClassName={styles.activeLink} href="#">
                        <div id={styles.news} className={styles.imgSvg}></div>
                        News
                    </NavLink>
                </li>
                <li className={styles['navigation-item']}>
                    <NavLink to="/messages" className={styles.nav__item} activeClassName={styles.activeLink} href="#">
                        <div id={styles.messages} className={styles.imgSvg}></div>
                        Messages
                    </NavLink>
                </li>
                <li className={styles['navigation-item']}>
                    <NavLink to="/friends" className={styles.nav__item} activeClassName={styles.activeLink} href="#">
                        <div id={styles.friends} className={styles.imgSvg}></div>
                        Friends
                    </NavLink>
                </li>
                <li className={styles['navigation-item']}>
                    <NavLink to="/users" className={styles.nav__item} activeClassName={styles.activeLink} href="#">
                        <div id={styles.users} className={styles.imgSvg}></div>
                        Users
                    </NavLink>
                </li>
                <li className={styles['navigation-item']}>
                    <NavLink to="/group" className={styles.nav__item} activeClassName={styles.activeLink} href="#">
                        <div id={styles.communities} className={styles.imgSvg}></div>
                        Communities
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}
