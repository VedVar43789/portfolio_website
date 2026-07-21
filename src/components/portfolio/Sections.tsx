import { Github, ExternalLink, GraduationCap, MapPin, Mail, Linkedin, Send, ChevronsRight, Sparkles, Star, Briefcase, FlaskConical, Users } from "lucide-react";
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
  "PwC India": "pwc",
  "DS3, Data Science Student Society": "ds3",
  "Halicioglu Data Science Institute, UCSD": "hdsi",
  "CSES Open Source, TritonSpend": "cses",
  "Triton Quantitative Trading (TQT)": "tqt",
  "IIT Guwahati": "iitg_logo",
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

function ExperienceCard({ e, idx, logoSrc, anchor }: { e: ExperienceItem; idx: number; logoSrc?: string; anchor: string }) {
  const isFeatured = Boolean(e.featured);
  return (
    <Reveal delay={idx * 60} className="h-full">
      <div
        id={anchor}
        className={`card-hover h-full rounded-xl p-6 ${
          isFeatured
            ? "border border-amber-300/50 bg-gradient-to-br from-amber-200/10 via-card/85 to-primary/10 shadow-[0_12px_35px_-20px_rgba(251,191,36,0.65)]"
            : "glass"
        } scroll-mt-28`}
      >
        <p className={`text-xs font-medium ${isFeatured ? "text-amber-300" : "text-primary"}`}>{e.period}</p>
        <div className="mt-1 flex items-start gap-3">
          {logoSrc && (
            <img
              src={logoSrc}
              alt={`${e.company} logo`}
              className="h-9 w-9 rounded-md border border-border/70 object-contain bg-background/70 p-1"
              loading="lazy"
            />
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-display text-lg font-semibold">{e.role}</h3>
              {isFeatured && <Star size={14} className="fill-amber-300 text-amber-300" aria-label="Featured role" />}
            </div>
            <p className="text-primary text-sm font-medium mt-0.5">{e.company}</p>
          </div>
        </div>
        {e.meta && <p className="text-xs text-muted-foreground mt-1">{e.meta}</p>}
        {e.location && <p className="text-xs text-muted-foreground mt-0.5">{e.location}</p>}
        <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
        {e.progression && e.progression.length > 0 && (
          <div className="mt-4 rounded-lg border border-border/70 bg-background/30 p-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-primary font-semibold">
              Career Progression
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {e.progression.map((step, i) => (
                <div key={`${step.role}-${step.period}`} className="contents">
                  <div
                    className={`rounded-md border px-2.5 py-1.5 text-xs ${
                      step.current
                        ? "border-primary/70 bg-primary/15 text-foreground"
                        : "border-border/70 bg-background/55 text-muted-foreground"
                    }`}
                  >
                    <p className="font-medium">{step.role}</p>
                    <p className="text-[11px] opacity-80">{step.period}</p>
                  </div>
                  {e.progression && i < e.progression.length - 1 && <ChevronsRight size={14} className="text-primary/60" />}
                </div>
              ))}
            </div>
          </div>
        )}
        {e.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {e.tags.map((t) => (
              <span key={t} className="skill-pill">{t}</span>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export function Experience() {
  const getExperienceLogo = (company: string, role: string) => {
    const overrideName = EXPERIENCE_LOGO_OVERRIDES[company];
    if (overrideName) {
      const overrideAsset = getAssetByFileName(overrideName);
      if (overrideAsset) return overrideAsset;
    }
    return findBestAsset(company, [role, "logo", "company"]);
  };
  const getExperienceAnchor = (role: string, company: string, idx: number) =>
    `experience-${idx}-${normalizeAssetKey(`${role}-${company}`).replace(/\s+/g, "-")}`;

  const indexedExperience = EXPERIENCE.map((e, idx) => ({ e, idx }));
  const featuredRoles = indexedExperience.filter((row) => row.e.featured);
  const groupedExperience = EXPERIENCE_GROUPS.map((g) => ({
    ...g,
    items: indexedExperience.filter((row) => row.e.group === g.id),
  }));

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Industry roles, research, and campus leadership — most recent first in each."
        />

        {featuredRoles.length > 0 && (
          <Reveal className="mb-10">
            <div className="relative overflow-hidden rounded-2xl border border-primary/45 bg-gradient-to-br from-primary/12 via-card/70 to-cyan/10 p-5 shadow-[0_18px_45px_-24px_var(--glow)] md:p-6">
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-primary/20 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -left-10 -bottom-14 h-36 w-36 rounded-full bg-cyan/20 blur-3xl" aria-hidden />
              <div className="relative flex items-center gap-2 text-primary">
                <Sparkles size={14} />
                <p className="text-[11px] uppercase tracking-[0.24em] font-semibold">Featured Roles</p>
              </div>
              <p className="relative mt-1 text-xs text-muted-foreground">
                Leadership and high-impact roles highlighted first.
              </p>
              <div className="relative mt-4 grid gap-3 md:grid-cols-3">
                {featuredRoles.map(({ e, idx }) => (
                  <a
                    key={`${e.company}-${e.role}-featured`}
                    href={`#${getExperienceAnchor(e.role, e.company, idx)}`}
                    className="rounded-xl border border-primary/35 bg-background/70 p-4 shadow-[0_10px_28px_-18px_var(--glow)] transition hover:-translate-y-0.5 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  >
                    <p className="text-[11px] text-primary font-semibold">{e.period}</p>
                    <h3 className="mt-1 font-display text-lg font-bold leading-tight text-foreground">{e.role}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{e.company}</p>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <Reveal className="mb-12 flex flex-wrap justify-center gap-2">
          {groupedExperience.map((g) => (
            <a key={g.id} href={`#experience-group-${g.id}`} className="filter-pill">
              {g.label}
            </a>
          ))}
        </Reveal>

        <div className="space-y-16">
          {groupedExperience.map((g) => {
            const GroupIcon = EXPERIENCE_GROUP_ICONS[g.id];
            return (
              <div key={g.id} id={`experience-group-${g.id}`} className="scroll-mt-28">
                <Reveal className="mb-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <GroupIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold">{g.label}</h3>
                    <p className="text-sm text-muted-foreground">{g.blurb}</p>
                  </div>
                </Reveal>
                <div className="grid gap-6 md:grid-cols-2">
                  {g.items.map(({ e, idx }) => (
                    <ExperienceCard
                      key={`${e.company}-${idx}`}
                      e={e}
                      idx={idx}
                      logoSrc={getExperienceLogo(e.company, e.role)}
                      anchor={getExperienceAnchor(e.role, e.company, idx)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["latest"]);
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
