gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".box",
        start: "top 75%", // When the top of the box hits 75% of the viewport
        end: "top 25%",
        scrub: true,
    },
    x: 200, // Moves 200px to the right
    rotation: 360, // Rotates 360 degrees
});
