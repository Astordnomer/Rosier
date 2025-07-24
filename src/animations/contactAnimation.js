import gsap from 'gsap';
export const animateContactSection = (container) => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } });

  if (!container) return;
  tl.fromTo(
    container.querySelector('.contact-title'),
    { y: 50, autoAlpha: 0 },
    { y: 0, autoAlpha: 1 }
  );
  const contactItems = container.querySelectorAll('.left-sms-left, .left-sms-right, .right-smc > div');

  tl.fromTo(
    contactItems,
    { y: 30, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, stagger: 0.2 },
    "-=0.4"
  );
  tl.fromTo(
    container.querySelectorAll('.form-field'),
    { y: 30, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, stagger: 0.15 },
    "-=0.5"
  );

  const socialIcons = container.querySelectorAll('.ri-facebook-circle-fill, .ri-youtube-fill, .ri-instagram-line');
  tl.fromTo(
    socialIcons,
    { scale: 0.5, autoAlpha: 0 },
    { scale: 1, autoAlpha: 1, stagger: 0.2 },
    "-=0.5"
  );
};
