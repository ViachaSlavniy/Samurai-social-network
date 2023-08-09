import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FollowButton, UnFollowButton} from "../../../features/viewer";
import {UserCard, getUsersTC, setCurrentPage, viewerSelector} from "../../../entities/viewer";
import {Paginator, Preloader} from "../../../shared/ui";
import styles from "./UsersList.module.css";

export const UsersList = () => {
    const dispatch = useDispatch();
    const {isLoading, currentPage, pageSize, totalCount, portionSize, users} = useSelector(viewerSelector);

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

    const handleCurrentPage = (page: number) => {
        dispatch(setCurrentPage(page));
    }

    if (isLoading) {
        return <Preloader/>
    }


    return (
        <div className={styles['users-block']}>
            <div className="row justify-content-center">
                <Paginator totalCount={totalCount}
                           currentPage={currentPage}
                           pageSize={pageSize}
                           portionSize={portionSize}
                           handleCurrentPage={handleCurrentPage}
                />
            </div>
            <div className={styles['users-container']}>
                {usersComponents}
            </div>
        </div>
    )
};

