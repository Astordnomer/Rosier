import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import AnnouncementBar from "../components/AnnouncementBar";
import {Card} from "../components/Card";
import { autoImageSlider } from "../animations/shopAnimation";
import product1 from '../assets/Product1.png';
import product2 from '../assets/Product2.png';
import product3 from '../assets/Product3.png';
import product4 from '../assets/Product4.png';
import product5 from '../assets/Product5.png';
import product6 from '../assets/Product6.png';
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

function Shop() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      autoImageSlider();
    }, 100);
  }, []);

  const products = [
    { title: "Ghee", image: product1, description: "Pure and organic." },
    { title: "Nut-Butters", image: product5, description: "Smooth and tasty." },
    { title: "Raw-Honey", image: product6, description: "Raw forest honey." },
    { title: "Khapli Atta", image: product2, description: "Stone-ground flour." },
    { title: "Essentials", image: product4, description: "Sacred essentials." },
    { title: "StonePressed-Oil", image: product3, description: "100% natural oils." },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <AnnouncementBar />

      <div className="w-full min-h-screen px-4 md:px-10 py-10 mt-[90px] bg-white text-black">
        <div className="slider-container relative w-full max-w-screen-xl h-[250px] md:h-[500px] mt-5 rounded-2xl overflow-hidden shadow-lg mx-auto">
          {[banner1, banner2, banner3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`banner-${i}`}
              className="slider-img absolute w-full h-full object-cover top-0 left-0"
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <h2 className="text-3xl font-normal mb-6">Categories</h2>
          <div className="flex flex-wrap justify-center gap-3 text-lg font-medium">
            {[
              "Ghee",
              "Better-Bars",
              "Nut-Butters",
              "StonePressed-Oil",
              "Raw-Honey",
              "Essentials",
              "Khapli Atta",
            ].map((item, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200 transition cursor-pointer"
                onClick={() => navigate(`/collection/${encodeURIComponent(item)}`)}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-normal mb-8 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/collection/${encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, '-'))}`)}
                className="cursor-pointer"
              >
                <Card
                  title={item.title}
                  image={item.image}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
