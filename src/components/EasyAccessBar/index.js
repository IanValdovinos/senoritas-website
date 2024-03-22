import React from 'react';

import styles from './EasyAccessBar.module.css';

// Images
import FaceBookLogo from '../../assets/images/logos/facebook_white_logo.webp';
import InstagramLogo from '../../assets/images/logos/instagram_white_logo.webp';
import YelpLogo from '../../assets/images/logos/yelp_white_logo.png';
import LocationIcon from '../../assets/images/icons/location_white_icon.png';

function EasyAccessBar() {
    return ( 
        <div className={styles.easyAccessBar}>
            <div className={styles.easyAccessBarContainer}>
                <a href="https://www.facebook.com/senoritasmex" target='blank'><img className={styles.easyAccessBarItem} src={FaceBookLogo} alt='Facebook icon'></img></a>
                <a href="https://www.instagram.com/senoritasmexfood/" target='blank'><img className={styles.easyAccessBarItem} src={InstagramLogo} alt='Instragram icon'></img></a>
                <a href="https://www.yelp.com/biz/senoritas-mexican-food-shelby-township-2" target='blank'><img className={styles.easyAccessBarItem} src={YelpLogo} alt='Yelp icon'></img></a>
                <a href="https://www.google.com/maps/place/Se%C3%B1oritas+Mexican+Restaurant/@42.653268,-83.035492,17z/data=!3m1!4b1!4m6!3m5!1s0x8824e77e70287c8d:0x43fc3a05d40b4d2c!8m2!3d42.6532641!4d-83.0329171!16s%2Fg%2F11c2ly4f5w?entry=ttu" target='blank'><img className={styles.easyAccessBarItem} src={LocationIcon} alt='Location icon'></img></a>
        </div>
        </div>
     );
}

export default EasyAccessBar;