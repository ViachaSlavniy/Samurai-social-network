import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Logo} from "../Logo/Logo";
import {LogoutButton} from "../../../../features/authentification/logout";
import {SearchBlock} from "../../../../features/search";
import styles from './LayoutHeader.module.scss';

export const LayoutHeader = () => {
    const {isAuth, userName, userPhotoURL} = useSelector(({auth}) => auth);

    return (
        <header className={styles.header}>
            <Logo />
            <SearchBlock />
            {isAuth
                ?
                <>
                    <div className={styles.header__info}>
                        <div className={`${styles.userPhoto} ${styles.header__infoItem}`}>
                            <img src={userPhotoURL} alt="profile img"/>
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
