import {React, useEffect} from 'react';
import axios from 'axios';
import s from './Users.module.css'
import usersBg from './../../assets/img/usersBg.jpg';
import UserCard from './UsersCard/UserCard';
import { setUsersAC } from '../../redux/actions/users';
import { useDispatch, useSelector } from 'react-redux';

function Users() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => response.data)
            .then((data) => dispatch(setUsersAC(data)));
    },[])

    // const oldUsersArr = useSelector(({users}) => users.items);
    // const newUsersArr = oldUsersArr.map(item => <UserCard key={item.id} {...item}/>)

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
            <div className={s.usersContainer}>
                {/* {newUsersArr} */}
            </div>
        </div>
    )
}

export default Users
