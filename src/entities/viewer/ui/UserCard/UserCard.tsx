import {Link} from 'react-router-dom';
import cardBg from '../../../../shared/assets/images/bg1.jpg';
import unknownUser from '../../../../shared/assets/images/unknown150.jpg';
import {UserCardProps} from "./types";
import styles from './UserCard.module.css'

export const UserCard = ({
    buttonSlot,
    userInfo
}: UserCardProps) => {
    const {id, status, name, photos} = userInfo;
    return (
        <div className={styles.userCard}>
            <div className={styles.cardBg}>
                <img src={cardBg} alt="card background"/>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardPhotoWrap}>
                    <div className={styles.cardPhoto}>
                        <Link to={`/profile/${id}`}>
                            <img src={photos.large
                                ? photos.large
                                : unknownUser
                            }
                                 alt="card"/>
                        </Link>
                    </div>
                </div>
                <div className={styles.cardDesc}>
                    <div className={styles.userName}>{name}</div>
                    <div className={styles.userProf}>@Future React developer</div>
                    <div className={styles.userAbout}>{
                        status
                            ? status
                            : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, quasi.'
                    }
                    </div>
                </div>
            </div>
            <div className={styles['button-slot']}>
                {buttonSlot}
            </div>
        </div>
    )
}
