import React from 'react';
import styles from './BehindTheScenes.module.css';

// Components
import HeadingOne from '../HeadingOne';
import ParagraphOne from '../ParagraphOne';
import BaseButton from '../BaseButton';

// Media
import BehindTheScenesVideo from '../../assets/videos/about_video.mov';
import FamilyPicture from '../../assets/images/family_potrait.jpeg';

function BehindTheScenes() {
    return ( 
        <div>
            <div className={`${styles.behindTheScenesContainer}`}>
                <div className={styles.behindTheScenesItem}>
                    <HeadingOne>Behind The Scenes</HeadingOne>
                    <ParagraphOne>
                        At Señoritas we embrace our culture to give you an authentic experience. Our food is handmade and crafted by the most experienced cooks. Made fresh everyday and served to our wonderful customers who want to taste the authentic flavor in a matter of minutes.
                    </ParagraphOne>
                    <BaseButton additionalClassNames={styles.bannerButton} text='Order Now' color={process.env.REACT_APP_RED}/>
                </div>

                <div className={styles.behindTheScenesItem}>
                    <video className={styles.behindTheScenesVideo} poster={FamilyPicture} controls>
                        <source src={BehindTheScenesVideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
     );
}

export default BehindTheScenes;