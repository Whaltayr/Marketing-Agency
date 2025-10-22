 // GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // hero entrance
    gsap.from("#hero .hero-content", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.1
    });

    gsap.from("#hero .hero-image img", {
      scale: 0.98,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.15,
      transformOrigin: "center center"
    });

    // cards stagger
    gsap.from("[data-animate='card']", {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: "#solucao",
        start: "top 80%"
      }
    });


    