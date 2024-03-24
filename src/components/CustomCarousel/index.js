import { React, Children } from "react";
import styles from './CustomCarousel.module.css';
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";

// Carousel
// https://www.npmjs.com/package/react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CustomCarousel({children}) {
    const arrayChildren = Children.toArray(children);
    
    var carouselItemArray = [];
    for (let i = 0; i < arrayChildren.length; i++) {
        const child = arrayChildren[i];

        const carouselElement = (
            <div>
                <div className={styles.carouselItem}>
                    { child }
                </div>
            </div>
        );

        carouselItemArray.push(carouselElement)
    }

    return ( 
        <div>
            <Carousel showArrows='true' infiniteLoop='true' centerMode='true' centerSlidePercentage='100' preventMovementUntilSwipeScrollTolerance='true' swipeScrollTolerance='50'>
                { carouselItemArray }
            </Carousel>
        </div>
     );
}

export default CustomCarousel;