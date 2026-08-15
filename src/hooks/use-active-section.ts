import { useEffect, useState } from "react";
import { SECTIONS, type SectionId } from "@/lib/scroll";

/** Tracks the section currently occupying most of the viewport. */
export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!elements.length || typeof IntersectionObserver === "undefined") return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let best: SectionId = "home";
        let bestRatio = 0;
        for (const section of SECTIONS) {
          const ratio = ratios.get(section.id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = section.id;
          }
        }
        if (bestRatio > 0) setActive(best);
      },
      {
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
        rootMargin: "-88px 0px -35% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

/** True once the page has scrolled past the given offset. */
export function useScrolled(offset = 50) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
}
