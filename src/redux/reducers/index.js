import {combineReducers} from 'redux'

import cartReducer from './cartReducer'

import selectedSizesReducer from './selectSizeReducer'
import selectedQtyReducer from './SelectQtyReducer'

const rootReducer = combineReducers ({

    cart: cartReducer, // Cart reducer to add and remove item from cart

    selectedSizes : selectedSizesReducer, // Select size reducer
    selectedQty : selectedQtyReducer // select qty reducer

})

export default rootReducer