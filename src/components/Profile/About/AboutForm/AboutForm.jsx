import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import {setEditModeAC} from '../../../../entities/model/actions/profile';
import {Button, Element} from "../../../../shared/ui";
import s from './AboutForm.module.css';

function AboutForm({onSubmit, ...props}) {
    const dispatch = useDispatch();

    const {editMode, profilePage} = useSelector(({profile}) => profile);

    //FOR EDITMODE

    const OffEditMode = () => {
        dispatch(setEditModeAC(false));
    }

    const {handleSubmit} = props;
    const error = props.error;

    return (
        <form onSubmit={handleSubmit} className={s.aboutForm} autoComplete="off">
            {error && <span>{error}</span>}
            <div className={s.dataItem}>
                <label>Name: </label>
                <Field placeholder={'Enter your name'} name={'fullName'} component={Element} type="text"/>
            </div>
            <div className={s.dataItem}>
                <label>About me: </label>
                <Field  placeholder={'Write something about you'} name={'aboutMe'} component={Element} type="textarea"/>
            </div>
            <div className={`${s.dataItem} ${s.checkbox}`}>
                <label>Looking for a job: </label>
                <Field name={'lookingForAJob'} component={Element} type="checkbox"/>
            </div>
            <div className={s.dataItem}>
                <label>My professional skills: </label>
                <Field placeholder={'Skills'} name={'lookingForAJobDescription'} component={Element} type="textarea"/>
            </div>

            <div className={s.title}>Contacts</div>
            {Object.keys(profilePage.contacts).map(key => {
                return (
                <div className={s.dataItem} key={key}>
                    <label>{key}:</label>
                    <Field placeholder={`https://${key}.com`} name={'contacts.' + key} component={Element} type="url"/>
                </div>
                )
            })
            }
            {
                editMode &&
                <div className={s.buttons}>
                    <Button
                        buttonType="approve"
                        type="submit"
                    >
                        Save
                    </Button>
                    <Button
                        buttonType="reject"
                        type="submit"
                        onClick={OffEditMode}
                    >
                        Cancel
                    </Button>
                </div>
            }
        </form>
    )
}

const AboutReduxForm = reduxForm({
    form: 'about'
})(AboutForm)

export default AboutReduxForm
