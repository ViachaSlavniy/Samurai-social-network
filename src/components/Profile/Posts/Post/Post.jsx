import React from 'react';
import Comment from './Comment/Comment'
import userPhoto from './../../../../assets/img/profile130.jpg';
import s from './Post.module.css';

function Post({postText, likesCount}) {

    return (
        <div className={s.post}>
            <div className={s.post__info}>
                <div className={s.post__photo}>
                    <img src={userPhoto} alt={s.user__photo}/>
                </div>
                <div className={s.post__detail}>
                    <div className={s.user__name}>Alexaner Petrov</div>
                    <div className={s.post__time}>7 hour ago</div>
                </div>
            </div>
            <div className={s.post__text}>{postText}</div>
            <div className={s.post__counter}>
            <span className={s.post__counterItem}>Likes: {likesCount}</span>
                <span className={s.post__counterItem}>Comments</span>
                <span className={s.post__counterItem}>Share</span>
            </div>
            <div className={s.post__comments}>
                <Comment/>
            </div>
        </div>
    )
}

export default Post
