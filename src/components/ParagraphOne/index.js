import React from 'react';
import styles from './ParagraphOne.module.css';

function ParagraphOne({additionalClassNames, children}) {
    return ( <p className={`${additionalClassNames} ${styles.paragraphOne}`}>{children}</p> );
}

export default ParagraphOne;