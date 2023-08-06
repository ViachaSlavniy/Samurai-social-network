import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import usersBg from '../../../shared/assets/images/usersBg.jpg';
import {getFriendsTC} from '../../../entities/viewer/api/users';
import {UserCard} from "../../../entities/viewer/ui/UserCard/UserCard";
import {UnFollowButton} from "../../../features/viewer";
import {Paginator, Preloader} from "../../../shared/ui";
import styles from './FriendsList.module.css';

export const FriendsList = () => {
    const dispatch = useDispatch();

    const {isAuth} = useSelector(({auth}) => auth)
    const {isLoaded, currentPage, pageSize, portionSize} = useSelector(({users}) => users);
    const friends = useSelector(({users}) => users.friends.items);
    const {totalCount} = useSelector(({users}) => users.friends)

    useEffect(() => {
        dispatch(getFriendsTC(currentPage, pageSize))
    }, [currentPage])

    const friendsComponents = friends.map(user => <UserCard
        key={user.id}
        userInfo={user}
        buttonSlot={<UnFollowButton id={user.id} />}/>
    )

    return (
        <>
            {isAuth
                ? <div className={styles.usersBlock}>
                    <div className={styles.bg}>
                        <img src={usersBg} alt="user bg"/>
                        <div className={styles.bgTitle}>
                            <div>
                                <h1>Friends</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <Paginator
                            totalCount={totalCount}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            portionSize={portionSize} justify-items-center/>
                    </div>
                    {isLoaded
                        ? <div className={styles.usersContainer}>
                            {friendsComponents}
                        </div>
                        : <Preloader/>
                    }
                </div>
                : <Redirect to="/login"/>
            }
        </>
    )
}
