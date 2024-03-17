import React from 'react';
import styles from './ParagraphOne.module.css';

function ParagraphOne(props) {
    return ( <p className={styles.paragraphOne}>{props.children}</p> );
}

export default ParagraphOne;