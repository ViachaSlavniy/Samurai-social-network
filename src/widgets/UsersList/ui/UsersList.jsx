import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsersTC} from "../../../entities/viewer/api/users";
import {UserCard} from "../../../entities/viewer/ui/UserCard/UserCard";
import usersBg from "../../../shared/assets/images/usersBg.jpg";
import {Paginator, Preloader} from "../../../shared/ui";
import {FollowButton, UnFollowButton} from "../../../features/viewer";
import styles from "./UsersList.module.css";

export const UsersList = () => {
    const dispatch = useDispatch();
    const {isLoaded, currentPage, pageSize, totalCount, portionSize} = useSelector(({users}) => users);
    const users = useSelector(({users}) => users.items);

    const usersComponents = users.map(user => (
            <UserCard key={user.id}
                      buttonSlot={user.followed
                          ? <UnFollowButton id={user.id} />
                          : <FollowButton id={user.id} />}
                      userInfo={user}
            />
        )
    )

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [currentPage])

    if (!isLoaded) {
        return <Preloader/>
    }


    return (
        <div className={styles['users-block']}>
            <div className={styles.bg}>
                <img src={usersBg} alt="user bg"/>
                <div className={styles.bgTitle}>
                    <div>
                        <h1>Samurai List</h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <Paginator totalCount={totalCount}
                           currentPage={currentPage}
                           pageSize={pageSize}
                           portionSize={portionSize}
                />
            </div>
            <div className={styles.usersContainer}>
                {usersComponents}
            </div>
        </div>
    )
};
