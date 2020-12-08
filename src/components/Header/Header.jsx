import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import logo from './../../assets/img/logo2.png';
import unknown from './../../assets/img/unknown150.jpg'
import { logOutTC } from '../../redux/actions/auth';
import { searchTС } from '../../redux/actions/users';
import SearchBlock from './SearchBlock/SearchBlock';

function Header() {
    const dispatch = useDispatch();
    const {isAuth, userName, userPhotoURL} = useSelector(({auth}) => auth);
    const {profilePage} = useSelector(({profile}) => profile);

    const logout = () => {
        dispatch(logOutTC());
    }

    // Показываем результаты поиска в выпадающем блоке

    const [showSearchBlock, setshowSearchBlock] = useState(false)

    const onSubmitForm = (values) => {
        dispatch(searchTС(values.term));
        setshowSearchBlock(true);
    }

    // Скрываем результаты поиска

    const resultBlockRef = React.createRef();

    const handleOutsideClick = (e) => {
        if(!e.path.includes(resultBlockRef.current)) {
            setshowSearchBlock(false);
        };
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.addEventListener('click', handleOutsideClick);
    },[])

    return (
        <div className={s.header}>
            <div className={s.header__logo}>
                SAMURAI
                <Link className={s.logo__link} to="/">
                    <img className={s.logo} src={logo} alt="Samurai logo"/>
                </Link>
                SOCIAL
            </div>
                <SearchBlock resultBlockRef={resultBlockRef} showSearchBlock={showSearchBlock} onSubmitForm={onSubmitForm}/>
            {isAuth
            ?
            <> 
            <div className={s.header__info}>
                <div className={`${s.userPhoto} ${s.header__infoItem}`}>
                    <img src={userPhotoURL} alt="profile img"/>
                </div>
                <div className={`${s.userName} ${s.header__infoItem}`}>
                    {userName}
                </div>
            </div>
            <div className={`${s.btn} ${s.btnLogout}`}>
                <Link onClick={logout} to={'/login'}>Logout</Link>
            </div>
            </>
            :<div className={`${s.btn}`}>
                <Link to={'/login'}>LogIn</Link>
            </div>
            }
      </div>
    )
}





export default Header
