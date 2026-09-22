"use client";

import { useEffect } from "react";

export function PortfolioEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const nav = document.querySelector<HTMLElement>(".home-nav");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-section]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".home-nav-links a"));
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    root.classList.add("reveal-ready");

    let revealObserver: IntersectionObserver | undefined;
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.setAttribute("data-visible", "true"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-visible", "true");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10%", threshold: 0.12 },
      );
      revealItems.forEach((item) => revealObserver?.observe(item));
    }

    const updateNavigation = () => {
      nav?.toggleAttribute("data-scrolled", window.scrollY > 24);
      let activeId = sections[0]?.id;
      const marker = Math.min(window.innerHeight * 0.42, 360);
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) activeId = section.id;
      });
      navLinks.forEach((link) => {
        link.toggleAttribute("data-active", link.hash === `#${activeId}`);
      });
    };

    const pointerCleanups: Array<() => void> = [];
    if (finePointer.matches) {
      const interactiveSurfaces = Array.from(
        document.querySelectorAll<HTMLElement>(".home-hero, .project-showcase-card"),
      );
      interactiveSurfaces.forEach((element) => {
        const handleMove = (event: PointerEvent) => {
          const bounds = element.getBoundingClientRect();
          element.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
          element.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
        };
        element.addEventListener("pointermove", handleMove);
        pointerCleanups.push(() => element.removeEventListener("pointermove", handleMove));
      });
    }

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);

    return () => {
      root.classList.remove("reveal-ready");
      revealObserver?.disconnect();
      pointerCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  return null;
}
