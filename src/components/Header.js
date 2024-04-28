import React from "react";

import { Link } from "react-router-dom";

import { useState } from "react";

import { useLocation } from "react-router-dom";



import UnbrandedLogo from "../assets/Logo-UnbrandedClub.png"


const Header = () => {

    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation()

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (

        <div className="header-container slide-from-top">

            <div className="logo-container">

                <Link to="">

                    <img src={UnbrandedLogo} alt="money" className="header-logo"/>
                
                </Link>
                
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="hamburger-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Mobile Nav Menu */}
            {isMenuOpen && (

                <div className="mobile-nav-menu">


                    <Link className="nav-menu-links" to="" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link className="nav-menu-links" to="shop" onClick={closeMenu}>
                        Shop
                    </Link>
                    <Link className="nav-menu-links" to="cart" onClick={closeMenu}>
                        Cart
                    </Link>
                </div>
                
            )}

            <div className="nav-menu-container">

                <div className="nav-menu-links-container">
                    
                    <Link className={`nav-menu-links ${ location.pathname === "/" ? "active" : ""}`} to=""> Home</Link>

                </div>

                <div className="nav-menu-links-container">

                    <Link className={`nav-menu-links ${ location.pathname === "/shop" ? "active" : ""}`} to="shop">Shop</Link>

                </div>

                <div className="nav-menu-links-container">

                    <Link className={`nav-menu-links ${ location.pathname === "/cart" ? "active" : ""}`} to='cart' > Cart </Link>
                    
                </div>

        

                

            </div>
            
        </div>
    )
}

export default Header 