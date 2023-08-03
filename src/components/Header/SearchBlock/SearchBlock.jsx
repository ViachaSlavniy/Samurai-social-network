import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './SearchBlock.module.css'
import {Element} from './../../FormControls/FormControls'
import loupe from '../../../shared/assets/icons/loupe.svg';
import ResultBlock from './ResultBlock/ResultBlock';

const SearchBlock = ({resultBlockRef, showSearchBlock,onSubmitForm}) => {
    return (
        <div className={s.header__search}>
            <SearchReduxForm resultBlockRef={resultBlockRef} showSearchBlock={showSearchBlock} onSubmit={onSubmitForm}/>
        </div>
    )
}

const SearchForm = ({resultBlockRef, showSearchBlock, ...props}) => {
    const {handleSubmit} = props
    return (
    <>
    <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="search"></label>
        <Field component={Element} name="term" type="text" placeholder="Search..."/>
        <button>
            <img src={loupe} alt="Search"/>
        </button>
        <ResultBlock resultBlockRef={resultBlockRef} showSearchBlock={showSearchBlock}/>
    </form>
    </>
    )
}

const SearchReduxForm = reduxForm({
    form: 'search'
}) (SearchForm)

export default SearchBlock
