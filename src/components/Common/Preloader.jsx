import React from 'react';
import s from './Preloader.module.css';
import preloader from '../../shared/assets/images/preloader.svg';

function Preloader() {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader
