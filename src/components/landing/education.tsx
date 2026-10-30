import { useRef } from "react";
import { MapPin } from "lucide-react";
import { EDUCATION } from "@/components/portfolio/data";
import { useReveal } from "@/hooks/use-reveal";
import { SplitWords } from "@/components/generals/split-words";
import { Viewfinder } from "@/components/generals/viewfinder";
import { media } from "@/constants/media";

export function Education() {
  const scope = useRef<HTMLElement>(null);

  useReveal(scope);

  return (
    <section ref={scope} id="education" className="relative scroll-mt-20 bg-ink py-24 text-bone md:py-36">
      <div className="gutter">
        <div className="flex items-center justify-between gap-6 border-b border-bone/15 pb-5" data-reveal="fade">
          <p className="eyebrow">04 Education</p>
          <p className="eyebrow text-stone">{EDUCATION.period}</p>
        </div>

        <div className="mt-12 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="eyebrow text-stone" data-reveal="fade">
              Cumulative GPA
            </p>
            <p
              className="mt-4 font-wide text-[clamp(5rem,14vw,12.5rem)] font-semibold leading-[0.78] tracking-[-0.06em] text-flare"
              data-reveal="words"
            >
              <SplitWords text={EDUCATION.gpa} />
            </p>
            <p className="eyebrow mt-8 text-bone/80" data-reveal="fade">
              {EDUCATION.honors}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-start gap-5" data-reveal="fade">
              <span className="relative flex size-20 shrink-0 items-center justify-center bg-bone p-3 md:size-24">
                <img src={media.ucsd} alt="UC San Diego logo" className="size-full object-contain" />
                <Viewfinder size="sm" className="inset-1.5 text-ink/40" />
              </span>
              <div>
                <h2 className="font-wide text-[clamp(1.5rem,3vw,3rem)] font-semibold uppercase leading-[0.98] tracking-[-0.04em]">
                  {EDUCATION.school}
                </h2>
                <p className="mt-3 font-serif text-[clamp(1.2rem,1.8vw,1.8rem)] italic leading-tight text-bone/80">
                  {EDUCATION.degree}
                </p>
                <p className="eyebrow mt-3 flex items-center gap-1.5 text-stone">
                  <MapPin className="size-3" />
                  {EDUCATION.location}
                </p>
              </div>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2" data-reveal="fade">
              {EDUCATION.badges.map((badge) => (
                <li key={badge} className="eyebrow border border-flare/60 px-3 py-2 text-flare">
                  {badge}
                </li>
              ))}
            </ul>

            <dl className="mt-12 space-y-8 border-t border-bone/15 pt-8" data-reveal="stagger">
              <div>
                <dt className="eyebrow text-stone">Relevant coursework</dt>
                <dd className="mt-3 max-w-2xl text-base leading-relaxed text-bone/80">{EDUCATION.coursework}</dd>
              </div>
              <div>
                <dt className="eyebrow text-stone">Clubs</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {EDUCATION.clubs.map((club) => (
                    <span key={club} className="eyebrow border border-bone/25 px-3 py-2 text-bone">
                      {club}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
