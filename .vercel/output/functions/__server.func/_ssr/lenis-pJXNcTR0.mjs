import { r as gsapWithCSS, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { n as ScrollTrigger, t as Flip } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lenis-pJXNcTR0.js
if (typeof window !== "undefined") {
	gsapWithCSS.registerPlugin(ScrollTrigger, Flip, useGSAP);
	gsapWithCSS.defaults({
		ease: "expo.out",
		duration: 1.2
	});
	ScrollTrigger.config({ ignoreMobileResize: true });
}
var prefersReducedMotion = () => {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
var isFinePointer = () => {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
};
var instance = null;
var setLenis = (lenis) => {
	instance = lenis;
};
var stopScroll = () => {
	instance?.stop();
};
var startScroll = () => {
	instance?.start();
};
//#endregion
export { stopScroll as a, startScroll as i, prefersReducedMotion as n, setLenis as r, isFinePointer as t };
