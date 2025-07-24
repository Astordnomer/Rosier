import React from "react";
import { motion } from "framer-motion";
import { useCart } from '../context/CartContext';

// Card 1
export function Card({ title, image, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
    >
      {image && (
        <div className="h-60 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
}

// Card 2
export function Card2({ title, image, description, price, available, rating, reviews }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ title, image, price });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden bg-amber-50 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03]"
    >
      <div className="relative h-[300px] border m-5 rounded-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image}
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
          40% OFF
        </span>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start gap-2">
          <h2 className="text-xl font-semibold text-gray-800 break-words max-w-[70%]">
            {title}
          </h2>
          <span className="text-lg bg-red-400 px-3 py-1 min-w-[70px] text-center rounded-2xl font-medium text-black whitespace-nowrap">
            ₹{price}
          </span>
        </div>

        <div>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>

        <div className="flex justify-between items-center gap-2">
          <span className="bg-rose-400 py-1 px-2 lg:w-[40%] font-medium text-center rounded-2xl text-xm">
            Best Seller
          </span>
          <span className="bg-rose-400 py-1 px-2 w-[30%] font-medium text-center rounded-2xl text-xm">
            {available} units
          </span>
          <div className="text-right w-[30%] text-sm leading-tight">
            <span className="block font-semibold">{rating}</span>
            <span className="block text-gray-600">{reviews} Reviews</span>
          </div>
        </div>

        <button onClick={handleAddToCart} className="mt-3 w-full bg-black text-white py-2 rounded-2xl hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
