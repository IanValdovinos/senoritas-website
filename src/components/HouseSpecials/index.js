import React from 'react';

import styles from './HouseSpecials.module.css';

// Components
import FlipCard from '../FlipCard';
import HeadingOne from '../HeadingOne';
import CustomCarousel from '../CustomCarousel';

// Images
import BirriaTaco from "../../assets/images/test_images/birria-tacos.jpeg";
import Gorditas from "../../assets/images/test_images/gorditas.jpeg";
import Burrito from "../../assets/images/test_images/burrito.webp";
import Quesadilla from "../../assets/images/test_images/quesadilla.jpeg";

// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function HouseSpecials() {
    return ( 
        <div className={styles.bestInHouseSection}>
            <HeadingOne>Se<span>&#241;</span>oritas Specialties</HeadingOne>

            {/* ---------- Desktop View ---------- */}
            <div className={styles.bestInHouseSectionDesktop}>
                <div className={styles.bestInHouseContainer}>
                    <FlipCard title={'Birria Tacos'} description='Indulge in tender, slow-cooked shredded beef, marinated in a tantalizing blend of spices, nestled in warm corn tortillas. Topped with diced onions, cilantro, and lime, each bite is a symphony of savory goodness. '  imageSrc={BirriaTaco}/>

                    <FlipCard title={'Tacos'} description='Indulge in the savory delight of our soft tortilla taco! Handcrafted with care, our tacos feature a warm, soft tortilla embracing a delicious medley of fresh ingredients. Whether you prefer tender seasoned meat, zesty veggies, or flavorful beans, each bite is a tantalizing blend of textures and flavors.' imageSrc={Burrito}/>

                    <FlipCard title={'Gorditas'} description=' These thick, handmade masa pockets are filled with a medley of mouthwatering options, from seasoned meats to flavorful vegetarian delights.' imageSrc={Gorditas}/>

                    <FlipCard title={'Quesadillas'} description='Dive into a world of cheesy perfection with our exquisite quesadillas. Our handcrafted delicacies feature a flour, grilled tortilla embracing a generous blend of molten cheeses and your choice of fillings. ' imageSrc={Quesadilla}/>
                </div>
            </div>
            
            {/* ---------- Mobile Carousel ---------- */}
            <div className={styles.bestInHouseSectionMobile}>
                <CustomCarousel>
                    <FlipCard title={'Birria Tacos'} description='Indulge in tender, slow-cooked shredded beef, marinated in a tantalizing blend of spices, nestled in warm corn tortillas. Topped with diced onions, cilantro, and lime, each bite is a symphony of savory goodness. '  imageSrc={BirriaTaco}/>

                    <FlipCard title={'Tacos'} description='Indulge in the savory delight of our soft tortilla taco! Handcrafted with care, our tacos feature a warm, soft tortilla embracing a delicious medley of fresh ingredients. Whether you prefer tender seasoned meat, zesty veggies, or flavorful beans, each bite is a tantalizing blend of textures and flavors.' imageSrc={Burrito}/>

                    <FlipCard title={'Gorditas'} description=' These thick, handmade masa pockets are filled with a medley of mouthwatering options, from seasoned meats to flavorful vegetarian delights.' imageSrc={Gorditas}/>

                    <FlipCard title={'Quesadillas'} description='Dive into a world of cheesy perfection with our exquisite quesadillas. Our handcrafted delicacies feature a flour, grilled tortilla embracing a generous blend of molten cheeses and your choice of fillings. ' imageSrc={Quesadilla}/>
                </CustomCarousel>
            </div>
        </div>
     );
}

export default HouseSpecials;