import React from 'react';
import s from './SidebarItem.module.css';
import unknown from './../../../assets/img/unknown150.jpg'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';


const SidebarItem = ({name, photo, id}) => {

    const {isAuth} = useSelector(({auth}) => auth)

    return (
        <>
        {isAuth
        ?
        <Link className={s.sidebarItemlink} to={`/profile/${id}`}>
            <div className={s.sidebarItem}>
                <div className={`${s.userImage}`}>
                    <img src={photo && photo ? photo : unknown} alt="result search user photo"/>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userName}>
                        {name}
                    </div>
                </div>
            </div>
        </Link>
        :''
        }
        </>
    )
}

export default SidebarItem
