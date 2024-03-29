import {useEffect} from 'react';
import s from './Sidebar.module.css';
import SidebarItem from './SidebarItem/SidebarItem';
import { useDispatch, useSelector } from 'react-redux';
import {getFriendsTC} from "../../entities/viewer";

const Sidebar = () => {
    const dispatch = useDispatch();

    const items = useSelector(({viewer}) => viewer.friends.items)
    useEffect(() => {
        dispatch(getFriendsTC())
    },[])

    const friendList = items.map(item => <SidebarItem key={item.id} id={item.id} name={item.name} photo={item.photos.large}/>)

    return (
        <aside className={s.sidebar__friends}>
            {friendList}
        </aside>
    )
}

export default Sidebar
