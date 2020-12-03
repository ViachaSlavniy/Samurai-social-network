import React from 'react';
import {reduxForm} from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';
import FormLink from './FormLink/FormLink'
import s from './About.module.css'
import { setEditModeAC } from '../../../redux/actions/profile';

function AboutForm(props) {
    const dispatch = useDispatch()
    const {fullName, lookingForAJob, lookingForAJobDescription, aboutMe } = useSelector(({profile}) => profile.profilePage);
    const {facebook, website, vk, twitter, instagram, github, youtube, mainLink} = useSelector(({profile}) => profile.profilePage.contacts);

    console.log(facebook, website, vk, instagram)

    const {editMode} = useSelector(({profile}) => profile);

    const aboutArr = [
        {id: 1, title: 'Name:', placeholder: 'Name', htmlFor: 'Name', name: 'FullName', currentInfo: fullName},
        {id: 2, title: 'About me:', placeholder: 'About me', htmlFor: 'AboutMe', name: 'AboutMe', component:'textarea', type: 'textarea', currentInfo: aboutMe},
        {id: 3, title: 'Looking for a job:', placeholder: 'Looking for a job', htmlFor: 'Job', type: 'checkbox', name: 'LookingForAJob', currentInfo: lookingForAJob},
        {id: 4, title: 'My professional skills:', placeholder: 'My professional skills', htmlFor: 'Skills',type: 'textarea', component:'textarea', name: 'LookingForAJobDescription', currentInfo: lookingForAJobDescription}
    ]

    const contactArr = [
        {id: 1, title: 'Facebook:', placeholder: 'Facebook', htmlFor: 'Facebook', name: 'facebook', currentInfo: facebook},
        {id: 2, title: 'Website:', placeholder: 'Website', htmlFor: 'Website', name: 'website', currentInfo: website},
        {id: 3, title: 'Vkontake:', placeholder: 'Vkontake', htmlFor: 'Vkontake', name: 'vk', currentInfo: vk},
        {id: 4, title: 'Twitter:', placeholder: 'Twitter', htmlFor: 'Twitter', name: 'twitter', currentInfo: twitter},
        {id: 5, title: 'Instagram:', placeholder: 'Instagram', htmlFor: 'Instagram', name: 'instagram', currentInfo: instagram},
        {id: 6, title: 'Github:', placeholder: 'Github', htmlFor: 'Github', name: 'github', currentInfo: github },
        {id: 7, title: 'Youtube:', placeholder: 'Youtube', htmlFor: 'Youtube', name: 'youtube', currentInfo: youtube},
        {id: 8, title: 'MainLink:', placeholder: 'MainLink', htmlFor: 'MainLink', name: 'mainLink', currentInfo: mainLink}
    ]

    //FOR EDITMODE 
    const onEditMode = () => {
        dispatch(setEditModeAC(false))
    }

    const {handleSubmit} = props;

    return (
        <>
        <form onSubmit={handleSubmit} className={s.aboutForm}>
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
                editMode && <button onClick={onEditMode} className={s.btn} type="submit">Save</button>
            }
        </form>
        </>
    )
}

const AboutReduxForm = reduxForm({
    form: 'about'
})(AboutForm)

export default AboutReduxForm
