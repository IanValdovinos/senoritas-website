import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './NavBarDesktop.module.css';


// Image imports
import bannerImage from '../../assets/images/logo_transparent.png';

function NavBarDesktop() {
    return ( 
        <div>
            <nav className="navbar">
                <div className={styles.navbarContainer}>
                    <div className={styles.navbarItem}>
                        <NavLink className={styles.navbarLink} to="/">
                            Home
                        </NavLink>
                    </div>

                    <div className={styles.navbarItem}>
                        <NavLink className={styles.navbarLink} to="/about">
                            About
                        </NavLink>
                    </div>

                    <div className={styles.navbarItem}>
                        <NavLink className={styles.navbarLink} to="/">
                            Menu
                        </NavLink>
                    </div>

                    <div className={styles.navbarItem}>
                        <img className={styles.navbarLogo} src={bannerImage}  alt="Restaurant logo"/>
                    </div>

                    <div className={styles.navbarItem}>
                        <NavLink className={styles.navbarLink} to="/">
                            Catering
                        </NavLink>
                    </div>

                    <div className={styles.navbarItem}>
                        <NavLink className={styles.navbarLink} to="/about">
                            Contact
                        </NavLink>
                    </div>
                    
                    <div className={styles.navbarItem}>
                        <NavLink className={styles.navbarLink} to="/about">
                            Shop
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
     );
}

export default NavBarDesktop;