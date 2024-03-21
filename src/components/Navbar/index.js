import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';

// Image imports

// Components
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

function Navbar() {
  return (
    <div>
        <NavBarDesktop />

        <NavBarMobile>
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
        </NavBarMobile>
    </div>
  );
}

export default Navbar;