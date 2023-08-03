import {useEffect} from 'react';
import s from './Friends.module.css'
import usersBg from '../../shared/assets/images/usersBg.jpg';
import {getFriendsTC} from '../../entities/viewer/api/users';
import {useDispatch, useSelector} from 'react-redux';
import Preloader from '../Common/Preloader';
import FriendsCard from './FriendsCard/FriendsCard';
import Paginator from '../Common/Pagination/Pagination';
import {Redirect} from 'react-router-dom';

function Friends() {
    const dispatch = useDispatch();

    const {isAuth} = useSelector(({auth}) => auth)
    const {isLoaded, currentPage, pageSize, portionSize} = useSelector(({users}) => users);
    const {totalCount} = useSelector(({users}) => users.friends)

    useEffect(() => {
        dispatch(getFriendsTC(currentPage, pageSize))
    }, [currentPage])

    const oldUsersArr = useSelector(({users}) => users.friends.items);
    const newUsersArr = oldUsersArr.map(item => <FriendsCard key={item.id} {...item}/>)

    return (
        <>
            {isAuth
                ? <div className={s.usersBlock}>
                    <div className={s.bg}>
                        <img src={usersBg} alt="user bg"/>
                        <div className={s.bgTitle}>
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
                        ? <div className={s.usersContainer}>
                            {newUsersArr}
                        </div>
                        : <Preloader/>
                    }
                </div>
                : <Redirect to="/login"/>
            }
        </>
    )
}

export default Friends
