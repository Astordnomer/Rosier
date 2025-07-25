import React, { useEffect, useRef } from 'react';
import { animateCommunitySection } from '../animations/communityAnimation';
import people1 from '../assets/people1.png';
import people2 from '../assets/people2.png';
import people3 from '../assets/people3.png';
import Biodata from '../data/biodata';
import RecipesData from '../data/recipesdata';

function Community() {
  const sectionRef = useRef(null);
  const sliderWrapperRef = useRef(null);  
  const sliderTrackRef = useRef(null);   

  useEffect(() => {
    const cleanup = animateCommunitySection(sectionRef, sliderWrapperRef, sliderTrackRef);
    return cleanup;
  }, []);

  return (
    <>
      <div ref={sectionRef} className="relative min-h-screen bg-black text-white px-4 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="grid grid-cols-3 gap-4 w-full h-full px-10 items-center">
            <img src={people1} alt="bg1" className="w-full opacity-30 object-contain community-img" />
            <img src={people2} alt="bg2" className="w-full opacity-30 object-contain community-img" />
            <img src={people3} alt="bg3" className="w-full opacity-30 object-contain community-img" />
          </div>
        </div>

        <div className="z-10 text-center space-y-4 md:space-y-6">
          <span className="block text-[10vw] md:text-[6vw] font-light tracking-widest community-text">Our</span>
          <h1 className="text-[12vw] md:text-[8vw] font-normal tracking-tight leading-none community-text">
            Community
          </h1>
        </div>
      </div>
      <h1 className='bg-black/90 text-white text-center text-8xl font-light p-10'>Bio</h1>
      <div className="grid bg-black/90 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {Biodata.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 h-70 border-white/10 text-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl shadow-amber-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 p-6"
          >
            <div className="cd-screen-top h-[80%] mb-2 flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={`Card ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="cd-screen-bottom flex flex-col justify-center px-2 h-[20%] ">
              <h3 className="text-lg md:text-xl font-semibold truncate">{item.title}</h3>
              <p className="text-xs md:text-sm truncate">{item.description}</p>
            </div>
          </div>
        ))}
      </div>



      {/* Slider Section */}
      <div ref={sliderWrapperRef} className="w-full bg-black overflow-hidden">
        <div ref={sliderTrackRef} className="flex gap-5 p-40 w-max">
          {[1, 2, 3, 4].map((_, idx) => (
            <video
              key={idx}
              src={`https://www.rosierfoods.com/cdn/shop/files/quinn_${['ihxct52v45yuzasyyqnk4umw', 'lx52bqyaahhvoiojg6n6zqja', 'q1vdh613h2p4m6khcrjqg10p', 'wjki94cx5kiej2yrxbtojpeu'][idx]}.mp4`}
              className="rounded-xl object-cover w-[90vw] md:w-[500px] h-[300px]"
              autoPlay loop muted
            />
          ))}
        </div>
      </div>

      <h1 className='bg-black/90 text-white text-center text-5xl mb:text-8xl font-light p-10'>Rrcripes</h1>
      <div className="grid bg-black/90 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {RecipesData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/5 h-70 border-white/10 text-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl shadow-amber-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 p-6"
          >
            <div className="cd-screen-top h-[80%] mb-2 flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={`Card ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="cd-screen-bottom flex flex-col justify-center px-2 h-[20%] ">
              <h3 className="text-lg md:text-xl font-semibold truncate">{item.title}</h3>
              <p className="text-xs md:text-sm truncate">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Community;
