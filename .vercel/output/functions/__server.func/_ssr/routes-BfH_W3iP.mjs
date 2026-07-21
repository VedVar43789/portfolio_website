import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Briefcase, a as Send, c as MapPin, d as GraduationCap, f as Github, g as ChevronDown, h as ExternalLink, i as Star, l as Mail, m as FileText, n as Users, o as Moon, p as FlaskConical, r as Sun, s as Menu, t as X, u as Linkedin, v as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BfH_W3iP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINKS = {
	github: "https://github.com/VedVar43789",
	linkedin: "https://www.linkedin.com/in/vedant-vardhaan-152280256/",
	email: "vvardhaan@ucsd.edu",
	resumeSWE: "/assets/Vedant_Vardhaan_SWE-2.pdf",
	resumeAIML: "/assets/Vedant_Vardhaan_AI_ML_Engineer-2.pdf",
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
	secondary: "Experience spans TensorFlow, Scikit-learn, NLP, generative AI, agentic AI, MCP-based workflows, and end-to-end full-stack delivery with React/Node. I regularly use Claude Code and Cursor for high-velocity AI engineering, and ship analytics/ML systems with cloud tooling including AWS, GCP, and Tableau-driven reporting."
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
var EXPERIENCE_GROUPS = [
	{
		id: "industry",
		label: "Industry Experience",
		blurb: "Internships and full-time-style engineering roles."
	},
	{
		id: "research",
		label: "Research",
		blurb: "Applied AI, ML, and computer vision research across labs and institutions."
	},
	{
		id: "campus",
		label: "Campus Leadership",
		blurb: "Student organizations, teaching, and quant/trading clubs at UCSD."
	}
];
var EXPERIENCE = [
	{
		role: "Chief Technology Officer & Full Stack Engineer",
		company: "UniCircle",
		period: "May 2026 - Present",
		location: "San Diego, CA",
		featured: true,
		group: "industry",
		description: "Own all technical architecture and infrastructure for unicircle.app (React/TypeScript, Supabase, Vercel). Designed a FERPA/CCPA-compliant backend with Supabase Edge Functions and PostgreSQL. Lead engineering contributors, code review, CI/CD, and the technical roadmap with the CEO.",
		tags: [
			"React",
			"TypeScript",
			"Supabase",
			"Vercel"
		]
	},
	{
		role: "Technology Consultant Intern, AI Engineering",
		company: "PwC India",
		period: "Jun 2025 - Sep 2025",
		location: "Gurugram, India",
		featured: true,
		group: "industry",
		description: "Built an agentic AI chatbot for natural language AWS/Azure/GCP onboarding across 15+ cloud services. Designed multi-agent orchestration with LangGraph, Gemini 2.5 Pro, and LangChain, cutting manual configuration time by 60%. Implemented secure credential management, automated baseline security with Azure Key Vault, and Tableau-ready reporting outputs for stakeholder visibility.",
		tags: [
			"LangGraph",
			"Gemini 2.5 Pro",
			"Agentic AI",
			"Generative AI",
			"AWS",
			"Azure",
			"GCP",
			"Tableau"
		]
	},
	{
		role: "Applied AI Research Assistant",
		company: "UCSD CSE (STSLab)",
		period: "Nov 2025 - Present",
		location: "San Diego, CA",
		group: "research",
		description: "Research with Prof. Deepak Kumar (UCSD) and Prof. Jeremy D. Foote (Purdue) on chatbot-driven interventions and Reddit user behavior. Co-authoring a paper on whether AI-mediated conversations can reduce toxic discourse at scale. Built data pipelines and evaluation workflows for generative AI and agentic AI research, including MCP-based tooling and model analysis.",
		tags: [
			"LLMs",
			"Applied ML",
			"Generative AI",
			"Agentic AI",
			"MCP"
		]
	},
	{
		role: "Undergraduate Researcher (Project Lead)",
		company: "Engineers for Exploration (E4E)",
		period: "Oct 2025 - Apr 2026",
		location: "San Diego, CA",
		group: "research",
		description: "Lead an interdisciplinary team building an AI system that predicts mangrove presence by fusing drone imagery and Sentinel-2 satellite data for Scripps Institution of Oceanography. Oversee data pipelines, feature fusion, and model integration with Python, TensorFlow, NumPy, and Google Earth Engine.",
		tags: [
			"TensorFlow",
			"Google Earth Engine",
			"Sentinel-2"
		]
	},
	{
		role: "ML Research Intern",
		company: "IIT Guwahati",
		period: "Jun 2024 - Sep 2024",
		location: "Assam, India",
		group: "research",
		description: "Developed a ResNet50 CNN for SAR image classification achieving 80% accuracy across land cover types. Applied Lee and Gamma MAP speckle filters. Evaluated with precision, recall, F1-scores, and confusion matrices.",
		tags: [
			"PyTorch",
			"SAR",
			"CNN",
			"ResNet50"
		]
	},
	{
		role: "Assistant Projects Director (Projects Mentor)",
		company: "DS3, Data Science Student Society",
		period: "Jul 2025 - Present",
		location: "San Diego, CA",
		group: "campus",
		description: "Lead ideation and selection of 10-12+ quarterly data science projects. Mentor teams through full data pipelines, including preprocessing, feature engineering, model selection, and deployment. Coordinate timelines and evaluation metrics with senior leadership for end-of-quarter showcases.",
		tags: ["Leadership", "Data Science"]
	},
	{
		role: "Tutor / Instructional Assistant",
		company: "Halicioglu Data Science Institute, UCSD",
		period: "Mar 2025 - Jun 2025",
		location: "San Diego, CA",
		group: "campus",
		description: "Conducted weekly discussion sections and office hours for DSC 40A covering empirical risk minimization, optimization, regression, classification, and discrete probability. Evaluated assignments and exams with structured feedback.",
		tags: ["Machine Learning", "Teaching"]
	},
	{
		role: "President",
		company: "CSES Open Source, TritonSpend",
		period: "Jun 2026 - Present",
		location: "San Diego, CA",
		featured: true,
		group: "campus",
		description: "Lead CSES Open Source strategy, org-wide engineering initiatives, and cross-team execution while continuing to drive TritonSpend product direction and delivery.",
		tags: [
			"Leadership",
			"React Native",
			"Node.js",
			"PostgreSQL"
		],
		progression: [
			{
				role: "Software Developer",
				period: "Nov 2024 - Jul 2025"
			},
			{
				role: "Engineering Manager",
				period: "Jul 2025 - Jun 2026"
			},
			{
				role: "President",
				period: "Jun 2026 - Present",
				current: true
			}
		]
	},
	{
		role: "Quantitative Analyst",
		company: "Triton Quantitative Trading (TQT)",
		period: "Oct 2024 - Jan 2025",
		location: "San Diego, CA",
		group: "campus",
		description: "Built a hybrid LSTM/GRU forecasting model with Monte Carlo simulations (Geometric Brownian Motion). Integrated technical indicators, VADER sentiment analysis, and Sharpe Ratio risk metrics. Deployed as a modular Streamlit app with yFinance and REST API support.",
		tags: [
			"LSTM",
			"GRU",
			"Streamlit",
			"Monte Carlo"
		]
	}
];
var PROJECT_FILTERS = [
	{
		id: "latest",
		label: "Latest"
	},
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
		title: "TumorSense",
		period: "Spring 2026",
		description: "Built an end-to-end breast tumor classification system combining WDBC SVMs and IDC image models (CNN/ViT) with FastAPI inference, explainability modules, and production deployment. Achieved 98% malignant recall, 98% precision, and 0.995 ROC-AUC.",
		stack: [
			"Next.js",
			"TypeScript",
			"FastAPI",
			"scikit-learn",
			"PyTorch",
			"Hugging Face"
		],
		github: "https://github.com/nathaniel-trueba/TumorSense",
		demo: "https://tumorsense-n70xj8pny-ntrueba-5031s-projects.vercel.app/#developers",
		tags: [
			"ml",
			"cv",
			"nlp",
			"api",
			"backend",
			"dataviz"
		],
		sortKey: 202606
	},
	{
		title: "Math Reasoning (Qwen3-4B-Thinking)",
		period: "May 2026",
		description: "Reproduced the official CSE 151B Math Reasoning judger and improved Qwen3-4B-Thinking-2507 with inference-time methods (judger-aligned prompt builder, two-phase MC strategy, and no-box retry), finishing 23rd public (0.720) and 19th private (0.634) without changing base weights.",
		stack: [
			"Python",
			"Prompt Engineering",
			"LLM Evaluation",
			"Inference-Time Optimization"
		],
		github: "https://github.com/ChinmayB1/Optimizing-Qwen3-4B-for-Maths",
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
		github: "https://github.com/VedVar43789/InvasiveSpeciesTracker",
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
		github: "https://github.com/VedVar43789/SoCal-Guessr",
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
		github: "https://github.com/VedVar43789/PantryPal",
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
		github: "https://github.com/VedVar43789/TubeScope",
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
		github: "https://github.com/VedVar43789/earthquakes",
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
		github: "https://github.com/VedVar43789/watts-the-problem",
		demo: "https://vedvar43789.github.io/watts-the-problem/",
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
		period: "Nov 2024 - May 2026",
		description: "Student finance app with 100+ active UCSD users for budgeting, expense tracking, and social spending insights.",
		stack: [
			"React Native",
			"Node.js",
			"PostgreSQL"
		],
		github: "https://github.com/CSES-Open-Source/TritonSpend",
		demo: "https://tritonspend.netlify.app",
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
			"GCP",
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
			"Prompt Engineering",
			"LLM Evaluation",
			"LangChain",
			"LangGraph",
			"Agentic AI",
			"MCP",
			"Claude Code",
			"Cursor",
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
			"Tableau",
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
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [dark, setDark] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("light", !dark);
	}, [dark]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "font-display text-lg font-bold tracking-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: "Vedant Vardhaan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						className: "nav-link hover:text-foreground",
						children: n.label
					}) }, n.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle theme",
						onClick: () => setDark((v) => !v),
						className: "rounded-full p-2 text-muted-foreground transition hover:text-foreground hover:bg-secondary",
						children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 18 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Open menu",
						className: "md:hidden rounded-full p-2 text-muted-foreground hover:text-foreground",
						onClick: () => setOpen(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `md:hidden fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`,
			"aria-hidden": !open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`,
				onClick: () => setOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `absolute right-0 top-0 h-full w-72 glass border-l p-6 transition-transform ${open ? "translate-x-0" : "translate-x-full"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-bold",
						children: "Menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Close menu",
						onClick: () => setOpen(false),
						className: "p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-5 text-base",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
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
var vedant_ds3_default = "/assets/vedant_ds3-CEbiG-iz.jpg";
var ROLES = [
	"Agentic AI & Multi-Agent Systems",
	"Full-Stack Engineering",
	"Applied Machine Learning"
];
var PROFILE_IMAGE = vedant_ds3_default;
function Hero() {
	const [roleIdx, setRoleIdx] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	const [resumeOpen, setResumeOpen] = (0, import_react.useState)(false);
	const resumeMenuRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
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
	(0, import_react.useEffect)(() => {
		const onPointerDown = (event) => {
			if (!resumeMenuRef.current) return;
			if (!resumeMenuRef.current.contains(event.target)) setResumeOpen(false);
		};
		window.addEventListener("mousedown", onPointerDown);
		return () => window.removeEventListener("mousedown", onPointerDown);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid-bg",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb h-72 w-72 bg-primary/40 left-[-4rem] top-24",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb h-80 w-80 bg-cyan/40 right-[-4rem] top-10",
				style: { animationDelay: "-4s" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb h-96 w-96 bg-primary/25 left-1/2 top-1/2",
				style: { animationDelay: "-8s" },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-5xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full max-w-2xl text-center md:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur animate-fade-in",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-cyan animate-pulse" }), "Open to AI / ML Engineering and SWE roles"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-8 font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: "Hi, I'm "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-gradient-to-br from-primary via-accent to-cyan bg-clip-text text-transparent",
										children: "Vedant"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: "."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-lg md:text-2xl text-foreground/90 font-display font-medium animate-fade-in",
								children: [
									"AI Systems Engineer · ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: text
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "caret" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto md:mx-0 mt-6 max-w-2xl text-base md:text-lg text-muted-foreground animate-fade-in",
								children: "Data Science student at UC San Diego with a passion for machine learning, AI, and software development. My goal is to build meaningful solutions that leverage data to solve complex problems."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center justify-center md:justify-start gap-3 animate-fade-in",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#projects",
										className: "btn-primary",
										children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: LINKS.github,
										target: "_blank",
										rel: "noreferrer",
										className: "btn-ghost",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 16 }), " GitHub"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										ref: resumeMenuRef,
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setResumeOpen((open) => !open),
											className: "btn-ghost",
											"aria-haspopup": "menu",
											"aria-expanded": resumeOpen,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 16 }),
												" Resume",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
													size: 14,
													className: `transition-transform ${resumeOpen ? "rotate-180" : ""}`
												})
											]
										}), resumeOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute left-0 top-full z-30 mt-2 min-w-52 rounded-xl border border-border/80 bg-card/95 p-1.5 shadow-[0_18px_40px_-20px_var(--glow)] backdrop-blur",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: LINKS.resumeSWE,
												target: "_blank",
												rel: "noreferrer",
												className: "block rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-secondary",
												onClick: () => setResumeOpen(false),
												children: "SWE Resume"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: LINKS.resumeAIML,
												target: "_blank",
												rel: "noreferrer",
												className: "block rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-secondary",
												onClick: () => setResumeOpen(false),
												children: "AI/ML Resume"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "btn-ghost",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }), " Contact"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center justify-center md:justify-start gap-5 text-muted-foreground animate-fade-in",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "GitHub",
										href: LINKS.github,
										target: "_blank",
										rel: "noreferrer",
										className: "hover:text-foreground transition hover-scale",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 20 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "LinkedIn",
										href: LINKS.linkedin,
										target: "_blank",
										rel: "noreferrer",
										className: "hover:text-foreground transition hover-scale",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 20 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "Email",
										href: `mailto:${LINKS.email}`,
										className: "hover:text-foreground transition hover-scale",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 20 })
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0 animate-fade-in",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "profile-frame mx-auto inline-flex rounded-full p-1.5 bg-gradient-to-br from-primary/70 via-accent/50 to-cyan/70 shadow-lg shadow-primary/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: PROFILE_IMAGE,
								alt: "Vedant Vardhaan",
								className: "profile-image h-36 w-36 md:h-56 md:w-56 rounded-full object-cover border border-border/60 bg-card",
								loading: "eager"
							})
						})
					})]
				})
			})
		]
	});
}
var _106_default = "/assets/106-CDSSooxU.png";
var IITG_logo_default = "/assets/IITG_logo-Bz6GQUC3.png";
var blood_default = "/assets/blood-Blnkgmso.png";
var cse_default = "/assets/cse-CjmFAesG.png";
var cses_default = "/assets/cses-CIWzPNcI.png";
var ds3_default = "/assets/ds3-3AwPNkLG.png";
var e4e_default = "/assets/e4e-BUqainT0.png";
var earth_default = "/assets/earth-C5kuUtyE.png";
var hdsi_default = "/assets/hdsi-DE0jKGK3.png";
var invasive_default = "/assets/invasive-YQWCgH2X.png";
var knn_default = "/assets/knn-C1RsI4gD.png";
var knn1_default = "/assets/knn1-ZeWZT3OX.png";
var lib_default = "/assets/lib-Br3kIZ-D.png";
var market_default = "/assets/market-CFrgfcGU.png";
var outage_default = "/assets/outage-anTXBL1M.png";
var pantrypal_default = "/assets/pantrypal-DAc8yZ9O.png";
var pantrypal_win_default = "/assets/pantrypal_win-WEf3ND6r.JPG";
var pantrypal_win1_default = "/assets/pantrypal_win1-m7lICY6o.JPG";
var pwc_default = "/assets/pwc-reRWlzRL.png";
var qwen_default = "/assets/qwen--uTpO2iB.png";
var rl_default = "/assets/rl-D7_vDwzg.png";
var sar_default = "/assets/sar-CTuSAlNt.png";
var socal_default = "/assets/socal-BAMt53pK.png";
var song_default = "/assets/song-DT08ipDS.png";
var steam_default = "/assets/steam-6dinUL8E.png";
var tqt_default = "/assets/tqt-By3mqARH.png";
var tritonspend_default = "/assets/tritonspend-DQzWhXf9.png";
var tubescope_default = "/assets/tubescope-CZvPyvCh.png";
var tubescope_win_default = "/assets/tubescope_win-BPa0OPyR.JPG";
var tumor_default = "/assets/tumor-C_k7vS6G.png";
var ucsd_default = "/assets/ucsd-6lfHeU3-.png";
var unicircle_default = "/assets/unicircle-BzDD6j6J.png";
var vv_default = "/assets/vv-DgYvIuPt.png";
function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-visible": visible,
		className: `reveal ${className}`,
		children
	});
}
var ASSET_ENTRIES = Object.entries(/* @__PURE__ */ Object.assign({
	"../../assets/106.png": _106_default,
	"../../assets/IITG_logo.png": IITG_logo_default,
	"../../assets/blood.png": blood_default,
	"../../assets/cse.png": cse_default,
	"../../assets/cses.png": cses_default,
	"../../assets/ds3.png": ds3_default,
	"../../assets/e4e.png": e4e_default,
	"../../assets/earth.png": earth_default,
	"../../assets/hdsi.png": hdsi_default,
	"../../assets/invasive.png": invasive_default,
	"../../assets/knn.png": knn_default,
	"../../assets/knn1.png": knn1_default,
	"../../assets/lib.png": lib_default,
	"../../assets/market.png": market_default,
	"../../assets/outage.png": outage_default,
	"../../assets/pantrypal.png": pantrypal_default,
	"../../assets/pantrypal_win.JPG": pantrypal_win_default,
	"../../assets/pantrypal_win1.JPG": pantrypal_win1_default,
	"../../assets/pwc.png": pwc_default,
	"../../assets/qwen.png": qwen_default,
	"../../assets/rl.png": rl_default,
	"../../assets/sar.png": sar_default,
	"../../assets/socal.png": socal_default,
	"../../assets/song.png": song_default,
	"../../assets/steam.png": steam_default,
	"../../assets/tqt.png": tqt_default,
	"../../assets/tritonspend.png": tritonspend_default,
	"../../assets/tubescope.png": tubescope_default,
	"../../assets/tubescope_win.JPG": tubescope_win_default,
	"../../assets/tumor.png": tumor_default,
	"../../assets/ucsd.png": ucsd_default,
	"../../assets/unicircle.png": unicircle_default,
	"../../assets/vedant_ds3.jpg": vedant_ds3_default,
	"../../assets/vv.png": vv_default
})).map(([path, src]) => {
	return {
		src,
		key: normalizeAssetKey((path.split("/").pop() ?? path).replace(/\.[^.]+$/, ""))
	};
});
var ASSET_BY_KEY = new Map(ASSET_ENTRIES.map((entry) => [entry.key, entry.src]));
function getAssetByFileName(fileNameWithoutExt) {
	return ASSET_BY_KEY.get(normalizeAssetKey(fileNameWithoutExt));
}
function normalizeAssetKey(value) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function findBestAsset(query, extras = []) {
	if (ASSET_ENTRIES.length === 0) return void 0;
	const terms = normalizeAssetKey([query, ...extras].join(" ")).split(" ").filter(Boolean);
	if (terms.length === 0) return void 0;
	const scored = ASSET_ENTRIES.map((entry) => {
		let score = 0;
		for (const term of terms) {
			if (term.length < 3) continue;
			if (entry.key.includes(term)) score += term.length;
		}
		return {
			entry,
			score
		};
	}).filter((row) => row.score > 0);
	if (scored.length === 0) return void 0;
	scored.sort((a, b) => b.score - a.score);
	return scored[0].entry.src;
}
var PROJECT_IMAGE_OVERRIDES = {
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
	"Song Recommender": "song"
};
var EXPERIENCE_LOGO_OVERRIDES = {
	UniCircle: "unicircle",
	"UCSD CSE (STSLab)": "cse",
	"Engineers for Exploration (E4E)": "e4e",
	"PwC India": "pwc",
	"DS3, Data Science Student Society": "ds3",
	"Halicioglu Data Science Institute, UCSD": "hdsi",
	"CSES Open Source, TritonSpend": "cses",
	"Triton Quantitative Trading (TQT)": "tqt",
	"IIT Guwahati": "iitg_logo"
};
var EXPERIENCE_GROUP_ICONS = {
	industry: Briefcase,
	research: FlaskConical,
	campus: Users
};
function SectionHeader({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mb-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.25em] text-primary font-semibold",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl md:text-5xl font-bold tracking-tight",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground max-w-2xl mx-auto",
				children: subtitle
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "About",
				title: "Building agentic systems that ship."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass card-hover rounded-2xl p-8 md:p-10 text-base md:text-lg leading-relaxed text-foreground/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: ABOUT.primary }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: ABOUT.secondary
				})]
			}) })]
		})
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "education",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Education",
				title: EDUCATION.school
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass card-hover rounded-2xl p-8 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start gap-6 justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { size: 22 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl md:text-2xl font-semibold",
									children: EDUCATION.degree
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-muted-foreground inline-flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }),
										" ",
										EDUCATION.location
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-lg font-semibold text-primary",
								children: ["GPA ", EDUCATION.gpa]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: EDUCATION.period
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: EDUCATION.badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "skill-pill",
							children: b
						}, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: EDUCATION.honors
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: "Relevant Coursework: "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: EDUCATION.coursework
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: EDUCATION.clubs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "skill-pill",
							children: c
						}, c))
					})
				]
			}) })]
		})
	});
}
function ExperienceCard({ e, idx, logoSrc, anchor, isLast }) {
	const isFeatured = Boolean(e.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: idx * 50,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			id: anchor,
			className: "relative scroll-mt-28 pl-8 md:pl-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `absolute left-0 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background ${isFeatured ? "bg-amber-300 shadow-[0_0_0_4px_rgba(251,191,36,0.25)]" : "bg-primary shadow-[0_0_0_4px_var(--background)]"}`,
					"aria-hidden": true
				}),
				!isLast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-0 top-9 bottom-0 w-px -translate-x-1/2 bg-border",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `card-hover rounded-2xl p-5 md:p-6 ${isFeatured ? "border border-amber-300/45 bg-gradient-to-br from-amber-200/10 via-card/85 to-primary/10" : "glass"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-start gap-3.5",
								children: [logoSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logoSrc,
									alt: `${e.company} logo`,
									className: "h-11 w-11 shrink-0 rounded-xl border border-border/70 bg-background/70 object-contain p-1.5",
									loading: "lazy"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { size: 18 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-lg font-semibold leading-snug text-foreground",
												children: e.role
											}), isFeatured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 rounded-full border border-amber-300/50 bg-amber-200/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
													size: 10,
													className: "fill-amber-200 text-amber-200",
													"aria-hidden": true
												}), "Featured"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-sm font-medium text-primary",
											children: e.company
										}),
										(e.location || e.meta) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground",
											children: [e.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
													size: 12,
													className: "shrink-0"
												}), e.location]
											}), e.meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.meta })]
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `shrink-0 text-xs font-semibold sm:text-right ${isFeatured ? "text-amber-200" : "text-primary"}`,
								children: e.period
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: e.description
						}),
						e.progression && e.progression.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 rounded-xl border border-border/70 bg-background/35 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
								children: "Career progression"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-3 space-y-3",
								children: e.progression.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `mt-1.5 h-2 w-2 shrink-0 rounded-full ${step.current ? "bg-primary ring-2 ring-primary/30" : "bg-muted-foreground/40"}`,
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-sm font-medium ${step.current ? "text-foreground" : "text-muted-foreground"}`,
											children: step.role
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: step.period
										})]
									})]
								}, `${step.role}-${step.period}`))
							})]
						}),
						e.tags && e.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4",
							children: e.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "skill-pill",
								children: t
							}, t))
						})
					]
				})
			]
		})
	});
}
function Experience() {
	const [activeGroup, setActiveGroup] = (0, import_react.useState)("industry");
	const getExperienceLogo = (company, role) => {
		const overrideName = EXPERIENCE_LOGO_OVERRIDES[company];
		if (overrideName) {
			const overrideAsset = getAssetByFileName(overrideName);
			if (overrideAsset) return overrideAsset;
		}
		return findBestAsset(company, [
			role,
			"logo",
			"company"
		]);
	};
	const getExperienceAnchor = (role, company, idx) => `experience-${idx}-${normalizeAssetKey(`${role}-${company}`).replace(/\s+/g, "-")}`;
	const groupedExperience = EXPERIENCE_GROUPS.map((g) => ({
		...g,
		items: EXPERIENCE.map((e, idx) => ({
			e,
			idx
		})).filter((row) => row.e.group === g.id)
	}));
	const activeSection = groupedExperience.find((g) => g.id === activeGroup) ?? groupedExperience[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Experience",
					title: "Work & Research",
					subtitle: "Industry, research, and campus leadership — grouped for quick scanning."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-10 flex flex-wrap justify-center gap-2",
					children: groupedExperience.map((g) => {
						const GroupIcon = EXPERIENCE_GROUP_ICONS[g.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveGroup(g.id),
							className: `filter-pill inline-flex items-center gap-2 ${activeGroup === g.id ? "active" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupIcon, { size: 14 }),
								g.label,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-background/60 px-1.5 py-0.5 text-[10px] font-semibold tabular-nums",
									children: g.items.length
								})
							]
						}, g.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl border border-border/80 bg-card/40 px-5 py-4 md:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary",
								children: (() => {
									const GroupIcon = EXPERIENCE_GROUP_ICONS[activeSection.id];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupIcon, { size: 18 });
								})()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold md:text-xl",
								children: activeSection.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: activeSection.blurb
							})] })]
						})
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative space-y-8",
						children: activeSection.items.map(({ e, idx }, itemIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, {
							e,
							idx: itemIdx,
							logoSrc: getExperienceLogo(e.company, e.role),
							anchor: getExperienceAnchor(e.role, e.company, idx),
							isLast: itemIdx === activeSection.items.length - 1
						}, `${e.company}-${idx}`))
					})]
				}, activeSection.id)
			]
		})
	});
}
function Projects() {
	const [activeFilters, setActiveFilters] = (0, import_react.useState)(["latest"]);
	const getProjectImage = (title, stack) => {
		const overrideName = PROJECT_IMAGE_OVERRIDES[title];
		if (overrideName) {
			const overrideAsset = getAssetByFileName(overrideName);
			if (overrideAsset) return overrideAsset;
		}
		return findBestAsset(title, [...stack, "project"]);
	};
	const filtered = (0, import_react.useMemo)(() => {
		const useLatest = activeFilters.includes("latest");
		const tagFilters = activeFilters.filter((f) => f !== "latest");
		const base = useLatest ? PROJECTS.slice(0, 6) : PROJECTS;
		if (tagFilters.length === 0) return base;
		return base.filter((p) => tagFilters.every((f) => p.tags.includes(f)));
	}, [activeFilters]);
	const toggleFilter = (id) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Projects",
					title: "Selected work",
					subtitle: "Production systems, research, and competition wins."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-8 flex flex-wrap justify-center gap-2",
					children: PROJECT_FILTERS.map((f) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleFilter(f.id),
							className: `filter-pill ${(f.id === "all" ? activeFilters.length === 0 : f.id === "latest" ? activeFilters.includes("latest") : activeFilters.includes(f.id)) ? "active" : ""}`,
							children: f.label
						}, f.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: (() => {
							const imageSrc = getProjectImage(p.title, p.stack);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass card-hover rounded-2xl p-6 h-full flex flex-col",
								children: [
									imageSrc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: imageSrc,
										alt: `${p.title} preview`,
										className: "image-hover mb-4 h-40 w-full rounded-xl border border-border/70 object-cover bg-background/60",
										loading: "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold",
										children: p.title
									}),
									p.period && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-primary mt-1",
										children: p.period
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground flex-1",
										children: p.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "skill-pill",
											children: s
										}, s))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center gap-4 text-sm",
										children: [p.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.github,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 15 }), " Code"]
										}), p.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: p.demo,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1.5 text-primary hover:text-cyan transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 15 }), " Demo"]
										})]
									})
								]
							});
						})()
					}, p.title))
				})
			]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Skills",
				title: "Technical Stack"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: SKILLS.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass card-hover rounded-2xl p-6 h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-sm uppercase tracking-[0.2em] text-primary font-semibold",
							children: g.group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: g.items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
	const [sent, setSent] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(false);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Contact",
				title: "Let's build something.",
				subtitle: "Open to AI engineering roles, research collaboration, and ambitious projects."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass rounded-2xl p-6 md:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-[1fr_1.2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${LINKS.email}`,
								className: "btn-ghost justify-start",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }),
									" ",
									LINKS.email
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground inline-flex items-center gap-2 px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }), " La Jolla, California"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.github,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-ghost justify-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 16 }), " GitHub"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKS.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-ghost justify-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 16 }), " LinkedIn"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "name",
								placeholder: "Your name",
								className: "rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: "email",
								type: "email",
								placeholder: "Email",
								className: "rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								name: "message",
								rows: 4,
								placeholder: "Message",
								className: "rounded-lg border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 resize-none"
							}),
							sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-emerald-500",
								children: "Thank you! Your message has been sent successfully."
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-red-500",
								children: "Something went wrong. Please try again."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: "btn-primary justify-center",
								children: loading ? "Sending..." : sent ? "Thanks, I'll reply soon." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 15 })] })
							})
						]
					})]
				})
			}) })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "mt-20 border-t border-border pt-8 pb-10 text-center text-sm text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Vedant Vardhaan. Built with React & TanStack Start."
			]
		})]
	});
}
function Index() {
	const layerFarRef = (0, import_react.useRef)(null);
	const layerMidRef = (0, import_react.useRef)(null);
	const layerNearRef = (0, import_react.useRef)(null);
	const glowSoftRef = (0, import_react.useRef)(null);
	const glowCoreRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const layers = [
			layerFarRef.current,
			layerMidRef.current,
			layerNearRef.current
		].filter(Boolean);
		const glowSoft = glowSoftRef.current;
		const glowCore = glowCoreRef.current;
		if (layers.length !== 3 || !glowSoft || !glowCore) return;
		const depth = [
			10,
			22,
			36
		];
		const center = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		};
		const target = {
			x: center.x,
			y: center.y
		};
		const smoothed = {
			x: center.x,
			y: center.y
		};
		const glowLead = {
			x: center.x,
			y: center.y
		};
		const glowTail = {
			x: center.x,
			y: center.y
		};
		let raf = 0;
		const setPointer = (x, y) => {
			target.x = x;
			target.y = y;
		};
		const onPointerMove = (event) => {
			setPointer(event.clientX, event.clientY);
		};
		const onTouchMove = (event) => {
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
			setPointer(window.innerWidth * .5, window.innerHeight * .5);
		};
		const animate = () => {
			const t = performance.now() * 35e-5;
			smoothed.x += (target.x - smoothed.x) * .1;
			smoothed.y += (target.y - smoothed.y) * .1;
			const nx = (smoothed.x / window.innerWidth - .5) * 2;
			const ny = (smoothed.y / window.innerHeight - .5) * 2;
			layers.forEach((layer, idx) => {
				const driftX = Math.sin(t + idx * 1.9) * (idx + 1) * 1.4;
				const driftY = Math.cos(t * .9 + idx * 1.3) * (idx + 1) * 1.2;
				const x = nx * depth[idx] + driftX;
				const y = ny * depth[idx] + driftY;
				layer.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
			});
			glowLead.x += (smoothed.x - glowLead.x) * .18;
			glowLead.y += (smoothed.y - glowLead.y) * .18;
			glowTail.x += (glowLead.x - glowTail.x) * .05;
			glowTail.y += (glowLead.y - glowTail.y) * .05;
			const breathe = 1 + Math.sin(t * 2.2) * .03;
			glowCore.style.transform = `translate3d(${glowLead.x.toFixed(2)}px, ${glowLead.y.toFixed(2)}px, 0) translate3d(-50%, -50%, 0) scale(${breathe.toFixed(3)})`;
			glowSoft.style.transform = `translate3d(${glowTail.x.toFixed(2)}px, ${glowTail.y.toFixed(2)}px, 0) translate3d(-50%, -50%, 0) scale(${(1.06 + Math.cos(t * 1.8) * .04).toFixed(3)})`;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "parallax-scene",
				"aria-hidden": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: layerFarRef,
						className: "parallax-layer parallax-layer--far"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: layerMidRef,
						className: "parallax-layer parallax-layer--mid"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: layerNearRef,
						className: "parallax-layer parallax-layer--near"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dream-glow-scene",
				"aria-hidden": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: glowSoftRef,
					className: "dream-glow dream-glow--soft"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: glowCoreRef,
					className: "dream-glow dream-glow--core"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			})
		]
	});
}
//#endregion
export { Index as component };
