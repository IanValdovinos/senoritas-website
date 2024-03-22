import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './NavBarDesktop.module.css';


// Image imports
import bannerImage from '../../assets/images/logo_transparent.png';

function NavBarDesktop() {
    // Scroll to top of the page upon page selection
    const handleClick = () => {
        window.scrollTo({
            top: 0
        });
    };

    return ( 
        <div>
            <nav className="navbar">
                <div className={styles.navbarContainer}>
                    <div className={styles.navbarItem}>
                        <NavLink onClick={handleClick} className={styles.navbarLink} to="/">
                            Home
                        </NavLink>
                    </div>

                    <div className={styles.navbarItem}>
                        <NavLink onClick={handleClick} className={styles.navbarLink} to="/about">
                            About
                        </NavLink>
                    </div>

                    <div className={styles.navbarItem}>
                        <NavLink onClick={handleClick} className={styles.navbarLink} to="/menu">
                            Menu
                        </NavLink>
                    </div>

                    <div className={styles.navbarItem}>
                        <NavLink onClick={handleClick} className={styles.navbarLink} to="/">
                            <img className={styles.navbarLogo} src={bannerImage}  alt="Restaurant logo"/>
                        </NavLink>
                    </div>

                    <div className={styles.navbarItem}>
                        <NavLink onClick={handleClick} className={styles.navbarLink} to="/catering">
                            Catering
                        </NavLink>
                    </div>

                    <div className={styles.navbarItem}>
                        <NavLink onClick={handleClick} className={styles.navbarLink} to="/contact">
                            Contact
                        </NavLink>
                    </div>
                    
                    <div className={styles.navbarItem}>
                        <NavLink onClick={handleClick} className={styles.navbarLink} to="/shop">
                            Shop
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
     );
}

export default NavBarDesktop;