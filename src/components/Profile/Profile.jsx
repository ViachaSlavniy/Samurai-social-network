import React from 'react'
import Posts from './Posts/Posts'
import userPhoto from './../../assets/img/profile130.jpg'
import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.profileBlock}>
            <div className={s.profile__wrap}>
                <div className={s.profile}>
                    <div className={s.profile__bg}>
                    </div>
                    <div className={s.profile__block}>
                        <div className={s.profile__photoWrapper}>
                            <div className={s.profile__photo}>
                                <img src={userPhoto} alt="profile image"/>
                            </div>
                            <div className={s.profile__detail}>
                                ALEXANDER PETROV
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
            <Posts userPhoto={userPhoto}/>
        </div>
    )
}

export default Profile
