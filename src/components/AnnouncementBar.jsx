import React, { useEffect, useRef } from "react";
import { startShopMarquee } from "../animations/shopAnimation";

function AnnouncementBar() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    startShopMarquee(marqueeRef);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white overflow-hidden h-10 z-50 flex items-center">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap gap-12 px-4"
      >
        <div className="flex gap-12">
          <p>🚀 Free Shipping on orders over ₹500</p>
          <p>🔥 Summer Sale is Live – Up to 40% Off</p>
          <p>🛍️ Shop Now – Limited Stock Available</p>
          <p>🥇 100% Desi Goodness – Verified by Real Families</p>
          <p>🌿 Taste the Tradition — Born from Indian Heritage</p>
        </div>
        <div className="flex gap-12">
          <p>🚀 Free Shipping on orders over ₹500</p>
          <p>🔥 Summer Sale is Live – Up to 40% Off</p>
          <p>🛍️ Shop Now – Limited Stock Available</p>
          <p>🥇 100% Desi Goodness – Verified by Real Families</p>
          <p>🌿 Taste the Tradition — Born from Indian Heritage</p>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
