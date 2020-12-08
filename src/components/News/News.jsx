import React from 'react';
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'

function Newsfeed() {

    const {isAuth} = useSelector(({auth}) => auth)

    return (
        <>
        {isAuth
        ?<div>
            News
        </div>
        : <Redirect to="/login"/>
        }
        </>
    )
}

export default Newsfeed
