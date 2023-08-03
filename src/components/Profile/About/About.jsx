import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './About.module.css';
import AboutReduxForm from './AboutForm/AboutForm';
import AboutData from './AboutData/AboutData';
import {setProfileInfoTC, setEditModeAC} from '../../../entities/model/actions/profile';


const About = () => {
    console.log('RENDER ABOUT')
    const dispatch = useDispatch();
    const [activeLink, setActiveLink] = useState(0);
    const activeLinks = ['Contact and Basic info', 'Work and Education'];
    
    const {editMode} = useSelector(({profile}) => profile);
    const {id} = useSelector(({auth}) => auth);

    const onSubmit = (values) => {
        dispatch(setProfileInfoTC(values, id))
            .then(() => {
                dispatch(setEditModeAC(false))
            })
    }

    // Initial values for Redux-form

    const {profilePage} = useSelector(({profile}) => profile)

    return (
        <div className={s.aboutWrap}>
            <div className={s.aboutLinks}>
                {
                    activeLinks.map((link, index) =>  <div onClick={() => setActiveLink(index) } key={index} className={`${s.aboutLink} ${index === activeLink && s.activeLink}`}>{link}</div>)
                }
            </div>
            <div className={s.aboutInf}>
                {editMode
                ?  <AboutReduxForm initialValues={profilePage} onSubmit={onSubmit}/>
                :  <AboutData {...profilePage}/>
                }   
            </div>
        </div>
    )
}

export default About
