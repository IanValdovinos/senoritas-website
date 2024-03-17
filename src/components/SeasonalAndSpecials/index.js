import React from 'react';
import styles from './SeasonalAndSpecials.module.css';

// Components
import CircularItem from '../CircularItem';
import HeadingOne from '../HeadingOne';
import BaseButton from '../BaseButton';

// Images
import StockTacoImage from '../../assets/images/stock_taco.jpeg';
import MenudoImage from '../../assets/images/test_images/menudo.jpeg';
import Pozole from '../../assets/images/test_images/pozole.jpeg';
import CamaronCaldo from '../../assets/images/test_images/caldo-camaron.jpeg';
import BucheTaco from '../../assets/images/test_images/buche-tacos.webp';
import ChileRelleno from '../../assets/images/test_images/chile-relleno.jpeg';
import HuaracheNopal from '../../assets/images/test_images/huarache_nopal.jpeg';

function SeasonalAndSpecials() {
    return ( 
        <div>
            <div className={styles.seasonalAndSpecialsSection}>
                <div className={styles.seasonalAndSpecialsContainer}>
                    <HeadingOne>Seasonal & Specials</HeadingOne>
                    <div className={styles.seasonalAndSpecialsItemContainer}>
                        {/* <CircularItem title='Menudo' src={MenudoImage} /> */}
                        <CircularItem title='Menudo' src={MenudoImage} />
                        <CircularItem title='Pozole' src={Pozole} />
                        <CircularItem title='Caldo de Camaron' src={CamaronCaldo} />
                        <CircularItem title='Taco de Buche' src={BucheTaco} />
                        <CircularItem title='Chile Relleno' src={ChileRelleno} />
                        <CircularItem title='Huarache de Nopal' src={HuaracheNopal} />
                    </div>
                    <BaseButton additionalClassNames={styles.bannerButton} text='Order Now' color={process.env.REACT_APP_RED}/>
                </div>
            </div>
        </div>
     );
}

export default SeasonalAndSpecials;