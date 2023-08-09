import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Button} from "../../../../shared/ui";
import {addPost, changePostText} from "../../../../entities/post";
import styles from './AddPostForm.module.css';

export const AddPostForm = () => {
    const dispatch = useDispatch();
    const refPostArea = useRef<any>();

    const handlePostClick = () => {
        if (refPostArea.current.value.length !== 0) {
            dispatch(addPost(refPostArea.current.value));
            refPostArea.current.value = '';
        }
    }

    const onPostTextChange = () => {
        dispatch(changePostText(refPostArea.current.value));
    }


    return (
        <form className={styles['post-form']}>
            <div className={styles['form-title']}>
                Create Post
            </div>
            <textarea className={styles.input}
                      onChange={onPostTextChange}
                      ref={refPostArea}
                      cols={50}
                      rows={5}
                      placeholder="Write something here..."
            />
            <Button
                className={styles.button}
                onClick={handlePostClick}
                buttonType="primary"
            >
                Post
            </Button>
        </form>
    )
}
