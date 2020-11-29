import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './About.module.css';

function About() {

    const [activeLink, setActiveLink] = useState(0);
    const activeLinks = ['Contact and Basic info', 'Work and Education'];
    
    const editMode = useSelector(({profile}) => profile);

    return (
        <div className={s.aboutWrap}>
            <div className={s.aboutLinks}>
                {
                    activeLinks.map((link, index) =>  <div onClick={() => setActiveLink(index) } key={index} className={`${s.aboutLink} ${index === activeLink && s.activeLink}`}>{link}</div>)
                }
            </div>
            <div className={s.aboutInf}>
                <div className={s.title}>About me</div>
                <form>
                    <div className={s.formItem}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" placeholder='Name'/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="status">Status:</label>
                        <input type="text" placeholder='Status'/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="about">About me:</label>
                        <input type="text" placeholder='About me'/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="Looking for a job">Looking for a job:</label>
                        <input id="checkbox" type="checkbox" placeholder='About me'/>
                    </div>
                    <div className={`${s.formItem} ${s.textarea}`}>
                        <label htmlFor="My professional skills">My professional skills:</label>
                        <textarea className="textarea" type="text" placeholder='My professional skills'/>
                    </div>
                    <div className={s.title}>Contacts</div>
                    <div className={s.formItem}>
                        <label htmlFor="Facebook">Facebook:</label>
                        <input type="text" placeholder='Facebook'/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="Website">Website:</label>
                        <input type="text" placeholder='Website'/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="Vkontake">Vkontake:</label>
                        <input type="text" placeholder='Vkontake'/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="Twitter">Twitter:</label>
                        <input type="text" placeholder='Twitter'/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="Instagram">Instagram:</label>
                        <input type="text" placeholder='Instagram'/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="Github">Github:</label>
                        <input type="text" placeholder='Github'/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="Youtube">Youtube:</label>
                        <input type="text" placeholder='Youtube'/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="MainLink">MainLink:</label>
                        <input type="text" placeholder='MainLink'/>
                    </div>
                </form>
                <button className={s.btn} type="submit">Save</button>
            </div>
        </div>
    )
}

export default About
