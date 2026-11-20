import { useEffect } from "react";

/** Reveal details content once as it enters the viewport, without scroll listeners. */
export default function useScrollReveal(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!container || motionPreference.matches || !("IntersectionObserver" in window)) return;

    const elements = [...container.querySelectorAll([
      ".product-hero .product-split > *",
      ".product-about > *",
      ".product-section-heading",
      ".product-grid > *",
      ".product-contact-grid > *",
    ].join(","))];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.add("is-revealed");
        observer.unobserve(target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

    elements.forEach((element) => {
      const index = [...element.parentElement.children].indexOf(element);
      element.style.setProperty("--reveal-delay", `${Math.min(index, 3) * 70}ms`);
      element.classList.add("product-reveal");
      observer.observe(element);
    });

    // Keyboard focus and a changed motion preference must show content immediately.
    const revealFocused = (event) => {
      const element = event.target.closest(".product-reveal");
      if (!element) return;
      element.classList.add("is-revealed");
      observer.unobserve(element);
    };
    const disableMotion = () => {
      if (!motionPreference.matches) return;
      observer.disconnect();
      elements.forEach((element) => element.classList.add("is-revealed"));
    };
    container.addEventListener("focusin", revealFocused);
    motionPreference.addEventListener("change", disableMotion);

    return () => {
      observer.disconnect();
      container.removeEventListener("focusin", revealFocused);
      motionPreference.removeEventListener("change", disableMotion);
      elements.forEach((element) => {
        element.classList.remove("product-reveal", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [containerRef]);
}
