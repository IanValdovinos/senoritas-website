import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './NavBarMobile.module.css';

// Image imports
import Logo from '../../assets/images/logo_transparent.png';
import Hamburger from '../../assets/images/icons/white_hamburger_icon.png';

function NavBarMobile() {
    const onHamburgerClick = () => {
        var x = document.getElementById('links');
        
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }

    return ( 
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className={styles.topnav}>
                <img className={styles.navbarLogo} src={Logo}  alt="Restaurant logo"/>

                <div className={styles.myLinks} id='links'>
                    <NavLink className={styles.navbarLink} to="/">
                        Home
                    </NavLink>

                    <NavLink className={styles.navbarLink} to="/about">
                        About
                    </NavLink>

                    <NavLink className={styles.navbarLink} to="/">
                        Menu
                    </NavLink>

                    <NavLink className={styles.navbarLink} to="/">
                        Catering
                    </NavLink>

                    <NavLink className={styles.navbarLink} to="/about">
                        Contact
                    </NavLink>

                    <NavLink className={styles.navbarLink} to="/about">
                        Shop
                    </NavLink>
                </div>

                <img className={styles.hamburgerIcon} src={Hamburger} onClick={onHamburgerClick}  alt="Hamburger Icon"/>
            </div>
        </div>
     );
}

export default NavBarMobile;