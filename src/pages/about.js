import React from "react";
import styles from "./about.module.css";

// Components
import HeadingOne from "../components/HeadingOne";

// Images
import Excavator from "../assets/images/excavator.jpeg";

function About() {
    return ( 
        <div>
            <div className={styles.constructionSection}>
                <div className={styles.constructionElement}>
                    <img className={styles.excavatorImage} src={Excavator} />
                    <h1 className={styles.underConstructionHeader}>Under Construction</h1>
                </div>
            </div>
        </div>
     );
}

export default About;