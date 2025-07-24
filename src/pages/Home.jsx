import React, { useEffect } from 'react';
import lamp from '../assets/lamp1.png';
import desk from '../assets/desk.jpeg';
import atta from '../assets/ata.png';
import ghee from '../assets/ghee.png';
import honey from '../assets/honey.png';
import oil from '../assets/oil.png';
import butier from '../assets/nutbutier.png';
import arte from '../assets/arte.png';
import { homeAnimation } from '../animations/homeAnimation';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      homeAnimation();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      <section className="home-section relative h-[100vh] bg-black text-rose-200 overflow-hidden">

        {/* Lamp */}
        <img
          src={lamp}
          alt="Lamp"
          className="lamp absolute top-[-140px] left-1/2 -translate-x-1/2 w-[120px] sm:w-[160px] md:w-[200px] z-30"
        />
        {/* Back-Font Text */}
        <h1 className="text-animation bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-light text-[150px] sm:text-[200px] md:text-[300px] text-white lg:text-[500px] z-10">
          Rosier
        </h1>

        {/* Product Images */}
        <img
          src={atta}
          alt="Atta"
          className="atta absolute bottom-[80px] sm:bottom-[90px] md:bottom-[100px] left-1/2 -translate-x-1/2 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[280px] h-auto z-20"
        />
        <img
          src={ghee}
          alt="Ghee"
          className="ghee absolute bottom-[60px] sm:bottom-[70px] left-[60%] sm:left-[55%] -translate-x-1/2 w-[100px] sm:w-[150px] md:w-[180px] lg:w-[210px] h-auto z-[120]"
        />
        <img
          src={honey}
          alt="Honey"
          className="honey absolute bottom-[60px] left-[35%] sm:left-[40%] -translate-x-1/2 w-[90px] sm:w-[120px] md:w-[140px] lg:w-[150px] h-auto z-[120]"
        />
        <img
          src={arte}
          alt="arte"
          className="lg:hidden absolute bottom-[-50px] left-[10%] sm:left-[65%] -translate-x-8/4 w-[110px] sm:w-[150px] md:w-[170px] lg:w-[190px] h-auto z-[130]"
        />
        <img
          src={oil}
          alt="Oil"
          className="oil absolute bottom-[50px] left-[70%] sm:left-[65%] -translate-x-1/2 w-[110px] sm:w-[150px] md:w-[170px] lg:w-[190px] h-auto z-[130]"
        />
        <img
          src={butier}
          alt="butier"
          className="butier absolute bottom-[50px] left-[-10%] sm:left-[65%] -translate-x-2/2 w-[110px] sm:w-[150px] md:w-[170px] lg:w-[190px] h-auto z-[130]"
        />

        {/* Desk */}
        <img
          src={desk}
          alt="Desk"
          className="desk absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-none z-40"
        />
      </section>
      {/* Products Seaction */}
      <section className="Products bg-black text-rose-200 py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
          Explore Our Premium Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            { img: atta, name: "Khapli Atta" },
            { img: ghee, name: "Ghee" },
            { img: honey, name: "Raw-Honey" },
            { img: oil, name: "StonePressed-Oil" },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/collection/${encodeURIComponent(item.name)}`)}
              className="relative group bg-neutral-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <img src={item.img} alt={item.name} className="w-full h-60 object-contain mb-6" />
              <h3 className="text-2xl text-center">{item.name}</h3>

              {/* MOBILE DESCRIPTION */}
              <div className="block lg:hidden mt-2 px-2">
                <p className="text-white text-center text-sm bg-black bg-opacity-80 rounded-xl p-2">
                  {item.name.includes("Ghee") &&
                    "Ghee: Crafted using traditional methods, our pure desi ghee is rich in nutrients, supports digestion, and adds authentic flavor to every meal. Ideal for daily cooking and a healthy lifestyle."}

                  {item.name.includes("Oil") &&
                    "Oil: Our cold-pressed oils are extracted without heat or chemicals, preserving nutrients and taste. Sourced from the finest seeds and nuts, they bring farm-fresh purity straight to your kitchen."}

                  {item.name.includes("Honey") &&
                    "Honey: Sourced from pristine apiaries, our raw honey is unfiltered and unprocessed, packed with natural enzymes, antioxidants, and rich floral notes. A perfect natural sweetener with health benefits."}

                  {item.name.includes("Atta") &&
                    "Atta: Ground weekly in small batches, our stone-milled whole wheat atta retains fiber, nutrients, and flavor. It ensures soft rotis and wholesome nourishment for your family every day."}
                </p>
              </div>

              {/* DESKTOP DESCRIPTION */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md opacity-0 lg:group-hover:opacity-100 hidden lg:flex transition duration-500 items-center justify-center rounded-3xl p-4">
                {item.name.includes("Ghee") &&
                  "Ghee: Crafted using traditional methods, our pure desi ghee is rich in nutrients, supports digestion, and adds authentic flavor to every meal. Ideal for daily cooking and a healthy lifestyle."}

                {item.name.includes("Oil") &&
                  "Oil: Our cold-pressed oils are extracted without heat or chemicals, preserving nutrients and taste. Sourced from the finest seeds and nuts, they bring farm-fresh purity straight to your kitchen."}

                {item.name.includes("Honey") &&
                  "Honey: Sourced from pristine apiaries, our raw honey is unfiltered and unprocessed, packed with natural enzymes, antioxidants, and rich floral notes. A perfect natural sweetener with health benefits."}

                {item.name.includes("Atta") &&
                  "Atta: Ground weekly in small batches, our stone-milled whole wheat atta retains fiber, nutrients, and flavor. It ensures soft rotis and wholesome nourishment for your family every day."}

              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Why Tosier Seaction */}
      <section className="why-rosier bg-black/90 text-white py-16 px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 text-rose-200">Why Rosier?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              image: (
                <img
                  src="//www.rosierfoods.com/cdn/shop/files/organic-2_2_4d7c649d-a9ec-4ceb-81aa-519976cf5323.png?v=1743061219&width=3200"
                  alt="100% Clean"
                  srcSet="//www.rosierfoods.com/cdn/shop/files/organic-2_2_4d7c649d-a9ec-4ceb-81aa-519976cf5323.png?v=1743061219&width=150 150w,
                           //www.rosierfoods.com/cdn/shop/files/organic-2_2_4d7c649d-a9ec-4ceb-81aa-519976cf5323.png?v=1743061219&width=300 300w,
                          //www.rosierfoods.com/cdn/shop/files/organic-2_2_4d7c649d-a9ec-4ceb-81aa-519976cf5323.png?v=1743061219&width=500 500w"
                  sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-auto mb-4"
                />
              ),
              title: "100% Clean",
              desc: "Free from chemicals and artificial additives.",
            },
            {
              image: (
                <img
                  src="//www.rosierfoods.com/cdn/shop/files/harvest_2.png?v=1743061201&width=3200"
                  alt="100% Clean"
                  srcSet="//www.rosierfoods.com/cdn/shop/files/harvest_2.png?v=1743061201&width=50 50w,
                  //www.rosierfoods.com/cdn/shop/files/harvest_2.png?v=1743061201&width=100 100w,
                  //www.rosierfoods.com/cdn/shop/files/harvest_2.png?v=1743061201&width=300 300w,
                  //www.rosierfoods.com/cdn/shop/files/harvest_2.png?v=1743061201&width=500 500w"
                  sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-auto mb-4"
                />
              ),
              title: "Farm Fresh",
              desc: "Directly sourced from our natural farms.",
            },
            {
              image: (
                <img
                  src="//www.rosierfoods.com/cdn/shop/files/multiple_2.png?v=1743061214&width=3200"
                  alt="Farm Fresh"
                  srcSet="//www.rosierfoods.com/cdn/shop/files/multiple_2.png?v=1743061214&width=50 50w,
                  //www.rosierfoods.com/cdn/shop/files/multiple_2.png?v=1743061214&width=100 100w,
                  //www.rosierfoods.com/cdn/shop/files/multiple_2.png?v=1743061214&width=300 300w,
                  //www.rosierfoods.com/cdn/shop/files/multiple_2.png?v=1743061214&width=500 500w"
                  sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-auto mb-4"
                />
              ),
              title: "Small Batches",
              desc: "Handmade in small batches for quality.",
            },
            {
              image: (
                <img
                  src="//www.rosierfoods.com/cdn/shop/files/panigrahena_2_7eefacd1-281f-4c2f-9d4f-3151e13ef22c.png?v=1743061209&width=3200"
                  alt="Small Batches"
                  srcSet="//www.rosierfoods.com/cdn/shop/files/panigrahena_2_7eefacd1-281f-4c2f-9d4f-3151e13ef22c.png?v=1743061209&width=50 50w,
                  //www.rosierfoods.com/cdn/shop/files/panigrahena_2_7eefacd1-281f-4c2f-9d4f-3151e13ef22c.png?v=1743061209&width=100 100w,
                  //www.rosierfoods.com/cdn/shop/files/panigrahena_2_7eefacd1-281f-4c2f-9d4f-3151e13ef22c.png?v=1743061209&width=300 300w,
                  //www.rosierfoods.com/cdn/shop/files/panigrahena_2_7eefacd1-281f-4c2f-9d4f-3151e13ef22c.png?v=1743061209&width=500 500w"
                  sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-auto mb-4"
                />
              ),
              title: "Rooted in Tradition",
              desc: "Inspired by age-old Indian traditions.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="rosier-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition"
            >
              {card.image && <div className="mb-3">{card.image}</div>}
              <h3 className="text-xl font-semibold text-rose-100 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>

      </section>
      {/*Review */}
      <section className="reviews-section bg-black/90 text-white py-16 px-6 overflow-hidden">
        <h2 className="text-4xl font-semibold text-center mb-12 text-rose-200">What Our Customers Say</h2>

        <div className="review-slider flex w-max gap-6 px-2">
          {[
            {
              name: "Ishita",
              text: "Absolutely love the freshness of this brand. The ingredients feel clean and truly wholesome."
            },
            {
              name: "Meera",
              text: "This honey tastes so pure, it's like straight from the hive. I use it daily in my tea."
            },
            {
              name: "Kabir",
              text: "The atta made super soft rotis — my family noticed the difference instantly!"
            },
            {
              name: "Sneha",
              text: "Tried the almond nut butter, and wow! It's creamy, fresh, and absolutely addictive."
            },
            {
              name: "Rahul",
              text: "Better Bars are my go-to snack now. Natural, tasty, and they actually fill me up."
            },
            {
              name: "Divya",
              text: "Loved the packaging and quality. You can feel it’s handmade with care. Will buy again!"
            }
          ]
            .concat([
              {
                name: "Aarav",
                text: "Amazing product! My skin feels so fresh and natural.",
              },
              {
                name: "Diya",
                text: "Rosier is my daily go-to — love the smell and texture!",
              },
              {
                name: "Kabir",
                text: "I was surprised by how effective it is. Worth every penny.",
              },
              {
                name: "Ishita",
                text: "Feels like real Ayurveda — simple and honest.",
              },
              {
                name: "Neha",
                text: "Best skincare I've used, and it's all clean ingredients.",
              },
            ])
            .map((review, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-md"
              >
                <p className="text-gray-300 mb-4">"{review.text}"</p>
                <h4 className="text-rose-100 font-medium text-right">- {review.name}</h4>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
