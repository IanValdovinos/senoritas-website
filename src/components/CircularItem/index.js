import React from 'react';
import styles from './CircularItem.module.css'

// Components
import HeadingTwo from '../HeadingTwo';

function CircularItem({title, src, alt}) {
    return ( 
        <div className={styles.circularItem}>
            <HeadingTwo>{title}</HeadingTwo>
            <img src={src} alt={alt}/>
        </div>
     );
}

export default CircularItem;