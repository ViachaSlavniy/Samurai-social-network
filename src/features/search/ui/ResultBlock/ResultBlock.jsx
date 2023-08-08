import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './ResultBlock.module.css';
import ResultItem from '../ResultItem/ResultItem';

const ResultBlock = ({showSearchBlock}) => {

    const {items} = useSelector(({viewer}) => viewer.searchResult);
    const resultArr = items.map(item => <ResultItem key={item.id} name={item.name} userId={item.id} photo={item.photos.small} status={item.status}/>)

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

export default ResultBlock
