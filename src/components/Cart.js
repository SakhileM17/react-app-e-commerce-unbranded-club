import React from 'react';
import { connect } from 'react-redux'; // Import connect
import { useReducer,useState } from 'react';

import { moneyFormat } from '../utils/moneyformatter';

import selectedSizesReducer, {selectSize} from "../redux/reducers/selectSizeReducer";
import selectedQtyReducer, {selectQty} from "../redux/reducers/SelectQtyReducer";

import { removeFromCart } from '../redux/reducers/cartReducer';
import { clearCart } from '../redux/reducers/cartReducer';

import { Link } from 'react-router-dom';


const Cart = ({ cartItems , removeFromCart, clearCart, selectQty, totalPrice}) => {

  


  //
  const handleSubmit = (event) => {

    event.preventDefault(); // Prevent default form submission behavior
    
    clearCart(); // clear cart 
    
  };

  
  //
  const handleQtyChange = (index, event) => {

    const qty = parseInt(event.target.value);
    selectQty(index, qty);
};

  
    
  return (

    <div className='cart-main-container'>

      <div className='cart-container'>

        <div className='cart-header-container'>

          <div className='cart-header'>

            <h1>My shopping cart</h1>
          </div>
          <div className='cart-header'>
            <h1>Logo</h1>
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

                        <p>Product ID : {item.id}</p>

                      </div>
                      
                      <div className='cart-customer-product-name-container'>

                        <p>Product Name : {item.name}</p>

                      </div>

                      <div className='cart-customer-product-name-container'>

                        <p>Size : {item.size}</p>

                      </div>

                      <div className='cart-customer-product-name-container'>

                        <p>Price : {moneyFormat(item.price)}</p>

                      </div>

                      <div className='cart-customer-product-name-container'>

                      <p>Qty:
                        <select value={item.qty} onChange={(event) => handleQtyChange(index, event)}>
                          {[...Array(10)].map((_, i) => (
                          <option key={i} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                      </p>

                      </div>

                      <div className='cart-customer-product-name-container'>

                        <p>Total Price : {moneyFormat(item.price * item.qty)}</p>

                      </div>

                      <div className='cart-customer-product-name-container'>

                        {/* Remove item button */}
                        <button onClick={() => removeFromCart(item)}>Remove</button>

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

                  <Link to='/checkout'>CheckOut</Link>

                </div>

                <div className='cart-button-CheckOut'>

                  <button onClick={() => {
                    
                    console.log("Clear Cart button clicked"); // Check if this log appears

                    clearCart()
                    
                    }}>Clear Cart</button>

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
    selectQty: (index, qty) => dispatch(selectQty(index, qty))

  };
};

// Connect Cart component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
