import React from 'react';
import s from './ResultItem.module.css';
import unknown from '../../../../shared/assets/images/unknown150.jpg'
import { Link } from 'react-router-dom';
import {ResultItemProps} from "./types";

function ResultItem({userId, name, status, photo}: ResultItemProps) {
    return (
        <Link className={s.resultItemlink} to={`/profile/${userId}`}>
            <div className={s.header__searchResultItem}>
                <div className={s.userImage}>
                    <img src={photo === null ? unknown : photo} alt="result search user"/>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userName}>
                        {name}
                    </div>
                    <div className={s.userStatus}>
                        {status}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ResultItem

