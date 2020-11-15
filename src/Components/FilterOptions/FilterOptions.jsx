import React, { useState, useEffect } from 'react';
import styles from './FilterOptions.module.scss';

const FilterOptions = (props) => {

    const { isClassic, setIsClassic, getBeerData } = props;

    const [ inputActive, setInputActive ] = useState(false);

    const toggleInputColour = inputActive ? styles.active : "";

    useEffect(() => {
        setInputActive(!inputActive);
    }, []);

    return (
        <>
        <div className={styles.optionsContainer}>
            <input type="button" value="Classic" className={`${styles.inputBtn} ${toggleInputColour}`} onClick={() => {
                setIsClassic(!isClassic)
                getBeerData();
                setInputActive(!inputActive)
            }
            } />
        </div>
        </>
    )
}

export default FilterOptions;
