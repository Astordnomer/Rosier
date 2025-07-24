import React from 'react';
import { useParams } from 'react-router-dom';
import { Card2 } from '../components/Card';
import productData from '../data/product';
import AnnouncementBar from "../components/AnnouncementBar";

const Collection = () => {
  const { category } = useParams();

  console.log('URL category:', category);
  productData.forEach((item, index) => {
    console.log(`Item ${index}:`, item.title, '| Category:', item.category);
  });

  const filteredProducts = productData.filter(item => {
    if (!item.category || !category) return false;
    const normalizedItemCategory = item.category.toLowerCase().replace(/\s+/g, '-');
    const normalizedUrlCategory = category.toLowerCase().replace(/\s+/g, '-');
    return normalizedItemCategory === normalizedUrlCategory;
  });

  return (
    <div className="w-full min-h-screen bg-red-500 p-8">
      <AnnouncementBar />
      <div className="mt-15 p-6 rounded-xl max-w-[1200px] mx-auto">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-3 gap-6">
            {filteredProducts.map((item, index) => (
              <Card2
                key={index}
                title={item.title}
                image={item.image}
                description={item.description}
                price={item.price}
                rating={item.rating}
                reviews={item.reviews}
                available={item.available}
              />
            ))}
          </div>
        ) : (
          <p className="text-white text-xl">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
