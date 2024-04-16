/* Reducer - To select Item size  */
const initialState = {}; // Initial state for selected sizes

export const SELECT_QTY = 'SELECT_QTY'

// action 
export const selectQty = (index,qty) => (
    {
      type: SELECT_QTY,
      payload: {index, qty}
    }
  )

  // reducer function
  const selectedQtyReducer = (state =initialState, action) => {

    switch(action.type) {
  
      case SELECT_QTY:
        const {index, qty} = action.payload;
        return {...state, [index] : qty};
  
        default:
          return state
  
    }
  }

  export default selectedQtyReducer