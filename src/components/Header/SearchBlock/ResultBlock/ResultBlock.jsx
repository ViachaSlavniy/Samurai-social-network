import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './ResultBlock.module.css';
import ResultItem from './ResultItem/ResultItem';

const ResultBlock = ({resultBlockRef, showSearchBlock}) => {

    const {items} = useSelector(({users}) => users.searchResult);
    const resultArr = items.map(item => <ResultItem key={item.id} name={item.name} userId={item.id} photo={item.photos.small} status={item.status}/>)

    return (
        <div ref={resultBlockRef} className={`${s.header__searchResult} ${showSearchBlock && resultArr.length > 0 && s.searchResultshow}`}>
            {resultArr}
            <Link className={s.resultItemlink} to={`/users`}>
                <div className={s.header__searchMoreResults}>
                    Показать все результаты
                </div>
            </Link>
        </div>
    )
}

export default ResultBlock
