import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function startShopMarquee(marqueeRef) {
  const el = marqueeRef.current;
  if (!el) return;

  gsap.killTweensOf(el);

  if (el.children.length < 2) {
    const clone = el.children[0].cloneNode(true);
    el.appendChild(clone);
  }

  gsap.set(el.children, { xPercent: 0 });

  gsap.to(el, {
    xPercent: -50,
    ease: "none",
    duration: 20,
    repeat: -1,
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0),
    }
  });
}

export function autoImageSlider() {
  const container = document.querySelector(".slider-container");
  if (!container) return;

  const images = container.querySelectorAll(".slider-img");
  if (images.length < 2) return;

  gsap.set(container, { position: "relative", overflow: "hidden" });
  gsap.set(images, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    xPercent: 100,
    zIndex: 0,
  });

  let currentIndex = 0;
  gsap.set(images[currentIndex], { xPercent: 0, zIndex: 1 });

  let intervalId;

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;

    const tl = gsap.timeline();
    tl.to(images[currentIndex], {
      xPercent: -100,
      zIndex: 0,
      duration: 1.5,
      ease: "power2.inOut",
    });
    tl.fromTo(
      images[nextIndex],
      { xPercent: 100, zIndex: 1 },
      {
        xPercent: 0,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );

    currentIndex = nextIndex;
  };

  const startSlider = () => {
    intervalId = setInterval(goToNextSlide, 5000);
  };

  const stopSlider = () => {
    clearInterval(intervalId);
  };

  container.addEventListener("mouseenter", stopSlider);
  container.addEventListener("mouseleave", startSlider);

  startSlider();
}