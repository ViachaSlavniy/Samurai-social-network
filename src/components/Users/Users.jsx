import { React, useEffect } from 'react';
import s from './Users.module.css'
import usersBg from './../../assets/img/usersBg.jpg';
import { getUsersTC } from '../../redux/actions/users';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Common/Preloader';
import UserCard from './UsersCard/UserCard';
import Paginator from '../Common/Pagination/Pagination';

function Users() {
    const dispatch = useDispatch();
    const {isLoaded, currentPage, pageSize, totalCount, portionSize} = useSelector(({users}) => users);
    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    },[currentPage])

    const oldUsersArr = useSelector(({users}) => users.items);
    const newUsersArr = oldUsersArr.map(item => <UserCard key={item.id} {...item}/>)

    return (
        <div className={s.usersBlock}>
            <div className={s.bg}>
                <img src={usersBg} alt="user bg"/>
                <div className={s.bgTitle}>
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
                justify-items-center/>
            </div>
            {isLoaded
            ?<div className={s.usersContainer}>
                {newUsersArr}
            </div>
            : <Preloader/>
            }   
        </div>
    )
}

export default Users
