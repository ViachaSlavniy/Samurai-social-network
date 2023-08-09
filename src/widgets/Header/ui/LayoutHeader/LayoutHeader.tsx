import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Logo} from "../Logo/Logo";
import {SearchBlock} from "../../../../features/search";
import {LogoutButton} from "../../../../features/authentification/logout";
import {authSelector} from "../../../../entities/session";
import {samuraiImage} from "../../../../shared/assets/images";
import styles from './LayoutHeader.module.scss';

export const LayoutHeader = () => {
    const {isAuth, userName, userPhotoURL} = useSelector(authSelector);
    const headerPhoto = userPhotoURL ? userPhotoURL: samuraiImage

    return (
        <header className={styles.header}>
            <Logo />
            <SearchBlock />
            {isAuth
                ?
                <>
                    <div className={styles.header__info}>
                        <div className={`${styles.userPhoto} ${styles.header__infoItem}`}>
                            <img src={headerPhoto} alt="profile img"/>
                        </div>
                        <div className={`${styles.userName} ${styles.header__infoItem}`}>
                            {userName}
                        </div>
                    </div>
                    <LogoutButton />
                </>
                : <div className={`${styles.btn}`}>
                    <Link to={'/login'}>LogIn</Link>
                </div>
            }
        </header>
    );
};
