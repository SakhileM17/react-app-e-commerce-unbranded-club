import React from "react";

import { connect } from "react-redux";

import { moneyFormat } from "../utils/moneyformatter";

import { calculateDelivery } from "../redux/reducers/checkoutReducer";




const CustomerOrder = ({orderInfo} ) => {

    if (!orderInfo) {
        return <div>Loading...</div>; // or any other fallback UI
      }
    
      const { name, totalPrice , totalDelivery, address} = orderInfo;
    
      if (!totalPrice) {
        return <div>No order information available</div>; // or any other fallback UI
      }
    

    return (

        <div className="checkout-main-container">

            <div  className="checkout-container">

                <div className="customer-order-header-container">

                    <div>
                        <h1>Customer Latest Order</h1>
                    </div>

                    <div>
                        <h1>Logo</h1>
                    </div>

                </div>


                <div className="customer-order-body-container">

                    <div className="customer-order-detail-container">

                        <div className="customer-order-detail-address-container">

                            <div className="customer-order-detail">

                                <h3><strong>Shipping Address  </strong></h3>

                                <p></p>

                            </div>

                            <div className="customer-order-detail">

                                <h3><strong>Billing Address  </strong></h3>

                                <p>{address}</p>

                            </div>

                        </div>

                        <div className="customer-order-item-container">

                            <div>

                                <p>Product </p>

                            </div>

                            {orderInfo && 
                            
                            <div>
                                <p>Customer name : {name}</p>
                            </div>}

                            

                            

                        </div>

                        <div className="customer-order-item-container">

                            <div>

                                <strong>Billing Summary </strong>

                            </div>

                            <div>
                                
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

                            

                        </div>

                    </div>

                </div>

                

            </div>

        </div>
    )


}

const mapStateToProps = (state) => {
    const { orderInfo } = state.checkout || {};
    console.log('Order Info:', orderInfo); // Add this line to check if orderInfo is being retrieved
    return {
        orderInfo,
    };
};

  
 

export default connect (mapStateToProps)(CustomerOrder)