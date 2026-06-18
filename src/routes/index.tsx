import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education, Experience, Projects, Skills, Contact } from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedant | AI Systems Engineer" },
      {
        name: "description",
        content:
          "Vedant Vardhaan, AI Systems Engineer building agentic AI and full-stack systems. Data Science @ UC San Diego.",
      },
      { property: "og:title", content: "Vedant | AI Systems Engineer" },
      {
        property: "og:description",
        content: "Agentic AI, multi-agent systems, and production full-stack engineering.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const layerFarRef = useRef<HTMLDivElement | null>(null);
  const layerMidRef = useRef<HTMLDivElement | null>(null);
  const layerNearRef = useRef<HTMLDivElement | null>(null);
  const glowSoftRef = useRef<HTMLDivElement | null>(null);
  const glowCoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const layers = [layerFarRef.current, layerMidRef.current, layerNearRef.current].filter(Boolean) as HTMLDivElement[];
    const glowSoft = glowSoftRef.current;
    const glowCore = glowCoreRef.current;
    if (layers.length !== 3 || !glowSoft || !glowCore) return;

    const depth = [10, 22, 36];
    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: center.x, y: center.y };
    const smoothed = { x: center.x, y: center.y };
    const glowLead = { x: center.x, y: center.y };
    const glowTail = { x: center.x, y: center.y };
    let raf = 0;

    const setPointer = (x: number, y: number) => {
      target.x = x;
      target.y = y;
    };

    const onPointerMove = (event: PointerEvent) => {
      setPointer(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 0) return;
      const t = event.touches[0];
      setPointer(t.clientX, t.clientY);
    };

    const onResize = () => {
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;
      setPointer(x, y);
      smoothed.x = x;
      smoothed.y = y;
      glowLead.x = x;
      glowLead.y = y;
      glowTail.x = x;
      glowTail.y = y;
    };

    const onPointerLeave = () => {
      setPointer(window.innerWidth * 0.5, window.innerHeight * 0.5);
    };

    const animate = () => {
      const t = performance.now() * 0.00035;
      smoothed.x += (target.x - smoothed.x) * 0.1;
      smoothed.y += (target.y - smoothed.y) * 0.1;

      const nx = (smoothed.x / window.innerWidth - 0.5) * 2;
      const ny = (smoothed.y / window.innerHeight - 0.5) * 2;
      layers.forEach((layer, idx) => {
        const driftX = Math.sin(t + idx * 1.9) * (idx + 1) * 1.4;
        const driftY = Math.cos(t * 0.9 + idx * 1.3) * (idx + 1) * 1.2;
        const x = nx * depth[idx] + driftX;
        const y = ny * depth[idx] + driftY;
        layer.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      });

      glowLead.x += (smoothed.x - glowLead.x) * 0.18;
      glowLead.y += (smoothed.y - glowLead.y) * 0.18;
      glowTail.x += (glowLead.x - glowTail.x) * 0.05;
      glowTail.y += (glowLead.y - glowTail.y) * 0.05;

      const breathe = 1 + Math.sin(t * 2.2) * 0.03;
      glowCore.style.transform = `translate3d(${glowLead.x.toFixed(2)}px, ${glowLead.y.toFixed(2)}px, 0) translate3d(-50%, -50%, 0) scale(${breathe.toFixed(3)})`;
      glowSoft.style.transform = `translate3d(${glowTail.x.toFixed(2)}px, ${glowTail.y.toFixed(2)}px, 0) translate3d(-50%, -50%, 0) scale(${(1.06 + Math.cos(t * 1.8) * 0.04).toFixed(3)})`;

      raf = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", onResize);
    raf = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip">
      <div className="parallax-scene" aria-hidden>
        <div ref={layerFarRef} className="parallax-layer parallax-layer--far" />
        <div ref={layerMidRef} className="parallax-layer parallax-layer--mid" />
        <div ref={layerNearRef} className="parallax-layer parallax-layer--near" />
      </div>

      <div className="dream-glow-scene" aria-hidden>
        <div ref={glowSoftRef} className="dream-glow dream-glow--soft" />
        <div ref={glowCoreRef} className="dream-glow dream-glow--core" />
      </div>

      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
