import React from 'react';
import styles from './MeetTheFamily.module.css';

// Components
import HeadingOne from '../HeadingOne';
import ParagraphOne from '../ParagraphOne';
import BaseButton from '../BaseButton';

// Images and Videos
import FamilyPicture from '../../assets/images/family_potrait.jpeg';

function MeetTheFamily() {
    return ( 
        <div>
            <div className={styles.meetTheFamilySection}>
                <div className={styles.meetTheFamilyItem}>
                    <HeadingOne>Meet the Family</HeadingOne>
                    <ParagraphOne>
                        At Señoritas we embrace our culture to give you an authentic experience. Our food is handmade and crafted by the most experienced cooks. Made fresh everyday and served to our wonderful customers who want to taste the authentic flavor in a matter of minutes.
                    </ParagraphOne>
                    <BaseButton additionalClassNames={styles.bannerButton} text='Learn More' color={process.env.REACT_APP_RED}/>
                </div>

                <div className={styles.meetTheFamilyItem}>
                    <img src={FamilyPicture} alt='Owning family potrait'/>
                </div>
            </div>
        </div>
     );
}

export default MeetTheFamily;