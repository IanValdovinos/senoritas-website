import React from 'react';
import styles from './Footer.module.css';

// Components
import BaseButton from '../BaseButton';
import HeadingTwo from '../HeadingTwo';
import ParagraphOne from '../ParagraphOne';

function Footer() {
    return ( 
        <div className={styles.footerSection}>
            <div>
                <HeadingTwo>Hours</HeadingTwo>
                <ul>
                    <li><ParagraphOne>Monday - 11AM-8PM</ParagraphOne></li>
                    <li><ParagraphOne>Monday - 11AM-8PM</ParagraphOne></li>
                    <li><ParagraphOne>Monday - 11AM-8PM</ParagraphOne></li>
                    <li><ParagraphOne>Monday - 11AM-8PM</ParagraphOne></li>
                    <li><ParagraphOne>Monday - 11AM-8PM</ParagraphOne></li>
                    <li><ParagraphOne>Monday - 11AM-8PM</ParagraphOne></li>
                    <li><ParagraphOne>Monday - 11AM-8PM</ParagraphOne></li>
                </ul>
            </div>

            <div>
                <HeadingTwo>Location</HeadingTwo>
                <p>48758 Van Dyke Ave, Shelby Township, MI, 48317</p>
                <BaseButton additionalClassNames={styles.bannerButton} text='Order Now' color={process.env.REACT_APP_RED}/>
            </div>

            <div>
                <iframe className={styles.mapStyles} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.3816096037517!2d-83.0354920239909!3d42.65326801652715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e77e70287c8d%3A0x43fc3a05d40b4d2c!2sSe%C3%B1oritas%20Mexican%20Restaurant!5e0!3m2!1sen!2sus!4v1709831511970!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
     );
}

export default Footer;