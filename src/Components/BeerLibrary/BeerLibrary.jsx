import React from 'react';
import styles from './BeerLibrary.module.scss';
import Card from '../Card/index';

const BeerLibrary = (props) => {

    const { beers } = props;

    const renderBeerCards = (beer) => (
            <Card beer={beer} />
    )

    return (
        <div className={styles.cardLibraryContainer}>
            {beers.map(renderBeerCards)}  
        </div>
    )
}

export default BeerLibrary;
