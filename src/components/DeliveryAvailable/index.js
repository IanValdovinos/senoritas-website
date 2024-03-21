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
                    <a href='https://www.doordash.com/store/senoritas-mexican-restaurant-(van-dyke-ave)-shelby-township-23427402/' target='blank'><img className={styles.deliveryAvailableSectionDD} src={DoorDashLogo} alt='Door Dash Logo'/></a>
                    <a href='https://www.ubereats.com/store/senoritas-mexican-restaurant/J_oL6AhYVxyJt8DqLxLkBA' target='blank'><img className={styles.deliveryAvailableSectionUE} src={UberEatsLogo} alt='Uber Eats Logo'/></a>
                    <a href='https://www.grubhub.com/restaurant/senoritas-mexican-restaurant-48758-van-dyke-ave-shelby-township/3301036' target='blank'><img className={styles.deliveryAvailableSectionDD} src={GrubhubLogo} alt='Grubhub Logo'/></a>
                </div>
            </div>
        </div>
     );
}

export default DeliveryAvailable;