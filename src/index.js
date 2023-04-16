import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import './css/contact.css';
import './css/createPhone.css';
import './css/editPhone.css';
import './css/login.css';
import './css/phoneDetail.css';
import './css/phones.css';
import './css/register.css';
import './css/footer.css';
import './css/cart.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { productsFetch } from './slice/productSlice';
import cartReducer, { getTotals } from './slice/cartService';
import { productsApi } from './slice/productApi';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

store.dispatch(productsFetch());
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
