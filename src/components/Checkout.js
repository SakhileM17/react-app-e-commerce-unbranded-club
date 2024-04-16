import React from "react";
import { connect } from "react-redux";
import { useState } from "react";

import { moneyFormat } from "../utils/moneyformatter";

import { Country } from "../data/countries";
import { City } from "../data/countries";

const Checkout = ({totalPrice}) => {

const [checked, setChecked] = useState(false);

const handleChange = () => {
    setChecked(!checked);
  };

  const [deliveryOption, setDeliveryOption] = useState("standard");

  const handleDeliveryOptionChange = (event) => {
    setDeliveryOption(event.target.value);
  };

    return (

        <div className="checkout-main-container">

            <div  className="checkout-container">

                <div className="checkout-header-container">

                    <div className="checkout-heading">

                        <h1>Checkout</h1>

                    </div>
                    
                    <div className="checkout-heading">

                        <h1>Logo</h1>

                    </div>
                    
                </div>

                <div className="checkout-body-container">

                    <div className="chechout-billing-form-container">

                        <form>

                            <div className="checkout-form-element-container">

                                <label>
                                    <p>First Name : </p>
                                </label>

                                <input className="checkout-input" placeholder="Enter your name" type='name'/>

                            </div>

                            <div className="checkout-form-element-container">

                                <label>
                                    <p>Last Name : </p>
                                </label>

                                <input className="checkout-input" placeholder="Enter your surname" type="name"/>

                            </div>

                            <div className="checkout-form-element-container">

                                <label>
                                    <p>Email Address : </p>
                                </label>

                                <input className="checkout-input" placeholder="Enter your email address" type="email"/>

                            </div>

                            <div className="checkout-form-element-container">

                                <label>
                                    <p>Phone Number : </p>
                                </label>

                                <input className="checkout-input" placeholder="Enter your phone number" type="phone"/>

                            </div>

                            <div className="checkout-form-element-container">

                                <label>
                                    <p>Country : </p>
                                </label>

                                <select className="checkout-select">

                                    {Country.map((country,index) =>(

                                        <option key={index} value={country.countryName}>
                                            {country.countryName}
                                        </option>

                                    ))}
                                
                                </select>

                                <p>Service only currecnly available in South Africa</p>

                            </div>

                            <div className="checkout-form-element-container">

                                <label>
                                    <p>Street Address : </p>
                                </label>

                                <input className="checkout-input" placeholder="Enter your street address" type="email"/>

                            </div>

                            <div className="checkout-form-element-container">

                                <label>
                                    <p>House Number/Appartment Number : </p>
                                </label>

                                <input className="checkout-input" placeholder="Enter number" type="number"/>

                            </div>

                            <div className="checkout-form-element-container">

                                <label>
                                    <p>Complex Name : </p>
                                </label>

                                <input className="checkout-input" placeholder="Enter your complex name" type="email"/>

                            </div>

                            <div className="checkout-form-element-container">

                                <label>
                                    <p>City : </p>
                                </label>

                                <input className="checkout-input" placeholder="Enter your city" type="text"/>

                            </div>

                            <div className="checkout-form-element-container">

                                <label>
                                    <p>Postal Code : </p>
                                </label>

                                <input className="checkout-input" placeholder="Enter your postal code" type="number"/>

                            </div>

                            <div className="checkout-form-element-container">

                                <input 
                                    className="checkout-check-box" 
                                    type="checkbox" 
                                    checked={checked}
                                    onChange={handleChange}
                                />

                                <p>
                                    I agree to receive information, special offers and promotions based on my interests and preferences from 
                                    adidas Unbranded Club (Pty) Ltd. I understand, Unbranded Club will use my email address, contact number and other 
                                    personal data listed in the Privacy Notice to send me information about the Unbranded brand through in-app 
                                    notifications, SMS, whatsapp and email marketing messages to the email provided to checkout on this account.
                                </p>

                            </div>

                        
                        </form>

                    </div>

                    <div className="checkout-billing-summary-container">

                        <div className="checkout-shipping-container">

                            <div className="checkout-shipping-info">

                                <h1>Delivery Method method</h1>

                            </div>

                            <div>
                                <p>Choose your delivery method. Your order can be delivered to your door or collected at our cocnept 
                                    store in Johannesburg</p>
                            </div>

                            <div>

                            <div className="checkout-shipping-toggle-switch-container">

                                <div>
                                    
                                    <input
                                        type="radio"
                                        id="standard"
                                        value="standard"
                                        checked={deliveryOption === "standard"}
                                        onChange={handleDeliveryOptionChange}
                                    />

                                    <label htmlFor="standard"> R120 - Standard 3 to 5 business days.(Free for orders above R500)</label>

                                </div>

                                <div>

                                    <input
                                        type="radio"
                                        id="express"
                                        value="express"
                                        checked={deliveryOption === "express"}
                                        onChange={handleDeliveryOptionChange}
                                    />

                                    <label htmlFor="express">Free - Pick Up your order at our Johannesburg Concept Store</label>

                                </div>

                                
                  
                                </div>
                            </div>

                        </div>

                        <div className="checkout-billing-container">

                            <div className="checkout-info-container">

                                <h1>Billing Summary  </h1>

                            </div>

                            <div className="checkout-billing-info">

                                <div>
                                    <p>Items Total  </p>
                                </div>

                                <div>
                                    <p>{moneyFormat(totalPrice)}</p>
                                </div>

                            </div>

                            <div className="checkout-billing-info">

                                <div>
                                    <p>Shipping (Free delivery for orders over R 500) </p>
                                </div>

                                <div>
                                    <p>R 500,00</p>
                                </div>

                            </div>

                            
                            <div className="checkout-billing-info billing-total">

                                <div>
                                    <p>Total Total  </p>
                                </div>

                                <div>
                                    <p>{moneyFormat(totalPrice)}</p>
                                </div>

                            </div>

                            

                        </div>

                        <div className="checkout-terms-container">

                            <div>
                                <p>
                                    By clicking on 'Pay and Place Order', you agree (i) to make your purchase from 
                                    Global-e as merchant of record for this transaction, subject to Unbranded Club 
                                    Terms of Sale; (ii) that your information will be handled by Unbranded Club in 
                                    accordance with the Unbranded Club Privacy Policy; and (iii) that Unbranded Club
                                    will share your information (excluding the payment details) with Unbranded Club(Pty) 
                                    Ltd.</p>
                            </div>

                        </div>

                        <div className="checkout-button-container">

                            <div>
                                <button>Cancel Checkout</button>
                            </div>

                            <div>
                                <button>Pay and Place Order</button>
                            </div>

                        </div>


                        

                    </div>

                    

                </div>

            </div>
    
        </div>
    )


}

const mapStateToProps = (state) => {

    return {
        totalPrice: state.cart.totalPrice
    }
}

export default connect (mapStateToProps)(Checkout)