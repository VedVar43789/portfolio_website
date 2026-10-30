import type Lenis from "lenis";

let instance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null): void => {
  instance = lenis;
};

export const getLenis = (): Lenis | null => instance;

export const stopScroll = (): void => {
  instance?.stop();
};

export const startScroll = (): void => {
  instance?.start();
};
