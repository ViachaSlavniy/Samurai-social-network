import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import {getProfileTC, setEditModeAC} from '../../entities/model/actions/profile';
import {useState} from 'react';
import s from './Profile.module.css';
import Preloader from '../Common/Preloader';
import unknown from '../../shared/assets/img/unknown150.jpg'
import github from '../../shared/assets/icons/github.svg';
import vk from '../../shared/assets/icons/vk.svg';
import inst from '../../shared/assets/icons/instagram.svg';
import facebook from '../../shared/assets/icons/facebook.svg';
import twitter from '../../shared/assets/icons/twitter.svg';
import youtube from '../../shared/assets/icons/youtube.svg';
import edit from '../../shared/assets/icons/pencil.svg'
// import settings from './../../assets/icons/settings.svg'
import About from './About/About';
import {setAuthUserDataTC} from '../../entities/model/actions/auth';
import TimelineBlock from './TImelineBlock/TimelineBlock';


const Profile = (props) => {
    const dispatch = useDispatch();

    const {isAuth, id} = useSelector(({auth}) => auth)

    const userUrl = props.match.params.userId;

    const {isFetching, profilePage} = useSelector(({profile}) => profile);

    useEffect(() => {
        if (!id) {
            dispatch(setAuthUserDataTC())
        }
        if (!userUrl) {
            dispatch(getProfileTC(id))
        } else {
            dispatch(getProfileTC(userUrl))
        }
    }, [userUrl, id])

    const profile = useSelector(({profile}) => profile.profilePage);

    const [activeInfoItem, setActiveInfoItem] = useState(0)
    const profileInfoArr = ['Timeline', 'About', 'Friends', 'Photos'];


    // For EDITMODE
    const onEditMode = () => {
        dispatch(setEditModeAC(true))
        setActiveInfoItem(1)
    }

    return (
        <>
            {isAuth || userUrl
                ? <>
                    {isFetching
                        ? <div className={s.profileBlock}>
                            <div className={s.profile__wrap}>
                                <div className={s.profile}>
                                    <div className={s.profile__bg}>
                                        {profile.userId === id
                                            ? <div className={s.btns}>
                                                <button onClick={onEditMode} className={s.btn}>
                                                    <img src={edit} alt="edit"/>
                                                </button>
                                            </div>
                                            : ''
                                        }
                                    </div>
                                    <div className={s.profile__block}>
                                        <div className={s.profile__photoWrapper}>
                                            <div className={s.profile__photo}>
                                                <img src={profilePage.photos.large
                                                    ? profilePage.photos.large
                                                    : unknown} alt="profile"/>
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
                                activeInfoItem === 0 && <TimelineBlock/>
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
                : <Redirect to={'/login'}/>
            }
        </>
    )
}

const ProfileWithRouter = withRouter(Profile);

export default ProfileWithRouter
