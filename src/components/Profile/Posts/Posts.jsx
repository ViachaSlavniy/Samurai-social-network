import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addPostAC } from '../../../redux/actions/profile';
import Post from './Post/Post';
import s from './Posts.module.css';


function Posts({userPhoto}) {
    const dispatch = useDispatch();
    const refPostArea = React.createRef();

    const postsOldArr = useSelector((state) => state.profile.postsData);
    console.log(postsOldArr)
    const postsNewArr = postsOldArr.map(item => <Post key={item.id} postText={item.postText} likesCount={item.likesCount}/>)
    
    const handlePostClick = () => {
        console.log(refPostArea.current.value.length);
        if(refPostArea.current.value.length !== 0) {
            dispatch(addPostAC(refPostArea.current.value));
            refPostArea.current.value = '';
        }
    }

    return (
        <>
        <div className={s.posts__block}>
            <div className={s.posts__blockTitle}>Create Post</div>
            <div className={s.posts__form}>
            <div className={s.posts__formImg}>
                <img src={userPhoto} alt="User image"/>
            </div>
                <textarea ref={refPostArea} className={s.posts__textarea} cols="50" rows="5" placeholder="Wrire something here..."/>
            </div>
            <button onClick={handlePostClick} className={s.posts__btn} type="submit">Post</button>
        </div>
        {postsNewArr}
      </>
    )
}

export default Posts
