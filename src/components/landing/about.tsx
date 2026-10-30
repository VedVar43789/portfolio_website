import { Fragment, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { ABOUT, EDUCATION, EXPERIENCE, PROJECTS } from "@/components/portfolio/data";
import { gsap, isFinePointer, prefersReducedMotion, useGSAP } from "@/lib/motion/gsap";
import { useReveal } from "@/hooks/use-reveal";
import { Marquee } from "@/components/generals/marquee";
import { SplitWords } from "@/components/generals/split-words";
import { Viewfinder } from "@/components/generals/viewfinder";
import { media, projectAwards } from "@/constants/media";

const statement = "I turn messy data into models that ship to real users.";

const keywords = ["Agentic AI", "Computer Vision", "Applied ML", "Full-stack", "Research", "Leadership"];

const facets = [
  {
    label: "Interests",
    text: "Machine learning, agentic AI and computer vision, aimed at problems with real stakes: health, ecology, finance and how people behave online.",
  },
  {
    label: "Work",
    text: "Agentic AI engineering at PwC and Oaken, CTO at UniCircle, and ongoing applied AI research at UCSD's STSLab on whether AI conversations can reduce toxic discourse.",
  },
  {
    label: "Achievements",
    text: "3.96 GPA with Provost Honors. Best project at the Claude Impact Lab, Best Project at DS3 Fall 2025, and Best Project and People's Choice among 42 teams in DSC 106. President of CSES Open Source.",
  },
];

const stats = [
  { value: parseFloat(EDUCATION.gpa), decimals: 2, label: "GPA" },
  { value: PROJECTS.length, decimals: 0, label: "Projects built" },
  { value: EXPERIENCE.length, decimals: 0, label: "Roles held" },
  { value: Object.keys(projectAwards).length, decimals: 0, label: "Project wins" },
];

function CountStat({ value, decimals, label }: { value: number; decimals: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const state = { v: 0 };
    let tween: gsap.core.Tween | undefined;
    el.textContent = (0).toFixed(decimals);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        tween = gsap.to(state, {
          v: value,
          duration: 2.4,
          ease: "expo.out",
          onUpdate: () => {
            el.textContent = state.v.toFixed(decimals);
          },
          onComplete: () => {
            el.textContent = value.toFixed(decimals);
          },
        });
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      tween?.kill();
      el.textContent = value.toFixed(decimals);
    };
  }, [value, decimals]);

  return (
    <div className="group/stat relative border-t border-ink/20 pt-5">
      <span
        className="absolute left-0 top-[-1px] h-px w-full origin-left scale-x-0 bg-flare transition-transform duration-700 ease-expo group-hover/stat:scale-x-100"
        aria-hidden="true"
      />
      <span
        ref={ref}
        className="block font-wide text-[clamp(3rem,7vw,7rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums transition-colors duration-500 group-hover/stat:text-flare"
      >
        {value.toFixed(decimals)}
      </span>
      <span className="eyebrow mt-4 block text-stone-deep">{label}</span>
    </div>
  );
}

export function About() {
  const scope = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useReveal(scope);

  useGSAP(
    () => {
      const el = statementRef.current;
      if (!el || prefersReducedMotion()) return;

      gsap.fromTo(
        el.querySelectorAll("[data-mword]"),
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 52%", scrub: true },
        },
      );
    },
    { scope },
  );

  useGSAP(
    () => {
      const card = tiltRef.current;
      const glare = glareRef.current;
      if (!card || !glare || !isFinePointer() || prefersReducedMotion()) return;

      gsap.set(card, { transformPerspective: 900 });
      const rotY = gsap.quickTo(card, "rotationY", { duration: 0.9, ease: "expo.out" });
      const rotX = gsap.quickTo(card, "rotationX", { duration: 0.9, ease: "expo.out" });

      const handleMove = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        rotY(x * 14);
        rotX(y * -14);
        glare.style.background = `radial-gradient(60% 60% at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(212,107,255,0.35), transparent 70%)`;
        glare.style.opacity = "1";
      };

      const handleLeave = () => {
        rotY(0);
        rotX(0);
        glare.style.opacity = "0";
      };

      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", handleLeave);
      return () => {
        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", handleLeave);
      };
    },
    { scope },
  );

  return (
    <section ref={scope} id="about" className="relative scroll-mt-20 overflow-hidden bg-bone py-24 text-ink md:py-40">
      <div className="gutter">
        <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-6">
          <div className="md:col-span-3" data-reveal="fade">
            <p className="eyebrow">01 About</p>
            <span className="mt-4 block h-px w-full bg-ink/20" data-reveal="line" />
          </div>

          <p
            ref={statementRef}
            className="font-wide text-[clamp(2rem,5.6vw,6.25rem)] font-semibold uppercase leading-[0.98] tracking-[-0.045em] md:col-span-9"
          >
            {statement.split(" ").map((word, index) => (
              <Fragment key={`${word}-${index}`}>
                <span
                  data-mword=""
                  className="inline-block cursor-default transition-[color,transform,text-shadow] duration-500 ease-expo hover:-translate-y-[0.05em] hover:text-[#9b3fd6] hover:opacity-100! hover:[text-shadow:0_0_0.6em_rgba(155,63,214,0.35)]"
                >
                  {word}
                </span>{" "}
              </Fragment>
            ))}
          </p>
        </div>
      </div>

      <div className="mt-14 border-y border-ink/15 py-5 md:mt-24" aria-hidden="true" data-reveal="fade">
        <Marquee duration={70}>
          {keywords.map((word) => (
            <span
              key={word}
              className="flex items-center whitespace-nowrap px-6 font-wide text-[clamp(1.6rem,3.6vw,3.6rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_var(--ink)]"
            >
              {word}
              <span className="ml-12 font-serif text-[0.7em] font-normal normal-case italic text-flare [-webkit-text-stroke:0]">
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="gutter">
        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-x-6">
          <div className="relative md:col-span-4">
            <figure data-reveal="image">
              <div ref={tiltRef} className="relative aspect-[4/5] overflow-hidden bg-ink will-change-transform">
                <div className="absolute inset-[-8%]" data-parallax-inner="" data-reveal-inner="">
                  <img
                    src={media.portrait}
                    alt="Vedant standing outside on the UC San Diego campus"
                    className="size-full object-cover object-[50%_30%]"
                    loading="lazy"
                  />
                </div>
                <div
                  ref={glareRef}
                  className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500"
                  aria-hidden="true"
                />
                <Viewfinder />
                <figcaption className="eyebrow absolute inset-x-5 bottom-5 z-10 flex justify-between text-[0.6rem] text-bone">
                  <span>Fr 001</span>
                  <span>La Jolla, CA</span>
                </figcaption>
              </div>
            </figure>

            <div
              className="pointer-events-none absolute -top-12 right-[-5.25rem] hidden size-28 items-center justify-center md:flex"
              aria-hidden="true"
            >
              <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 size-full text-ink">
                <defs>
                  <path id="about-badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-current font-mono text-[9.5px] uppercase tracking-[0.3em]">
                  <textPath href="#about-badge-circle">Data Science / UC San Diego / Class of 2027 /</textPath>
                </text>
              </svg>
              <span className="size-3 rounded-full bg-flare" />
            </div>

            <span
              className="eyebrow float-slow pointer-events-none absolute -left-3 bottom-24 hidden bg-ink px-3 py-2 text-[0.6rem] text-bone shadow-xl shadow-black/20 md:block"
              aria-hidden="true"
            >
              Provost Honors
            </span>
            <span
              className="eyebrow float-slow pointer-events-none absolute -right-3 bottom-10 hidden bg-flare px-3 py-2 text-[0.6rem] text-ink shadow-xl shadow-black/20 [animation-delay:-3s] md:block"
              aria-hidden="true"
            >
              B.S. Data Science
            </span>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lead leading-snug" data-reveal="words">
              <SplitWords text={ABOUT.primary} />
            </p>

            <dl className="mt-12 md:mt-16" data-reveal="stagger">
              {facets.map((facet, index) => (
                <div
                  key={facet.label}
                  className="group/facet relative isolate -mx-5 grid gap-3 border-t border-ink/20 px-5 py-7 last:border-b md:grid-cols-[9rem_1fr] md:gap-8"
                >
                  <dt className="eyebrow flex items-center gap-3 text-flare transition-colors duration-500 group-hover/facet:text-flare!">
                    <span
                      className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-expo group-hover/facet:scale-y-100"
                      aria-hidden="true"
                    />
                    <span className="text-stone-deep transition-colors duration-500 group-hover/facet:text-stone">
                      0{index + 1}
                    </span>
                    {facet.label}
                  </dt>
                  <dd className="max-w-xl pr-8 text-base leading-relaxed text-ink/85 transition-colors duration-500 group-hover/facet:text-bone">
                    {facet.text}
                    <ArrowUpRight
                      className="absolute right-5 top-7 hidden size-5 -translate-x-2 text-flare opacity-0 transition-[opacity,transform] duration-500 ease-expo group-hover/facet:translate-x-0 group-hover/facet:opacity-100 md:block"
                      aria-hidden="true"
                    />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-32 md:grid-cols-4" data-reveal="stagger">
          {stats.map((stat) => (
            <CountStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
