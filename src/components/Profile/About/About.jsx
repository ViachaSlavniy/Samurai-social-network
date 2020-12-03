import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './About.module.css';
import AboutReduxForm from './AboutForm';
import {setProfileInfoTC} from './../../../redux/actions/profile';


function About() {
    const dispatch = useDispatch();
    const [activeLink, setActiveLink] = useState(0);
    const activeLinks = ['Contact and Basic info', 'Work and Education'];
    
    const editMode = useSelector(({profile}) => profile);

    const onSubmit = (values) => {
        console.log(values)
        dispatch(setProfileInfoTC(values))
    }

    return (
        <div className={s.aboutWrap}>
            <div className={s.aboutLinks}>
                {
                    activeLinks.map((link, index) =>  <div onClick={() => setActiveLink(index) } key={index} className={`${s.aboutLink} ${index === activeLink && s.activeLink}`}>{link}</div>)
                }
            </div>
            <div className={s.aboutInf}>
                <div className={s.title}>About me</div>
                {/* <div className={s.aboutItem}>
                    <label htmlFor='photo'>Photo:</label>
                    <input type='file'/>
                </div>
                <div className={s.aboutItem}>
                    <label htmlFor='Status'>Status:</label>
                    <input type='text' placeholder='Status'/>
                </div> */}
                <AboutReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default About
