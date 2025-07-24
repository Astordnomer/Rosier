import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cartItems, getTotalPrice, isCartOpen, toggleCart, updateQuantity, removeFromCart } = useCart();

  const handleIncrease = (item) => {
    updateQuantity(item.title, item.variant, item.flavor, 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity <= 1) {
      removeFromCart(item.title, item.variant, item.flavor);
    } else {
      updateQuantity(item.title, item.variant, item.flavor, -1);
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item.title, item.variant, item.flavor);
  };


  return (
    <div
      
      className={`fixed top-0 right-0 w-80 h-full rounded-2xl bg-white shadow-xl z-550 transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={toggleCart} className="text-red-500 text-xl">×</button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto max-h-[90vh] pb-25">
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex flex-wrap items-center gap-4 border p-2 rounded-lg">
              <img src={item.image} className="w-20 h-20 object-cover border rounded" />

              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-xs truncate">{item.title}</h4>
                <p className="text-sm text-gray-600">₹{item.price}</p>
              </div>

              <div className="w-[30%] min-w-[10px]">
                <div className="quantity border h-6 flex rounded-2xl overflow-hidden justify-center items-center">
                  <button onClick={() => handleDecrease(item)} className="px-2">-</button>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-6 text-center outline-none"
                  />
                  <button onClick={() => handleIncrease(item)} className="px-2">+</button>
                </div>

                <button
                  onClick={() => handleRemove(item)}
                  className="text-center border w-full mt-3 rounded-2xl bg-red-500 text-white text-sm"
                >
                  Delete
                </button>
              </div>
            </div>

          ))
        )}

        <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 shadow-md z-50">
          <div className="flex justify-between items-center mb-3">
            <p className="text-base font-medium text-gray-700">Estimated Total</p>
            <span className="text-lg font-bold text-gray-900">₹{getTotalPrice()}</span>
          </div>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl transition duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
