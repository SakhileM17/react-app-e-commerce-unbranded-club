import React from 'react';
import { connect } from 'react-redux'; // Import connect
import { useNavigate } from 'react-router-dom';
import { useReducer,useState } from 'react';

import { moneyFormat } from '../utils/moneyformatter';

import selectedSizesReducer, {selectSize} from "../redux/reducers/selectSizeReducer";
import selectedQtyReducer, {selectQty} from "../redux/reducers/SelectQtyReducer";
import { updateQuantity } from '../redux/reducers/cartReducer';

import { removeFromCart } from '../redux/reducers/cartReducer';
import { clearCart } from '../redux/reducers/cartReducer';

import { addToCheckOut } from '../redux/reducers/checkoutReducer';

import UnbrandedClubLogoBlack from '../assets/unbrandedClubLogoBlack.png' // summer/winter collection images


const Cart = ({ cartItems , removeFromCart, clearCart, selectQty, totalPrice, addToCheckOut, updateQuantity}) => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    
    //
    event.preventDefault();
    //
    navigate("/checkout", { state: { cartItems } }); // Navigate to the checkout route
    
  };

  // Remove item from cart
  const handleRemoveItem = (event, item) => {

    event.preventDefault()

    removeFromCart(item);

  }

  // Clear whole cart
  const handleClearCart = () => {

    clearCart();
  }

  
  //
  const handleQtyChange = (itemId, event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(itemId, newQuantity);
  };

  
    
  return (

    <div className='cart-main-container'>

      <div className='cart-container'>

        <div className='cart-header-container'>

          <div className='cart-header'>

            <h1>My shopping cart</h1>
          </div>

          <div className='cart-header'>
            <img  src={UnbrandedClubLogoBlack} alt="unbranded-club-logo black"/>
          </div>

        </div>
        
        <div className='cart-production-description'>

          <form onSubmit={handleSubmit}>
            
            <div className="cart-product-container">
            

            {cartItems && cartItems.length > 0 ? (

              <div> 

              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>

                    <div className='cart-customer-product-container'>

                      <div className='cart-customer-product-image-container'>

                       <img src={item.img} alt='' className='cart-product-image'/>

                      </div>

                      <div className='cart-customer-product-name-container'>

                        <div>

                          <strong><p>Product ID </p></strong>

                        </div>

                        <div>

                          <p>{item.id}</p>

                        </div>

                      </div>
                      
                      <div className='cart-customer-product-name-container'>

                        <div>

                          <strong><p>Product Name </p></strong>

                        </div>

                        <div>
                          <p>{item.name}</p>
                        </div>

                      
                      </div>

                      <div className='cart-customer-product-name-container'>

                        <div>

                          <strong><p>Product size </p></strong>

                        </div>

                        <div>
                          <p>{item.size}</p>
                        </div>

                      </div>

                      <div className='cart-customer-product-name-container'>

                        <div>

                          <strong><p>Product Price </p></strong>

                        </div>

                        <div>
                          <p>{item.price}</p>
                        </div>

                      </div>

                      <div className='cart-customer-product-name-container'>

                        
                        <div>
                          
                          <p> <strong><p>Qty :</p></strong>
                          
  <select value={item.qty} onChange={(event) => handleQtyChange(item.id, event)}>
    {[...Array(10)].map((_, i) => (
      <option key={i} value={i + 1}>{i + 1}</option>
    ))}
  </select>

                          </p>
                      

                        </div>

                      </div>

                      <div className='cart-customer-product-name-container'> 

                        <div>

                          <strong><p>Total Price </p></strong>

                        </div>

                        <div>
                          <p>{moneyFormat(item.price * item.qty)}</p>
                        </div>

                      </div>

                      <div className='cart-customer-product-name-container'>

                        {/* Remove item button */}
                        <button onClick={(event) => handleRemoveItem(event, item)} className='button-remove-item'>Remove Item</button>

                      </div>

                    </div>

                  </li>
                ))}
              </ul>

              <div className='cart-customer-total-container'>

                <p>Total Price : {moneyFormat(totalPrice)} </p>

              </div>
              
              <div className='cart-button-container'>

                <div className='cart-button-CheckOut'>

                  <button type='submit' className='cart-button-checkout'>CheckOut</button>

                </div>

                <div className='cart-button-CheckOut'>

                  <button onClick={() => {handleClearCart()}} className='cart-button-clear'>Clear Cart</button>

                </div>

              </div>

              </div>

            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          </form>

          

        </div>
      </div>
    </div>
  );
};

// Map state to props to access cartItems from Redux store
const mapStateToProps = (state) => {

  return {
    
    cartItems: state.cart.items,
    totalPrice: state.cart.totalPrice // Map totalPrice from Redux store state

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    //
    removeFromCart: (item) => dispatch(removeFromCart(item)),

    //
    clearCart: () => {
      
      console.log("Clearing cart..."); // Check if this log appears
      dispatch(clearCart())
    },

    //
    addToCheckOut: (item) => dispatch(addToCheckOut(item)),

    //
    selectQty: (index, qty) => dispatch(selectQty(index, qty)),

    //
    updateQuantity: (itemId, newQuantity) => dispatch(updateQuantity(itemId, newQuantity))

  };
};

// Connect Cart component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
