import React from "react";

import { Link } from "react-router-dom";

import Collection from "./Collections";

import HeroImage from '../assets/unbranded-club-hero.png'; // hero image 

import CollectionL from '../assets/collection-left.png' // summer/winter collection images
import CollectionC from '../assets/collection-center.png' // summer/winter collection images  
import CollectionR from '../assets/collection-right.png' // summer/winter collection images 

import { useEffect,useState } from "react";




const Home = () => {

    const [isSlide, setIsSlide] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            const heroShopContainer = document.querySelector('.hero-image-shop-container');
            if (heroShopContainer) {
                const bounding = heroShopContainer.getBoundingClientRect();
                if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
                    setIsSlide(true);
                } else {
                    setIsSlide(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    

        return(

            <div className="home-page-container">

                <section className="hero-image-section slide-from-left">

                    {/* Hero section of home page */}

                    <div className="hero-image-container">

                        <img className="hero-image" src={HeroImage} alt="unbranded-club-models"/>

                        <div className="hero-image-shop-container">
                            
                            <p>Delay is Not Denial</p>

                            <Link className="shop-now-button" to='shop'>

                                Shop Now

                            </Link>

                        </div>
                        
                    </div>

                </section>

                <section>

                    {/* Collection Section */}

                    <div className="collection-container">

                        <div className="collection-image-container">
                            
                            <img className="collection-image" src={CollectionL} alt="unbranded-club-collection"/>

                        </div>

                        <div className="collection-image-container">
                            
                            <img className="collection-image" src={CollectionC} alt="unbranded-club-collection"/>

                            <div className="collection-shop-container">
                                
                                <p>2024 Winter Collection</p>

                                <Link className="shop-now-button" to='shop'>Shop Now</Link>

                            </div>

                        </div>

                        <div className="collection-image-container"> 
                        
                            <img className="collection-image" src={CollectionR} alt="unbranded-club-collection"/>

                        </div>

                    </div>

                </section>

                <section>
                    {/* Collection Catalogue */}
                    <Collection />
                </section>

                <section>
                    {/* Form section */}

                    <div className="form-container">

                        <img className="form-hero-image" src={HeroImage} alt="unbranded-club-models"/>
                        
                        <div className="form">
                        
                            <div>
                                <h1>Join the unbranded club</h1>
                            </div>

                            <div>
                                <p>Subcribe for all the latest club unbranded specials and latest updates. </p>
                            </div>
                    
                            <form>

                                <label>Email address  </label>
                                <input className='form-email-input' placeholder="Enter your emal address"/>
                                <button className="form-button-join">Join</button>

                            </form>

                        </div>

                    </div>

                    
                </section>

            </div>
        )
}

export default Home