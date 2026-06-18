import { useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ExternalLink, FileText, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Moon, Send, Sun, X } from "lucide-react";
//#region src/components/portfolio/data.ts
var LINKS = {
	github: "https://github.com/VedVar43789",
	linkedin: "https://www.linkedin.com/in/vedant-vardhaan-152280256/",
	email: "vvardhaan@ucsd.edu",
	resume: "#experience",
	formspree: "https://formspree.io/f/xgvkjvro"
};
var NAV = [
	{
		id: "about",
		label: "About"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var ABOUT = {
	primary: "I am a Data Science student at UC San Diego with a passion for machine learning, AI, and software development. My goal is to create meaningful solutions that leverage data to solve complex problems.",
	secondary: "Experience spans TensorFlow, Scikit-learn, neural networks, NLP, generative AI, React, React Native, Node.js, and full data pipelines, from exploratory analysis and statistical modeling to production agentic systems used by hundreds of students."
};
var EDUCATION = {
	degree: "B.S. Data Science (Minor: Finance)",
	school: "University of California, San Diego",
	location: "La Jolla, California",
	period: "Expected June 2027",
	gpa: "3.96",
	badges: [
		"Major: Data Science",
		"Minor: Finance",
		"Senior Standing"
	],
	honors: "Honors: Provost Honors (all quarters to date)",
	coursework: "Data Structures & Algorithms, Statistical Methods, Linear Algebra, Calculus for Science & Engineering, Introduction to Data Science, Managing Diverse Teams, Statistical Analysis, Data Visualization, Probabilistic Modeling, Machine Learning",
	clubs: [
		"DS3",
		"CSES",
		"Engineers for Exploration (E4E)"
	]
};
var EXPERIENCE = [
	{
		role: "Chief Technology Officer & Founding Engineer",
		company: "UniCircle",
		period: "May 2026 - Present",
		location: "San Diego, CA",
		description: "Own all technical architecture and infrastructure for unicircle.app (React/TypeScript, Supabase, Vercel). Designed a FERPA/CCPA-compliant backend with Supabase Edge Functions and PostgreSQL. Lead engineering contributors, code review, CI/CD, and the technical roadmap with the CEO.",
		tags: [
			"React",
			"TypeScript",
			"Supabase",
			"Vercel"
		]
	},
	{
		role: "Applied AI Research Assistant",
		company: "UCSD CSE",
		period: "Nov 2025 - Present",
		location: "San Diego, CA",
		description: "Research with Prof. Deepak Kumar (UCSD) and Prof. Jeremy D. Foote (Purdue) on chatbot-driven interventions and Reddit user behavior. Co-authoring a paper on whether AI-mediated conversations can reduce toxic discourse at scale. Built web scraping pipelines for structured medical website data collection.",
		tags: [
			"LLMs",
			"Applied ML",
			"Research"
		]
	},
	{
		role: "Undergraduate Researcher (Project Lead)",
		company: "Engineers for Exploration (E4E)",
		period: "Oct 2025 - Apr 2026",
		location: "San Diego, CA",
		description: "Lead an interdisciplinary team building an AI system that predicts mangrove presence by fusing drone imagery and Sentinel-2 satellite data for Scripps Institution of Oceanography. Oversee data pipelines, feature fusion, and model integration with Python, TensorFlow, NumPy, and Google Earth Engine.",
		tags: [
			"TensorFlow",
			"Google Earth Engine",
			"Sentinel-2"
		]
	},
	{
		role: "Technology Consultant Intern, AI Engineering",
		company: "PwC India",
		period: "Jun 2025 - Sep 2025",
		location: "Gurugram, India",
		description: "Built an agentic AI chatbot for natural language AWS/Azure onboarding across 15+ cloud services. Designed multi-agent orchestration with LangGraph, Gemini 2.5 Pro, and LangChain, cutting manual configuration time by 60%. Implemented secure credential management and automated baseline security with Azure Key Vault.",
		tags: [
			"LangGraph",
			"Gemini 2.5 Pro",
			"AWS",
			"Azure"
		]
	},
	{
		role: "Assistant Projects Director (Projects Mentor)",
		company: "DS3, Data Science Student Society",
		period: "Jul 2025 - Present",
		location: "San Diego, CA",
		description: "Lead ideation and selection of 10-12+ quarterly data science projects. Mentor teams through full data pipelines, including preprocessing, feature engineering, model selection, and deployment. Coordinate timelines and evaluation metrics with senior leadership for end-of-quarter showcases.",
		tags: ["Leadership", "Data Science"]
	},
	{
		role: "Tutor / Instructional Assistant",
		company: "Halicioglu Data Science Institute, UCSD",
		period: "Mar 2025 - Jun 2025",
		location: "San Diego, CA",
		description: "Conducted weekly discussion sections and office hours for DSC 40A covering empirical risk minimization, optimization, regression, classification, and discrete probability. Evaluated assignments and exams with structured feedback.",
		tags: ["Machine Learning", "Teaching"]
	},
	{
		role: "Engineering Manager & Software Developer",
		company: "CSES Open Source, TritonSpend",
		period: "Nov 2024 - Present",
		location: "San Diego, CA",
		meta: "President-elect, CSES Open Source 2026-27",
		description: "Lead development of TritonSpend, a cross-platform financial management app with 100+ active UCSD users (React Native, Node.js, PostgreSQL). Oversee sprint planning, onboarding, code reviews, CI/CD, and QA for budget tracking, real-time analytics, and AI-based insights.",
		tags: [
			"React Native",
			"Node.js",
			"PostgreSQL"
		]
	},
	{
		role: "Quantitative Analyst",
		company: "Triton Quantitative Trading (TQT)",
		period: "Oct 2024 - Jan 2025",
		location: "San Diego, CA",
		description: "Built a hybrid LSTM/GRU forecasting model with Monte Carlo simulations (Geometric Brownian Motion). Integrated technical indicators, VADER sentiment analysis, and Sharpe Ratio risk metrics. Deployed as a modular Streamlit app with yFinance and REST API support.",
		tags: [
			"LSTM",
			"GRU",
			"Streamlit",
			"Monte Carlo"
		]
	},
	{
		role: "ML Research Intern",
		company: "IIT Guwahati",
		period: "Jun 2024 - Sep 2024",
		location: "Assam, India",
		description: "Developed a ResNet50 CNN for SAR image classification achieving 80% accuracy across land cover types. Applied Lee and Gamma MAP speckle filters. Evaluated with precision, recall, F1-scores, and confusion matrices.",
		tags: [
			"PyTorch",
			"SAR",
			"CNN",
			"ResNet50"
		]
	}
];
var PROJECT_FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "ml",
		label: "ML/AI"
	},
	{
		id: "cv",
		label: "Computer Vision"
	},
	{
		id: "nlp",
		label: "NLP/RAG"
	},
	{
		id: "streamlit",
		label: "Streamlit"
	},
	{
		id: "dataviz",
		label: "Data Viz"
	},
	{
		id: "timeseries",
		label: "Time Series"
	},
	{
		id: "recsys",
		label: "Recommenders"
	},
	{
		id: "api",
		label: "APIs"
	},
	{
		id: "backend",
		label: "Backend/DB"
	}
];
var PROJECTS = [...[
	{
		title: "Math Reasoning (Qwen3-4B-Thinking)",
		period: "May 2026",
		description: "Fine-tuned Qwen3-4B-Thinking for the CSE 151B reasoning competition with 0.720 public leaderboard accuracy.",
		stack: [
			"PyTorch",
			"LoRA",
			"LLM Fine-tuning"
		],
		tags: ["ml", "nlp"],
		sortKey: 202605
	},
	{
		title: "Invasive Species Tracker",
		period: "Jan 2026 - Mar 2026",
		description: "Mentored full-stack environmental intelligence platform predicting invasive plant species risk. Combined map-based scanning with a hybrid ML risk engine (climate similarity, aggression traits, invasion history). Won DS3 showcase recognition.",
		stack: [
			"React",
			"Mapbox",
			"FastAPI",
			"FAISS",
			"Open-Meteo",
			"GBIF"
		],
		demo: "https://invasive-watch.vercel.app",
		tags: [
			"ml",
			"dataviz",
			"api",
			"backend"
		],
		sortKey: 202603
	},
	{
		title: "SoCal-Guessr",
		period: "Feb 2026",
		description: "Fine-tuned ImageNet-pretrained ResNet18 with a 6-class head to predict Southern California cities from street photos. End-to-end training workflow with checkpointing and deployable inference.",
		stack: [
			"Python",
			"PyTorch",
			"ResNet18",
			"Computer Vision"
		],
		tags: ["ml", "cv"],
		sortKey: 202602
	},
	{
		title: "Reinforcement Learning Poker Bot",
		period: "Nov 2025 - Dec 2025",
		description: "Implemented MCCFR (95.3% win rate), DQN, and NFSP v2 for Texas Hold'em. Built evaluation framework with confidence intervals and BB/100 metrics. GPU-accelerated training with TensorFlow/PyTorch and RLCard.",
		stack: [
			"Python",
			"TensorFlow",
			"PyTorch",
			"MCCFR",
			"DQN",
			"NFSP"
		],
		github: "https://github.com/ChinmayB1/RL-Poker-Bot/tree/main",
		tags: ["ml"],
		sortKey: 202512
	},
	{
		title: "Steam Game Recommendation System",
		period: "Nov 2025 - Dec 2025",
		description: "92.79% AUC-ROC and 95.17% precision combining statistical features, user encoding, and SBERT embeddings, a 20.9% improvement over baseline. 85.32% AUC-ROC for cold-start users.",
		stack: [
			"Python",
			"SBERT",
			"Logistic Regression",
			"NLP"
		],
		github: "https://github.com/VedVar43789/Steam-Game-Recommendation-System",
		tags: [
			"ml",
			"recsys",
			"nlp"
		],
		sortKey: 202512
	},
	{
		title: "PantryPal, Smart Recipe Recommender",
		period: "Oct 2025 - Dec 2025",
		description: "Streamlit app suggesting recipes from text or pantry photos via EfficientNetB0 ingredient detection, fuzzy matching, and nutrition-aware ranking. Won Best Project at DS3 Fall 2025 showcase.",
		stack: [
			"Python",
			"PyTorch",
			"EfficientNetB0",
			"OpenCV",
			"Streamlit"
		],
		demo: "https://pantrypalucsd.streamlit.app/",
		tags: [
			"ml",
			"cv",
			"streamlit",
			"recsys",
			"api"
		],
		sortKey: 202512
	},
	{
		title: "TubeScope, Trending Lifecycle Analytics",
		period: "Oct 2025 - Dec 2025",
		description: "ML dashboard predicting sustained YouTube virality with Random Forest and Kaplan-Meier survival curves. Automated daily YouTube Data API pulls. 3rd place at DS3 Fall 2025 showcase.",
		stack: [
			"Python",
			"scikit-learn",
			"YouTube Data API",
			"Streamlit",
			"lifelines"
		],
		demo: "https://tubescopeds3.streamlit.app/",
		tags: [
			"ml",
			"streamlit",
			"dataviz",
			"timeseries",
			"api"
		],
		sortKey: 202512
	},
	{
		title: "The Seismic Lottery",
		period: "May 2025 - Jun 2025",
		description: "Interactive D3.js earthquake visualization exploring how infrastructure resilience shapes outcomes. Won Best Project & People's Choice among 42 teams in DSC 106.",
		stack: [
			"JavaScript",
			"D3.js",
			"TopoJSON"
		],
		demo: "https://vedvar43789.github.io/earthquakes/",
		tags: ["dataviz"],
		sortKey: 202506
	},
	{
		title: "Watts the Problem?",
		period: "Mar 2025",
		description: "Power outage prediction with end-to-end ML pipeline. Optimized Random Forest via GridSearchCV with 74.3% accuracy.",
		stack: [
			"Python",
			"Scikit-learn",
			"Random Forest",
			"GridSearchCV"
		],
		tags: ["ml"],
		sortKey: 202503
	},
	{
		title: "MarketScope: Intelligent Stock Forecasting",
		period: "Oct 2024 - Jan 2025",
		description: "Hybrid LSTM/GRU model with Monte Carlo simulations, technical indicators, sentiment analysis, and risk metrics. Modular Streamlit app with yFinance and REST API.",
		stack: [
			"Python",
			"LSTM/GRU",
			"Monte Carlo",
			"Streamlit"
		],
		github: "https://github.com/Igosain08/stock-forecast-app",
		tags: [
			"ml",
			"timeseries",
			"streamlit"
		],
		sortKey: 202501
	},
	{
		title: "TritonSpend",
		period: "Nov 2024 - Present",
		description: "Student finance app with 100+ active UCSD users for budgeting, expense tracking, and social spending insights.",
		stack: [
			"React Native",
			"Node.js",
			"PostgreSQL"
		],
		tags: ["backend", "api"],
		sortKey: 202411
	},
	{
		title: "Blood Report Analysis Chatbot",
		period: "Oct 2024",
		description: "RAG chatbot for medical report analysis using LangChain, ChromaDB, Hugging Face embeddings, and PyPDFLoader with a Streamlit chat UI.",
		stack: [
			"RAG",
			"LangChain",
			"ChromaDB",
			"Hugging Face",
			"Streamlit"
		],
		tags: [
			"ml",
			"nlp",
			"streamlit",
			"api"
		],
		sortKey: 202410
	},
	{
		title: "SAR Image Classification with CNN",
		period: "Jun 2024 - Sep 2024",
		description: "ResNet50 CNN for SAR land cover classification at 80% accuracy with Lee and Gamma MAP speckle filtering.",
		stack: [
			"Python",
			"TensorFlow",
			"CNN",
			"ResNet50"
		],
		github: "https://github.com/VedVar43789/SAR-Image-Classification",
		tags: ["ml", "cv"],
		sortKey: 202409
	},
	{
		title: "Advanced Image Processing & KNN",
		period: "Jan 2024 - Mar 2024",
		description: "Image processing suite with PIL/NumPy operations and K-Nearest Neighbors classification.",
		stack: [
			"Python",
			"NumPy",
			"PIL",
			"KNN"
		],
		tags: ["ml"],
		sortKey: 202403
	},
	{
		title: "CampusShelf",
		period: "2024",
		description: "Python-Tkinter library management desktop app with MySQL for book lending and tracking.",
		stack: [
			"Python",
			"Tkinter",
			"MySQL"
		],
		tags: ["backend"],
		sortKey: 202401
	},
	{
		title: "Song Recommender",
		period: "2024",
		description: "Music recommendation engine using audio features and artist discography similarity matching.",
		stack: [
			"Python",
			"ML",
			"Audio Analysis"
		],
		tags: ["ml", "recsys"],
		sortKey: 202401
	}
]].sort((a, b) => b.sortKey - a.sortKey);
var SKILLS = [
	{
		group: "Programming Languages",
		items: [
			"Python",
			"Java",
			"JavaScript",
			"TypeScript",
			"R",
			"SQL",
			"HTML",
			"CSS"
		]
	},
	{
		group: "Cloud & Infrastructure",
		items: [
			"AWS",
			"EC2",
			"S3",
			"RDS",
			"Azure",
			"Azure Key Vault",
			"Docker",
			"CI/CD",
			"IAM",
			"GuardDuty"
		]
	},
	{
		group: "Machine Learning & AI",
		items: [
			"TensorFlow",
			"Scikit-learn",
			"PyTorch",
			"Neural Networks",
			"NLP",
			"Generative AI",
			"LangChain",
			"LangGraph",
			"Agentic AI",
			"RAG",
			"FAISS",
			"Computer Vision",
			"Google Earth Engine",
			"LSTM",
			"GRU",
			"CNN",
			"ResNet50",
			"LoRA",
			"LLM Fine-tuning"
		]
	},
	{
		group: "Data Science & Analytics",
		items: [
			"Pandas",
			"NumPy",
			"Matplotlib",
			"Seaborn",
			"Statistical Modeling",
			"Time Series Analysis",
			"Monte Carlo Simulations",
			"Feature Engineering",
			"yFinance",
			"Geospatial Analytics"
		]
	},
	{
		group: "Development",
		items: [
			"React",
			"React Native",
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"MongoDB",
			"Supabase",
			"FastAPI",
			"Streamlit",
			"RESTful APIs",
			"Vercel",
			"D3.js",
			"Git"
		]
	},
	{
		group: "Spoken Languages",
		items: [
			"English",
			"Hindi",
			"Urdu",
			"Arabic (elementary)"
		]
	}
];
//#endregion
//#region src/components/portfolio/Nav.tsx
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [dark, setDark] = useState(true);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		document.documentElement.classList.toggle("light", !dark);
	}, [dark]);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "font-display text-lg font-bold tracking-tight",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: "Vedant"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-primary",
						children: "."
					})]
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground",
					children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#${n.id}`,
						className: "nav-link hover:text-foreground",
						children: n.label
					}) }, n.id))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("button", {
						"aria-label": "Toggle theme",
						onClick: () => setDark((v) => !v),
						className: "rounded-full p-2 text-muted-foreground transition hover:text-foreground hover:bg-secondary",
						children: dark ? /* @__PURE__ */ jsx(Sun, { size: 18 }) : /* @__PURE__ */ jsx(Moon, { size: 18 })
					}), /* @__PURE__ */ jsx("button", {
						"aria-label": "Open menu",
						className: "md:hidden rounded-full p-2 text-muted-foreground hover:text-foreground",
						onClick: () => setOpen(true),
						children: /* @__PURE__ */ jsx(Menu, { size: 20 })
					})]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: `md:hidden fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`,
			"aria-hidden": !open,
			children: [/* @__PURE__ */ jsx("div", {
				className: `absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`,
				onClick: () => setOpen(false)
			}), /* @__PURE__ */ jsxs("aside", {
				className: `absolute right-0 top-0 h-full w-72 glass border-l p-6 transition-transform ${open ? "translate-x-0" : "translate-x-full"}`,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between mb-8",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-display font-bold",
						children: "Menu"
					}), /* @__PURE__ */ jsx("button", {
						"aria-label": "Close menu",
						onClick: () => setOpen(false),
						className: "p-2",
						children: /* @__PURE__ */ jsx(X, { size: 20 })
					})]
				}), /* @__PURE__ */ jsx("ul", {
					className: "flex flex-col gap-5 text-base",
					children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#${n.id}`,
						onClick: () => setOpen(false),
						className: "nav-link hover:text-foreground",
						children: n.label
					}) }, n.id))
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/portfolio/Hero.tsx
var ROLES = [
	"Agentic AI & Multi-Agent Systems",
	"Full-Stack Engineering",
	"Applied Machine Learning"
];
function Hero() {
	const [roleIdx, setRoleIdx] = useState(0);
	const [text, setText] = useState("");
	const [deleting, setDeleting] = useState(false);
	useEffect(() => {
		const full = ROLES[roleIdx];
		const t = setTimeout(() => {
			if (!deleting) {
				const next = full.slice(0, text.length + 1);
				setText(next);
				if (next === full) setTimeout(() => setDeleting(true), 1400);
			} else {
				const next = full.slice(0, text.length - 1);
				setText(next);
				if (next === "") {
					setDeleting(false);
					setRoleIdx((i) => (i + 1) % ROLES.length);
				}
			}
		}, deleting ? 35 : 60);
		return () => clearTimeout(t);
	}, [
		text,
		deleting,
		roleIdx
	]);
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 grid-bg",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx("div", {
				className: "orb h-72 w-72 bg-primary/40 left-[-4rem] top-24",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx("div", {
				className: "orb h-80 w-80 bg-cyan/40 right-[-4rem] top-10",
				style: { animationDelay: "-4s" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx("div", {
				className: "orb h-96 w-96 bg-primary/25 left-1/2 top-1/2",
				style: { animationDelay: "-8s" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-5xl px-6 text-center",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur animate-fade-in",
						children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-cyan animate-pulse" }), "Open to AI / ML Engineering roles · Summer 2026"]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-8 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: "Hi, I'm "
							}),
							/* @__PURE__ */ jsx("span", {
								className: "bg-gradient-to-br from-primary via-accent to-cyan bg-clip-text text-transparent",
								children: "Vedant"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: "."
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-6 text-lg md:text-2xl text-foreground/90 font-display font-medium animate-fade-in",
						children: [
							"AI Systems Engineer · ",
							/* @__PURE__ */ jsx("span", {
								className: "text-primary",
								children: text
							}),
							/* @__PURE__ */ jsx("span", { className: "caret" })
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground animate-fade-in",
						children: "Data Science student at UC San Diego with a passion for machine learning, AI, and software development. My goal is to build meaningful solutions that leverage data to solve complex problems."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-in",
						children: [
							/* @__PURE__ */ jsxs("a", {
								href: "#projects",
								className: "btn-primary",
								children: ["View Projects ", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: LINKS.github,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-ghost",
								children: [/* @__PURE__ */ jsx(Github, { size: 16 }), " GitHub"]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: LINKS.resume,
								className: "btn-ghost",
								children: [/* @__PURE__ */ jsx(FileText, { size: 16 }), " Resume"]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "#contact",
								className: "btn-ghost",
								children: [/* @__PURE__ */ jsx(Mail, { size: 16 }), " Contact"]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex items-center justify-center gap-5 text-muted-foreground animate-fade-in",
						children: [
							/* @__PURE__ */ jsx("a", {
								"aria-label": "GitHub",
								href: LINKS.github,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-foreground transition hover-scale",
								children: /* @__PURE__ */ jsx(Github, { size: 20 })
							}),
							/* @__PURE__ */ jsx("a", {
								"aria-label": "LinkedIn",
								href: LINKS.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-foreground transition hover-scale",
								children: /* @__PURE__ */ jsx(Linkedin, { size: 20 })
							}),
							/* @__PURE__ */ jsx("a", {
								"aria-label": "Email",
								href: `mailto:${LINKS.email}`,
								className: "hover:text-foreground transition hover-scale",
								children: /* @__PURE__ */ jsx(Mail, { size: 20 })
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/portfolio/Reveal.tsx
function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setTimeout(() => setVisible(true), delay);
					io.unobserve(e.target);
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);
	return /* @__PURE__ */ jsx(Tag, {
		ref,
		"data-visible": visible,
		className: `reveal ${className}`,
		children
	});
}
//#endregion
//#region src/components/portfolio/Sections.tsx
function SectionHeader({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ jsxs(Reveal, {
		className: "mb-12 text-center",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-xs uppercase tracking-[0.25em] text-primary font-semibold",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight",
				children: title
			}),
			subtitle && /* @__PURE__ */ jsx("p", {
				className: "mt-3 text-muted-foreground max-w-2xl mx-auto",
				children: subtitle
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "About",
				title: "Building agentic systems that ship."
			}), /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "glass card-hover rounded-2xl p-8 md:p-10 text-base md:text-lg leading-relaxed text-foreground/90",
				children: [/* @__PURE__ */ jsx("p", { children: ABOUT.primary }), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-muted-foreground",
					children: ABOUT.secondary
				})]
			}) })]
		})
	});
}
function Education() {
	return /* @__PURE__ */ jsx("section", {
		id: "education",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Education",
				title: EDUCATION.school
			}), /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "glass card-hover rounded-2xl p-8 md:p-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-start gap-6 justify-between",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-4 min-w-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ jsx(GraduationCap, { size: 22 })
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-xl md:text-2xl font-semibold",
									children: EDUCATION.degree
								}), /* @__PURE__ */ jsxs("p", {
									className: "mt-1 text-muted-foreground inline-flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx(MapPin, { size: 14 }),
										" ",
										EDUCATION.location
									]
								})]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "text-right",
							children: [/* @__PURE__ */ jsxs("p", {
								className: "font-display text-lg font-semibold text-primary",
								children: ["GPA ", EDUCATION.gpa]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground",
								children: EDUCATION.period
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: EDUCATION.badges.map((b) => /* @__PURE__ */ jsx("span", {
							className: "skill-pill",
							children: b
						}, b))
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: EDUCATION.honors
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-4 text-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-medium text-foreground",
							children: "Relevant Coursework: "
						}), /* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: EDUCATION.coursework
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: EDUCATION.clubs.map((c) => /* @__PURE__ */ jsx("span", {
							className: "skill-pill",
							children: c
						}, c))
					})
				]
			}) })]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ jsx("section", {
		id: "experience",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Experience",
				title: "Work & Research",
				subtitle: "Most recent first."
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:-translate-x-1/2",
					"aria-hidden": true
				}), /* @__PURE__ */ jsx("ul", {
					className: "space-y-10",
					children: EXPERIENCE.map((e, i) => /* @__PURE__ */ jsx("li", {
						className: "relative",
						children: /* @__PURE__ */ jsx(Reveal, {
							delay: i * 60,
							className: `md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 1 ? "md:[&>div]:col-start-2" : ""}`,
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative pl-12 md:pl-0 md:pr-10 md:text-right",
								children: [/* @__PURE__ */ jsx("span", { className: "absolute left-2 md:left-auto md:right-[-9px] top-3 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_var(--background)]" }), /* @__PURE__ */ jsxs("div", {
									className: "glass card-hover rounded-xl p-6 md:inline-block md:text-left md:max-w-md",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-primary text-xs font-medium",
											children: e.period
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "font-display text-lg font-semibold mt-1",
											children: e.role
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-primary text-sm font-medium mt-0.5",
											children: e.company
										}),
										e.meta && /* @__PURE__ */ jsx("p", {
											className: "text-xs text-muted-foreground mt-1",
											children: e.meta
										}),
										e.location && /* @__PURE__ */ jsx("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: e.location
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-3 text-sm text-muted-foreground",
											children: e.description
										}),
										e.tags && /* @__PURE__ */ jsx("div", {
											className: "mt-4 flex flex-wrap gap-2",
											children: e.tags.map((t) => /* @__PURE__ */ jsx("span", {
												className: "skill-pill",
												children: t
											}, t))
										})
									]
								})]
							})
						})
					}, `${e.company}-${i}`))
				})]
			})]
		})
	});
}
function Projects() {
	const [activeFilters, setActiveFilters] = useState([]);
	const filtered = useMemo(() => {
		if (activeFilters.length === 0) return PROJECTS;
		return PROJECTS.filter((p) => activeFilters.every((f) => p.tags.includes(f)));
	}, [activeFilters]);
	const toggleFilter = (id) => {
		if (id === "all") {
			setActiveFilters([]);
			return;
		}
		setActiveFilters((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
	};
	return /* @__PURE__ */ jsx("section", {
		id: "projects",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ jsx(SectionHeader, {
					eyebrow: "Projects",
					title: "Selected work",
					subtitle: "Production systems, research, and competition wins."
				}),
				/* @__PURE__ */ jsx(Reveal, {
					className: "mb-8 flex flex-wrap justify-center gap-2",
					children: PROJECT_FILTERS.map((f) => {
						return /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => toggleFilter(f.id),
							className: `filter-pill ${(f.id === "all" ? activeFilters.length === 0 : activeFilters.includes(f.id)) ? "active" : ""}`,
							children: f.label
						}, f.id);
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((p, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ jsxs("article", {
							className: "glass card-hover rounded-2xl p-6 h-full flex flex-col",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-xl font-semibold",
									children: p.title
								}),
								p.period && /* @__PURE__ */ jsx("p", {
									className: "text-xs text-primary mt-1",
									children: p.period
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm text-muted-foreground flex-1",
									children: p.description
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: p.stack.map((s) => /* @__PURE__ */ jsx("span", {
										className: "skill-pill",
										children: s
									}, s))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-5 flex items-center gap-4 text-sm",
									children: [p.github && /* @__PURE__ */ jsxs("a", {
										href: p.github,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition",
										children: [/* @__PURE__ */ jsx(Github, { size: 15 }), " Code"]
									}), p.demo && /* @__PURE__ */ jsxs("a", {
										href: p.demo,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1.5 text-primary hover:text-cyan transition",
										children: [/* @__PURE__ */ jsx(ExternalLink, { size: 15 }), " Demo"]
									})]
								})
							]
						})
					}, p.title))
				})
			]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ jsx("section", {
		id: "skills",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Skills",
				title: "Technical Stack"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: SKILLS.map((g, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ jsxs("div", {
						className: "glass card-hover rounded-2xl p-6 h-full",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display text-sm uppercase tracking-[0.2em] text-primary font-semibold",
							children: g.group
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: g.items.map((s) => /* @__PURE__ */ jsx("span", {
								className: "skill-pill",
								children: s
							}, s))
						})]
					})
				}, g.group))
			})]
		})
	});
}
function Contact() {
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(false);
		const form = e.currentTarget;
		const formData = new FormData(form);
		try {
			if (!(await fetch(LINKS.formspree, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					name: formData.get("name"),
					email: formData.get("email"),
					message: formData.get("message")
				})
			})).ok) throw new Error("Failed");
			setSent(true);
			form.reset();
		} catch {
			setError(true);
		} finally {
			setLoading(false);
			setTimeout(() => {
				setSent(false);
				setError(false);
			}, 5e3);
		}
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "relative py-24 md:py-32",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-6",
			children: [/* @__PURE__ */ jsx(SectionHeader, {
				eyebrow: "Contact",
				title: "Let's build something.",
				subtitle: "Open to AI engineering roles, research collaboration, and ambitious projects."
			}), /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", {
				className: "glass rounded-2xl p-6 md:p-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-8 md:grid-cols-[1fr_1.2fr]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ jsxs("a", {
								href: `mailto:${LINKS.email}`,
								className: "btn-ghost justify-start",
								children: [
									/* @__PURE__ */ jsx(Mail, { size: 16 }),
									" ",
									LINKS.email
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-sm text-muted-foreground inline-flex items-center gap-2 px-4",
								children: [/* @__PURE__ */ jsx(MapPin, { size: 14 }), " La Jolla, California"]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: LINKS.github,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-ghost justify-start",
								children: [/* @__PURE__ */ jsx(Github, { size: 16 }), " GitHub"]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: LINKS.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-ghost justify-start",
								children: [/* @__PURE__ */ jsx(Linkedin, { size: 16 }), " LinkedIn"]
							})
						]
					}), /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ jsx("input", {
								required: true,
								name: "name",
								placeholder: "Your name",
								className: "rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
							}),
							/* @__PURE__ */ jsx("input", {
								required: true,
								name: "email",
								type: "email",
								placeholder: "Email",
								className: "rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
							}),
							/* @__PURE__ */ jsx("textarea", {
								required: true,
								name: "message",
								rows: 4,
								placeholder: "Message",
								className: "rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 resize-none"
							}),
							sent && /* @__PURE__ */ jsx("p", {
								className: "text-sm text-emerald-500",
								children: "Thank you! Your message has been sent successfully."
							}),
							error && /* @__PURE__ */ jsx("p", {
								className: "text-sm text-red-500",
								children: "Something went wrong. Please try again."
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: loading,
								className: "btn-primary justify-center",
								children: loading ? "Sending..." : sent ? "Thanks, I'll reply soon." : /* @__PURE__ */ jsxs(Fragment, { children: ["Send message ", /* @__PURE__ */ jsx(Send, { size: 15 })] })
							})
						]
					})]
				})
			}) })]
		}), /* @__PURE__ */ jsxs("footer", {
			className: "mt-20 border-t border-border pt-8 pb-10 text-center text-sm text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Vedant Vardhaan. Built with React & TanStack Start."
			]
		})]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Education, {}),
			/* @__PURE__ */ jsx(Experience, {}),
			/* @__PURE__ */ jsx(Projects, {}),
			/* @__PURE__ */ jsx(Skills, {}),
			/* @__PURE__ */ jsx(Contact, {})
		]
	});
}
//#endregion
export { Index as component };
