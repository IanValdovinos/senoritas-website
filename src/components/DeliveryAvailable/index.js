import React from 'react';
import styles from './DeliveryAvailable.module.css';

// Components
import HeadingOne from '../HeadingOne';

// Images
import DoorDashLogo from '../../assets/images/dooor_dash_logo.png';
import UberEatsLogo from '../../assets/images/uber_eats_logo.png';
import GrubhubLogo from '../../assets/images/grub_hub_logo.png';

function DeliveryAvailable() {
    return ( 
        <div>
             <div className={styles.deliveryAvailableSection}>
                <HeadingOne>Delivery Available</HeadingOne>
                <div className={styles.deliveryAvailableContainer}>
                    <a href=''><img className={styles.deliveryAvailableSectionDD} src={DoorDashLogo} alt='Door Dash Logo'/></a>
                    <img className={styles.deliveryAvailableSectionUE} src={UberEatsLogo} alt='Uber Eats Logo'/>
                    <img className={styles.deliveryAvailableSectionDD} src={GrubhubLogo} alt='Grubhub Logo'/>
                </div>
            </div>
        </div>
     );
}

export default DeliveryAvailable;