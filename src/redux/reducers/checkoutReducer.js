// Action Types
export const ADD_TO_CHECKOUT = 'ADD_TO_CHECK_OUT'
export const CLEAR_CHECKOUT = 'CLEAR_CHECKOUT'
export const SAVE_ORDER_INFO = 'SAVE_ORDER_INFO';
export const SET_ORDER_INFO = 'SET_ORDER_INFO'


// initial state for the checkout
const initialState = {

    items : [], // Initialize with an empty array
    totalDelivery : 0,
    orderInfo: null, // Initial state for orderInfo

};

//Action creators

// add items to checkout
export const addToCheckOut = (item) => {

    return {

        type: ADD_TO_CHECKOUT, 
        payload : item

    }
}

// clear checkout list
export const clearCheckout = () => {

    return {
      type: CLEAR_CHECKOUT,
    };

  };

  //
  export const saveOrderInfo = (orderInfo) => {
    return {
      type: SAVE_ORDER_INFO,
      payload: orderInfo,
    };
  };    

  export const setOrderInfo = (orderInfo) => ({

    type: SET_ORDER_INFO,
    payload: orderInfo,
  });

  // Define a selector function to calculate total price
export const calculateDelivery = (totalPrice) => {

    // Calculate total delivery based on totalPrice
    const totalDelivery = totalPrice === 0 ? 0 : (totalPrice >= 500 ? 0 : 500);

    return {

        totalDelivery
    }

  };

  // reducer function 
const checkoutReducer = (state = initialState, action) => {

    switch (action.type) {
  
        case ADD_TO_CHECKOUT:
            console.log("Adding item to checkout:", action.payload);
            return {
                ...state,
                items: [...state.items, action.payload]
                
            };
        
        case CLEAR_CHECKOUT: 
            console.log("Clearing checkout");
            return {
                ...state,
                items: [],
                totalDelivery: 0, // Reset total delivery when clearing checkout
            };
        
        case SAVE_ORDER_INFO:
            console.log("Saving order info:", action.payload);
            return {
                ...state,
                orderInfo: action.payload,
             };
        
             case SET_ORDER_INFO:
            console.log("Setting order info:", action.payload);
            return {
              ...state,
              orderInfo: action.payload,
            };
  
        default: 
            
            return state
    }
  };
  
  export default checkoutReducer

  // checkoutReducer.js





  
  
  


