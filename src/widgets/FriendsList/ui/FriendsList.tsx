import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {UnFollowButton} from "../../../features/viewer";
import {authSelector} from "../../../entities/session";
import {UserCard, getFriendsTC, setCurrentPage, viewerSelector} from "../../../entities/viewer";
import usersBg from '../../../shared/assets/images/usersBg.jpg';
import {Paginator, Preloader} from "../../../shared/ui";
import styles from './FriendsList.module.css';

export const FriendsList = () => {
    const dispatch = useDispatch();

    const {isAuth} = useSelector(authSelector)
    const {isLoading, currentPage, pageSize, portionSize, friends} = useSelector(viewerSelector);

    useEffect(() => {
        dispatch(getFriendsTC(currentPage, pageSize))
    }, [currentPage])

    const friendsComponents = friends.items.map(user => <UserCard
        key={user.id}
        userInfo={user}
        buttonSlot={<UnFollowButton id={user.id} />}/>
    )

    const handleCurrentPage = (page: number) => {
        dispatch(setCurrentPage(page));
    }

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
                            totalCount={friends.totalCount}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            portionSize={portionSize}
                            handleCurrentPage={handleCurrentPage}
                        />
                    </div>
                    {!isLoading
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
