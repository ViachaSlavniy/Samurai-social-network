import { React, useEffect } from 'react';
import axios from 'axios';
import s from './Users.module.css'
import usersBg from './../../assets/img/usersBg.jpg';
import { setUsersAC, setLoadAC } from '../../redux/actions/users';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../Common/Preloader';
import UserCard from './UsersCard/UserCard';
import Paginator from '../Common/Pagination/Pagination';

function Users() {
    const dispatch = useDispatch();
    const {isLoaded, currentPage, pageSize} = useSelector(({users}) => users);

    useEffect(() => {
        dispatch(setLoadAC(false))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
            headers: {'API-KEY': 'deb5a1cf-eef7-4206-9237-48ed86537d51'}
        })
            .then((response) => {
                dispatch(setUsersAC(response.data))
                dispatch(setLoadAC(true))
            });
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
                <Paginator justify-items-center/>
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
