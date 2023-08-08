import {useDispatch, useSelector} from "react-redux";
import edit from "../../../../shared/assets/icons/pencil.svg";
import unknown from "../../../../shared/assets/images/unknown150.jpg";
import {setEditMode} from "../../model/slice";
import {socialImages} from "./config/social-config";
import {SocialButton} from "./config/types";
import {authSelector} from "../../../session";
import {profileSelector} from "../../model/selectors";
import styles from './ProfileHeader.module.scss';


export const ProfileHeader = () => {
    const dispatch = useDispatch();
    const {id} = useSelector(authSelector);
    const {profilePage} = useSelector(profileSelector);

    const onEditMode = () => {
        dispatch(setEditMode(true));
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
                    {socialButtons.map((item) => {
                        const [socialName, link] = item as SocialButton
                        if (socialImages[socialName]) {
                            return (
                                <span>
                                    <a href={link} target='_table'>
                                        <img src={socialImages[socialName]} alt={`${socialName} URL`}/>
                                    </a>
                                </span>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
};

