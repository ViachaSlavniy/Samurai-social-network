import React from 'react';
import cardBg from './../../../assets/img/bg1.jpg';
import unknownUser from './../../../assets/img/unknown150.jpg';
import s from './UserCard.module.css'

function UserCard({id, name, status, photos, followed}) {

    const handleFollowClick = () => {

    }

    const handleUnFollowClick = () => {
        
    }


    return (
        <div className={s.userCard}>
            <div className={s.cardBg}>
                <img src={cardBg} alt="card background image"/>
            </div>
            <div className={s.cardInfo}>
                <div className={s.cardPhotoWrap}>
                    <div className={s.cardPhoto}>
                        <img src={photos.large ? photos.large : unknownUser} alt="card photo"/>
                    </div>
                </div>
                <div className={s.cardDesc}>
                    <div className={s.userName}>{name}</div>
                    <div className={s.userProf}>{status}</div>
                    <div className={s.userAbout}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quasi.</div>
                </div>
            </div>
            {followed
            ? <button onClick={handleUnFollowClick} className={s.cardBtn}>Unfollow</button>
            : <button onClick={handleFollowClick} className={s.cardBtn}>Follow</button>
            }
            
        </div> 
    )
}

export default UserCard
