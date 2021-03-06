import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addPostAC, postChangeAC } from '../../../../redux/actions/profile';
import Post from './Post/Post';
import s from './Posts.module.css';
import unknownUser from './../../../../assets/img/unknown150.jpg'

const  Posts = () => {
    const dispatch = useDispatch();
    const refPostArea = React.createRef();

    const {photos} = useSelector(({profile}) => profile.profilePage)

    const postsOldArr = useSelector((state) => state.profile.postsData);
    const postsNewArr = postsOldArr.map(item => <Post key={item.id} userPhoto={photos.large} postText={item.postText} likesCount={item.likesCount}/>)
    
    const handlePostClick = () => {
        if(refPostArea.current.value.length !== 0) {
            dispatch(addPostAC(refPostArea.current.value));
            refPostArea.current.value = '';
        }
    }

    const onPostTextChange = () => {
        dispatch(postChangeAC(refPostArea.current.value));
    }



    return (
        <>
        <div className={s.posts__blockWrap}>
        <div className={s.posts__block}>
            <div className={s.posts__blockTitle}>Create Post</div>
            <div className={s.posts__form}>
            <div className={s.posts__formImg}>
                <img src={photos.large 
                    ? photos.large 
                    : unknownUser} alt="User image"/>
            </div>
                <textarea onChange={onPostTextChange} ref={refPostArea} className={s.posts__textarea} cols="50" rows="5" placeholder="Wrire something here..."/>
            </div>
            <button onClick={handlePostClick} className={s.posts__btn} type="submit">Post</button>
        </div>
        {postsNewArr}
        </div>
      </>
    )
}

export default Posts
