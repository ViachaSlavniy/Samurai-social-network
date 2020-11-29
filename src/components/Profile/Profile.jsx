import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getProfileTC} from './../../redux/actions/profile';
import { useState } from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';
import Preloader from '../Common/Preloader';
import unknown from './../../assets/img/unknown150.jpg'
import github from './../../assets/icons/github.svg';
import vk from './../../assets/icons/vk.svg';
import inst from './../../assets/icons/instagram.svg';
import facebook from './../../assets/icons/facebook.svg';
import twitter from './../../assets/icons/twitter.svg';
import youtube from './../../assets/icons/youtube.svg';
import edit from './../../assets/icons/pencil.svg'
import settings from './../../assets/icons/settings.svg'
import About from './About/About';



function Profile(props) {
    const userUrl = props.match.params.userId;
    const dispatch = useDispatch();
    const {isFetching, profilePage} = useSelector(({profile}) => profile);

    useEffect(() => {
        if(!userUrl) {
            dispatch(getProfileTC(7225))
        }
       dispatch(getProfileTC(userUrl))
    },[userUrl])
    
    const profile = useSelector(({profile}) => profile.profilePage);

    const [activeInfoItem, setActiveInfoItem] = useState(0)
    const profileInfoArr = ['Timeline', 'About', 'Friends', 'Photos'];
    return (
        <>
        {isFetching 
        ? <div className={s.profileBlock}>
            <div className={s.profile__wrap}>
                <div className={s.profile}>
                    <div className={s.profile__bg}>
                        <div className={s.btns}>
                            <button className={s.btn}>
                                <img src={edit} alt="edit"/>
                            </button>
                            <button className={s.btn}>
                                <img src={settings} alt="settings"/>
                            </button>
                        </div>
                    </div>
                    <div className={s.profile__block}>
                        <div className={s.profile__photoWrapper}>
                            <div className={s.profile__photo}>
                                <img src={profilePage.photos.large 
                                    ? profilePage.photos.large 
                                    : unknown} alt="profile image"/>
                            </div>
                            <div className={s.profile__detail}>
                                {profilePage.fullName}
                            </div>
                        </div>
                    </div>
                    <div className={s.profile__info}>
                        <div className={s.profile__social}>
                            {profilePage.contacts.github &&
                            <span>
                                <a href={profilePage.contacts.github} target='_table'>
                                    <img src={github} alt="github URL"/>
                                </a>
                            </span>
                            }
                            {profilePage.contacts.vk &&
                            <span>
                                <a href={profilePage.contacts.vk} target='_table'>
                                    <img src={vk} alt="vk URL"/>
                                </a>
                            </span>
                            }
                            {profilePage.contacts.instagram &&
                            <span>
                                <a href={profilePage.contacts.instagram} target='_table'>
                                    <img src={inst} alt="instagram URL"/>
                                </a>
                            </span>
                            }
                            {profilePage.contacts.facebook &&
                            <span>
                                <a href={profilePage.contacts.facebook} target='_table'>
                                    <img src={facebook} alt="facebook URL"/>
                                </a>
                            </span>
                            }
                            {profilePage.contacts.twitter &&
                            <span>
                                <a href={profilePage.contacts.twitter} target='_table'>
                                    <img src={twitter} alt="twitter URL"/>
                                </a>
                            </span>
                            }
                            {profilePage.contacts.youtube &&
                            <span>
                                <a href={profilePage.contacts.youtube} target='_table'>
                                    <img src={youtube} alt="youtube URL"/>
                                </a>
                            </span>
                            }
                        </div>
                        <div className={s.profile__counter}>
                            FOLOWERS
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.profileInfo}>
                {
                    profileInfoArr.map((item, index) => (
                    <div key={item}
                        onClick={() => setActiveInfoItem(index)}
                        className={`${s.profileInfo__item} ${index === activeInfoItem && s.active}`}>
                        {item}
                    </div>))
                }
            </div>
            {
                activeInfoItem === 0 && <Posts userPhoto={profile.photos.large} unknownUser={unknown}/>
            }
            {
                activeInfoItem === 1 && <About/>
            }
            {
                activeInfoItem === 2 && 'FRIENDS'
            }
            {
                activeInfoItem === 3 && 'PHOTOS'
            }
            
        </div>
        : <Preloader/>
        }
        </>
    )
}

const ProfileWithRouter = withRouter(Profile);

export default ProfileWithRouter
