import React from 'react';
import styles from './HeadingOne.module.css';

function HeadingOne(props) {
    return ( <h1 className={styles.headingOneText}>{props.children}</h1> );
}

export default HeadingOne;