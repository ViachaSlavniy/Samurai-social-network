import React from 'react'
import s from './FormControls.module.css';

export const Element = ({
    placeholder,
    input,
    label,
    type,
    meta: { touched, error }}) => {

    return (
        <div className={s.inputBlock}>
            <label>{label}</label>
            <input {...input} className={touched && error ? s.error : ''} placeholder={placeholder} type={type}/>
            {error && <span>!</span>}
        </div> 
    )
}
