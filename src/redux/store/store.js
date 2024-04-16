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

import { createStore } from 'redux';

import rootReducer from '../reducers';

const store = createStore(rootReducer)

export default store
