// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeItemFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
