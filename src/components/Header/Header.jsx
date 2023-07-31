import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {searchTС} from '../../entities/model/actions/users';
import SearchBlock from './SearchBlock/SearchBlock';
import {LogoutButton} from "../../features/authentification/logout/ui/LogoutButton";

function Header() {
    const dispatch = useDispatch();
    const {isAuth, userName, userPhotoURL} = useSelector(({auth}) => auth);

    // Показываем результаты поиска в выпадающем блоке

    const [showSearchBlock, setshowSearchBlock] = useState(false)

    const onSubmitForm = (values) => {
        dispatch(searchTС(values.term));
        setshowSearchBlock(true);
    }

    // Скрываем результаты поиска

    const resultBlockRef = React.createRef();

    const handleOutsideClick = (e) => {
        // if(!e.path.includes(resultBlockRef.current)) {
        //     setshowSearchBlock(false);
        // };
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.addEventListener('click', handleOutsideClick);
    }, [])

    return (
        <div className={s.header}>
            <div className={s.header__logo}>
                SAMURAI SOCIAL NETWORK
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
                    <LogoutButton />
                </>
                : <div className={`${s.btn}`}>
                    <Link to={'/login'}>LogIn</Link>
                </div>
            }
        </div>
    )
}


export default Header
