import React from 'react';
import {useDispatch} from 'react-redux';
import styles from './AddPostForm.module.css';
import {Button} from "../../../../shared/ui";
import {addPostAC, postChangeAC} from "../../../../entities/post";

export const AddPostForm = () => {
    const dispatch = useDispatch();
    const refPostArea = React.createRef();

    const handlePostClick = () => {
        if (refPostArea.current.value.length !== 0) {
            dispatch(addPostAC(refPostArea.current.value));
            refPostArea.current.value = '';
        }
    }

    const onPostTextChange = () => {
        dispatch(postChangeAC(refPostArea.current.value));
    }


    return (
        <form className={styles['post-form']}>
            <div className={styles['form-title']}>
                Create Post
            </div>
            <textarea className={styles.input}
                      onChange={onPostTextChange}
                      ref={refPostArea}
                      cols="50"
                      rows="5"
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
