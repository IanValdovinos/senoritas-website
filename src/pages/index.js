import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css'

// Components
import BaseButton from '../components/BaseButton';
import Banner from '../components/Banner';
import FlipCard from '../components/FlipCard';
import HeadingOne from '../components/HeadingOne';
import ParagraphOne from '../components/ParagraphOne';
import CircularItem from '../components/CircularItem';
import FloatingCard from '../components/FloatingCard';

import HouseSpecials from '../components/HouseSpecials';
import SeasonalAndSpecials from '../components/SeasonalAndSpecials';
import BehindTheScenes from '../components/BehindTheScenes';
import CustomerREviews from '../components/CustomerReviews';
import MeetTheFamily from '../components/MeetTheFamily';
import DeliveryAvailable from '../components/DeliveryAvailable';

// Images and Videos
import StockTacoImage from '../assets/images/stock_taco.jpeg';
import BirriaTaco from "../assets/images/test_images/birria-tacos.jpeg";
import Gorditas from "../assets/images/test_images/gorditas.jpeg";
import Burrito from "../assets/images/test_images/burrito.webp";
import Quesadilla from "../assets/images/test_images/quesadilla.jpeg";
import BehindTheScenesVideo from '../assets/videos/about_video.mov';
import FamilyPicture from '../assets/images/family_potrait.jpeg';

import DoorDashLogo from '../assets/images/dooor_dash_logo.png';
import UberEatsLogo from '../assets/images/uber_eats_logo.png';
import GrubhubLogo from '../assets/images/grub_hub_logo.png';

// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Responsie Settings
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Home() {
    const handleSignUp = () => {
        alert("Let's order now");
    }

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