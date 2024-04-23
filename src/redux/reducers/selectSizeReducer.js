const initialState = {}; // Initial state for selected sizes

/* constants */
export const SELECT_SIZE = 'SELECT_SIZE';


// action
export const selectSize = (index, size) => ({

  type: SELECT_SIZE,
  payload: { index, size },

});


const selectedSizesReducer = (state = initialState, action) => {

  switch (action.type) {

    case SELECT_SIZE:
      const { index, size } = action.payload;
      return { ...state, [index]: size };

    default:
      return state;

  }
};



export  default selectedSizesReducer;