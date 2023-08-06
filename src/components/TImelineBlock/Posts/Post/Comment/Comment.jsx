import React from 'react'
import profile50 from '../../../../../shared/assets/images/profile50.jpg'

function Comment() {
    return (
        <div className="comment__user">
            <div className="user__img">
                <img src={profile50} alt="commentator"/>
            </div>
            <div className="comment__info">
                <div className="user__name">Monty Carlo</div>
            <div className="user__comment">Lorem ipsum dolor sit.</div>
                <div className="comment__detail">
                    <span className="comment__detail-item">Like</span>
                    <span className="comment__detail-item">Reply</span>
                    <span className="comment__detail-item">Translate</span>
                    <span className="comment__detail-item">5 min</span>
                </div>
            </div>
        </div>
    )
}

export default Comment
