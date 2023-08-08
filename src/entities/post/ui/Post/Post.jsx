import styles from './Post.module.css';

export const Post = ({postText, likesCount, userPhoto}) => {

    return (
        <div className={styles.post}>
            <div className={styles.post__info}>
                <div className={styles.post__photo}>
                    <img src={userPhoto} alt={styles.user__photo}/>
                </div>
                <div className={styles.post__detail}>
                    <div className={styles.user__name}>Alexandr Petrov</div>
                    <div className={styles.post__time}>7 hour ago</div>
                </div>
            </div>
            <div className={styles.post__text}>{postText}</div>
            <div className={styles.post__counter}>
            <span className={styles.post__counterItem}>Likes: {likesCount}</span>
                <span className={styles.post__counterItem}>Comments</span>
                <span className={styles.post__counterItem}>Share</span>
            </div>
        </div>
    )
}
