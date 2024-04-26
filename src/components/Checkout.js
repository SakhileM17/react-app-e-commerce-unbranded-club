import React from "react";

import { connect } from "react-redux";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { moneyFormat } from "../utils/moneyformatter";

import RequiredStar from "../utils/requiredStar";

import { Country } from "../data/countries";


import { calculateDelivery } from "../redux/reducers/checkoutReducer";

import { setOrderInfo} from "../redux/reducers/checkoutReducer";

import { clearCart } from "../redux/reducers/cartReducer";

import Order from "./Order";

import UnbrandedClubLogoBlack from '../assets/unbrandedClubLogoBlack.png' // summer/winter collection images



/* 

*/

const Checkout = ({totalPrice, totalDelivery, clearCart}) => {

// States
const [checked, setChecked] = useState(false);// terms and conditions check box
const [errorMsg, setErrorsMsg] = useState('') //
const [deliveryOption, setDeliveryOption] = useState("standard");

const [isOrderModalOpen, setOrderModal] = useState(false) // state to manage order modal 
const [myPdfData, setMyPdfData] = useState(null)

const [orderNumber, setOrderNumber] = useState(null); // Initialize orderNumber state
const [formData, setFormData] = useState(null); // State to store form data

//
const navigate = useNavigate();

 
const cancelCheckout = () => {

    console.log('Navigate to cart')

    navigate('/cart')
}

const handleChange = () => {
    setChecked(!checked);
  };

  
  const handleDeliveryOptionChange = (event) => {

    setDeliveryOption(event.target.value);

  };

// Hande checkout
const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    const form = event.target;
    const formData = new FormData(form);

    setFormData(formData);

    const fields = [
        { name: 'name', label: 'Name' },
        { name: 'surname', label: 'Surname' },
        { name: 'email', label: 'Email' },
        { name: 'phone', label: 'Phone Number' },
        { name: 'address', label: 'Street Address' },
        { name: 'unit-number', label: 'House Number/Appartment Number/Unit Number' },
        { name: 'city', label: 'City' },
        { name: 'postal-code', label: 'Postal Code' }
    ];

    let errors = {};

    fields.forEach(field => {
        const value = formData.get(field.name);
        if (!value) {
            errors[field.name] = `${field.label} field cannot be empty`;
        } else {
            // Remove the error message if the field is filled
            delete errors[field.name];
        }
    });

    // Set the error messages state with concatenated messages
    setErrorsMsg(Object.values(errors).join(", "));

    // If terms and conditions checkbox is not checked, show error message
    if (!checked) {
        setErrorsMsg(prevMsg => prevMsg + ", Please accept the terms and conditions.");
        return;
    }

    // If there are no errors, clear the error messages
    if (Object.keys(errors).length === 0) {
        setErrorsMsg("");
        // Continue with the checkout process

        // Get form data
        const generateOrderNumber = () => {
            // Generate a random alphanumeric string of length 8
            return Math.random().toString(36).substring(2, 10).toUpperCase();
        };

        // Generate order number
        const newOrderNumber = generateOrderNumber();

        // Update orderNumber state
        setOrderNumber(newOrderNumber);

        const orderInfo = {
            newOrderNumber,
            name: formData.get('name'),
            surname: formData.get('surname'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            unitNumber: formData.get('unit-number'),
            city: formData.get('city'),
            postalCode: formData.get('postal-code'),
            complexName: formData.get('complex-name') || '',
            description: formData.get('description') || '',
            totalPrice,
            totalDelivery,
        };

        // Pass form information to the MyPDF component
        setMyPdfData(orderInfo);

        // Pass form information to the Order component or handle order placement here
        console.log('Order information:', orderInfo);

        // Set order information in the Redux store
        setOrderInfo(orderInfo);

        // Perform checkout logic here, then show the order modal
        setOrderModal(true);

        
        // Clear the cart when user submits the form
        clearCart(); // Dispatch clearCart action
    }
};


const handleCloseOrderModal = () => {

    setOrderModal(false);
    // Redirect to home or any other page after closing the order modal
    navigate("/");

};



    return (

        <div className="checkout-main-container">

            <div  className="checkout-container">

                <div className="checkout-header-container">

                    <div className="cart-header">

                        <h1>Checkout</h1>

                    </div>
                    
                    <div className="cart-header">

                        <img src={UnbrandedClubLogoBlack} alt="unbranded-club-logo black"/>

                    </div>

                </div>

                

                <div className="checkout-body-container">

                    <form onSubmit={handleSubmit}>

                        <div className="checkout-body-form-container">

                            <div className="chechout-billing-form-container">

                                {/* Erros */}
                                <div className="checkout-form-error-container">

                                    

                                    {errorMsg && errorMsg.split(',').map((error, index) => (

                                        <div> 
                                            

                                            <p key={index} className="errorMsg"> - {error}</p>
                                        </div>

                                        
                                    ))}
                                </div>

                                {/* Form element */}

                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>First Name <RequiredStar required /></p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <input className="checkout-input" placeholder="Enter your name" type='name' name='name' />

                                    </div>
                                    

                                </div>

                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>Surname <RequiredStar required /></p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <input className="checkout-input" placeholder="Enter your surname" type='name' name='surname'/>

                                    </div>

                                </div>

                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>Email adress <RequiredStar required /></p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <input className="checkout-input" placeholder="Enter your email address" type='email' name='email'/>

                                    </div>

                                </div>

                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>Phone Number <RequiredStar required /></p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <input className="checkout-input" placeholder="Enter your phone number" type='phone' name='phone'/>

                                    </div>

                                </div>

                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>Country <RequiredStar required /></p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <select className="checkout-select">

                                            {Country.map((country) => (
                                                
                                                <option key={country.countryName} value={country.countryName}>
                                                    {country.countryName}
                                                </option>
                                            ))}

                                        </select>

                                    </div>

                                </div>

                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>Stree Address <RequiredStar required /></p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <input className="checkout-input" placeholder="Enter your street address" type='address' name='address'/>

                                    </div>

                                </div>

                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>House/Appartment/Unit Number <RequiredStar required /></p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <input className="checkout-input" placeholder="Enter number" type='number' name='unit-number'/>

                                    </div>

                                </div>

                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>Complex Name</p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <input className="checkout-input" placeholder="Enter your complex name" type='name' name='complex-name'/>

                                    </div>

                                </div>

                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>City <RequiredStar required /></p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <input className="checkout-input" placeholder="Enter city" type='text' name='city'/>

                                    </div>

                                </div>

                                
                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>Postal Code <RequiredStar required /></p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <input className="checkout-input" placeholder="Enter your postal code" type='number' name='postal-code'/>

                                    </div>

                                </div>

                                <div className="checkout-form-element-container">

                                    <div className="checkout-form-label">

                                        <label>
                                            <p>Instructions </p>
                                        </label>

                                    </div>

                                    <div className="checkout-form-input">

                                        <textarea className="checkout-input" placeholder="Enter any special message you have for the courier" type='number' name='description'/>

                                    </div>

                                </div>

                                <div className="checkout-form-element-container">

                                    <div className="checkbox-form-label">

                                        <label>

                                            <input 
                                                className="checkout-check-box" 
                                                type="checkbox" 
                                                checked={checked}
                                                onChange={handleChange}
                                            />

                                        </label>

                                    </div>

                                    <div className="checkbox-form-input">

                                        <p>
                                            I agree to receive information, special offers and promotions based on my interests and preferences from 
                                            adidas Unbranded Club (Pty) Ltd. I understand, Unbranded Club will use my email address, contact number and other 
                                            personal data listed in the Privacy Notice to send me information about the Unbranded brand through in-app 
                                            notifications, SMS, whatsapp and email marketing messages to the email provided to checkout on this account.
                                        </p>

                                    </div>

                                </div>

                                
                            
                            </div>
                            
                            {/* Right side of the checkout summary */}
                            <div className="checkout-billing-summary-container">

                                <div className="checkout-shipping-container">

                                    <div className="checkout-shipping-info">

                                        <h1>Delivery Method method</h1>

                                    </div>

                                    <div>
                                        <p>Choose your delivery method. Your order can be delivered to your door or collected at our cocnept 
                                            store in Johannesburg</p>
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
                                            <p>{moneyFormat (totalDelivery)}</p>
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
                                           By clicking 'Pay and Place Order' you'll see your order confirmation. This a e-commerce demo is purley a e-commerce sim, it's not integrated to a payment gate. </p>
                                    </div>

                                </div>

                                <div className="checkout-button-container">

                                    <div>
                                        <button className="checkout-button-cancel" onClick={() => {cancelCheckout()}}> Cancel Checkout</button>
                                    </div>

                                    <div>

                                        <button className="checkout-button-pay" type="submit" > Pay and Place Order</button>

                                    </div>

                                </div>
                                
                            </div>


                        </div>

                    </form>

                </div>

                {isOrderModalOpen && (

                    <Order 
                    
                        onClose={handleCloseOrderModal}
                        orderNumber={orderNumber}
                        formData={formData}
            
                    />
                )}

                


            </div>
    
        </div>
    )


}

const mapStateToProps = (state) => {

    const { totalPrice } = state.cart;
    const { totalDelivery } = calculateDelivery(totalPrice); // Call calculateDelivery function and destructure totalDelivery

    return {
        totalPrice,
        totalDelivery
    };
};

const mapDispatchToProps = (dispatch) => {
    
    return {
  
      //
      setOrderInfo: (orderInfo) => dispatch(setOrderInfo(orderInfo)),
      clearCart: () => dispatch(clearCart()) // Add clearCart to mapDispatchToProps

  
    };
  };

export default connect (mapStateToProps, mapDispatchToProps)(Checkout)