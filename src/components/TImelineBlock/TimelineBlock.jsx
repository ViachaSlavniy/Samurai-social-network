import React from 'react';
import { useSelector } from 'react-redux';
import Events from './Events/Events';
import Posts from './Posts/Posts';
import s from './TimelineBlock.module.css';

const TimelineBlock = () => {

    const {id} = useSelector(({auth}) => auth);
    const {userId} = useSelector(({profile}) => profile.profilePage)

    return (
        <>
        {id === userId
        ? 
        <div className={s.timelineBlock}>
            <Events/>
            <Posts/>
        </div>
        : 'NEW BLOCK'
        }   
        </>
    )
}

export default TimelineBlock
