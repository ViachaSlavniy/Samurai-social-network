import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProfileTC} from './../../redux/actions/profile'
import Posts from './Posts/Posts'
import s from './Profile.module.css'

import Preloader from '../Common/Preloader'

function Profile() {
    const dispatch = useDispatch();
    const {isFetching, profilePage} = useSelector(({profile}) => profile);

    useEffect(() => {
        profilePage === null && dispatch(getProfileTC(7225))
    },[])
    
    const profile = useSelector(({profile}) => profile.profilePage);

    return (
        <>
        {isFetching 
        ? <div className={s.profileBlock}>
            <div className={s.profile__wrap}>
                <div className={s.profile}>
                    <div className={s.profile__bg}>
                    </div>
                    <div className={s.profile__block}>
                        <div className={s.profile__photoWrapper}>
                            <div className={s.profile__photo}>
                                <img src={profilePage.photos.large} alt="profile image"/>
                            </div>
                            <div className={s.profile__detail}>
                                {profilePage.fullName}
                            </div>
                        </div>
                        
                    </div>
                    <div className={s.profile__info}>
                        <div className={s.profile__social}>
                            SOCIAL
                        </div>
                        <div className={s.profile__counter}>
                            FOLOWERS
                        </div>
                    </div>
                </div>
            </div>
            <Posts userPhoto={profile.photos.large}/>
        </div>
        : <Preloader/>
        }
        </>
    )
}

export default Profile
