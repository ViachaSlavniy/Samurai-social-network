import React, {useEffect, useState} from "react";
import {reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {SearchForm} from "./SearchForm/SearchForm";
import {searchTC} from "../model/search";
import {ResultBlock} from "./ResultBlock/ResultBlock";
import styles from "./SearchBlock.module.scss";

const SearchReduxForm = reduxForm({
    form: 'search'
}) (SearchForm)

export const SearchBlock = () => {
    const dispatch = useDispatch();
    const [showSearchBlock, setShowSearchBlock] = useState(false)

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
    }, [])

    const onSubmitForm = (values) => {
        dispatch(searchTC(values.term));
        setShowSearchBlock(true);
    }

    const handleOutsideClick = () => {
        setShowSearchBlock(false);
    }


    return (
        <div className={styles.header__search}>
            <SearchReduxForm
                showSearchBlock={showSearchBlock}
                onSubmit={onSubmitForm}
            />
            <ResultBlock showSearchBlock={showSearchBlock}/>
        </div>
    )
}


