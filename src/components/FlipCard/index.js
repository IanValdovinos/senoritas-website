import React from 'react';
import styles from './FlipCard.module.css';

// Components
import ParagraphOne from '../ParagraphOne';


function FlipCard({title, description, imageSrc}) {

    const customStyles = {
        backgroundImage: `url(${imageSrc})`
    }

    const imgStyles = {
        width: `100%`,
        height: `100%`,
        objectFit: `cover`
    };

    return ( 
        <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
                {/* Front side of the card */}
                <div class={styles.flipCardFront}>
                    <img src={imageSrc} alt="Avatar" style={imgStyles} />
                    <p className={`${styles.flipCardTitle} ${styles.flipCardTitleFront}`}>{title}</p>
                </div>

                {/* Back side of the card */}
                <div class={styles.flipCardBack}>
                    <p className={`${styles.flipCardTitle} ${styles.flipCardTitleBack}`}>{title}</p>
                    <ParagraphOne>{description}</ParagraphOne>
                </div>

            </div>
        </div>
     );
}

export default FlipCard;