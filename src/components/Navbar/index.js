import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';

// Image imports
import bannerImage from '../../assets/images/logo_transparent.png';

// Components
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

function Navbar() {
  return (
    <div>
        <NavBarDesktop />
        <NavBarMobile />
    </div>
  );
}

export default Navbar;