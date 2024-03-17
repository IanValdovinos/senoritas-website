import React from 'react';
import styles from './FloatingCard.module.css';

// Images
import YellowStar from '../../assets/images/icons/star_yellow.png';
import BlackStar from '../../assets/images/icons/star_black.png';

function FloatingCard({name, stars, text}) {
    const starsList = [];
    for (let i = 0; i < stars; i++) {
        starsList.push(
            <div className={styles.starImageContainer}>
                <img src={YellowStar} alt='Yellow rating star'/>
            </div>   
        );
    }

    for (let i = 0; i < 5 - stars; i++) {
        starsList.push(
            <div className={styles.starImageContainer}>
                <img src={BlackStar} alt='Black rating star'/>
            </div>   
        );
    }

    return ( 
        <div className={styles.floatingCard}>
            <h2>{ name }</h2>
            <div className={styles.starContainer}>
                {starsList}
            </div>
            <p>{ text }</p>
        </div>
     );
}

export default FloatingCard;