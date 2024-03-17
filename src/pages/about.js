import React from "react";
import styles from "./about.module.css";

// Components
import HeadingOne from "../components/HeadingOne";
import ParagraphOne from "../components/ParagraphOne";

// Images and Videos
import AboutImage from "../assets/images/family_potrait.jpeg";

function About() {
    return ( 
        <div className={styles.aboutPage}>
            {/* Text Section (Left) */}
            <div className={styles.aboutTextSection}>
                <HeadingOne>Welcome to Senoritas</HeadingOne>
                <ParagraphOne>
                    Indulge in the flavors of authentic Mexican cuisine. From our origin story to the talented team behind our delicious dishes, each bite is a celebration of tradition and taste. Let our photos and awards speak for themselves, as we invite you to experience the essence of Mexico, right here in Michigan.
                </ParagraphOne>

                <ParagraphOne>
                    Embrace your creativity as you savor the words on our menu. With over 1.5 billion websites out there, our story sets us apart. When you read the words back, hear the warmth of our hospitality, the vibrancy of our culture, and the passion behind every plate.
                </ParagraphOne>

                <ParagraphOne>
                    Be clear, be confident, and taste the evolution of our story in each visit. Here, the beauty of tradition meets the excitement of exploration, ensuring every visit feels just right for right now.
                </ParagraphOne>
            </div>

            {/* Image section (Right) */}
            <div className={styles.aboutImageSection}>
                <div className={styles.aboutImageContainer}>
                    <img src={AboutImage} alt='Owning family potrait'/>
                </div>
            </div>
        </div>
     );
}

export default About;