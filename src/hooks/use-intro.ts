import type { RefObject } from "react";

import { gsap, prefersReducedMotion, useGSAP } from "@/lib/motion/gsap";

type IntroBuilder = (timeline: gsap.core.Timeline, root: HTMLElement) => void;

/**
 * Plays a section intro as soon as the page hydrates.
 * Elements marked with data-intro are hidden by CSS until this timeline starts.
 */
export const useIntro = (
  scope: RefObject<HTMLElement | null>,
  build: IntroBuilder,
  dependencies: unknown[] = [],
): void => {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const gates = root.querySelectorAll("[data-intro]");

      if (prefersReducedMotion()) {
        gsap.set(gates, { opacity: 1 });
        return;
      }

      const timeline = gsap.timeline({ delay: 0.15, defaults: { ease: "expo.out" } });

      build(timeline, root);
      timeline.set(gates, { opacity: 1 }, 0);
    },
    { scope, dependencies, revertOnUpdate: true },
  );
};
