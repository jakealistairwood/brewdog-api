import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = (props) => {

    const { updateSearchField } = props;

    return (
        <div className={styles.searchBarContainer}>
            <label htmlFor="searchbar"></label>
            <input type="text" id="searchbar" placeholder="search" onInput={e => updateSearchField(e.target.value)} />
        </div>
    )
}

export default SearchBar;
