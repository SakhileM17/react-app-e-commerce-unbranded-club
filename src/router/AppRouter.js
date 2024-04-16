import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Home from "../components/Home"
import Shop from "../components/Shop"
import Cart from "../components/Cart"
import Checkout from "../components/Checkout"

const AppRouter = () => {

    return (

        <BrowserRouter>
        
            <div className='application-container'>
                
                <div className='app-header-container'>

                    <Header />

                </div>
                
                <div className='application-pages-containers'>
  
                    <Routes>
              
                        <Route path="/" element={<Home/>}/>
              
                        <Route path="/shop" element={<Shop/>} />

                        <Route path="cart" element={<Cart/>} />

                        <Route path="checkout" element={<Checkout/>} />
             
                    </Routes>

                </div>

                <div className="app-footer-container">

                    <Footer />  

                </div>
        
            </div>

      </BrowserRouter>

        
    )
} 

export default AppRouter