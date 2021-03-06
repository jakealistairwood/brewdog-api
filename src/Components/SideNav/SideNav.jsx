import React from 'react';
import styles from './SideNav.module.scss';
import SearchBar from '../SearchBar';
import FilterOptions from '../FilterOptions';
import Logo from '../../Assets/Img/brewdog-logo.png';

const SideNav = (props) => {

    const { getBeerData, 
            setBeerName, 
            isClassic, 
            setIsClassic,
            isLight, 
            setIsLight,
            isMedium,
            setIsMedium,
            isStrong, 
            setIsStrong,
            isAlcoholFree,
            setIsAlcoholFree,
            isExtraStrong, 
            setIsExtraStrong
        } = props;

    return (
        <div className={styles.sideNavContainer}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="brewdog-logo"></img>
            </div>
            <p className={styles.punchline}>Grab yourself one of our legendary craft beers!</p>
            <div className={styles.inputContainer}>
                <SearchBar getBeerData={getBeerData} setBeerName={setBeerName} />    
                <FilterOptions 
                    getBeerData={getBeerData} 
                    isClassic={isClassic} 
                    setIsClassic={setIsClassic} 
                    isLight={isLight}
                    setIsLight={setIsLight}
                    isMedium={isMedium}
                    setIsMedium={setIsMedium}
                    isStrong={isStrong}
                    setIsStrong={setIsStrong}
                    isAlcoholFree={isAlcoholFree}
                    setIsAlcoholFree={setIsAlcoholFree}
                    isExtraStrong={isExtraStrong}
                    setIsExtraStrong={setIsExtraStrong}
                />
            </div>
        </div>
    )
}

export default SideNav;
