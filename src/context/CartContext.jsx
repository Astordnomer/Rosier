import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const openCart = () => setCartOpen(true);
  const addToCart = (newItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item =>
        item.title === newItem.title &&
        item.variant === newItem.variant &&
        item.flavor === newItem.flavor
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.title === newItem.title &&
            item.variant === newItem.variant &&
            item.flavor === newItem.flavor
            ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: newItem.quantity || 1 }];
      }
    });
    setCartOpen(true);
  };

  const removeFromCart = (title, variant, flavor) => {
    setCartItems(prevItems =>
      prevItems.filter(item =>
        !(item.title === title && item.variant === variant && item.flavor === flavor)
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const updateQuantity = (title, variant, flavor, change) => {
    setCartItems(prevItems =>
      prevItems.reduce((acc, item) => {
        if (item.title === title && item.variant === variant && item.flavor === flavor) {
          const updatedQuantity = item.quantity + change;
          if (updatedQuantity > 0) {
            acc.push({ ...item, quantity: updatedQuantity });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const toggleCart = () => setCartOpen(prev => !prev);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      isCartOpen,
      toggleCart,
      openCart,
      getTotalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};
