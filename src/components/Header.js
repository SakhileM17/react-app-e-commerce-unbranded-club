import React from "react";

import { Link } from "react-router-dom";



import UnbrandedLogo from "../assets/Logo-UnbrandedClub.png"


const Header = () => {

    return (

        <div className="header-container">

            <div className="logo-container">

                <Link to="">

                    <img src={UnbrandedLogo} alt="money" className="header-logo"/>
                
                </Link>
                
            </div>

            <div className="nav-menu-container">

                <div className="nav-menu-links-container">
                    <Link className="nav-menu-links" to="">Home</Link>
                </div>

                <div className="nav-menu-links-container">

                    <Link className="nav-menu-links" to="shop">Shop</Link>

                </div>

                <div className="nav-menu-links-container">

                    <Link className="nav-menu-links" to='cart' > Cart </Link>
                    
                </div>

        

                

            </div>
            
        </div>
    )
}

export default Header 