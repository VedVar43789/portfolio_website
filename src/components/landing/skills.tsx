import { useEffect, useRef, useState } from "react";
import { SKILLS } from "@/components/portfolio/data";
import { prefersReducedMotion } from "@/lib/motion/gsap";
import { useReveal } from "@/hooks/use-reveal";
import { Marquee } from "@/components/generals/marquee";
import { SplitWords } from "@/components/generals/split-words";
import { RecLabel, Viewfinder } from "@/components/generals/viewfinder";
import { cn } from "@/lib/utils";

const allSkills = SKILLS.flatMap((group) => group.items);
const rowA = allSkills.filter((_, index) => index % 2 === 0);
const rowB = allSkills.filter((_, index) => index % 2 === 1);

const CYCLE_MS = 5500;
const pad = (value: number) => String(value).padStart(2, "0");

function Strip({ items, reverse, outline }: { items: string[]; reverse?: boolean; outline?: boolean }) {
  return (
    <Marquee duration={reverse ? 95 : 110} reverse={reverse}>
      {items.map((item) => (
        <span
          key={item}
          className={
            outline
              ? "flex items-center whitespace-nowrap px-6 font-wide text-[clamp(2rem,5vw,5rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_var(--ink)]"
              : "flex items-center whitespace-nowrap px-6 font-wide text-[clamp(2rem,5vw,5rem)] font-semibold uppercase leading-none tracking-[-0.04em]"
          }
        >
          {item}
          <span className="ml-12 font-serif text-[0.6em] font-normal normal-case italic text-flare">/</span>
        </span>
      ))}
    </Marquee>
  );
}

export function Skills() {
  const scope = useRef<HTMLElement>(null);
  const explorerRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [manual, setManual] = useState(false);

  useReveal(scope);

  useEffect(() => {
    const el = explorerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cycling = inView && !manual && !prefersReducedMotion();

  const choose = (index: number) => {
    setActive(index);
    setManual(true);
  };

  return (
    <section ref={scope} id="skills" className="relative scroll-mt-20 overflow-hidden bg-bone py-24 text-ink md:py-36">
      <div className="gutter">
        <div className="flex items-center justify-between gap-6 border-b border-ink/20 pb-5" data-reveal="fade">
          <p className="eyebrow">05 Skills</p>
          <p className="eyebrow text-stone-deep">{allSkills.length} tools in the kit</p>
        </div>

        <h2
          className="mt-10 font-wide text-[clamp(2.4rem,8.6vw,10rem)] font-semibold uppercase leading-[0.84] tracking-[-0.05em] md:mt-14"
          data-reveal="words"
        >
          <SplitWords text="Technical" />{" "}
          <SplitWords text="stack" className="font-serif text-[1.05em] font-normal normal-case italic tracking-[-0.03em]" />
        </h2>
      </div>

      <div className="mt-16 space-y-4 md:mt-24" data-reveal="fade" aria-hidden="true">
        <Strip items={rowA} />
        <Strip items={rowB} reverse outline />
      </div>

      <div
        ref={explorerRef}
        className="gutter mt-20 grid gap-10 md:mt-28 lg:grid-cols-12 lg:gap-8"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        data-reveal="fade"
      >
        <div role="tablist" aria-label="Skill categories" aria-orientation="vertical" className="lg:col-span-5">
          {SKILLS.map((group, index) => {
            const selected = index === active;
            return (
              <button
                key={group.group}
                type="button"
                role="tab"
                id={`skills-tab-${index}`}
                aria-selected={selected}
                aria-controls={`skills-panel-${index}`}
                onMouseEnter={() => window.matchMedia("(hover: hover)").matches && choose(index)}
                onFocus={() => setActive(index)}
                onClick={() => choose(index)}
                className="group/tab relative block w-full border-t border-ink/20 py-5 text-left last:border-b md:py-6"
              >
                <span className="flex items-baseline gap-4">
                  <span
                    className={cn(
                      "eyebrow w-8 shrink-0 transition-colors duration-500",
                      selected ? "text-flare" : "text-stone-deep",
                    )}
                  >
                    {pad(index + 1)}
                  </span>
                  <span
                    className={cn(
                      "font-wide text-[clamp(1.2rem,2.1vw,2.1rem)] font-semibold uppercase leading-[1.04] tracking-[-0.04em] transition-[color,transform] duration-700 ease-expo",
                      selected ? "translate-x-3 text-ink" : "text-ink/35 group-hover/tab:text-ink/70",
                    )}
                  >
                    {group.group}
                  </span>
                  <span
                    className={cn(
                      "eyebrow ml-auto shrink-0 tabular-nums transition-colors duration-500",
                      selected ? "text-ink" : "text-stone-deep",
                    )}
                  >
                    {pad(group.items.length)}
                  </span>
                </span>

                <span className="absolute inset-x-0 bottom-[-1px] h-px overflow-hidden" aria-hidden="true">
                  {selected &&
                    (cycling ? (
                      <span
                        key={`${index}-${cycling}`}
                        onAnimationEnd={() => setActive((current) => (current + 1) % SKILLS.length)}
                        className="block size-full origin-left bg-flare"
                        style={{
                          animation: `vv-fill ${CYCLE_MS}ms linear forwards`,
                          animationPlayState: hovering ? "paused" : "running",
                        }}
                      />
                    ) : (
                      <span className="block size-full bg-flare" />
                    ))}
                </span>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7">
          <div className="frame-grid relative isolate overflow-hidden border border-bone/10 bg-ink p-6 text-bone md:p-10">
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_80%_110%,rgba(212,107,255,0.22),transparent_70%)]"
              aria-hidden="true"
            />
            <Viewfinder />
            <span
              className="scan-line pointer-events-none absolute inset-x-0 top-0 h-px bg-flare/80 shadow-[0_0_12px_2px_rgba(212,107,255,0.5)]"
              aria-hidden="true"
            />

            <div className="eyebrow flex items-center justify-between text-[0.6rem] text-bone/90">
              <RecLabel label={`Set ${pad(active + 1)} / ${pad(SKILLS.length)}`} live={cycling} />
              <span>{cycling ? "Auto" : "Manual"}</span>
            </div>

            <div className="mt-8 grid">
              {SKILLS.map((group, index) => {
                const selected = index === active;
                return (
                  <div
                    key={group.group}
                    role="tabpanel"
                    id={`skills-panel-${index}`}
                    aria-labelledby={`skills-tab-${index}`}
                    aria-hidden={!selected}
                    inert={!selected}
                    className={cn(
                      "col-start-1 row-start-1 transition-opacity duration-500",
                      selected ? "opacity-100" : "pointer-events-none opacity-0",
                    )}
                  >
                    <div className="flex items-end justify-between gap-6">
                      <h3
                        className={cn(
                          "font-serif text-[clamp(2rem,4vw,4rem)] italic leading-[0.95] tracking-[-0.02em] transition-[opacity,transform] duration-700 ease-expo",
                          selected ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                        )}
                      >
                        {group.group}
                      </h3>
                      <span
                        className={cn(
                          "font-wide text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-flare tabular-nums transition-[opacity,transform] duration-700 ease-expo",
                          selected ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                        )}
                      >
                        {pad(group.items.length)}
                      </span>
                    </div>

                    <ul className="mt-8 flex flex-wrap gap-2 [&:hover>li:not(:hover)]:opacity-35">
                      {group.items.map((item, itemIndex) => (
                        <li
                          key={item}
                          className={cn(
                            "eyebrow cursor-default border border-bone/20 px-3 py-2 text-[0.68rem] text-bone/90 transition-[opacity,translate,color,background-color,border-color] duration-500 ease-expo hover:-translate-y-0.5 hover:border-flare! hover:bg-flare! hover:text-ink!",
                            selected && "animate-[vv-chip-in_700ms_cubic-bezier(0.19,1,0.22,1)_backwards]",
                          )}
                          style={selected ? { animationDelay: `${120 + itemIndex * 28}ms` } : undefined}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
