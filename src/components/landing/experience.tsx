import type { Experience as ExperienceItem, ExperienceGroupId } from "@/components/portfolio/data";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { EXPERIENCE, EXPERIENCE_GROUPS } from "@/components/portfolio/data";
import { gsap, prefersReducedMotion } from "@/lib/motion/gsap";
import { useReveal } from "@/hooks/use-reveal";
import { SplitWords } from "@/components/generals/split-words";
import { RecLabel, Viewfinder } from "@/components/generals/viewfinder";
import { Timecode } from "@/components/generals/timecode";
import { experienceLogos } from "@/constants/media";
import { cn } from "@/lib/utils";

const CAMS: { id: ExperienceGroupId; cam: string; tab: string }[] = [
  { id: "industry", cam: "A", tab: "Engineer" },
  { id: "research", cam: "B", tab: "Researcher" },
  { id: "campus", cam: "C", tab: "Leader" },
];

const keyOf = (e: ExperienceItem) => `${e.company}::${e.role}`;
const isLive = (e: ExperienceItem) => /present/i.test(e.period);
const frame = (index: number) => `Fr ${String(index + 1).padStart(3, "0")}`;

function Progression({ steps }: { steps: NonNullable<ExperienceItem["progression"]> }) {
  return (
    <div className="mt-8" aria-label="Career progression">
      <p className="eyebrow text-flare">Career progression</p>
      <ol className="relative mt-5 grid grid-cols-3 gap-3">
        <span className="absolute left-0 right-0 top-[5px] h-px bg-bone/20" aria-hidden="true" />
        {steps.map((step) => (
          <li key={`${step.role}-${step.period}`} className="relative pt-6">
            <span
              className={cn(
                "absolute left-0 top-0 size-[11px] rounded-full border",
                step.current ? "border-flare bg-flare" : "border-bone/50 bg-ink",
              )}
              aria-hidden="true"
            >
              {step.current && <span className="ping-ring absolute inset-0 rounded-full bg-flare" />}
            </span>
            <p className={cn("text-sm font-medium leading-snug", step.current ? "text-bone" : "text-bone/65")}>
              {step.role}
            </p>
            <p className="eyebrow mt-1 text-[0.6rem] text-stone">{step.period}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

interface RoleRowProps {
  e: ExperienceItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}

function RoleRow({ e, index, open, onToggle }: RoleRowProps) {
  const live = isLive(e);
  const logo = experienceLogos[e.company];

  return (
    <li className="group/row border-t border-bone/15 last:border-b" data-open={open}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        data-cursor={open ? "Close" : "Open"}
        className="grid w-full grid-cols-[2.25rem_1fr] items-start gap-x-3 py-6 text-left md:grid-cols-[3rem_1fr] md:gap-x-5 md:py-8"
      >
        <span className="eyebrow pt-1 text-stone transition-colors group-data-[open=true]/row:text-flare">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="min-w-0">
          <span className="block font-wide text-[0.92rem] font-semibold uppercase leading-[1.1] tracking-[-0.035em] [overflow-wrap:anywhere] md:text-[clamp(1.1rem,2vw,2rem)] md:leading-[1.04] transition-transform duration-700 ease-expo group-hover/row:translate-x-2">
            {e.company}
          </span>
          <span className="mt-2 block font-serif text-[clamp(1.1rem,1.5vw,1.5rem)] italic leading-tight text-bone/75">
            {e.role}
          </span>
          <span className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            {live ? (
              <RecLabel label="Live" className="text-bone" />
            ) : (
              <span className="eyebrow inline-flex items-center gap-2 text-stone">
                <span className="size-1.5 bg-stone" />
                Wrapped
              </span>
            )}
            <span className="eyebrow text-stone">{e.period}</span>
          </span>
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-700 ease-expo",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-9 pl-[2.75rem] md:pb-12 md:pl-[4.25rem]">
            <div className="mb-6 flex items-center gap-4 lg:hidden">
              {logo && (
                <span className="flex size-24 items-center justify-center bg-bone p-2.5">
                  <img src={logo} alt={`${e.company} logo`} className="size-full object-contain" loading="lazy" />
                </span>
              )}
              {(e.location || e.meta) && (
                <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-stone">
                  {e.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3" />
                      {e.location}
                    </span>
                  )}
                  {e.meta && <span>{e.meta}</span>}
                </p>
              )}
            </div>

            <ol className="space-y-5">
              {e.bullets.map((bullet, bulletIndex) => (
                <li
                  key={bullet}
                  className={cn(
                    "grid grid-cols-[3.25rem_1fr] gap-x-4 transition-[opacity,transform] duration-700 ease-expo md:grid-cols-[4rem_1fr]",
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                  style={{ transitionDelay: open ? `${180 + bulletIndex * 90}ms` : "0ms" }}
                >
                  <span className="eyebrow pt-[0.4rem] text-[0.6rem] text-flare">{frame(bulletIndex)}</span>
                  <p className="max-w-3xl text-[0.95rem] leading-relaxed text-bone/80 md:text-base">{bullet}</p>
                </li>
              ))}
            </ol>

            {e.progression && e.progression.length > 0 && <Progression steps={e.progression} />}

            {e.tags && e.tags.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-2">
                {e.tags.map((tag) => (
                  <li key={tag} className="eyebrow border border-bone/20 px-2.5 py-1.5 text-[0.6rem] text-bone/80">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

function Monitor({ e, cam, groupLabel }: { e: ExperienceItem; cam: string; groupLabel: string }) {
  const logo = experienceLogos[e.company];
  const live = isLive(e);

  return (
    <div className="frame-grid relative aspect-[4/5] w-full overflow-hidden border border-bone/10 bg-ink-raised">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_110%,rgba(212,107,255,0.22),transparent_70%)]"
        aria-hidden="true"
      />
      <Viewfinder />
      <span
        className="scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-flare/80 shadow-[0_0_12px_2px_rgba(212,107,255,0.5)]"
        aria-hidden="true"
      />

      <div className="eyebrow absolute inset-x-7 top-7 z-10 flex items-center justify-between text-[0.6rem] text-bone/90">
        <span>Cam {cam}</span>
        <Timecode />
      </div>

      <div key={keyOf(e)} className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-10 animate-in fade-in zoom-in-95 duration-700">
        {logo ? (
          <span className="flex size-52 items-center justify-center bg-bone p-6 shadow-2xl shadow-black/50 xl:size-60">
            <img src={logo} alt={`${e.company} logo`} className="size-full object-contain" />
          </span>
        ) : (
          <span className="eyebrow text-stone">No logo</span>
        )}
        <div className="text-center">
          <p className="eyebrow text-bone">{e.period}</p>
          {(e.location || e.meta) && (
            <p className="eyebrow mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-stone">
              {e.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3" />
                  {e.location}
                </span>
              )}
              {e.meta && <span>{e.meta}</span>}
            </p>
          )}
        </div>
      </div>

      <div className="eyebrow absolute inset-x-7 bottom-7 z-10 flex items-center justify-between text-[0.6rem] text-bone/90">
        <span>{groupLabel}</span>
        {live ? (
          <RecLabel label="Rec" className="text-[0.6rem]" />
        ) : (
          <span className="inline-flex items-center gap-2 text-stone">
            <span className="size-1.5 bg-stone" />
            Wrapped
          </span>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  const scope = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLSpanElement>(null);
  const mounted = useRef(false);

  const [activeGroup, setActiveGroup] = useState<ExperienceGroupId>("industry");
  const [openKey, setOpenKey] = useState<string | null>(null);

  useReveal(scope);

  const groups = useMemo(
    () =>
      EXPERIENCE_GROUPS.map((group) => ({
        ...group,
        items: EXPERIENCE.filter((e) => e.group === group.id).sort((a, b) => (b.sortKey ?? 0) - (a.sortKey ?? 0)),
      })),
    [],
  );

  const group = groups.find((g) => g.id === activeGroup) ?? groups[0];
  const cam = CAMS.find((c) => c.id === group.id) ?? CAMS[0];
  const activeItem = group.items.find((e) => keyOf(e) === openKey) ?? group.items[0];

  useEffect(() => {
    setOpenKey(group.items[0] ? keyOf(group.items[0]) : null);
  }, [group.id]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const list = listRef.current;
    const scan = scanRef.current;
    if (!list || !scan || prefersReducedMotion()) return;

    const tween = gsap
      .timeline()
      .fromTo(list, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "expo.inOut" }, 0)
      .fromTo(scan, { top: "0%", autoAlpha: 1 }, { top: "100%", autoAlpha: 0, duration: 1, ease: "power2.inOut" }, 0);

    return () => {
      tween.kill();
      gsap.set(list, { clearProps: "clipPath" });
    };
  }, [activeGroup]);

  return (
    <section ref={scope} id="experience" className="relative scroll-mt-20 bg-ink py-24 text-bone md:py-36">
      <div className="gutter">
        <div className="flex items-center justify-between gap-6 border-b border-bone/15 pb-5" data-reveal="fade">
          <p className="eyebrow">02 Experience</p>
          <RecLabel label={`${CAMS.length} cameras / ${EXPERIENCE.length} roles`} className="text-stone" />
        </div>

        <h2
          className="mt-10 font-wide text-[clamp(2.4rem,8.6vw,10rem)] font-semibold uppercase leading-[0.84] tracking-[-0.05em] md:mt-14"
          data-reveal="words"
        >
          <SplitWords text="Three cameras," />
          <br />
          <SplitWords
            text="one engineer."
            className="font-serif text-[1.05em] font-normal normal-case italic tracking-[-0.03em]"
          />
        </h2>

        <div className="mt-14 flex flex-col gap-6 md:mt-20 lg:flex-row lg:items-end lg:justify-between" data-reveal="fade">
          <div role="tablist" aria-label="Experience categories" className="flex flex-wrap gap-2">
            {CAMS.map((item) => {
              const g = groups.find((x) => x.id === item.id);
              const active = item.id === activeGroup;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveGroup(item.id)}
                  className={cn(
                    "eyebrow flex items-center gap-2.5 border px-4 py-3 transition-colors duration-500",
                    active ? "border-flare bg-flare text-ink" : "border-bone/25 text-bone hover:border-bone/60",
                  )}
                >
                  <span className={cn("size-1.5 rounded-full", active ? "rec-dot bg-ink" : "bg-stone")} />
                  Cam {item.cam} · {item.tab}
                  <span className={cn("tabular-nums", active ? "text-ink/70" : "text-stone")}>
                    {String(g?.items.length ?? 0).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="max-w-md text-sm leading-relaxed text-bone/70" key={group.id}>
            <span className="eyebrow mr-2 text-bone">{group.label}.</span>
            {group.blurb}
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="relative lg:col-span-7">
            <div ref={listRef}>
              <ul>
                {group.items.map((e, index) => (
                  <RoleRow
                    key={keyOf(e)}
                    e={e}
                    index={index}
                    open={keyOf(activeItem) === keyOf(e) && openKey !== "__closed__"}
                    onToggle={() =>
                      setOpenKey((current) => (current === keyOf(e) ? "__closed__" : keyOf(e)))
                    }
                  />
                ))}
              </ul>
            </div>
            <span
              ref={scanRef}
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-flare opacity-0 shadow-[0_0_14px_3px_rgba(212,107,255,0.55)]"
              aria-hidden="true"
            />
          </div>

          <aside className="hidden lg:col-span-5 lg:block" aria-hidden="true">
            <div className="sticky top-28">
              <Monitor e={activeItem} cam={cam.cam} groupLabel={group.label} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
