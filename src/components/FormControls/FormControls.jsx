import React from 'react'
import s from './FormControls.module.css';

export const Element = ({
    placeholder,
    input,
    type,
    meta: { touched, error }}) => {

    return (
        <div className={s.inputBlock}>
            <input {...input} className={touched && error ? s.error : ''} placeholder={placeholder} type={type}/>
            {error && <span>!</span>}
        </div> 
    )
}
