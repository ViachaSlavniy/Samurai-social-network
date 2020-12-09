import React from 'react';
import s from './../About.module.css';

const AboutData = ({aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts}) => {

    return (
        <>
            <div className={s.title}>About me</div>
            <div className={s.dataItem}>
                <div className={s.dataItemTitle}>Name: </div>
                <div className={s.dataItemText}>{fullName}</div>
            </div>
            <div className={s.dataItem}>
                <div className={s.dataItemTitle}>About me: </div>
                <div className={s.dataItemText}>{aboutMe}</div>
            </div>
            <div className={s.dataItem}>
                <div className={s.dataItemTitle}>Looking for a job: </div>
                <div className={s.dataItemText}>{lookingForAJob ? 'Yes' : 'No'}</div>
            </div>
            <div className={s.dataItem}>
                <div className={s.dataItemTitle}>My professional skills: </div>
                <div className={s.dataItemText}>{lookingForAJobDescription}</div>
            </div>
            <div className={s.title}>Contacts</div>
            {
                Object.keys(contacts).map(key => <Contact key={key} contactsTitle={key} contactsValue={contacts[key]}/>)
            }
        </>
    )
}

export const Contact = ({contactsTitle, contactsValue}) => {
    return (
        <div className={s.dataItem}>
            <div className={s.dataItemTitle}>{contactsTitle}:</div>
            <div className={s.dataItemText}>{contactsValue}</div>
        </div>
    )
}

export default AboutData
