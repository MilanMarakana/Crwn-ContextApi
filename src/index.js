import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import CartProvider from './provider/cart-provider/cart-provider.jsx';

ReactDOM.render(
  <CartProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);
