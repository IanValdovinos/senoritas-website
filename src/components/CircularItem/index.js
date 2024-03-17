import React from 'react';
import styles from './CircularItem.module.css'

// Components
import HeadingTwo from '../HeadingTwo';

function CircularItem({title, src, alt}) {
    return ( 
        <div className={styles.circularItem}>
            <HeadingTwo>{title}</HeadingTwo>
            <div className={styles.imgContainer}>
                <img src={src} alt={alt}/>
            </div>
        </div>
     );
}

export default CircularItem;