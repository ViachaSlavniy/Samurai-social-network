import {useDispatch, useSelector} from "react-redux";
import edit from "../../../../shared/assets/icons/pencil.svg";
import unknown from "../../../../shared/assets/images/unknown150.jpg";
import {setEditModeAC} from "../../model/profile-actions";
import {socialImages} from "./config/social-config";
import styles from './ProfileHeader.module.scss';

export const ProfileHeader = () => {
    const dispatch = useDispatch();
    const {id} = useSelector(({auth}) => auth);
    const {profilePage} = useSelector(({profile}) => profile);

    const onEditMode = () => {
        dispatch(setEditModeAC(true));
    }

    const socialButtons = Object.entries(profilePage?.contacts || {});

    return (
        <>
            <div className={styles.container}>
                {profilePage?.userId === id
                    ? (
                        <button className={styles['edit-button']}
                                onClick={onEditMode}
                        >
                            <img src={edit} alt="edit"/>
                        </button>
                    )
                    : null
                }
                <div className={styles['photo-block']}>
                    <div className={styles.photo}>
                        <img src={profilePage?.photos.large
                            ? profilePage?.photos.large
                            : unknown} alt="profile"/>
                    </div>
                    <div className={styles.name}>
                        {profilePage?.fullName}
                    </div>
                </div>
            </div>
            <div className={styles.profile__info}>
                <div className={styles.profile__social}>
                    {socialButtons.map(([socialName, link]) => socialImages[socialName] && (
                        <span>
                            <a href={link} target='_table'>
                                <img src={socialImages[socialName]} alt={`${socialName} URL`}/>
                            </a>
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
};

