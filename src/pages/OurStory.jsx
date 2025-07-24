import React, { useEffect, useRef } from "react";
import ourstory from "../assets/ourstory.png";
import { runGsapAnimations } from "../animations/ourstoryAnimation";

const data = [
  {
    para:
      "When we say pure, we mean pure. We only use the best ingredients. We are fully committed to whole ingredients. We make all of our products in house.",
  },
  {
    para:
      "We believe in doing things the right way even if it is the hard way. We make quality food for our consumers. We wish to change the way people think about food and make it more sustainable.",
  },
  {
    para:
      "We keep our animals healthy. Our animals graze freely and eat natural. We never give them any synthetic hormones.",
  },
];

export default function OurStory() {
  const containerRef = useRef(null);
  const textsRef = useRef([]);
  const clipRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const highlightRef = useRef([]);
  const highlightContainerRef = useRef(null);

  useEffect(() => {
    const [ctx, ctx2, ctx3] = runGsapAnimations({
      containerRef,
      textsRef,
      clipRef,
      sectionRef,
      cardsRef,
      highlightRef,
      highlightContainerRef,
    });

    return () => {
      ctx.revert();
      ctx2.revert();
      ctx3.revert();
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-black"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {["We are", "Reviving", "Traditional", "Whay Of", "Old", "Bharat"].map(
            (text, index) => (
              <h1
                key={index}
                ref={(el) => (textsRef.current[index] = el)}
                className="absolute text-[12vw] font-light opacity-0"
              >
                {text}
              </h1>
            )
          )}
        </div>

        <div
          ref={clipRef}
          className="absolute inset-0 w-full h-full z-10 bg-black flex items-center justify-center"
          style={{ clipPath: "circle(0% at 50% 50%)" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/67428560dc96418aaad8f7991182d9f8.mov"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div
        ref={sectionRef}
        className="w-full min-h-screen px-4 sm:px-10 py-20 flex flex-col sm:flex-row gap-10 justify-center items-start"
      >
        <div className="w-full sm:w-[40%] sticky top-10 h-fit flex items-center justify-center">
          <h2 className="text-4xl sm:text-7xl font-normal leading-tight text-center">
            Welcome to Our World
          </h2>
        </div>

        <div className="w-full sm:w-[50%] relative border-l-0 sm:border-l-4 border-white/10">
          <div className="relative w-full">
            {data.map((paragrap, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-gradient-to-br from-red-600 to-orange-500 text-white p-6 sm:p-12 w-full h-[60vh] mb-[140vh] flex items-center justify-center rounded-2xl shadow-xl"
              >
                <p className="text-base sm:text-xl max-w-xl sm:max-w-2xl text-center font-semibold leading-relaxed tracking-wide">
                  {paragrap.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={highlightContainerRef}
        className="w-full min-h-screen px-4 sm:px-8 py-10 flex flex-col gap-10 justify-center items-center text-center bg-white text-black"
      >
        <h1
          ref={(el) => (highlightRef.current[0] = el)}
          className="text-[clamp(1.75rem,5vw,3.5rem)] sm:text-[clamp(2rem,6vw,5rem)] font-bold relative overflow-hidden"
        >
          <span className="highlight-text text-transparent bg-gradient-to-r from-black to-black bg-clip-text">
            Sustainability
          </span>
        </h1>
        <p
          ref={(el) => (highlightRef.current[1] = el)}
          className="text-[clamp(0.95rem,2vw,1.5rem)] sm:text-[clamp(1rem,2.5vw,1.75rem)] font-medium max-w-2xl sm:max-w-5xl leading-relaxed relative overflow-hidden"
        >
          <span className="highlight-text text-transparent bg-gradient-to-r from-black to-black bg-clip-text">
            Rosier products are minimally processed from consciously and
            sustainably sourced and grown ingredients...
          </span>
        </p>
      </div>

      <div
        ref={sectionRef}
        className="w-full min-h-screen px-4 sm:px-10 py-20 flex flex-col sm:flex-row gap-10 justify-center items-start"
      >
        <div className="w-full sm:w-[50%] relative border-r-0 sm:border-r-4 border-white/10">
          <div className="relative w-full">
            {data.map((paragrap, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-gradient-to-br from-green-600 to-blue-500 text-white p-6 sm:p-12 w-full h-[60vh] mb-[140vh] flex items-center justify-center rounded-2xl shadow-xl"
              >
                <p className="text-base sm:text-xl max-w-xl sm:max-w-2xl text-center font-semibold leading-relaxed tracking-wide">
                  {paragrap.para}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-[40%] sticky top-10 h-fit flex flex-col gap-6 items-center text-center">
          <h2 className="text-4xl sm:text-7xl font-normal leading-tight">
            We are Proudly and Passionately Obsessed with Everything Organic!
          </h2>
          <p className="leading-tight text-base sm:text-lg px-2 sm:px-0">
            In our daily life routine... build their immunity.
          </p>
        </div>
      </div>

      <div
        ref={highlightContainerRef}
        className="w-full min-h-screen px-4 sm:px-8 py-10 flex flex-col gap-10 justify-center items-center text-center bg-white text-black"
      >
        <h1
          ref={(el) => (highlightRef.current[0] = el)}
          className="text-[clamp(1.75rem,5vw,3.5rem)] sm:text-[clamp(2rem,6vw,5rem)] font-bold relative overflow-hidden"
        >
          <span className="highlight-text text-transparent bg-gradient-to-r from-black to-black bg-clip-text">
            We are Proudly and Passionately Obsessed with Everything Organic!
          </span>
        </h1>
        <p
          ref={(el) => (highlightRef.current[1] = el)}
          className="text-[clamp(0.95rem,2vw,1.5rem)] sm:text-[clamp(1rem,2.5vw,1.75rem)] font-medium max-w-2xl sm:max-w-5xl leading-relaxed relative overflow-hidden"
        >
          <span className="highlight-text text-transparent bg-gradient-to-r from-black to-black bg-clip-text">
            In our daily life routine... build their immunity.
          </span>
        </p>
      </div>

      <div className="w-full">
        <div className="relative w-full aspect-[16/9] sm:h-[90vh] sm:aspect-auto">
          <img
            src={ourstory}
            alt="Our Story Visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
