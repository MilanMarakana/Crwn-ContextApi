import React, {useState, useEffect, createContext}  from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemCount, getTotal } from './cart.utils.js';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    total: 0
})

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

    const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);
    const clearItemFromCart = (item) => setCartItems(filterItemFromCart(cartItems,item));
    
    useEffect(() => {
      setCartItemsCount(getCartItemCount(cartItems));
       setCartTotal(getTotal(cartItems));
    }, [cartItems]);
  
    
    return (
      <CartContext.Provider
        value={{
          hidden,
          toggleHidden,
          cartItems,
          addItem,
          removeItem,
          clearItemFromCart,
          cartItemsCount,
          cartTotal,
        }}>
        {children}
      </CartContext.Provider>
    );
}

export default CartProvider;