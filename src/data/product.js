import ghee from '../assets/card-ghee.png';
import butter1 from '../assets/card-butter1.png';
import butter2 from '../assets/card-butter2.png';
import butter3 from '../assets/card-butter3.png';
import butter4 from '../assets/card-butter4.png';
import oil1 from '../assets/card-oil1-1.png';
import oil2 from '../assets/card-oil1-2.png';
import oil3 from '../assets/card-oil1-3.png';
import oil4 from '../assets/card-oil1-4.png';
import arte1 from '../assets/card-arte1.png';
import arte2 from '../assets/card-arte2.png';
import arte3 from '../assets/card-arte3.png';
import arte4 from '../assets/card-arte4.png';
import arte5 from '../assets/card-arte5.png';
import arte6 from '../assets/card-arte-pack.png';
import honey from '../assets/card-honey.png';
import Bars1 from '../assets/card-bars1.png';
import Bars2 from '../assets/card-bars2.png';
import Bars3 from '../assets/card-bars3.png';
import Bars4 from '../assets/card-bars-pack4.png';


const productData = [
  {
    id: "prod-1",
    title: "A2 Ghee",
    image: ghee,
    description: "Pure A2 Cow Ghee from grass-fed cows.",
    category: "Ghee",
    price: 599,
    available: 19,
    rating: "⭐⭐⭐⭐",
    reviews: 234
  },
  {
    id: "prod-2",
    title: "Butter Dark Chocolate",
    image: butter1,
    description: "Rich in cocoa and nutty flavor.",
    category: "Nut Butters",
    price: 349,
    available: 18,
    rating: "⭐⭐⭐⭐⭐",
    reviews: 321
  },
  {
    id: "prod-3",
    title: "Classic Butter",
    image: butter2,
    description: "Smooth and creamy nut butter.",
    category: "Nut Butters",
    price: 299,
    available: 19,
    rating: "⭐⭐⭐⭐",
    reviews: 189
  },
  {
    id: "prod-4",
    title: "Crunchy Butter",
    image: butter3,
    description: "Loaded with crunchy nut bits.",
    category: "Nut Butters",
    price: 319,
    available: 18,
    rating: "⭐⭐⭐⭐⭐",
    reviews: 276
  },
  {
    id: "prod-5",
    title: "Butter Crunchy",
    image: butter4,
    description: "Perfect mix of smooth and crunch.",
    category: "Nut Butters",
    price: 335,
    available: 19,
    rating: "⭐⭐⭐⭐",
    reviews: 154
  },
  {
    id: "prod-6",
    title: "Stone Pressed Groundnut Oil",
    image: oil1,
    description: "Traditional stone pressed oil.",
    category: "StonePressed-Oil",
    price: 449,
    available: 18,
    rating: "⭐⭐⭐⭐⭐",
    reviews: 205
  },
  {
    id: "prod-7",
    title: "Stone Pressed Black Mustard Oil",
    image: oil2,
    description: "Pure black mustard oil.",
    category: "StonePressed-Oil",
    price: 399,
    available: 19,
    rating: "⭐⭐⭐⭐",
    reviews: 177
  },
  {
    id: "prod-8",
    title: "Stone Pressed Yellow Mustard Oil",
    image: oil3,
    description: "Cold-pressed for better nutrients.",
    category: "StonePressed-Oil",
    price: 419,
    available: 19,
    rating: "⭐⭐⭐⭐⭐",
    reviews: 193
  },
  {
    id: "prod-9",
    title: "Stone Pressed Sunflower Oil",
    image: oil4,
    description: "Healthy and light oil.",
    category: "StonePressed-Oil",
    price: 429,
    available: 18,
    rating: "⭐⭐⭐⭐",
    reviews: 210
  },
  {
    id: "prod-10",
    title: "Havan Cups-Bokhoor Pack (6)",
    image: arte1,
    description: "Spiritual fragrance for rituals.",
    category: "Essentials",
    price: 259,
    available: 18,
    rating: "⭐⭐⭐⭐",
    reviews: 143
  },
  {
    id: "prod-11",
    title: "Shraddha White Musk Dhoop",
    image: arte2,
    description: "Fragrant incense for peace.",
    category: "Essentials",
    price: 239,
    available: 19,
    rating: "⭐⭐⭐⭐⭐",
    reviews: 165
  },
  {
    id: "prod-12",
    title: "Assorted Incense Sticks Pack",
    image: arte3,
    description: "Variety pack for every mood.",
    category: "Essentials",
    price: 199,
    available: 18,
    rating: "⭐⭐⭐⭐",
    reviews: 123
  },
  {
    id: "prod-13",
    title: "Dharana Haldi Chandan Dhoop",
    image: arte4,
    description: "Turmeric sandalwood incense.",
    category: "Essentials",
    price: 249,
    available: 19,
    rating: "⭐⭐⭐⭐⭐",
    reviews: 189
  },
  {
    id: "prod-14",
    title: "Prajna Blue Lotus Dhoop Pack (6)",
    image: arte6,
    description: "Lotus-infused natural dhoop.",
    category: "Essentials",
    price: 269,
    available: 18,
    rating: "⭐⭐⭐⭐",
    reviews: 156
  },
  {
    id: "prod-15",
    title: "Smriti Bokhoor Dhoop Incense",
    image: arte5,
    description: "Deep scent for calmness.",
    category: "Essentials",
    price: 279,
    available: 18,
    rating: "⭐⭐⭐⭐⭐",
    reviews: 172
  },
  {
    id: "prod-16",
    title: "Raw Organic Honey",
    image: honey,
    description: "Natural and unprocessed honey.",
    category: "Raw-Honey",
    price: 375,
    available: 19,
    rating: "⭐⭐⭐⭐",
    reviews: 221
  },
  {
    id: "prod-17",
    title: "Khapli Atta",
    image: "/images/atta.jpg",
    description: "Stone-ground whole wheat flour.",
    category: "Khapli Atta",
    price: 325,
    available: 18,
    rating: "⭐⭐⭐⭐⭐",
    reviews: 198
  },
  {
    id: "prod-18",
    title: "Cocoa & Almond Bar",
    image: Bars1,
    description: "Nutty and chocolaty energy bar.",
    category: "Better Bars",
    price: 149,
    available: 19,
    rating: "⭐⭐⭐⭐",
    reviews: 164
  },
  {
    id: "prod-19",
    title: "Berry & Coconut Bar",
    image: Bars2,
    description: "Fruity and tropical flavor.",
    category: "Better Bars",
    price: 149,
    available: 18,
    rating: "⭐⭐⭐⭐⭐",
    reviews: 187
  },
  {
    id: "prod-20",
    title: "Orange & Cocoa Bar",
    image: Bars3,
    description: "Zesty orange meets cocoa.",
    category: "Better Bars",
    price: 149,
    available: 18,
    rating: "⭐⭐⭐⭐",
    reviews: 134
  },
  {
    id: "prod-21",
    title: "All 3 Flavours Combo Pack",
    image: Bars4,
    description: "All 3 energy bars in one pack.",
    category: "Better Bars",
    price: 399,
    available: 19,
    rating: "⭐⭐⭐⭐⭐",
    reviews: 345
  }
];

export default productData;
