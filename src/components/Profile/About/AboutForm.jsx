import React from 'react';
import {reduxForm} from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import FormLink from './FormLink/FormLink';
import s from './About.module.css'

function AboutForm({onSubmit, ...props}) {
    const {fullName, lookingForAJob, lookingForAJobDescription, aboutMe } = useSelector(({profile}) => profile.profilePage);
    const {facebook, website, vk, twitter, instagram, github, youtube, mainLink} = useSelector(({profile}) => profile.profilePage.contacts);

    const {editMode} = useSelector(({profile}) => profile);

    const aboutArr = [
        {id: 1, title: 'Name:', placeholder: 'Name', htmlFor: 'Name', name: 'FullName', currentInfo: fullName},
        {id: 2, title: 'About me:', placeholder: 'About me', htmlFor: 'AboutMe', name: 'AboutMe', component:'textarea', type: 'textarea', currentInfo: aboutMe},
        {id: 3, title: 'Looking for a job:', placeholder: 'Looking for a job', htmlFor: 'Job', type: 'checkbox', name: 'LookingForAJob', currentInfo: lookingForAJob},
        {id: 4, title: 'My professional skills:', placeholder: 'My professional skills', htmlFor: 'Skills',type: 'textarea', component:'textarea', name: 'LookingForAJobDescription', currentInfo: lookingForAJobDescription}
    ]

    const contactArr = [
        {id: 1, title: 'Facebook:', placeholder: 'Facebook', htmlFor: 'Facebook', name: 'contacts.facebook', currentInfo: facebook},
        {id: 2, title: 'Website:', placeholder: 'Website', htmlFor: 'Website', name: 'contacts.website', currentInfo: website},
        {id: 3, title: 'Vkontake:', placeholder: 'Vkontake', htmlFor: 'Vkontake', name: 'contacts.vk', currentInfo: vk},
        {id: 4, title: 'Twitter:', placeholder: 'Twitter', htmlFor: 'Twitter', name: 'contacts.twitter', currentInfo: twitter},
        {id: 5, title: 'Instagram:', placeholder: 'Instagram', htmlFor: 'Instagram', name: 'contacts.instagram', currentInfo: instagram},
        {id: 6, title: 'Github:', placeholder: 'Github', htmlFor: 'Github', name: 'contacts.github', currentInfo: github },
        {id: 7, title: 'Youtube:', placeholder: 'Youtube', htmlFor: 'Youtube', name: 'contacts.youtube', currentInfo: youtube},
        {id: 8, title: 'MainLink:', placeholder: 'MainLink', htmlFor: 'MainLink', name: 'contacts.mainLink', currentInfo: mainLink}
    ]

    //FOR EDITMODE 

    const {handleSubmit} = props;
    const error = props.error;

    return (
        <form onSubmit={handleSubmit} className={s.aboutForm}>
            {error && <span>{error}</span>}
            {
                aboutArr.map(item  => <FormLink 
                    key={item.id} 
                    title={item.title} 
                    placeholder={item.placeholder} 
                    htmlFor={item.htmlFor} 
                    type={item.type}
                    component={item.component}
                    name={item.name}
                    currentInfo={item.currentInfo}/>) 
            }
            <div className={s.title}>Contacts</div>
            {
                contactArr.map(item  => <FormLink 
                    key={item.id} 
                    title={item.title} 
                    placeholder={item.placeholder} 
                    htmlFor={item.htmlFor} 
                    type={item.type}
                    component={item.component}
                    name={item.name}
                    currentInfo={item.currentInfo}/>)
            }
            {
                editMode && <button className={s.btn} type="submit">Save</button>
            }
        </form>
    )
}

const AboutReduxForm = reduxForm({
    form: 'about'
})(AboutForm)

export default AboutReduxForm
