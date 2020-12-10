import React from 'react'
import s from './FormControls.module.css';

export const Element = ({
    placeholder,
    input,
    type,
    meta: { touched, error }}) => {

    return (
        <>
        {type === 'textarea'
        ?<div className={s.inputBlock}>
            <textarea {...input} className={`${touched && error ? s.error : ''} ${s.textArea}`} placeholder={placeholder}/>
            {error && <span>!</span>}
        </div> 
        :<div className={s.inputBlock}>
            <input {...input} className={`${touched && error ? s.error : ''} ${s.input}`} placeholder={placeholder} type={type}/>
            {error && <span>!</span>}
        </div> 
        }
        </>
    )
}
