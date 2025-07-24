import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function runGsapAnimations({
  containerRef,
  textsRef,
  clipRef,
  sectionRef,
  cardsRef,
  highlightRef,
  highlightContainerRef,
}) {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
      },
    });

    gsap.set(textsRef.current[0], { opacity: 1 });

    textsRef.current.forEach((el, index) => {
      if (index === 0) return;
      tl.to(textsRef.current[index - 1], { opacity: 0, duration: 0.3 });
      tl.to(el, { opacity: 1, duration: 0.3 });
    });

    tl.to(textsRef.current[textsRef.current.length - 1], {
      opacity: 0,
      duration: 0.3,
    });

    tl.to(
      clipRef.current,
      {
        clipPath: "circle(100% at 50% 50%)",
        duration: 1.5,
        ease: "power2.inOut",
      },
      "+=0.2"
    );
  }, containerRef);

  const ctx2 = gsap.context(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "+=90%",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        }
      );
    });
  }, sectionRef);

  const ctx3 = gsap.context(() => {
    highlightRef.current.forEach((el) => {
      const inner = el.querySelector(".highlight-text");

      gsap.fromTo(
        inner,
        {
          backgroundSize: "0% 100%",
          backgroundPosition: "0 100%",
          visibility: "visible",
        },
        {
          backgroundSize: "100% 100%",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.create({
      trigger: highlightContainerRef.current,
      start: "top top",
      end: "bottom+=100%",
      pin: true,
      scrub: true,
    });
  });

  return [ctx, ctx2, ctx3];
}
