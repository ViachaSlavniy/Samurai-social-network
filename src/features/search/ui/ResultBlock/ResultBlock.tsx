import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './ResultBlock.module.css';
import ResultItem from '../ResultItem/ResultItem';
import {viewerSelector} from "../../../../entities/viewer";
import {ResultBlockProps} from "./types";

export const ResultBlock = ({showSearchBlock}: ResultBlockProps) => {

    const {users} = useSelector(viewerSelector);
    const resultArr = users.map(user => <ResultItem key={user.id}
                                                    name={user.name}
                                                    userId={user.id}
                                                    photo={user.photos.small}
                                                    status={user.status}
    />)

    return (
        <div className={`${styles.header__searchResult} ${showSearchBlock && resultArr.length > 0 && styles.searchResultshow}`}>
            {resultArr}
            <Link className={styles.resultItemlink} to={`/users`}>
                <div className={styles.header__searchMoreResults}>
                    Показать все результаты
                </div>
            </Link>
        </div>
    )
}
