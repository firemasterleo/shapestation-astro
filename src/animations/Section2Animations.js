import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const overlays = {
    overlay1: document.querySelector(".overlay1"),
    overlay2: document.querySelector(".overlay2"),
    overlay3: document.querySelector(".overlay3"),
    overlay4: document.querySelector(".overlay4"),
    overlay5: document.querySelector(".overlay5"),
    overlay6: document.querySelector(".overlay6"),
    overlay7: document.querySelector(".overlay7"),
    overlay8: document.querySelector(".overlay8"),
  };

  const overlayAnimations = [
    { element: overlays.overlay1, start: "top 95%", end: "bottom 70%" },
    { element: overlays.overlay2, start: "top 85%", end: "bottom 60%" },
    { element: overlays.overlay3, start: "top 75%", end: "bottom 50%" },
    { element: overlays.overlay4, start: "top 65%", end: "bottom 40%" },
    { element: overlays.overlay5, start: "top 55%", end: "bottom 30%" },
    { element: overlays.overlay6, start: "top 95%", end: "bottom 70%" },
    { element: overlays.overlay7, start: "top 85%", end: "bottom 60%" },
    { element: overlays.overlay8, start: "top 75%", end: "bottom 50%" },
  ];

  overlayAnimations.forEach(({ element, start, end }) => {
    if (element) {
      gsap.fromTo(
        element,
        { x: "0%" },
        {
          x: "100%",
          ease: "cubic-bezier(0.25, 1, 0.5, 1)",
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: 1.7,
          },
        }
      );
    }
  });
});
