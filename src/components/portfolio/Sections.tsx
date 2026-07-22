import { Github, ExternalLink, GraduationCap, MapPin, Mail, Linkedin, Send, Star, Briefcase, FlaskConical, Users } from "lucide-react";
import { EXPERIENCE, EXPERIENCE_GROUPS, PROJECTS, PROJECT_FILTERS, SKILLS, LINKS, EDUCATION, ABOUT } from "./data";
import type { Experience as ExperienceItem, ExperienceGroupId } from "./data";
import { Reveal } from "./Reveal";
import { useMemo, useState } from "react";

const ASSET_MODULES = import.meta.glob<string>("../../assets/**/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP,svg,SVG,avif,AVIF}", {
  eager: true,
  import: "default",
});

type AssetEntry = { src: string; key: string };

const ASSET_ENTRIES: AssetEntry[] = Object.entries(ASSET_MODULES).map(([path, src]) => {
  const file = path.split("/").pop() ?? path;
  const withoutExt = file.replace(/\.[^.]+$/, "");
  return { src, key: normalizeAssetKey(withoutExt) };
});

const ASSET_BY_KEY = new Map(ASSET_ENTRIES.map((entry) => [entry.key, entry.src]));

function getAssetByFileName(fileNameWithoutExt: string) {
  return ASSET_BY_KEY.get(normalizeAssetKey(fileNameWithoutExt));
}

function normalizeAssetKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function findBestAsset(query: string, extras: string[] = []) {
  if (ASSET_ENTRIES.length === 0) return undefined;
  const terms = normalizeAssetKey([query, ...extras].join(" "))
    .split(" ")
    .filter(Boolean);
  if (terms.length === 0) return undefined;

  const scored = ASSET_ENTRIES.map((entry) => {
    let score = 0;
    for (const term of terms) {
      if (term.length < 3) continue;
      if (entry.key.includes(term)) score += term.length;
    }
    return { entry, score };
  }).filter((row) => row.score > 0);

  if (scored.length === 0) return undefined;
  scored.sort((a, b) => b.score - a.score);
  return scored[0].entry.src;
}

const PROJECT_IMAGE_OVERRIDES: Record<string, string> = {
  TumorSense: "tumor",
  "Math Reasoning (Qwen3-4B-Thinking)": "qwen",
  "Invasive Species Tracker": "invasive",
  "SoCal-Guessr": "socal",
  "Reinforcement Learning Poker Bot": "rl",
  "Steam Game Recommendation System": "steam",
  "PantryPal, Smart Recipe Recommender": "pantrypal",
  "TubeScope, Trending Lifecycle Analytics": "tubescope",
  "The Seismic Lottery": "earth",
  "Watts the Problem?": "outage",
  "MarketScope: Intelligent Stock Forecasting": "market",
  TritonSpend: "tritonspend",
  "Blood Report Analysis Chatbot": "blood",
  "SAR Image Classification with CNN": "sar",
  "Advanced Image Processing & KNN": "knn",
  CampusShelf: "lib",
  "Song Recommender": "song",
};

const EXPERIENCE_LOGO_OVERRIDES: Record<string, string> = {
  UniCircle: "unicircle",
  "UCSD CSE (STSLab)": "cse",
  "Engineers for Exploration (E4E)": "e4e",
  "PricewaterhouseCoopers LLP (PwC)": "pwc-2",
  "DS3, Data Science Student Society": "ds3",
  "Halicioglu Data Science Institute, UCSD": "hdsi",
  "CSES Open Source, TritonSpend": "cses",
  "Triton Quantitative Trading (TQT)": "tqt",
  "IIT Guwahati": "IITG_logo",
};

const EXPERIENCE_GROUP_ICONS: Record<ExperienceGroupId, typeof Briefcase> = {
  industry: Briefcase,
  research: FlaskConical,
  campus: Users,
};

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="About" title="Building agentic systems that ship." />
        <Reveal>
          <div className="glass card-hover rounded-2xl p-8 md:p-10 text-base md:text-lg leading-relaxed text-foreground/90">
            <p>{ABOUT.primary}</p>
            <p className="mt-4 text-muted-foreground">{ABOUT.secondary}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Education" title={EDUCATION.school} />
        <Reveal>
          <div className="glass card-hover rounded-2xl p-8 md:p-10">
            <div className="flex flex-wrap items-start gap-6 justify-between">
              <div className="flex items-start gap-4 min-w-0">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <GraduationCap size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl md:text-2xl font-semibold">{EDUCATION.degree}</h3>
                  <p className="mt-1 text-muted-foreground inline-flex items-center gap-2">
                    <MapPin size={14} /> {EDUCATION.location}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-lg font-semibold text-primary">GPA {EDUCATION.gpa}</p>
                <p className="text-sm text-muted-foreground">{EDUCATION.period}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {EDUCATION.badges.map((b) => (
                <span key={b} className="skill-pill">{b}</span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{EDUCATION.honors}</p>
            <p className="mt-4 text-sm">
              <span className="font-medium text-foreground">Relevant Coursework: </span>
              <span className="text-muted-foreground">{EDUCATION.coursework}</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {EDUCATION.clubs.map((c) => (
                <span key={c} className="skill-pill">{c}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceCard({
  e,
  idx,
  logoSrc,
  anchor,
  isLast,
}: {
  e: ExperienceItem;
  idx: number;
  logoSrc?: string;
  anchor: string;
  isLast: boolean;
}) {
  const isFeatured = Boolean(e.featured);

  return (
    <Reveal delay={idx * 50}>
      <article id={anchor} className="relative scroll-mt-28 pl-8 md:pl-10">
        <span
          className={`absolute left-0 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background ${
            isFeatured ? "bg-amber-300 shadow-[0_0_0_4px_rgba(251,191,36,0.25)]" : "bg-primary shadow-[0_0_0_4px_var(--background)]"
          }`}
          aria-hidden
        />
        {!isLast && (
          <span className="absolute left-0 top-9 bottom-0 w-px -translate-x-1/2 bg-border" aria-hidden />
        )}

        <div
          className={`card-hover rounded-2xl p-5 md:p-6 ${
            isFeatured
              ? "border border-amber-300/45 bg-gradient-to-br from-amber-200/10 via-card/85 to-primary/10"
              : "glass"
          }`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 items-start gap-3.5">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt={`${e.company} logo`}
                  className="h-11 w-11 shrink-0 rounded-xl border border-border/70 bg-background/70 object-contain p-1.5"
                  loading="lazy"
                />
              ) : (
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Briefcase size={18} />
                </div>
              )}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold leading-snug text-foreground">{e.role}</h3>
                  {isFeatured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/50 bg-amber-200/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200">
                      <Star size={10} className="fill-amber-200 text-amber-200" aria-hidden />
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm font-medium text-primary">{e.company}</p>
                {(e.location || e.meta) && (
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    {e.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} className="shrink-0" />
                        {e.location}
                      </span>
                    )}
                    {e.meta && <span>{e.meta}</span>}
                  </p>
                )}
              </div>
            </div>
            <p
              className={`shrink-0 text-xs font-semibold sm:text-right ${
                isFeatured ? "text-amber-200" : "text-primary"
              }`}
            >
              {e.period}
            </p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.description}</p>

          {e.progression && e.progression.length > 0 && (
            <div className="mt-5 rounded-xl border border-border/70 bg-background/35 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Career progression</p>
              <ol className="mt-3 space-y-3">
                {e.progression.map((step) => (
                  <li key={`${step.role}-${step.period}`} className="flex gap-3">
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                        step.current ? "bg-primary ring-2 ring-primary/30" : "bg-muted-foreground/40"
                      }`}
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className={`text-sm font-medium ${step.current ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.role}
                      </p>
                      <p className="text-xs text-muted-foreground">{step.period}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {e.tags && e.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
              {e.tags.map((t) => (
                <span key={t} className="skill-pill">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Experience() {
  const [activeGroup, setActiveGroup] = useState<ExperienceGroupId>("industry");

  const getExperienceLogo = (company: string, role: string) => {
    const overrideName = EXPERIENCE_LOGO_OVERRIDES[company];
    if (overrideName) {
      const overrideAsset = getAssetByFileName(overrideName);
      if (overrideAsset) return overrideAsset;
    }
    return findBestAsset(company, [role]);
  };
  const getExperienceAnchor = (role: string, company: string, idx: number) =>
    `experience-${idx}-${normalizeAssetKey(`${role}-${company}`).replace(/\s+/g, "-")}`;

  const groupedExperience = EXPERIENCE_GROUPS.map((g) => ({
    ...g,
    items: EXPERIENCE.map((e, idx) => ({ e, idx }))
      .filter((row) => row.e.group === g.id)
      .sort((a, b) => (b.e.sortKey ?? 0) - (a.e.sortKey ?? 0)),
  }));
  const activeSection = groupedExperience.find((g) => g.id === activeGroup) ?? groupedExperience[0];

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Work & Research"
          subtitle="Industry, research, and campus leadership — grouped for quick scanning."
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {groupedExperience.map((g) => {
            const GroupIcon = EXPERIENCE_GROUP_ICONS[g.id];
            const isActive = activeGroup === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveGroup(g.id)}
                className={`filter-pill inline-flex items-center gap-2 ${isActive ? "active" : ""}`}
              >
                <GroupIcon size={14} />
                {g.label}
                <span className="rounded-full bg-background/60 px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">
                  {g.items.length}
                </span>
              </button>
            );
          })}
        </Reveal>

        <div key={activeSection.id} className="space-y-8">
          <Reveal>
            <div className="rounded-2xl border border-border/80 bg-card/40 px-5 py-4 md:px-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  {(() => {
                    const GroupIcon = EXPERIENCE_GROUP_ICONS[activeSection.id];
                    return <GroupIcon size={18} />;
                  })()}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold md:text-xl">{activeSection.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{activeSection.blurb}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="relative space-y-8">
            {activeSection.items.map(({ e, idx }, itemIdx) => (
              <ExperienceCard
                key={`${e.company}-${idx}`}
                e={e}
                idx={itemIdx}
                logoSrc={getExperienceLogo(e.company, e.role)}
                anchor={getExperienceAnchor(e.role, e.company, idx)}
                isLast={itemIdx === activeSection.items.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const getProjectImage = (title: string, stack: string[]) => {
    const overrideName = PROJECT_IMAGE_OVERRIDES[title];
    if (overrideName) {
      const overrideAsset = getAssetByFileName(overrideName);
      if (overrideAsset) return overrideAsset;
    }
    return findBestAsset(title, [...stack, "project"]);
  };

  const filtered = useMemo(() => {
    const useLatest = activeFilters.includes("latest");
    const tagFilters = activeFilters.filter((f) => f !== "latest");
    const base = useLatest ? PROJECTS.slice(0, 6) : PROJECTS;
    if (tagFilters.length === 0) return base;
    return base.filter((p) => tagFilters.every((f) => p.tags.includes(f)));
  }, [activeFilters]);

  const toggleFilter = (id: string) => {
    if (id === "latest") {
      setActiveFilters(["latest"]);
      return;
    }
    if (id === "all") {
      setActiveFilters([]);
      return;
    }
    setActiveFilters((prev) => {
      const withoutLatest = prev.filter((f) => f !== "latest");
      return withoutLatest.includes(id) ? withoutLatest.filter((f) => f !== id) : [...withoutLatest, id];
    });
  };

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Projects" title="Selected work" subtitle="Production systems, research, and competition wins." />

        <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
          {PROJECT_FILTERS.map((f) => {
            const isActive =
              f.id === "all"
                ? activeFilters.length === 0
                : f.id === "latest"
                  ? activeFilters.includes("latest")
                  : activeFilters.includes(f.id);
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => toggleFilter(f.id)}
                className={`filter-pill ${isActive ? "active" : ""}`}
              >
                {f.label}
              </button>
            );
          })}
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              {(() => {
                const imageSrc = getProjectImage(p.title, p.stack);
                return (
              <article className="glass card-hover rounded-2xl p-6 h-full flex flex-col">
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt={`${p.title} preview`}
                    className="image-hover mb-4 h-40 w-full rounded-xl border border-border/70 object-cover bg-background/60"
                    loading="lazy"
                  />
                )}
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                {p.period && <p className="text-xs text-primary mt-1">{p.period}</p>}
                <p className="mt-3 text-sm text-muted-foreground flex-1">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4 text-sm">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition">
                      <Github size={15} /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:text-cyan transition">
                      <ExternalLink size={15} /> Demo
                    </a>
                  )}
                </div>
              </article>
                );
              })()}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Skills" title="Technical Stack" />
        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((g, i) => (
            <Reveal key={g.group} delay={i * 60}>
              <div className="glass card-hover rounded-2xl p-6 h-full">
                <h3 className="font-display text-sm uppercase tracking-[0.2em] text-primary font-semibold">
                  {g.group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(LINKS.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (!response.ok) throw new Error("Failed");
      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSent(false);
        setError(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something."
          subtitle="Open to AI engineering roles, research collaboration, and ambitious projects."
        />
        <Reveal>
          <div className="glass rounded-2xl p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
              <div className="flex flex-col gap-4">
                <a href={`mailto:${LINKS.email}`} className="btn-ghost justify-start">
                  <Mail size={16} /> {LINKS.email}
                </a>
                <p className="text-sm text-muted-foreground inline-flex items-center gap-2 px-4">
                  <MapPin size={14} /> La Jolla, California
                </p>
                <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn-ghost justify-start">
                  <Github size={16} /> GitHub
                </a>
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="btn-ghost justify-start">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 resize-none"
                />
                {sent && (
                  <p className="text-sm text-emerald-500">Thank you! Your message has been sent successfully.</p>
                )}
                {error && (
                  <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
                )}
                <button type="submit" disabled={loading} className="btn-primary justify-center">
                  {loading ? "Sending..." : sent ? "Thanks, I'll reply soon." : (<>Send message <Send size={15} /></>)}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
      <footer className="mt-20 border-t border-border pt-8 pb-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Vedant Vardhaan. Built with React & TanStack Start.
      </footer>
    </section>
  );
}
