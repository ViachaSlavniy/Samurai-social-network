import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unfollowTC, followTC } from '../../../redux/actions/users';
import cardBg from './../../../assets/img/bg1.jpg';
import unknownUser from './../../../assets/img/unknown150.jpg';
import s from './FriendsCard.module.css'

function UserCard({id, name, status, photos, followed}) {
    const dispatch = useDispatch();

    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollowClick = () => {
        setIsFollowed(true)
        dispatch(followTC(id))
        setIsFollowed(false)
    }

    const handleUnFollowClick = () => {
        setIsFollowed(true)
        dispatch(unfollowTC(id))
        setIsFollowed(false)
    }

    return (
        <div className={s.userCard}>
            <div className={s.cardBg}>
                <img src={cardBg} alt="card background"/>
            </div>
            <div className={s.cardInfo}>
                <div className={s.cardPhotoWrap}>
                    <div className={s.cardPhoto}>
                        <Link to={`/profile/${id}`}><img src={photos.large ? photos.large : unknownUser} alt="card"/></Link>
                    </div>
                </div>
                <div className={s.cardDesc}>
                    <div className={s.userName}>{name}</div>
                    <div className={s.userProf}>@Future React developer</div>
                    <div className={s.userAbout}>{
                        status
                        ? status
                        : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quasi.'
                        }
                    </div>
                </div>
            </div>
            {followed
            ? <button disabled={isFollowed} onClick={handleUnFollowClick} className={s.cardBtn + ' ' + s.unfollowBtn}>Unfollow</button>
            : <button disabled={isFollowed} onClick={handleFollowClick} className={s.cardBtn}>Follow</button>
            }
            
        </div> 
    )
}

export default UserCard
