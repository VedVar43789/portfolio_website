import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap, isFinePointer, prefersReducedMotion, useGSAP } from "@/lib/motion/gsap";
import { useIntro } from "@/hooks/use-intro";
import { RecLabel, Viewfinder } from "@/components/generals/viewfinder";
import { SplitWords } from "@/components/generals/split-words";
import { Timecode } from "@/components/generals/timecode";
import { LINKS } from "@/components/portfolio/data";
import { media, orgLogos, projectCovers } from "@/constants/media";

const scatterCards = [
  { image: projectCovers["PantryPal, Smart Recipe Recommender"], x: "14%", y: "10%", r: -8, label: "Vision", tag: "ML" },
  { image: media.geisel, x: "84%", y: "20%", r: 6, label: "Campus", tag: "UCSD" },
  { image: projectCovers["Blood Report Analysis Chatbot"], x: "8%", y: "68%", r: 5, label: "RAG", tag: "ML" },
  { image: projectCovers["The Seismic Lottery"], x: "90%", y: "66%", r: -6, label: "Viz", tag: "ML" },
  { image: projectCovers["Reinforcement Learning Poker Bot"], x: "28%", y: "110%", r: 4, label: "RL", tag: "ML" },
  { image: projectCovers["TubeScope, Trending Lifecycle Analytics"], x: "72%", y: "110%", r: -4, label: "Forecast", tag: "ML" },
];

const lineClass =
  "block font-wide text-[clamp(2.6rem,12vw,17rem)] font-semibold uppercase leading-[0.8] tracking-[-0.055em]";

export function Hero() {
  const scope = useRef<HTMLElement>(null);

  useIntro(scope, (timeline, root) => {
    const words = root.querySelectorAll("[data-hero-line] [data-word]");
    const frame = root.querySelector("[data-hero-frame]");
    const figure = root.querySelector("[data-hero-figure]");
    const bbox = root.querySelector("[data-hero-bbox]");
    const meta = root.querySelectorAll("[data-hero-meta]");
    const hud = root.querySelectorAll("[data-hero-hud]");
    const rows = root.querySelectorAll("[data-hero-row-inner]");
    const bloom = root.querySelector("[data-hero-bloom]");
    const badge = root.querySelector("[data-hero-badge]");
    const score = root.querySelector<HTMLElement>("[data-hero-score]");

    timeline
      .from(bloom, { scale: 0.4, autoAlpha: 0, duration: 2.4, ease: "expo.out" }, 0)
      .fromTo(
        frame,
        { clipPath: "inset(50% 0% 50% 0%)", rotate: -6 },
        { clipPath: "inset(0% 0% 0% 0%)", rotate: 0, duration: 1.6, ease: "expo.inOut" },
        0,
      )
      .from(figure, { yPercent: 14, autoAlpha: 0, duration: 1.8, ease: "expo.out" }, 0.5)
      .from(rows, { xPercent: (index: number) => (index % 2 === 0 ? -14 : 14), duration: 1.8, stagger: 0.08 }, 0.3)
      .from(words, { yPercent: 120, rotate: 6, duration: 1.4, stagger: 0.1 }, 0.35)
      .from(hud, { autoAlpha: 0, duration: 0.8, stagger: 0.06, ease: "power2.out" }, 1.1)
      .from(meta, { autoAlpha: 0, y: 24, duration: 1.2, stagger: 0.08 }, 0.9)
      .from(badge, { scale: 0, rotate: -120, duration: 1.4, ease: "back.out(1.6)" }, 1.2)
      .from(bbox, { scale: 1.18, autoAlpha: 0, duration: 0.9, ease: "power3.out" }, 1.5);

    if (score) {
      const counter = { value: 0.41 };
      timeline.to(
        counter,
        {
          value: 0.99,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            score.textContent = counter.value.toFixed(2);
          },
        },
        1.5,
      );
    }
  });

  useGSAP(
    () => {
      const root = scope.current;
      if (!root || !isFinePointer() || prefersReducedMotion()) return;

      const tilt = root.querySelector("[data-hero-tilt]");
      const text = root.querySelector("[data-hero-pointer-text]");
      const bloom = root.querySelector("[data-hero-bloom-move]");
      if (!tilt || !text || !bloom) return;

      const tiltX = gsap.quickTo(tilt, "rotationY", { duration: 1.2, ease: "expo.out" });
      const tiltY = gsap.quickTo(tilt, "rotationX", { duration: 1.2, ease: "expo.out" });
      const moveTiltX = gsap.quickTo(tilt, "x", { duration: 1.2, ease: "expo.out" });
      const moveTiltY = gsap.quickTo(tilt, "y", { duration: 1.2, ease: "expo.out" });
      const moveTextX = gsap.quickTo(text, "x", { duration: 1.6, ease: "expo.out" });
      const moveBloomX = gsap.quickTo(bloom, "x", { duration: 2.4, ease: "expo.out" });
      const moveBloomY = gsap.quickTo(bloom, "y", { duration: 2.4, ease: "expo.out" });

      gsap.set(tilt, { transformPerspective: 900 });

      const handleMove = (event: PointerEvent) => {
        const bounds = root.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;

        tiltX(x * 14);
        tiltY(y * -10);
        moveTiltX(x * 40);
        moveTiltY(y * 30);
        moveTextX(x * -30);
        moveBloomX(x * 160);
        moveBloomY(y * 120);
      };

      const handleLeave = () => {
        tiltX(0);
        tiltY(0);
        moveTiltX(0);
        moveTiltY(0);
        moveTextX(0);
        moveBloomX(0);
        moveBloomY(0);
      };

      root.addEventListener("pointermove", handleMove);
      root.addEventListener("pointerleave", handleLeave);

      return () => {
        root.removeEventListener("pointermove", handleMove);
        root.removeEventListener("pointerleave", handleLeave);
      };
    },
    { scope },
  );

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        // Final card position: the configured percentage, capped so a card never runs past the bottom of the screen.
        const cardTop = (_: number, el: HTMLElement) => {
          const area = el.parentElement as HTMLElement;
          const middle = area.parentElement as HTMLElement;
          const figure = el.firstElementChild as HTMLElement;
          const wanted = (parseFloat(el.dataset.y ?? "50") / 100) * middle.clientHeight;
          const room = root.clientHeight - middle.offsetTop - 20 - figure.offsetHeight / 2;
          return `${Math.min(wanted, room)}px`;
        };

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=110%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to('[data-hero-row="1"]', { xPercent: -14 }, 0)
          .to('[data-hero-row="2"]', { xPercent: 10 }, 0)
          .to('[data-hero-row="3"]', { xPercent: 16 }, 0)
          .to("[data-hero-fade]", { autoAlpha: 0, y: -40, duration: 0.5 }, 0)
          .to("[data-hero-frame-wrap]", { scale: 1.15 }, 0)
          .fromTo(
            "[data-hero-card]",
            { left: "50%", top: "50%", scale: 0.3, rotate: 0, autoAlpha: 0 },
            {
              left: (_: number, el: HTMLElement) => el.dataset.x ?? "50%",
              top: cardTop,
              scale: 1,
              rotate: (_: number, el: HTMLElement) => Number(el.dataset.r ?? 0),
              autoAlpha: 1,
              ease: "power3.out",
              stagger: 0.04,
            },
            0.1,
          )
          .fromTo("[data-hero-caption]", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.6);
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      id="top"
      aria-label="Vedant Vardhaan introduction"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink pb-8 pt-24 text-bone md:pt-28"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[110vw] -translate-x-1/2 -translate-y-1/2 md:size-[70vw]"
        data-hero-bloom-move=""
        aria-hidden="true"
      >
        <div className="size-full" data-hero-bloom="">
          <div className="bloom bloom-breathe size-full opacity-[0.22]" />
        </div>
      </div>

      <div className="relative z-10" data-hero-fade="">
        <div className="gutter grid grid-cols-2 items-start gap-4 md:grid-cols-3" data-intro="">
          <div data-hero-meta="">
            <RecLabel label="Human × AI" className="text-bone" />
          </div>
          <span className="hidden md:block" aria-hidden="true" />
          <p className="eyebrow text-right text-stone" data-hero-meta="">
            UC San Diego / La Jolla, CA
          </p>
        </div>
      </div>

      <div className="relative flex min-h-[58svh] flex-1 items-center py-10 md:min-h-0 md:py-6">
        <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
          {scatterCards.map((card) => (
            <div
              key={card.label}
              className="pointer-events-auto invisible absolute left-1/2 top-1/2 size-0 opacity-0"
              data-hero-card=""
              data-x={card.x}
              data-y={card.y}
              data-r={card.r}
            >
              <figure className="absolute left-0 top-0 flex w-[9vw] min-w-28 -translate-x-1/2 -translate-y-1/2 flex-col gap-2">
                <div className="relative aspect-[3/4] overflow-hidden bg-ink-raised shadow-2xl shadow-black/60">
                  <img src={card.image} alt="" className="size-full object-cover" />
                  <Viewfinder size="sm" className="inset-2" />
                </div>
                <figcaption className="eyebrow flex justify-between text-[0.55rem] text-stone">
                  <span>{card.label}</span>
                  <span className="text-flare">{card.tag}</span>
                </figcaption>
              </figure>
            </div>
          ))}

          <p className="invisible absolute inset-x-0 bottom-4 text-center opacity-0" data-hero-caption="">
            <span className="eyebrow text-stone">One student / </span>
            <span className="font-serif text-2xl italic text-bone">every model, shipped to production.</span>
          </p>
        </div>

        <div className="absolute left-1/2 top-1/2 z-0 size-0" data-hero-frame-wrap="">
          <div className="absolute left-0 top-0 aspect-[9/16] h-[min(36svh,22rem)] -translate-x-1/2 -translate-y-1/2 md:h-[min(54svh,36rem)]">
            <div className="size-full" data-hero-tilt="">
              <div className="relative size-full" data-intro="">
                <div className="frame-grid absolute inset-0 overflow-hidden bg-ink-raised" data-hero-frame="">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_100%,rgba(212,107,255,0.28),transparent_70%)]"
                    aria-hidden="true"
                  />
                  <Viewfinder />
                  <div
                    className="eyebrow absolute inset-x-6 top-6 z-10 flex justify-between text-[0.6rem] text-bone/90"
                    data-hero-hud=""
                  >
                    <Timecode />
                    <span>YOLOv8n</span>
                  </div>
                  <div
                    className="eyebrow absolute inset-x-6 bottom-6 z-10 flex justify-between text-[0.6rem] text-bone/90"
                    data-hero-hud=""
                  >
                    <span>track_id 43789</span>
                    <span>9:16</span>
                  </div>
                  <span
                    className="scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-flare/80 shadow-[0_0_12px_2px_rgba(212,107,255,0.5)]"
                    aria-hidden="true"
                  />
                </div>

                <div className="pointer-events-none absolute bottom-[-4%] left-1/2 aspect-[1696/2528] h-[122%] -translate-x-1/2">
                  <div className="relative size-full" data-hero-figure="">
                    <img
                      src={media.hero}
                      alt="Illustrated portrait of Vedant Vardhaan in a plum shirt and glasses, one hand resting at his hip"
                      className="size-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
                      fetchPriority="high"
                    />
                    <div
                      className="absolute bottom-[1.5%] left-[27%] top-[2%] w-[49%] border border-flare/80"
                      data-hero-bbox=""
                      aria-hidden="true"
                    >
                      <span className="eyebrow absolute -top-5 left-[-1px] whitespace-nowrap bg-flare px-1.5 py-0.5 text-[0.55rem] text-ink">
                        person <span data-hero-score="">0.99</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1
          className="gutter relative z-10 w-full text-white mix-blend-difference"
          data-intro=""
          data-hero-line=""
          data-hero-pointer-text=""
        >
          <span className={lineClass} data-hero-row="1">
            <span className="block" data-hero-row-inner="">
              <SplitWords text="Vedant" />
            </span>
          </span>

          <span className="block text-right" data-hero-row="2">
            <span className="inline-block" data-hero-row-inner="">
              <SplitWords
                text="Vardhaan"
                className="inline-block pr-[2vw] font-serif text-[clamp(3rem,13.5vw,19rem)] font-normal italic leading-[0.86] tracking-[-0.03em]"
              />
            </span>
          </span>

          <span className={`${lineClass} relative pl-[8vw]`} data-hero-row="3">
            <span className="eyebrow absolute left-[clamp(1.25rem,3.2vw,2.75rem)] top-[14%] hidden font-sans text-[0.7rem] font-normal leading-tight tracking-[0.14em] md:block">
              AI
              <br />
              Systems
            </span>
            <span className="block" data-hero-row-inner="">
              <SplitWords text="Engineer" />
            </span>
          </span>
        </h1>
      </div>

      <div className="relative z-10" data-hero-fade="">
        <div className="gutter grid gap-8 md:grid-cols-12 md:items-end" data-intro="">
          <div className="flex flex-col gap-5 md:col-span-5" data-hero-meta="">
            <p className="max-w-sm text-base leading-relaxed text-bone/80 md:text-lg">
              Data Science student at UC San Diego with a passion for machine learning, AI, and software development.
            </p>
            <div className="eyebrow flex flex-wrap items-center gap-x-5 gap-y-2 text-bone">
              <a href="#projects" className="link-underline flex items-center gap-1.5 py-1">
                View projects <ArrowDown className="size-3" />
              </a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="link-underline flex items-center gap-1.5 py-1">
                GitHub <ArrowUpRight className="size-3" />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="link-underline flex items-center gap-1.5 py-1">
                LinkedIn <ArrowUpRight className="size-3" />
              </a>
              <a href={LINKS.resumeAIML} target="_blank" rel="noreferrer" className="link-underline flex items-center gap-1.5 py-1">
                Resume <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 md:col-span-4 md:col-start-7" data-hero-meta="">
            <div className="flex -space-x-3">
              {orgLogos.map((logo) => (
                <span
                  key={logo.alt}
                  className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-bone md:size-11"
                >
                  <img src={logo.src} alt={logo.alt} className="size-full object-contain p-1.5" />
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Open to AI / ML Engineering and SWE roles</span>
              <span className="eyebrow text-stone">PwC · UCSD · IIT Guwahati · DS3 · E4E · CSES</span>
            </div>
          </div>

          <a href="#about" className="group hidden items-center justify-end gap-3 text-sm md:col-span-2 md:flex" data-hero-meta="">
            <span className="sr-only">Scroll to explore</span>
            <span className="relative flex size-24 items-center justify-center" data-hero-badge="" aria-hidden="true">
              <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 size-full text-stone transition-colors group-hover:text-bone">
                <defs>
                  <path id="hero-badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-current font-mono text-[9.5px] uppercase tracking-[0.32em]">
                  <textPath href="#hero-badge-circle">Scroll to explore / Vedant Vardhaan /</textPath>
                </text>
              </svg>
              <span className="flex size-10 items-center justify-center rounded-full border border-bone/30 transition-colors group-hover:border-flare group-hover:bg-flare group-hover:text-ink">
                <ArrowDown className="size-4" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
