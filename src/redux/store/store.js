// import {combineReducers, applyMiddleware, compose } from 'redux
// import {thunk} from 'redux-thunk';
//import collectionsReducer from '../reducers/collections'

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Define your initial state

/* const store = createStore (

  combineReducers({

    collections : collectionsReducer,
    

  }),
  composeEnhancers(applyMiddleware(thunk))
); */

// export default store;

import { createStore, applyMiddleware , compose} from 'redux';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(

  rootReducer,
  /* Add your initial state here if needed */
  composeEnhancers(applyMiddleware())
  
);

export default store;

