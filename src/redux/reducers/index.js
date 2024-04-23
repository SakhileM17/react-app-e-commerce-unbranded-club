import {combineReducers} from 'redux'

import cartReducer from './cartReducer'


const rootReducer = combineReducers ({

    cart: cartReducer, // Cart reducer to add and remove item from cart


})

export default rootReducer