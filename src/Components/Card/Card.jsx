import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={props.beer.image_url} alt="brewdog-beer-image"/>
            </div>
            <header className={styles.cardHeader}>
                <h2>{props.beer.name}</h2>
                <h3>{props.beer.tagline}</h3>
                <p>{props.beer.description}
                </p>
            </header>
            <footer className={styles.cardFooter}>
                <p>First brewed: {props.beer.first_brewed}</p>
                <p>Abv: {props.beer.abv}%</p>
            </footer>
        </div>
    )
}

export default Card;
