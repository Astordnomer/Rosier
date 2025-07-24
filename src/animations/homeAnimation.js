import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const homeAnimation = () => {
  gsap.set([".lamp", ".text-animation", ".atta", ".ghee", ".honey", ".oil", ".butier", ".desk"], { opacity: 1 });

  const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

  tl.from(".lamp", { y: -150, opacity: 0 })
    .from(".text-animation", { scale: 0.8, opacity: 0 }, "-=0.6")
    .from(".atta", { y: 80, opacity: 0 }, "-=0.4")
    .from(".ghee", { y: 80, opacity: 0 }, "-=0.4")
    .from(".honey", { y: 80, opacity: 0 }, "-=0.4")
    .from(".butier", { y: 80, opacity: 0 }, "-=0.4")
    .from(".oil", { y: 80, opacity: 0 }, "-=0.4")
    .from(".desk", { y: 40, opacity: 0 }, "-=0.6");

  gsap.to(".lamp", {
    y: 100,
    scrollTrigger: {
      trigger: ".home-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".text-animation", {
    y: -100,
    scale: 1.1,
    scrollTrigger: {
      trigger: ".home-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".atta", {
    y: -80,
    scrollTrigger: {
      trigger: ".home-section",
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".ghee", {
    y: -60,
    scrollTrigger: {
      trigger: ".home-section",
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".honey", {
    y: -50,
    scrollTrigger: {
      trigger: ".home-section",
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".oil", {
    y: -70,
    scrollTrigger: {
      trigger: ".home-section",
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".butier", {
    y: -40,
    scrollTrigger: {
      trigger: ".home-section",
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".desk", {
    y: -30,
    scrollTrigger: {
      trigger: ".home-section",
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.from(".Products h2", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".Products h2",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.utils.toArray(".product-card").forEach((card, i) => {
    gsap.fromTo(card,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: i * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 90%", 
          toggleActions: "play none none reverse",
        },
      }
    );
  });


  const slider = document.querySelector(".review-slider");
  const sliderWrapper = document.querySelector(".review-slider-wrapper");

  const totalWidth = slider.scrollWidth / 2; 

  gsap.to(slider, {
    x: `-=${totalWidth}`, 
    ease: "none",
    duration: 30,
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % totalWidth), 
    },
  });

};
