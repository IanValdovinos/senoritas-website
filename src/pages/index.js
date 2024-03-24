import React from 'react';
// import styles from './index.module.css';

// Components
import Banner from '../components/Banner';

import HouseSpecials from '../components/HouseSpecials';
import SeasonalAndSpecials from '../components/SeasonalAndSpecials';
import BehindTheScenes from '../components/BehindTheScenes';
import CustomerREviews from '../components/CustomerReviews';
import MeetTheFamily from '../components/MeetTheFamily';
import DeliveryAvailable from '../components/DeliveryAvailable';

// Images and Videos

// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Responsie Settings
// const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

function Home() {
    return ( 
        <div>
            {/* ----------------- Banner ----------------- */}
            <Banner />

            {/*----------- Best In House Section --------- */}
            <HouseSpecials />

            {/* ------- Seasonals and Specials ------------ */}
            <SeasonalAndSpecials />
            

            {/*-------- Behind the Scenes Section -------- */}
            <BehindTheScenes />
    

            {/* ---------- Customer Reviews ---------------- */}
            <CustomerREviews />

            {/*----------- Meet the Family ----------------- */}
            <MeetTheFamily />
            

            {/* -------- Delivery Available ---------------- */}
            <DeliveryAvailable />
        
        </div>
     );
}

export default Home;