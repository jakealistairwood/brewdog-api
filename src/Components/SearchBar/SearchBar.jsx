import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = (props) => {

    const { setBeerName, getBeerData } = props;

    return (
        <div className={styles.searchBarContainer}>
            <label htmlFor="searchbar"></label>
            <input type="text" id="searchbar" placeholder="search..." onInput={e => {
                setBeerName(e.target.value);
                getBeerData();
            }}/>
        </div>
    )
}

export default SearchBar;
