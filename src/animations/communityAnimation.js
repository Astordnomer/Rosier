import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateCommunitySection = (sectionRef, sliderWrapperRef, sliderTrackRef) => {
  const ctx = gsap.context(() => {
    // Text Animations
    gsap.from('.community-text', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out'
    });

    // Image Animations
    gsap.from('.community-img', {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // ✅ Slider Animation (safe selector via ref)
    if (sliderWrapperRef?.current && sliderTrackRef?.current) {
      gsap.to(sliderTrackRef.current, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sliderWrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }, sectionRef); // 👈 scope animations inside hero section

  return () => ctx.revert(); // cleanup
};
