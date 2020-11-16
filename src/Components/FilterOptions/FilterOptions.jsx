import React, { useState, useEffect } from 'react';
import styles from './FilterOptions.module.scss';

const FilterOptions = (props) => {

    const { isClassic, 
            setIsClassic, 
            getBeerData,
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

    const [ inputActive, setInputActive ] = useState(false);

    const toggleInputColour = inputActive ? styles.active : "";

    // useEffect(() => {
    //     setInputActive(!inputActive);
    // }, []);

    return (
        <>
        <div className={styles.optionsContainer}>
            <input type="button" value="Classic" id={styles.classicBtn} className={`${styles.inputBtn} ${toggleInputColour}`} onClick={() => {
                setIsClassic(!isClassic)
                getBeerData();
                setInputActive(!inputActive)
            }
            } />
            <input type="button" value="Light" className={`${styles.inputBtn} ${toggleInputColour}`} onClick={() => {
                setIsLight(!isLight)
                getBeerData();
                setInputActive(!inputActive)
            }
            } />
            <input type="button" value="Medium" className={`${styles.inputBtn}`} onClick={() => {
                setIsMedium(!isMedium)
                getBeerData();
            }
            } />
            <input type="button" value="Strong" className={`${styles.inputBtn}`} onClick={() => {
                setIsStrong(!isStrong)
                getBeerData();
            }
            } />
            <input type="button" value="X-Strong" className={`${styles.inputBtn}`} onClick={() => {
                setIsExtraStrong(!isExtraStrong)
                getBeerData();
            }
            } />
            <input type="button" value="Alcohol Free" className={`${styles.inputBtn}`} onClick={() => {
                setIsAlcoholFree(!isAlcoholFree)
                getBeerData();
            }
            } />
        </div>
        </>
    )
}

export default FilterOptions;
