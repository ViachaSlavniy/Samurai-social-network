import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from './Messages.module.css';

function Messages() {

    const {isAuth} = useSelector(({auth}) => auth)

    return (
        <>
        {isAuth 
        ?<div className={s.item} >
            Messages
        </div>
        : <Redirect to={"/login"}/>
        }
        </>
    )
}

export default Messages
