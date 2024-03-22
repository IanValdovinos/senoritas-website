import React from 'react';
import styles from './NavBarMobile.module.css';
import { NavLink } from "react-router-dom";

// Image imports
import Logo from '../../assets/images/logo_transparent.png';
import Hamburger from '../../assets/images/icons/white_hamburger_icon.png';

function NavBarMobile({children}) {

    // Collapse the navigation bar and scroll to top of the page upon page selection
    const handleClick = () => {
        var linkContainer = document.getElementById('links');
        linkContainer.style.display = "none";

        window.scrollTo({
            top: 0
        });
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

    const childrenWithProps = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
            onClick: () => handleClick(index)
        });
    });

    return ( 
        <div>
            <div className={styles.topnav}>
                <NavLink to="/">
                    <img className={styles.navbarLogo} src={Logo}  alt="Restaurant logo"/>
                </NavLink>

                <div className={styles.myLinks} id='links'>
                    { childrenWithProps }
                </div>

                <img className={styles.hamburgerIcon} src={Hamburger} onClick={onHamburgerClick}  alt="Hamburger Icon"/>
            </div>
        </div>
     );
}

export default NavBarMobile;