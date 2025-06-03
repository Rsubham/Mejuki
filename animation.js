document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = { threshold: 0.5 };
  const elementsToAnimate = [
    { selector: ".hero-text h1", animationClass: "animate-topToBottom" },
    { selector: ".hero-text p", animationClass: "animate-bottomToTop" },
    { selector: ".know-more", animationClass: "animate-zoomOut" },
    { selector: ".hero-image", animationClass: "animate-zoomIn" },
    { selector: ".surgical-section h1", animationClass: "animate-topToBottom" },
    { selector: ".surgical-section p", animationClass: "animate-bottomToTop" },
    { selector: ".surgical-card img", animationClass: "animate-zoomIn" },
    { selector: ".explore-products-header h1", animationClass: "animate-leftToRight" },
    { selector: ".explore-products-header a", animationClass: "animate-rightToLeft" },
    { selector: ".explore-products-card img", animationClass: "animate-zoomIn" },
    { selector: ".explore-products-card p", animationClass: "animate-zoomOut" },
    { selector: ".learn-more", animationClass: "animate-leftToRight" },
    { selector: ".about-container img", animationClass: "animate-zoomOut" },
    { selector: ".about-container p", animationClass: "animate-zoomIn" },
    { selector: ".about-container button", animationClass: "animate-bottomToTop" },
    { selector: ".certificate-container h1", animationClass: "animate-topToBottom" },
    { selector: ".certificate-card img", animationClass: "animate-zoomIn" },
    { selector: ".certificate-card p", animationClass: "animate-zoomOut" },
    { selector: ".certificate-container button", animationClass: "animate-bottomToTop" },
    { selector: ".certificate-container-p", animationClass: "animate-zoomIn" },
    { selector: ".testimonials-container h1", animationClass: "animate-topToBottom" },
    { selector: ".testimonial-card", animationClass: "animate-zoomIn" },
    { selector: ".testimonial-text", animationClass: "animate-zoomOut" },
    { selector: ".whatsapp-container-text h1", animationClass: "animate-topToBottom" },
    { selector: ".whatsapp-container-text p", animationClass: "animate-bottomToTop" },
    { selector: ".whatsapp-container-text button", animationClass: "animate-zoomIn" },
    { selector: ".whatsapp-container-img img", animationClass: "animate-zoomIn" },
  ];

  const removeTimeouts = new WeakMap();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        if (removeTimeouts.has(el)) {
          clearTimeout(removeTimeouts.get(el));
          removeTimeouts.delete(el);
        }
        el.classList.add(el.dataset.animation);
      } else {
        const timeoutId = setTimeout(() => {
          el.classList.remove(el.dataset.animation);
          removeTimeouts.delete(el);
        }, 300); 

        removeTimeouts.set(el, timeoutId);
      }
    });
  }, observerOptions);

  elementsToAnimate.forEach(({ selector, animationClass }) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.dataset.animation = animationClass;
      observer.observe(el);
    });
  });
});
