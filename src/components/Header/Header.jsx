import React from 'react';
import s from './Header.module.css';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import logo from './../../assets/img/logo2.png';
import loupe from './../../assets/icons/loupe.svg';
import { logOutTC } from '../../redux/actions/auth';

function Header() {
    const dispatch = useDispatch();
    const {isAuth} = useSelector(({auth}) => auth);
    const {profilePage} = useSelector(({profile}) => profile);

    const logout = () => {
        dispatch(logOutTC());
    }

    return (
        <div className={s.header}>
            <div className={s.header__logo}>
                SAMURAI
                <Link className={s.logo__link} to="/">
                    <img className={s.logo} src={logo} alt="Samurai logo"/>
                </Link>
                SOCIAL
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
            {isAuth
            ? <div className={s.header__info}>
                <div className={s.userName}>{profilePage && profilePage.fullName}</div>
                <div className={s.userPhoto}>
                    <img src={profilePage && profilePage.photos.small} alt="profile img"/>
                </div>
                <div className={s.btn}>
                    <Link onClick={logout} to={'/login'}>Logout</Link>
                </div>
            </div>
            :<div>
                <Link to={'/login'}>LogIn</Link>
            </div>
            }
      </div>
    )
}

export default Header
