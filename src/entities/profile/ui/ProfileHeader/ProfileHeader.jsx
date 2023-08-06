import s from "../../../../components/Profile/Profile.module.css";
import edit from "../../../../shared/assets/icons/pencil.svg";
import unknown from "../../../../shared/assets/images/unknown150.jpg";
import github from "../../../../shared/assets/icons/github.svg";
import vk from "../../../../shared/assets/icons/vk.svg";
import inst from "../../../../shared/assets/icons/instagram.svg";
import facebook from "../../../../shared/assets/icons/facebook.svg";
import twitter from "../../../../shared/assets/icons/twitter.svg";
import youtube from "../../../../shared/assets/icons/youtube.svg";
import React from "react";
import {useSelector} from "react-redux";

export const ProfileHeader = () => {

    const {profilePage} = useSelector(({profile}) => profile);

    return (
        <div className={s.profileBlock}>
            <div className={s.profile__wrap}>
                <div className={s.profile}>
                    <div className={s.profile__bg}>
                        {profilePage.userId === id
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
                    </div>
                </div>
            </div>
        </div>
    )
};

