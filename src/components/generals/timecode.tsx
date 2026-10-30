import { useEffect, useRef } from "react";

const pad = (value: number) => String(value).padStart(2, "0");

/** Running camera timecode (HH:MM:SS:FF). Starts at zero on the server and ticks after mount. */
export function Timecode({ className, fps = 24 }: { className?: string; fps?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = performance.now();
    let frame = 0;

    const render = (now: number) => {
      const elapsed = (now - start) / 1000;
      const hours = Math.floor(elapsed / 3600);
      const minutes = Math.floor((elapsed % 3600) / 60);
      const seconds = Math.floor(elapsed % 60);
      const frames = Math.floor((elapsed % 1) * fps);

      element.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, [fps]);

  return (
    <span ref={ref} className={className}>
      00:00:00:00
    </span>
  );
}
