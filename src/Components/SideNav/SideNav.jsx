import React from 'react';
import styles from './SideNav.module.scss';
import SearchBar from '../SearchBar';
import FilterOptions from '../FilterOptions';
import Logo from '../../Assets/Img/brewdog-logo.png';

const SideNav = (props) => {

    const { updateSearchField } = props;

    return (
        <div className={styles.sideNavContainer}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="brewdog-logo"></img>
            </div>
            <p className={styles.punchline}>Grab yourself one of our legendary craft beers!</p>
            <div>
                <SearchBar updateSearchField={updateSearchField} />    
                <FilterOptions />
            </div>
        </div>
    )
}

export default SideNav;
