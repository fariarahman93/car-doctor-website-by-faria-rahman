"use client";
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const incrementCart = (price) => {
    setCartCount(prev => prev + 1);
    setTotalPrice(prev => prev + price);
  };

  return (
    <CartContext.Provider value={{ cartCount, totalPrice, incrementCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
