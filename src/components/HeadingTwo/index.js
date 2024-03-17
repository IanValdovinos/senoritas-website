import React from 'react';
import styles from './HeadingTwo.module.css';

function HeadingTwo(props) {
    return ( <h1 className={styles.headingTwoText}>{props.children}</h1> );
}

export default HeadingTwo;