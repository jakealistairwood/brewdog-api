import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {

    const { image_url, 
            name, 
            tagline, 
            description, 
            first_brewed, 
            abv} = props.beer;

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={image_url} alt="brewdog-beer"/>
            </div>
            <div className={styles.contentContainer}>
                <header className={styles.cardHeader}>
                    <h2 className={styles.beerName}>{name}</h2>
                    <h3 className={styles.beerSubHeader}>{tagline}</h3>
                    <p className={styles.beerDescription}>{description}
                    </p>
                </header>
                <footer className={styles.cardFooter}>
                    <p>First brewed: {first_brewed}</p>
                    <p>Abv: {abv}%</p>
                </footer>
            </div>
        </div>
    )
}

export default Card;
