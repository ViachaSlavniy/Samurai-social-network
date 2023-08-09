import React from 'react';
import {Field} from 'redux-form';
import {Element} from '../../../../shared/ui'
import {loupe} from "../../../../shared/assets/icons";
import {SearchFormProps} from "./types";


export const SearchForm = ({showSearchBlock, ...props}: SearchFormProps) => {
    const {handleSubmit} = props
    return (
        <>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="search"></label>
                <Field component={Element} name="term" type="text" placeholder="Search..."/>
                <button>
                    <img src={loupe} alt="Search"/>
                </button>
            </form>
        </>
    )
}
