import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { followAC, unfollowAC } from '../../../redux/actions/users';
import cardBg from './../../../assets/img/bg1.jpg';
import unknownUser from './../../../assets/img/unknown150.jpg';
import s from './UserCard.module.css'

function UserCard({id, name, status, photos, followed}) {
    const dispatch = useDispatch();

    const handleFollowClick = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{}, {
            withCredentials: true,
            headers: {'API-KEY': 'deb5a1cf-eef7-4206-9237-48ed86537d51'}
        })
            .then((resp) => {
                if(resp.data.resultCode === 0) {
                    dispatch(followAC(id));
                }
            });
    }

    const handleUnFollowClick = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {'API-KEY': 'deb5a1cf-eef7-4206-9237-48ed86537d51'}
        })
            .then((resp) => {
                if(resp.data.resultCode === 0) {
                    dispatch(unfollowAC(id));
                }
            });
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
            ? <button onClick={handleUnFollowClick} className={s.cardBtn + ' ' + s.unfollowBtn}>Unfollow</button>
            : <button onClick={handleFollowClick} className={s.cardBtn}>Follow</button>
            }
            
        </div> 
    )
}

export default UserCard
