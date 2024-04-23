    import React from "react";
    import { useState } from "react";

    import { useNavigate } from "react-router-dom";
    import { Link } from "react-router-dom";

    import UnbrandedClubLogoBlack from '../assets/unbrandedClubLogoBlack.png' // summer/winter collection images



    const Order = ({onClose, orderNumber, orderInfo}) =>{

        const navigate = useNavigate()

        const continueShopping = () =>{

            // Close order modal
            onClose()
            
            // navigate to home page
            navigate('/')

        }

        return (

            <div className="Main-order-container">

                <div className="order-container">

                    <div className="order-description-header">

                        <div>

                            <img src={UnbrandedClubLogoBlack} alt="unbranded-club-logo black"/>

                        </div>


                        <div>

                            <h1>Order Confirmed</h1>

                            <p>
                                Thanks for shopping at Unbranded Club (pty) ltd. We are happy to tell inform you that this order 
                                is now Confirmed and we will begin processing your pruchase for dispatch.
                            </p>

                            <p>
                                Please note that Payment Gate , this app was built as a project and e-coomerce simulation
                            </p>

                        </div>

                    </div>

                    <div className="order-description-body">

                        <div className="order-progress-image-container">

                            <h1>Image</h1>

                        </div>

                    </div>

                    <div className="order-descriprion-footer">

                        <div className="order-links-container">
                            
                            <div>

                                <p>Order Number : {orderNumber}</p>

                            </div>

                        </div>
                        
                        <div className="order-button-container">
                            
                            <div>
                                <button className="order-button-continue-shopping" onClick={continueShopping}>Continue Shopping</button>
                            </div>

                        </div>
                    
                        

                    </div>

                    


                </div>

            </div>
        )


    }

    export default Order