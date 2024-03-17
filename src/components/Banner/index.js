import React from 'react';
import styles from './Banner.module.css';
import BaseButton from '../BaseButton';

// Images and Videos
import BannerVideo from '../../assets/videos/taco-vid-2.webm';
import Logo from "../../assets/images/logo_transparent.png"

function Banner() {

    const handleClick = () => {
        window.location.href = 'https://senoritasmexicanfood.smartonlineorder.com/';
    }

    return ( 
        <div className={styles.banner}>

            <div className={styles.bannerVideo}>
                <video className={styles.bannerVideoContent} autoPlay muted loop>
                    <source src={BannerVideo} type="video/webm" />
                    Your browser is not supported!
                </video>
            </div> 

            <div className={styles.bannerContentContainer}>
                <img className={styles.bannerLogo} src={Logo} alt="Restaurant logo"></img>

                <h1 className={styles.bannerHeading}>La Vida Sin Comida Mexicana No Es Vida</h1>

                <BaseButton additionalClassNames={styles.bannerButton} text='Order Now' color={process.env.REACT_APP_RED} onClick={handleClick}/>
            </div>
            
        </div>
     );
}

export default Banner;