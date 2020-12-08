import React from 'react';
import s from './FormLink.module.css';
import { Field } from 'redux-form';
import {Element} from './../../../FormControls/FormControls';
import {required} from './../../../utilits/validators/validators';
import { useSelector } from 'react-redux';

function FormLink({title, placeholder, type='text', name, currentInfo}) {

    const {editMode} = useSelector(({profile}) => profile);

    return (
        <div className={s.formItem}>
            <label>{title}</label>
            {editMode
            ? <Field validate={[required]} placeholder={placeholder} name={name} component={Element} type={type}/>
            :<span>{currentInfo}</span>
            }
        </div>
    )
}

export default FormLink
