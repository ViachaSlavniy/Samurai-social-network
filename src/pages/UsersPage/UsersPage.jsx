import {UsersList} from "../../widgets/UsersList/ui/UsersList";
import styles from "./UsersPage.module.scss";

export const UsersPage = () => {
    return (
        <>
            <div className={styles['image-block']}>
                <div className={styles['title-wrapper']}>
                    <h1>Samurai List</h1>
                </div>
            </div>
            <UsersList />
        </>
    )
}
