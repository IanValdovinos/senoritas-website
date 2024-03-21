import React from 'react';
import styles from './ConstructionSite.module.css';

// Components

// Images
import Excavator from "../../assets/images/excavator.jpeg";

function ConstructionSite() {
    return ( 
        <duv>
            <div className={styles.constructionSection}>
                <div className={styles.constructionElement}>
                    <img className={styles.excavatorImage} src={Excavator} alt='' />
                    <h1 className={styles.underConstructionHeader}>Under Construction</h1>
                </div>
            </div>
        </duv>
     );
}

export default ConstructionSite;