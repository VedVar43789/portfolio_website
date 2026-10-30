import type { Project } from "@/components/portfolio/data";

import { Fragment, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Camera, Github, X } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "@/components/portfolio/data";
import { Flip, gsap, prefersReducedMotion, useGSAP } from "@/lib/motion/gsap";
import { startScroll, stopScroll } from "@/lib/motion/lenis";
import { useReveal } from "@/hooks/use-reveal";
import { SplitWords } from "@/components/generals/split-words";
import { RecLabel, Viewfinder } from "@/components/generals/viewfinder";
import { projectAwards, projectCovers } from "@/constants/media";
import { cn } from "@/lib/utils";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const NUMBER = /(\d+(?:\.\d+)?%|\b0\.\d+\b|\b\d+\+(?=\s))/g;

const filterProjects = (filters: string[]) => {
  const useLatest = filters.includes("latest");
  const tagFilters = filters.filter((f) => f !== "latest");
  const base = useLatest ? PROJECTS.slice(0, 3) : PROJECTS;
  if (tagFilters.length === 0) return base;
  return base.filter((p) => tagFilters.every((f) => p.tags.includes(f)));
};

const runNumber = (title: string) => {
  const index = PROJECTS.findIndex((p) => p.title === title);
  return `Run ${String(PROJECTS.length - index).padStart(3, "0")}`;
};

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!el || !match || prefersReducedMotion()) return;

    const target = parseFloat(match[1]);
    const decimals = (match[1].split(".")[1] ?? "").length;
    const suffix = match[2];
    const state = { v: 0 };
    let tween: gsap.core.Tween | undefined;

    el.textContent = `${(0).toFixed(decimals)}${suffix}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        tween = gsap.to(state, {
          v: target,
          duration: 1.8,
          ease: "expo.out",
          onUpdate: () => {
            el.textContent = `${state.v.toFixed(decimals)}${suffix}`;
          },
          onComplete: () => {
            el.textContent = value;
          },
        });
      },
      { threshold: 0.9 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      tween?.kill();
      el.textContent = value;
    };
  }, [value]);

  return (
    <span ref={ref} className="font-semibold tabular-nums text-flare">
      {value}
    </span>
  );
}

function Description({ text }: { text: string }) {
  return (
    <>
      {text.split(NUMBER).map((part, index) =>
        index % 2 === 1 ? <CountUp key={index} value={part} /> : <Fragment key={index}>{part}</Fragment>,
      )}
    </>
  );
}

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("eyebrow flex flex-wrap items-center gap-x-6 gap-y-2", className)}>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
          className="link-underline flex items-center gap-1.5 py-1"
        >
          <Github className="size-3.5" /> Code
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} demo`}
          className="link-underline flex items-center gap-1.5 py-1 text-flare"
        >
          Demo <ArrowUpRight className="size-3.5" />
        </a>
      )}
    </div>
  );
}

function Stamp({ title, onPhoto }: { title: string; onPhoto: (title: string) => void }) {
  const award = projectAwards[title];
  if (!award) return null;

  const content = (
    <>
      <span aria-hidden="true">★</span>
      {award.label}
      {award.photo && <Camera className="size-3" aria-hidden="true" />}
    </>
  );
  const classes =
    "eyebrow inline-flex -rotate-2 items-center gap-1.5 bg-flare px-2.5 py-1.5 text-[0.6rem] text-ink transition-transform duration-500 ease-expo";

  return award.photo ? (
    <button
      type="button"
      onClick={() => onPhoto(title)}
      aria-label={`${award.label}: view photo`}
      data-cursor="Photo"
      className={cn(classes, "hover:rotate-2 hover:scale-105")}
    >
      {content}
    </button>
  ) : (
    <span className={classes}>{content}</span>
  );
}

interface CardProps {
  project: Project;
  horizontal: boolean;
  onOpen: (title: string) => void;
  onPhoto: (title: string) => void;
}

function Card({ project, horizontal, onOpen, onPhoto }: CardProps) {
  const cover = projectCovers[project.title];

  return (
    <article
      data-flip-id={project.title}
      className={cn(
        "group flex flex-col border-t border-ink/25 pt-5",
        horizontal && "md:w-[min(30vw,26rem)] md:shrink-0",
      )}
    >
      <p className="eyebrow mb-5 text-ink/70">
        {runNumber(project.title)}
        {project.period && <span className="text-stone-deep"> · {project.period}</span>}
      </p>

      <div className="relative">
        <button
          type="button"
          onClick={() => onOpen(project.title)}
          aria-label={`Open ${project.title} details`}
          data-cursor="Open"
          className={cn(
            "relative block aspect-[16/10] w-full overflow-hidden bg-ink text-left",
            horizontal && "md:aspect-[16/9]",
          )}
        >
          {cover && (
            <img
              src={cover}
              alt={`${project.title} preview`}
              className="size-full object-cover transition-transform duration-[1400ms] ease-expo group-hover:scale-[1.05]"
              loading="lazy"
            />
          )}
          <Viewfinder size="sm" className="inset-3" />
        </button>
        <div className="absolute -top-3 right-3 z-20 max-w-[85%]">
          <Stamp title={project.title} onPhoto={onPhoto} />
        </div>
      </div>

      <h3 className="mt-6 font-wide text-[clamp(1.35rem,2.1vw,2.1rem)] font-semibold uppercase leading-[1] tracking-[-0.04em]">
        {project.title}
      </h3>

      <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-ink/80">
        <Description text={project.description} />
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <li key={item} className="eyebrow border border-ink/25 px-2 py-1 text-[0.6rem] text-ink/80">
            {item}
          </li>
        ))}
      </ul>

      <ProjectLinks project={project} className="mt-6 text-ink" />
    </article>
  );
}

interface DetailProps {
  project: Project;
  onClose: () => void;
  onStep: (direction: 1 | -1) => void;
  onPhoto: (title: string) => void;
}

function Detail({ project, onClose, onStep, onPhoto }: DetailProps) {
  const cover = projectCovers[project.title];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onStep(1);
      if (event.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onStep]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[70] overflow-y-auto bg-ink text-bone animate-in fade-in duration-500"
      data-lenis-prevent=""
    >
      <div className="gutter flex items-center justify-between py-5">
        <RecLabel label={`${runNumber(project.title)} / ${project.period ?? ""}`} className="text-bone" />
        <button
          type="button"
          onClick={onClose}
          className="eyebrow flex items-center gap-2 rounded-full border border-bone/30 px-4 py-2 transition-colors hover:border-flare hover:bg-flare hover:text-ink"
        >
          Close <X className="size-3.5" />
        </button>
      </div>

      <div className="gutter grid gap-10 pb-16 pt-4 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-raised lg:col-span-7">
          {cover && <img src={cover} alt={`${project.title} preview`} className="size-full object-contain" />}
          <Viewfinder />
        </div>

        <div className="lg:col-span-5">
          <Stamp title={project.title} onPhoto={onPhoto} />
          <h3 className="mt-5 font-wide text-[clamp(1.8rem,3.4vw,3.6rem)] font-semibold uppercase leading-[0.95] tracking-[-0.045em]">
            {project.title}
          </h3>
          <p className="mt-6 text-base leading-relaxed text-bone/85">{project.description}</p>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <li key={item} className="eyebrow border border-bone/25 px-2 py-1 text-[0.6rem] text-bone/80">
                {item}
              </li>
            ))}
          </ul>

          <ProjectLinks project={project} className="mt-8 text-bone" />

          <div className="eyebrow mt-12 flex items-center justify-between border-t border-bone/15 pt-5">
            <button type="button" onClick={() => onStep(-1)} className="link-underline py-1">
              ← Previous run
            </button>
            <button type="button" onClick={() => onStep(1)} className="link-underline py-1">
              Next run →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lightbox({ title, onClose }: { title: string; onClose: () => void }) {
  const award = projectAwards[title];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!award?.photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={award.label}
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center gap-5 bg-ink/95 p-6 text-bone animate-in fade-in duration-500"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="eyebrow absolute right-6 top-6 flex items-center gap-2 rounded-full border border-bone/30 px-4 py-2"
      >
        Close <X className="size-3.5" />
      </button>
      <img
        src={award.photo}
        alt={award.photoAlt}
        className="max-h-[78svh] max-w-full object-contain shadow-2xl shadow-black/60"
        onClick={(event) => event.stopPropagation()}
      />
      <p className="eyebrow text-center text-bone/80">
        ★ {award.label} · {title}
      </p>
    </div>
  );
}

export function Projects() {
  const scope = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const flipState = useRef<ReturnType<typeof Flip.getState> | null>(null);

  const [activeFilters, setActiveFilters] = useState<string[]>(["latest"]);
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const [photoTitle, setPhotoTitle] = useState<string | null>(null);

  useReveal(scope);

  const filtered = useMemo(() => filterProjects(activeFilters), [activeFilters]);
  const horizontal = filtered.length > 3;

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: PROJECTS.length, latest: Math.min(3, PROJECTS.length) };
    PROJECT_FILTERS.forEach((f) => {
      if (f.id !== "all" && f.id !== "latest") map[f.id] = PROJECTS.filter((p) => p.tags.includes(f.id)).length;
    });
    return map;
  }, []);

  const applyFilters = (next: string[]) => {
    const sideways = window.innerWidth >= 768 && (horizontal || filterProjects(next).length > 3);
    if (gridRef.current && !prefersReducedMotion() && !sideways) {
      flipState.current = Flip.getState(gridRef.current.children);
    }
    setActiveFilters(next);
  };

  const toggleFilter = (id: string) => {
    if (id === "latest") return applyFilters(["latest"]);
    if (id === "all") return applyFilters([]);
    const withoutLatest = activeFilters.filter((f) => f !== "latest");
    applyFilters(withoutLatest.includes(id) ? withoutLatest.filter((f) => f !== id) : [...withoutLatest, id]);
  };

  useIsoLayoutEffect(() => {
    const state = flipState.current;
    if (!state) return;
    flipState.current = null;

    Flip.from(state, {
      duration: 0.9,
      ease: "expo.out",
      absolute: true,
      stagger: 0.04,
      onEnter: (elements) =>
        gsap.fromTo(elements, { autoAlpha: 0, y: 48 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.06 }),
    });
  }, [filtered]);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const track = gridRef.current;
      if (!wrap || !track || !horizontal) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        wrap.dataset.pinned = "true";
        const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (barRef.current) barRef.current.style.scale = `${self.progress} 1`;
            },
          },
        });

        return () => {
          delete wrap.dataset.pinned;
          if (barRef.current) barRef.current.style.scale = "0 1";
        };
      });

      return () => mm.revert();
    },
    { scope, dependencies: [horizontal, filtered.length], revertOnUpdate: true },
  );

  const openProject = openTitle ? PROJECTS.find((p) => p.title === openTitle) : undefined;

  useEffect(() => {
    if (openTitle || photoTitle) stopScroll();
    else startScroll();
    return () => startScroll();
  }, [openTitle, photoTitle]);

  const step = useCallback(
    (direction: 1 | -1) => {
      const list = filtered.length > 0 ? filtered : PROJECTS;
      setOpenTitle((current) => {
        const index = list.findIndex((p) => p.title === current);
        return list[(index + direction + list.length) % list.length].title;
      });
    },
    [filtered],
  );

  return (
    <section ref={scope} id="projects" className="relative scroll-mt-20 bg-bone py-24 text-ink md:py-36">
      <div className="gutter">
        <div className="flex items-center justify-between gap-6 border-b border-ink/20 pb-5" data-reveal="fade">
          <p className="eyebrow">03 Projects</p>
          <p className="eyebrow text-stone-deep">{PROJECTS.length} runs logged</p>
        </div>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          <h2
            className="font-wide text-[clamp(2.6rem,9vw,10.5rem)] font-semibold uppercase leading-[0.84] tracking-[-0.05em] md:col-span-8"
            data-reveal="words"
          >
            <SplitWords text="Run" />{" "}
            <SplitWords text="log" className="font-serif text-[1.05em] font-normal normal-case italic tracking-[-0.03em]" />
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-stone-deep md:col-span-4" data-reveal="fade">
            Production systems, research, and competition wins. Every run keeps its full write-up; open one for a bigger
            look.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 md:mt-16" role="group" aria-label="Filter projects" data-reveal="fade">
          {PROJECT_FILTERS.map((filter) => {
            const active =
              filter.id === "all"
                ? activeFilters.length === 0
                : filter.id === "latest"
                  ? activeFilters.includes("latest")
                  : activeFilters.includes(filter.id);
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => toggleFilter(filter.id)}
                aria-pressed={active}
                className={cn(
                  "eyebrow flex items-center gap-2 border px-3.5 py-2.5 transition-colors duration-500",
                  active ? "border-ink bg-ink text-bone" : "border-ink/25 hover:border-ink",
                )}
              >
                {filter.label}
                <span className={cn("tabular-nums", active ? "text-flare" : "text-stone-deep")}>
                  {String(counts[filter.id] ?? 0).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="eyebrow mt-12 text-stone-deep">No runs match every selected filter. Try removing one.</p>
        )}
      </div>

      <div
        ref={wrapRef}
        className={cn(
          "relative mt-12",
          horizontal &&
            "md:mt-0 md:flex md:h-[100svh] md:items-center md:overflow-x-auto md:pb-16 md:pt-20 md:data-[pinned=true]:overflow-x-clip",
        )}
      >
        <div
          ref={gridRef}
          className={cn(
            "gutter grid gap-y-16",
            horizontal ? "md:flex md:w-max md:gap-8" : "gap-x-8 md:grid-cols-2 xl:grid-cols-3",
          )}
        >
          {filtered.map((project) => (
            <Card
              key={project.title}
              project={project}
              horizontal={horizontal}
              onOpen={setOpenTitle}
              onPhoto={setPhotoTitle}
            />
          ))}
        </div>

        {horizontal && (
          <div
            className="gutter pointer-events-none absolute inset-x-0 bottom-8 hidden items-center gap-5 md:flex"
            aria-hidden="true"
          >
            <span className="eyebrow text-stone-deep">Scroll → {filtered.length} runs</span>
            <span className="relative h-px flex-1 bg-ink/20">
              <span ref={barRef} className="absolute inset-0 origin-left scale-x-0 bg-flare" />
            </span>
          </div>
        )}
      </div>

      {openProject && (
        <Detail project={openProject} onClose={() => setOpenTitle(null)} onStep={step} onPhoto={setPhotoTitle} />
      )}
      {photoTitle && <Lightbox title={photoTitle} onClose={() => setPhotoTitle(null)} />}
    </section>
  );
}
