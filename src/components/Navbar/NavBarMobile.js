import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import styles from './NavBarMobile.module.css';

// Image imports
import Logo from '../../assets/images/logo_transparent.png';
import Hamburger from '../../assets/images/icons/white_hamburger_icon.png';

function NavBarMobile() {

    // Collapse the navigation bar upon page selection
    const handleClick = () => {
        var linkContainer = document.getElementById('links');
        linkContainer.style.display = "none";
    };

    // Opens and closes the navbar when the hamburger icon is pressed
    const onHamburgerClick = () => {
        var linkContainer = document.getElementById('links');
        
        if (linkContainer.style.display === "block") {
          linkContainer.style.display = "none";
        } else {
          linkContainer.style.display = "block";
        }
    }

    return ( 
        <div>
            <div className={styles.topnav}>
                <img className={styles.navbarLogo} src={Logo}  alt="Restaurant logo"/>

                <div className={styles.myLinks} id='links'>
                    <NavLink onClick={handleClick} className={styles.navbarLink} to="/">
                        Home
                    </NavLink>

                    <NavLink onClick={handleClick} className={styles.navbarLink} to="/about">
                        About
                    </NavLink>

                    <NavLink onClick={handleClick} className={styles.navbarLink} to="/">
                        Menu
                    </NavLink>

                    <NavLink onClick={handleClick} className={styles.navbarLink} to="/">
                        Catering
                    </NavLink>

                    <NavLink onClick={handleClick} className={styles.navbarLink} to="/about">
                        Contact
                    </NavLink>

                    <NavLink onClick={handleClick} className={styles.navbarLink} to="/about">
                        Shop
                    </NavLink>
                </div>

                <img className={styles.hamburgerIcon} src={Hamburger} onClick={onHamburgerClick}  alt="Hamburger Icon"/>
            </div>
        </div>
     );
}

export default NavBarMobile;