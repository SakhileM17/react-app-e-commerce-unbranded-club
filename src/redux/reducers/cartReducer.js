 // Action type (constant)
 export const ADD_TO_CART = 'ADD_TO_CART'; // add item to cart
 export const REMOVE_FROM_CART = 'REMOVE_FROM_CART' // remove item from cart
 export const CLEAR_CART = 'CLEAR_CART' // Clears all items from cart
 export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'; // Action type for updating quantity


// src/reducers/cartReducer.js
const initialState = {
    items: [], // Initialize with an empty array
    totalPrice: 0, // Initialize total price to zero
  };

// Action creator
export const addToCart = (item) => {

    return {

      type: ADD_TO_CART,
      payload: item, // The item to add to the cart
      
    };
  };

  // Action creator
export const removeFromCart = (item) => {

  return {

    type: REMOVE_FROM_CART,
    payload: item, 

  }

}

export const clearCart =() => {

  return {

    type : CLEAR_CART,
    
  }
}


// Action creator for updating quantity
export const updateQuantity = (itemId, newQuantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { itemId, newQuantity }
  };
};


// Define a selector function to calculate total price
export const calculateTotalPrice = (cartItems) => {

  return cartItems.reduce((total, item) => total + item.price * item.qty, 0);

};


  
  const cartReducer = (state = initialState, action) => {

    //
    console.log("Action ", action);
    console.log("Current State : ", state)

    switch (action.type) {

      // Add item to cart 
      case ADD_TO_CART:

      console.log("Adding to cart:", action.payload);

      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        // Item already exists in the cart, update its quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].qty += newItem.qty;

        const totalPrice = calculateTotalPrice(updatedItems);

        return { ...state, items: updatedItems, totalPrice };

      } else {
        // Item doesn't exist in the cart, add it
        const totalPrice = state.totalPrice + (newItem.price * newItem.qty);

        return { ...state, items: [...state.items, newItem], totalPrice };
      }



      // Remove item from cart
      case REMOVE_FROM_CART:

      console.log("Removing from cart:", action.payload);

      const removedItem = action.payload;
      const updatedItems = state.items.filter(
        (item) => item.id !== removedItem.id
      );
      const totalPriceAfterRemoval = calculateTotalPrice(updatedItems);

      return {

        ...state,
        items: updatedItems,
        totalPrice: totalPriceAfterRemoval,
        
      };
      
      // Clear all items from the car
      case CLEAR_CART:

      console.log("Clearing cart");

      return {

        ...state,
        items: [],
        totalPrice: 0
        
      }

      // Inside your cartReducer switch statement
  // Inside your cartReducer switch statement
case UPDATE_QUANTITY:
  const { itemId, newQuantity } = action.payload;
  const updatedItemsArray = state.items.map(item => {
    if (item.id === itemId) {
      return { ...item, qty: newQuantity };
    }
    return item;
  });
  const totalPriceAfterUpdate = calculateTotalPrice(updatedItemsArray);
  return {
    ...state,
    items: updatedItemsArray,
    totalPrice: totalPriceAfterUpdate
  };

      default:
        return state;
    }

    
  };
  
  export default cartReducer;
  