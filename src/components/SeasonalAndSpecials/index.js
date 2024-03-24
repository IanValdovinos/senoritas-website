import React from 'react';
import styles from './SeasonalAndSpecials.module.css';

// Components
import CircularItem from '../CircularItem';
import HeadingOne from '../HeadingOne';
import BaseButton from '../BaseButton';
import CustomCarousel from '../CustomCarousel';

// Images
import SeasonalOne from '../../assets/images/seasonals/seasonals_one/menudo.jpeg';
import SeasonalTwo from '../../assets/images/seasonals/seasonals_one/caldo-camaron.jpeg';
import SeasonalThree from '../../assets/images/seasonals/seasonals_one/chile-relleno.JPG';
import SeasonalFour from '../../assets/images/seasonals/seasonals_one/mojarra-frita.JPG';
import SeasonalFive from '../../assets/images/seasonals/seasonals_one/coctel-camaron.jpg';
import SeasonalSix from '../../assets/images/seasonals/seasonals_one/tostada-ceviche.jpg';

function SeasonalAndSpecials() {
    const handleOrderNowClick = () => {
        window.location.href = 'https://senoritasmexicanfood.com/menu';
    }

    return ( 
        <div>
            <div className={styles.seasonalAndSpecialsSection}>
                <div className={styles.seasonalAndSpecialsContainer}>
                    <HeadingOne>Seasonal & Specials</HeadingOne>

                    {/* Desktop and iPad View */}
                    <div className={styles.seasonalAndSpecialsItemContainer}>
                        <CircularItem title='Menudo' src={SeasonalOne} />
                        <CircularItem title='Caldo de Camaron' src={SeasonalTwo} />
                        <CircularItem title='Chile Relleno' src={SeasonalThree} />
                        <CircularItem title='Mojarra Frita' src={SeasonalFour} />
                        <CircularItem title='Coctel de Camaron' src={SeasonalFive} />
                        <CircularItem title='Tostada de Ceviche' src={SeasonalSix} />
                    </div>

                    {/* Mobile Carousel */}
                    <div className={styles.seasonalAndSpecialsCarousel}>
                        <CustomCarousel>
                            <div>
                                <CircularItem title='Menudo' src={SeasonalOne} />
                                <CircularItem title='Caldo de Camaron' src={SeasonalTwo} />
                            </div>

                            <div>
                                <CircularItem title='Chile Relleno' src={SeasonalThree} />
                                <CircularItem title='Mojarra Frita' src={SeasonalFour} />
                            </div>

                            <div>
                                <CircularItem title='Coctel de Camaron' src={SeasonalFive} />
                                <CircularItem title='Tostada de Ceviche' src={SeasonalSix} />
                            </div>
                        </CustomCarousel>
                    </div>

                    <BaseButton onClick={handleOrderNowClick} additionalClassNames={styles.bannerButton} text='Order Now' color={process.env.REACT_APP_RED}/>
                </div>
            </div>
        </div>
     );
}

export default SeasonalAndSpecials;