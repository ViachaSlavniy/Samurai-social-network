import React from 'react';
import s from './FormLink.module.css';
import { Field } from 'redux-form';
import { useSelector } from 'react-redux';

function FormLink({title, placeholder, type='text', htmlFor, component='input', name, currentInfo}) {

    console.log(currentInfo)

    const {editMode} = useSelector(({profile}) => profile);

    return (
        <>
        {type !== 'textarea'
        ?<div className={s.formItem}>
            <label htmlFor={htmlFor}>{title}</label>
            {editMode 
            ? <Field type={type} 
            component={component} 
            placeholder={placeholder}
            name={name}/>
            : <span>{currentInfo ? currentInfo : '---'}</span>
            }
        </div>
        : <div className={`${s.formItem} ${s.textarea}`}>
            <label htmlFor={htmlFor}>{title}</label>
            {editMode
            ?<Field className="textarea" 
            component={component} 
            type={type} 
            placeholder={placeholder}
            name={name}/>
            : <span>{currentInfo ? currentInfo : ''}</span>
            }

        </div>
        }
        </>
    )
}

export default FormLink
