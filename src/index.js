import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store/store';

import AppRouter from './router/AppRouter';
import reportWebVitals from './reportWebVitals';

import './styles/main.css';

import { createRoot } from 'react-dom/client';


const rootElement = document.getElementById('root');

createRoot(rootElement).render(

  <Provider store={store}>

    <AppRouter />
    
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
