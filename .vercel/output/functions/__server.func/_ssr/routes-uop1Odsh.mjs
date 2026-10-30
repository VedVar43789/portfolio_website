import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as gsapWithCSS, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { t as Flip } from "../_libs/gsap.mjs";
import { a as stopScroll, i as startScroll, n as prefersReducedMotion, t as isFinePointer } from "./lenis-pJXNcTR0.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Camera, i as Github, n as Send, o as ArrowUpRight, r as MapPin, s as ArrowDown, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uop1Odsh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINKS = {
	github: "https://github.com/VedVar43789",
	linkedin: "https://www.linkedin.com/in/vedantvardhaan/",
	email: "vvardhaan@ucsd.edu",
	resumeSWE: "/assets/Vedant_Vardhaan_SWE-2.pdf?v=20260724",
	resumeAIML: "/assets/Vedant_Vardhaan_AI_ML_Engineer-2.pdf?v=20260724",
	formspree: "https://formspree.io/f/xgvkjvro"
};
var NAV = [
	{
		id: "about",
		label: "About"
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
		id: "education",
		label: "Education"
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
		role: "Technology Consultant Intern, AI Engineering",
		company: "PricewaterhouseCoopers LLP (PwC)",
		period: "Jun 2025 - Sep 2025",
		location: "Gurugram, India",
		featured: true,
		group: "industry",
		sortKey: 110,
		bullets: [
			"Built an agentic AI chatbot for natural language AWS/Azure/GCP onboarding across 15+ cloud services.",
			"Designed multi-agent orchestration with LangGraph, Gemini 2.5 Pro, and LangChain, cutting manual configuration time by 60%.",
			"Implemented secure credential management, automated baseline security with Azure Key Vault, and Tableau-ready reporting outputs for stakeholder visibility."
		],
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
		role: "AI Engineer Intern",
		company: "Oaken",
		period: "Jul 2026 - Oct 2026",
		location: "Indianapolis, IN",
		meta: "Hybrid",
		group: "industry",
		sortKey: 100,
		bullets: [
			"Partnered with the CEO and CTO to build a proof-of-concept that turns mixed farm Word and PDF files into one branded landowner report, using one LangGraph pipeline and a YAML profile per company.",
			"The engine ingests documents, filters records by crop year, and writes a year-to-date or year-end Word file as per-field agronomic notes or a whole-farm financial letter. Claude or Gemini drafts the narrative, with local templates as a fallback; tables, charts, and captions come from code.",
			"A verifier requires every figure to already exist in the parsed source data. Shipped a Flask upload app on Railway, with OCR for scanned pages, pytest evals, and GitHub Actions CI."
		],
		tags: [
			"LangGraph",
			"Claude",
			"Gemini",
			"Flask",
			"Pydantic",
			"Agentic AI"
		]
	},
	{
		role: "Chief Technology Officer & Full Stack Engineer",
		company: "UniCircle",
		period: "May 2026 - Oct 2026",
		location: "San Diego, CA",
		group: "industry",
		sortKey: 90,
		bullets: [
			"Owned all technical architecture and infrastructure for unicircle.app (React/TypeScript, Supabase, Vercel).",
			"Designed a FERPA/CCPA-compliant backend with Supabase Edge Functions and PostgreSQL.",
			"Led engineering contributors, code review, CI/CD, and the technical roadmap with the CEO."
		],
		tags: [
			"React",
			"TypeScript",
			"Supabase",
			"Vercel"
		]
	},
	{
		role: "Software Engineer Intern (Computer Vision)",
		company: "Metro Infrasys",
		period: "Jul 2026 - Aug 2026",
		location: "Remote",
		group: "industry",
		sortKey: 80,
		bullets: [
			"Developed Lane Toll Audit, an automated computer vision system that detects, tracks, and counts vehicles by lane in traffic and toll-plaza video using YOLOv8n and ByteTrack.",
			"Replaced frame-by-frame human review with an automated detection workflow inside ATMS/TMS contexts.",
			"Turned raw highway video into structured, auditable lane and toll data."
		],
		tags: [
			"YOLOv8",
			"ByteTrack",
			"Computer Vision",
			"Python"
		]
	},
	{
		role: "Applied AI Research Assistant",
		company: "UCSD CSE (STSLab)",
		period: "Nov 2025 - Present",
		location: "San Diego, CA",
		group: "research",
		sortKey: 100,
		bullets: [
			"Research with Prof. Deepak Kumar (UCSD) and Prof. Jeremy D. Foote (Purdue) on chatbot-driven interventions and Reddit user behavior.",
			"Co-authoring a paper on whether AI-mediated conversations can reduce toxic discourse at scale.",
			"Built data pipelines and evaluation workflows for generative AI and agentic AI research, including MCP-based tooling and model analysis."
		],
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
		sortKey: 90,
		bullets: ["Led an interdisciplinary team building an AI system that predicts mangrove presence by fusing drone imagery and Sentinel-2 satellite data for Scripps Institution of Oceanography.", "Oversaw data pipelines, feature fusion, and model integration with Python, TensorFlow, NumPy, and Google Earth Engine."],
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
		sortKey: 70,
		bullets: [
			"Developed a ResNet50 CNN for SAR image classification achieving 80% accuracy across land cover types.",
			"Applied Lee and Gamma MAP speckle filters.",
			"Evaluated with precision, recall, F1-scores, and confusion matrices."
		],
		tags: [
			"PyTorch",
			"SAR",
			"CNN",
			"ResNet50"
		]
	},
	{
		role: "President",
		company: "CSES Open Source, TritonSpend",
		period: "Jun 2026 - Present",
		location: "San Diego, CA",
		featured: true,
		group: "campus",
		sortKey: 100,
		bullets: ["Lead CSES Open Source strategy, org-wide engineering initiatives, and cross-team execution.", "Drive TritonSpend product direction and delivery."],
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
		role: "Resident Assistant (RA)",
		company: "UCSD Eighth College",
		period: "Aug 2026 - Present",
		location: "San Diego, CA",
		group: "campus",
		sortKey: 95,
		bullets: ["Serve as Resident Assistant for 52 residents at UCSD Eighth College, building community through residential programming, conflict mediation, and one-on-one support.", "Act as a first point of contact for student concerns and coordinate with college staff on safety, wellbeing, and campus resources."],
		tags: [
			"Leadership",
			"Community Building",
			"Student Support"
		]
	},
	{
		role: "Assistant Projects Director (Projects Mentor)",
		company: "DS3, Data Science Student Society",
		period: "Jul 2025 - Present",
		location: "San Diego, CA",
		group: "campus",
		sortKey: 90,
		bullets: [
			"Lead ideation and selection of 10-12+ quarterly data science projects.",
			"Mentor teams through full data pipelines, including preprocessing, feature engineering, model selection, and deployment.",
			"Coordinate timelines and evaluation metrics with senior leadership for end-of-quarter showcases."
		],
		tags: ["Leadership", "Data Science"]
	},
	{
		role: "Tutor / Instructional Assistant",
		company: "Halicioglu Data Science Institute, UCSD",
		period: "Mar 2025 - Jun 2025",
		location: "San Diego, CA",
		group: "campus",
		sortKey: 80,
		bullets: ["Conducted weekly discussion sections and office hours for DSC 40A covering empirical risk minimization, optimization, regression, classification, and discrete probability.", "Evaluated assignments and exams with structured feedback."],
		tags: ["Machine Learning", "Teaching"]
	},
	{
		role: "Quantitative Analyst",
		company: "Triton Quantitative Trading (TQT)",
		period: "Oct 2024 - Jan 2025",
		location: "San Diego, CA",
		group: "campus",
		sortKey: 70,
		bullets: [
			"Built a hybrid LSTM/GRU forecasting model with Monte Carlo simulations (Geometric Brownian Motion).",
			"Integrated technical indicators, VADER sentiment analysis, and Sharpe Ratio risk metrics.",
			"Deployed as a modular Streamlit app with yFinance and REST API support."
		],
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
		title: "Worth Your Read",
		period: "October 2026",
		description: "MCP tool that verifies AI citations by grounding each claim in the Results section of the cited paper and returning a confidence score with a ranked source list. Won best project in the preventing hallucinations and confidently wrong outputs track at the Claude Impact Lab in San Diego.",
		stack: [
			"MCP",
			"Claude API",
			"Python",
			"FastMCP",
			"RAG",
			"Crossref"
		],
		github: "https://github.com/VedVar43789/worth-the-read",
		demo: "https://fedor-i.github.io/WorthTheRead/",
		tags: [
			"ml",
			"nlp",
			"api"
		],
		sortKey: 202610
	},
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
		demo: "https://tumorsense-production.up.railway.app",
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
			"FastMCP",
			"Anthropic Claude API",
			"Crossref API",
			"NCBI PMC BioC",
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
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Four camera-style corner brackets (read as a detection box) that frame whatever they sit on top of. */
function Viewfinder({ className, size = "md" }) {
	const corner = size === "sm" ? "size-3" : "size-5";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("pointer-events-none absolute inset-3 z-10 text-bone", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-0 top-0 border-l border-t border-current", corner) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute right-0 top-0 border-r border-t border-current", corner) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute bottom-0 left-0 border-b border-l border-current", corner) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute bottom-0 right-0 border-b border-r border-current", corner) })
		]
	});
}
function RecLabel({ className, label = "Rec", live = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("eyebrow inline-flex items-center gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full bg-flare", live && "rec-dot") }), label]
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [resumeOpen, setResumeOpen] = (0, import_react.useState)(false);
	const resumeRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const onPointerDown = (event) => {
			if (resumeRef.current && !resumeRef.current.contains(event.target)) setResumeOpen(false);
		};
		window.addEventListener("mousedown", onPointerDown);
		return () => window.removeEventListener("mousedown", onPointerDown);
	}, []);
	(0, import_react.useEffect)(() => {
		if (menuOpen) stopScroll();
		else startScroll();
		return () => startScroll();
	}, [menuOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 text-bone transition-[background-color,backdrop-filter,border-color] duration-500", scrolled ? "border-b border-bone/10 bg-ink/80 backdrop-blur-md" : "border-b border-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "gutter flex items-center justify-between py-4",
			"aria-label": "Primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-wide text-sm font-semibold uppercase tracking-[-0.02em]",
						children: "Vedant Vardhaan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecLabel, {
						label: "Available",
						className: "hidden text-stone sm:inline-flex"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-7 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.id}`,
						className: "eyebrow link-underline py-1 text-bone/80 hover:text-bone",
						children: item.label
					}) }, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: resumeRef,
						className: "relative hidden sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setResumeOpen((open) => !open),
							"aria-haspopup": "menu",
							"aria-expanded": resumeOpen,
							className: "eyebrow flex items-center gap-2 rounded-full border border-bone/30 px-4 py-2 transition-colors hover:border-flare hover:bg-flare hover:text-ink",
							children: ["Resume", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						}), resumeOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-0 top-full mt-2 min-w-48 border border-bone/15 bg-ink-soft p-1.5 shadow-2xl shadow-black/60",
							children: [{
								label: "SWE Resume",
								href: LINKS.resumeSWE
							}, {
								label: "AI/ML Resume",
								href: LINKS.resumeAIML
							}].map((resume) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: resume.href,
								target: "_blank",
								rel: "noreferrer",
								onClick: () => setResumeOpen(false),
								className: "eyebrow flex items-center justify-between px-3 py-2.5 text-bone/85 transition-colors hover:bg-bone hover:text-ink",
								children: [resume.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
							}, resume.label))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMenuOpen(true),
						className: "eyebrow rounded-full border border-bone/30 px-4 py-2 lg:hidden",
						"aria-label": "Open menu",
						children: "Menu"
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 z-[60] flex flex-col bg-ink text-bone transition-[clip-path] duration-700 ease-quart lg:hidden", menuOpen ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"),
		"aria-hidden": !menuOpen,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gutter flex items-center justify-between py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-wide text-sm font-semibold uppercase tracking-[-0.02em]",
					children: "Vedant Vardhaan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setMenuOpen(false),
					className: "eyebrow flex items-center gap-2 rounded-full border border-bone/30 px-4 py-2",
					"aria-label": "Close menu",
					children: ["Close ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "gutter flex flex-1 flex-col justify-center gap-2",
				children: NAV.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${item.id}`,
					onClick: () => setMenuOpen(false),
					className: "flex items-baseline gap-4 font-wide text-[clamp(2.2rem,11vw,4rem)] font-semibold uppercase leading-[1.05] tracking-[-0.04em]",
					tabIndex: menuOpen ? 0 : -1,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow text-flare",
						children: ["0", index + 1]
					}), item.label]
				}) }, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gutter flex flex-wrap gap-3 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: LINKS.resumeSWE,
					target: "_blank",
					rel: "noreferrer",
					className: "eyebrow rounded-full border border-bone/30 px-4 py-2",
					children: "SWE Resume"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: LINKS.resumeAIML,
					target: "_blank",
					rel: "noreferrer",
					className: "eyebrow rounded-full border border-bone/30 px-4 py-2",
					children: "AI/ML Resume"
				})]
			})
		]
	})] });
}
/**
* Plays a section intro as soon as the page hydrates.
* Elements marked with data-intro are hidden by CSS until this timeline starts.
*/
var useIntro = (scope, build, dependencies = []) => {
	useGSAP(() => {
		const root = scope.current;
		if (!root) return;
		const gates = root.querySelectorAll("[data-intro]");
		if (prefersReducedMotion()) {
			gsapWithCSS.set(gates, { opacity: 1 });
			return;
		}
		const timeline = gsapWithCSS.timeline({
			delay: .15,
			defaults: { ease: "expo.out" }
		});
		build(timeline, root);
		timeline.set(gates, { opacity: 1 }, 0);
	}, {
		scope,
		dependencies,
		revertOnUpdate: true
	});
};
/** Renders static copy as masked words so headings can rise into place. Screen readers get the plain sentence. */
function SplitWords({ text, className, wordClassName }) {
	const words = text.split(" ").filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: text
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: words.map((word, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "word-mask",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("word-inner", wordClassName),
					"data-word": "",
					children: word
				})
			}), index < words.length - 1 && " "] }, `${word}-${index}`))
		})]
	});
}
var pad$1 = (value) => String(value).padStart(2, "0");
/** Running camera timecode (HH:MM:SS:FF). Starts at zero on the server and ticks after mount. */
function Timecode({ className, fps = 24 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const element = ref.current;
		if (!element) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const start = performance.now();
		let frame = 0;
		const render = (now) => {
			const elapsed = (now - start) / 1e3;
			const hours = Math.floor(elapsed / 3600);
			const minutes = Math.floor(elapsed % 3600 / 60);
			const seconds = Math.floor(elapsed % 60);
			const frames = Math.floor(elapsed % 1 * fps);
			element.textContent = `${pad$1(hours)}:${pad$1(minutes)}:${pad$1(seconds)}:${pad$1(frames)}`;
			frame = requestAnimationFrame(render);
		};
		frame = requestAnimationFrame(render);
		return () => cancelAnimationFrame(frame);
	}, [fps]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className,
		children: "00:00:00:00"
	});
}
var vedant_hero_default = "/assets/vedant_hero-Dpx6_iLs.webp";
var vedant_ds3_default = "/assets/vedant_ds3-D0jyGWxf.webp";
var geisel_jpg_default = "/assets/geisel.jpg-v88dlyp9.webp";
var pantrypal_win_default = "/assets/pantrypal_win-B6K7tAz_.webp";
var tubescope_win_default = "/assets/tubescope_win-CvPHNcZb.webp";
var worthyourread_default = "/assets/worthyourread-BeVjCCVA.png";
var tumor_default = "/assets/tumor-C_k7vS6G.png";
var qwen_default = "/assets/qwen--uTpO2iB.png";
var invasive_default = "/assets/invasive-YQWCgH2X.png";
var socal_default = "/assets/socal-BAMt53pK.png";
var rl_default = "/assets/rl-D7_vDwzg.png";
var steam_default = "/assets/steam-6dinUL8E.png";
var pantrypal_default = "/assets/pantrypal-DAc8yZ9O.png";
var tubescope_default = "/assets/tubescope-CZvPyvCh.png";
var earth_default = "/assets/earth-C5kuUtyE.png";
var outage_default = "/assets/outage-anTXBL1M.png";
var market_default = "/assets/market-CFrgfcGU.png";
var tritonspend_default = "/assets/tritonspend-DQzWhXf9.png";
var blood_default = "/assets/blood-Blnkgmso.png";
var sar_default = "/assets/sar-CTuSAlNt.png";
var knn_default = "/assets/knn-C1RsI4gD.png";
var lib_default = "/assets/lib-Br3kIZ-D.png";
var song_default = "/assets/song-DT08ipDS.png";
var metro_default = "/assets/metro-CG6jlvKr.png";
var oaken_default = "/assets/oaken-DtytXD7k.png";
var unicircle_default = "/assets/unicircle-BzDD6j6J.png";
var cse_default = "/assets/cse-CjmFAesG.png";
var e4e_default = "/assets/e4e-BUqainT0.png";
var pwc_2_default = "/assets/pwc-2-C7HXWMma.png";
var pwc_main_svg_default = "/assets/pwc_main.svg-Bpss7Rio.webp";
var ds3_default = "/assets/ds3-3AwPNkLG.png";
var hdsi_default = "/assets/hdsi-DE0jKGK3.png";
var cses_default = "/assets/cses-CIWzPNcI.png";
var eighth_default = "/assets/eighth-PrP10bTY.png";
var tqt_default = "/assets/tqt-By3mqARH.png";
var IITG_logo_default = "/assets/IITG_logo-Bz6GQUC3.png";
var ucsd_default = "/assets/ucsd-6lfHeU3-.png";
var media = {
	hero: vedant_hero_default,
	portrait: vedant_ds3_default,
	geisel: geisel_jpg_default,
	ucsd: ucsd_default
};
var projectCovers = {
	"Worth Your Read": worthyourread_default,
	TumorSense: tumor_default,
	"Math Reasoning (Qwen3-4B-Thinking)": qwen_default,
	"Invasive Species Tracker": invasive_default,
	"SoCal-Guessr": socal_default,
	"Reinforcement Learning Poker Bot": rl_default,
	"Steam Game Recommendation System": steam_default,
	"PantryPal, Smart Recipe Recommender": pantrypal_default,
	"TubeScope, Trending Lifecycle Analytics": tubescope_default,
	"The Seismic Lottery": earth_default,
	"Watts the Problem?": outage_default,
	"MarketScope: Intelligent Stock Forecasting": market_default,
	TritonSpend: tritonspend_default,
	"Blood Report Analysis Chatbot": blood_default,
	"SAR Image Classification with CNN": sar_default,
	"Advanced Image Processing & KNN": knn_default,
	CampusShelf: lib_default,
	"Song Recommender": song_default
};
var experienceLogos = {
	"Metro Infrasys": metro_default,
	Oaken: oaken_default,
	UniCircle: unicircle_default,
	"UCSD CSE (STSLab)": cse_default,
	"Engineers for Exploration (E4E)": e4e_default,
	"PricewaterhouseCoopers LLP (PwC)": pwc_main_svg_default,
	"DS3, Data Science Student Society": ds3_default,
	"Halicioglu Data Science Institute, UCSD": hdsi_default,
	"CSES Open Source, TritonSpend": cses_default,
	"UCSD Eighth College": eighth_default,
	"Triton Quantitative Trading (TQT)": tqt_default,
	"IIT Guwahati": IITG_logo_default
};
/** Hero logo cluster, in display order. */
var orgLogos = [
	{
		src: pwc_2_default,
		alt: "PwC"
	},
	{
		src: ucsd_default,
		alt: "UC San Diego"
	},
	{
		src: IITG_logo_default,
		alt: "IIT Guwahati"
	},
	{
		src: ds3_default,
		alt: "DS3"
	},
	{
		src: e4e_default,
		alt: "Engineers for Exploration"
	},
	{
		src: cses_default,
		alt: "CSES"
	}
];
/** Wins taken verbatim from each project's own description. A photo makes the stamp clickable. */
var projectAwards = {
	"Worth Your Read": { label: "Best Project · Claude Impact Lab" },
	"Invasive Species Tracker": { label: "DS3 Showcase Recognition" },
	"PantryPal, Smart Recipe Recommender": {
		label: "Best Project · DS3 Fall 2025",
		photo: pantrypal_win_default,
		photoAlt: "The PantryPal team wearing medals at the DS3 Fall 2025 showcase"
	},
	"TubeScope, Trending Lifecycle Analytics": {
		label: "3rd Place · DS3 Fall 2025",
		photo: tubescope_win_default,
		photoAlt: "The TubeScope team wearing medals at the DS3 Fall 2025 showcase"
	},
	"The Seismic Lottery": { label: "Best Project & People's Choice · DSC 106" }
};
/**
* Chromatic "dreamy" lens for the hero portrait, ported from the NOVAIR reference.
*
* Around the pointer (a soft gaussian lens) the portrait is smeared outwards and split into a
* red, green and blue spectrum. The portrait already has a transparent background, so the image
* itself is the cutout and nothing behind the person is ever sampled. A transparent canvas sits
* right above the <img>, eases in on hover, trails the pointer and eases out when it leaves.
*/
var EFFECT = {
	size: .52,
	strength: 140,
	opacity: .8
};
var HOVER_AREA = {
	left: .24,
	right: .79,
	top: 0,
	bottom: 1
};
var VERTEX = `#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
    v_uv = vec2(a_position.x * 0.5 + 0.5, 0.5 - a_position.y * 0.5);
    gl_Position = vec4(a_position, 0.0, 1.0);
}`;
var FRAGMENT = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

uniform sampler2D u_media;
uniform vec2 u_box;
uniform vec2 u_drawn;
uniform vec2 u_offset;
uniform vec2 u_mouse;
uniform float u_hover;
uniform float u_size;
uniform float u_strength;
uniform float u_opacity;

vec3 spectrum(float p) {
    return 2.6 * vec3(
        smoothstep(0.54, 0.24, p),
        smoothstep(0.38, 0.0, abs(p - 0.5)),
        smoothstep(0.47, 0.82, p)
    );
}

vec4 sampleMedia(vec2 t) {
    vec4 s = texture(u_media, clamp(t, 0.0, 1.0));
    return vec4(s.rgb * s.a, s.a);
}

vec2 toAspect(vec2 uv, float aspect) {
    return (uv * 2.0 - 1.0) * vec2(aspect, 1.0) / max(aspect, 1.0);
}

void main() {
    vec2 t = v_uv;
    vec2 b = (t * u_drawn + u_offset) / u_box;
    float aspect = u_box.x / u_box.y;

    vec2 relM = toAspect(b, aspect) - toAspect(u_mouse, aspect);
    float sigma = max(u_size * 0.5, 0.02);
    float fall = exp(-dot(relM, relM) / (2.0 * sigma * sigma));

    float weight = u_hover * smoothstep(0.02, 0.35, fall) * u_opacity;
    if (weight < 0.002) {
        fragColor = vec4(0.0);
        return;
    }

    vec2 dispBox = relM * fall * u_hover * u_strength / 1600.0;
    vec2 disp = dispBox * u_box / u_drawn;

    vec3 color = vec3(0.0);
    vec3 total = vec3(0.0);
    float alpha = 0.0;
    float taps = 0.0;

    for (int j = 0; j < 34; j++) {
        float i = float(j) * 0.03;
        if (i >= 1.0) break;
        vec4 s = sampleMedia(t + disp * i);
        vec3 w = spectrum(i);
        color += s.rgb * w;
        total += w;
        alpha += s.a;
        taps += 1.0;
    }

    color /= max(total, vec3(1e-4));
    alpha = min(alpha / max(taps, 1.0), 1.0);

    fragColor = vec4(clamp(color, 0.0, 1.0) * weight, alpha * weight);
}`;
var compile = (gl, type, source) => {
	const shader = gl.createShader(type);
	if (!shader) return null;
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		gl.deleteShader(shader);
		return null;
	}
	return shader;
};
var createRenderer = (width, height) => {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const gl = canvas.getContext("webgl2", {
		alpha: true,
		premultipliedAlpha: true,
		antialias: false,
		depth: false,
		stencil: false,
		preserveDrawingBuffer: true
	});
	if (!gl) return null;
	const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
	const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
	const program = gl.createProgram();
	if (!vertex || !fragment || !program) return null;
	gl.attachShader(program, vertex);
	gl.attachShader(program, fragment);
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
	const vao = gl.createVertexArray();
	const buffer = gl.createBuffer();
	if (!vao || !buffer) return null;
	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
		-1,
		-1,
		3,
		-1,
		-1,
		3
	]), gl.STATIC_DRAW);
	const position = gl.getAttribLocation(program, "a_position");
	gl.enableVertexAttribArray(position);
	gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
	gl.bindVertexArray(null);
	return {
		canvas,
		gl,
		program,
		vao,
		uniforms: Object.fromEntries([
			"u_media",
			"u_box",
			"u_drawn",
			"u_offset",
			"u_mouse",
			"u_hover",
			"u_size",
			"u_strength",
			"u_opacity"
		].map((name) => [name, gl.getUniformLocation(program, name)]))
	};
};
/**
* Adds the lens to the hero portrait. Returns a cleanup function, or a no-op when WebGL 2 is not available.
* `root` receives the pointer; `image` is the portrait <img> (its parent must be positioned).
*/
var attachHeroLens = (root, image) => {
	const width = Math.min(image.naturalWidth, 1200);
	const height = Math.round(image.naturalHeight / image.naturalWidth * width);
	const renderer = createRenderer(width, height);
	if (!renderer || !image.parentElement) return () => void 0;
	const { gl, canvas: shared, uniforms } = renderer;
	const texture = gl.createTexture();
	if (!texture) return () => void 0;
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
	gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	const overlay = document.createElement("canvas");
	overlay.width = width;
	overlay.height = height;
	overlay.setAttribute("aria-hidden", "true");
	overlay.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:contain;pointer-events:none;user-select:none;visibility:hidden;";
	const context = overlay.getContext("2d");
	if (!context) return () => void 0;
	image.insertAdjacentElement("afterend", overlay);
	const state = {
		hovering: false,
		ease: 0,
		mouse: [.5, .5],
		frame: 0,
		last: 0
	};
	let pointer = null;
	const frameFor = () => {
		const boxWidth = overlay.offsetWidth;
		const boxHeight = overlay.offsetHeight;
		if (!boxWidth || !boxHeight) return null;
		const scale = Math.min(boxWidth / width, boxHeight / height);
		const drawnWidth = width * scale;
		const drawnHeight = height * scale;
		return {
			box: [boxWidth, boxHeight],
			drawn: [drawnWidth, drawnHeight],
			offset: [(boxWidth - drawnWidth) / 2, (boxHeight - drawnHeight) / 2],
			mouse: state.mouse,
			hover: state.ease
		};
	};
	const draw = () => {
		const frame = frameFor();
		if (!frame || gl.isContextLost()) return;
		const boost = Math.min(2, Math.max(1, 800 / Math.max(frame.box[0], frame.box[1])));
		gl.viewport(0, 0, width, height);
		gl.disable(gl.BLEND);
		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.useProgram(renderer.program);
		gl.bindVertexArray(renderer.vao);
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.uniform1i(uniforms.u_media, 0);
		gl.uniform2f(uniforms.u_box, Math.max(1, frame.box[0]), Math.max(1, frame.box[1]));
		gl.uniform2f(uniforms.u_drawn, Math.max(1, frame.drawn[0]), Math.max(1, frame.drawn[1]));
		gl.uniform2f(uniforms.u_offset, frame.offset[0], frame.offset[1]);
		gl.uniform2f(uniforms.u_mouse, frame.mouse[0], frame.mouse[1]);
		gl.uniform1f(uniforms.u_hover, frame.hover);
		gl.uniform1f(uniforms.u_size, EFFECT.size);
		gl.uniform1f(uniforms.u_strength, EFFECT.strength * boost);
		gl.uniform1f(uniforms.u_opacity, EFFECT.opacity);
		gl.drawArrays(gl.TRIANGLES, 0, 3);
		gl.bindVertexArray(null);
		context.clearRect(0, 0, width, height);
		context.drawImage(shared, 0, shared.height - height, width, height, 0, 0, width, height);
	};
	const tick = (now) => {
		const delta = state.last ? now - state.last : 1e3 / 60;
		state.last = now;
		const steps = Math.min(delta / 1e3 * 60, 3);
		let moved = false;
		const rect = overlay.getBoundingClientRect();
		if (state.hovering && pointer && rect.width > 0 && rect.height > 0) {
			const targetX = (pointer.x - rect.left) / rect.width;
			const targetY = (pointer.y - rect.top) / rect.height;
			if (state.ease < .02) state.mouse = [targetX, targetY];
			else {
				const follow = 1 - Math.pow(.8, steps);
				const nextX = state.mouse[0] + (targetX - state.mouse[0]) * follow;
				const nextY = state.mouse[1] + (targetY - state.mouse[1]) * follow;
				moved = Math.abs(nextX - state.mouse[0]) + Math.abs(nextY - state.mouse[1]) > 5e-5;
				state.mouse = [nextX, nextY];
			}
		}
		const goal = state.hovering ? 1 : 0;
		const previous = state.ease;
		state.ease += (goal - state.ease) * (1 - Math.pow(.85, steps));
		if (!state.hovering && state.ease < .004) {
			state.ease = 0;
			context.clearRect(0, 0, width, height);
			overlay.style.visibility = "hidden";
			state.frame = 0;
			state.last = 0;
			return;
		}
		if (moved || Math.abs(state.ease - previous) > 5e-4) draw();
		state.frame = window.requestAnimationFrame(tick);
	};
	const start = () => {
		if (state.frame) return;
		state.last = 0;
		state.frame = window.requestAnimationFrame(tick);
	};
	const insideLens = (x, y) => {
		const rect = overlay.getBoundingClientRect();
		if (rect.width <= 0 || rect.height <= 0) return false;
		const u = (x - rect.left) / rect.width;
		const v = (y - rect.top) / rect.height;
		return u >= HOVER_AREA.left && u <= HOVER_AREA.right && v >= HOVER_AREA.top && v <= HOVER_AREA.bottom;
	};
	const handleMove = (event) => {
		if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
		pointer = {
			x: event.clientX,
			y: event.clientY
		};
		const next = insideLens(pointer.x, pointer.y);
		if (next && !state.hovering) overlay.style.visibility = "visible";
		state.hovering = next;
		if (next || state.ease > 0) start();
	};
	const handleLeave = () => {
		pointer = null;
		state.hovering = false;
		start();
	};
	root.addEventListener("pointermove", handleMove, { passive: true });
	root.addEventListener("pointerleave", handleLeave);
	window.addEventListener("blur", handleLeave);
	return () => {
		window.cancelAnimationFrame(state.frame);
		root.removeEventListener("pointermove", handleMove);
		root.removeEventListener("pointerleave", handleLeave);
		window.removeEventListener("blur", handleLeave);
		overlay.remove();
		gl.deleteTexture(texture);
	};
};
var scatterCards = [
	{
		image: projectCovers["PantryPal, Smart Recipe Recommender"],
		x: "14%",
		y: "10%",
		r: -8,
		label: "Vision",
		tag: "ML"
	},
	{
		image: media.geisel,
		x: "84%",
		y: "20%",
		r: 6,
		label: "Campus",
		tag: "UCSD"
	},
	{
		image: projectCovers["Blood Report Analysis Chatbot"],
		x: "8%",
		y: "68%",
		r: 5,
		label: "RAG",
		tag: "ML"
	},
	{
		image: projectCovers["The Seismic Lottery"],
		x: "90%",
		y: "66%",
		r: -6,
		label: "Viz",
		tag: "ML"
	},
	{
		image: projectCovers["Reinforcement Learning Poker Bot"],
		x: "28%",
		y: "110%",
		r: 4,
		label: "RL",
		tag: "ML"
	},
	{
		image: projectCovers["TubeScope, Trending Lifecycle Analytics"],
		x: "72%",
		y: "110%",
		r: -4,
		label: "Forecast",
		tag: "ML"
	}
];
var lineClass = "block font-wide text-[clamp(2.6rem,12vw,17rem)] font-semibold uppercase leading-[0.8] tracking-[-0.055em]";
/** The big name. Rendered twice: once as the white blended title, once as the mint x-ray copy clipped to the portrait. */
function Headline({ xray = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(xray ? "div" : "h1", {
		className: cn("gutter relative w-full", xray ? "text-[#a6e8c4]" : "z-10 text-white mix-blend-difference"),
		"data-intro": "",
		"data-hero-line": "",
		"data-hero-pointer-text": "",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: lineClass,
				"data-hero-row": "1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block",
					"data-hero-row-inner": "",
					"data-dir": "l",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Vedant" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-right",
				"data-hero-row": "2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block",
					"data-hero-row-inner": "",
					"data-dir": "r",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
						text: "Vardhaan",
						className: "inline-block pr-[2vw] font-serif text-[clamp(3rem,13.5vw,19rem)] font-normal italic leading-[0.86] tracking-[-0.03em]"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `${lineClass} relative pl-[8vw]`,
				"data-hero-row": "3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow absolute left-[clamp(1.25rem,3.2vw,2.75rem)] top-[14%] hidden font-sans text-[0.7rem] font-normal leading-tight tracking-[0.14em] md:block",
					children: [
						"AI",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Systems"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block",
					"data-hero-row-inner": "",
					"data-dir": "l",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Engineer" })
				})]
			})
		]
	});
}
function Hero() {
	const scope = (0, import_react.useRef)(null);
	const xrayRef = (0, import_react.useRef)(null);
	useIntro(scope, (timeline, root) => {
		const lines = root.querySelectorAll("[data-hero-line]");
		const frame = root.querySelector("[data-hero-frame]");
		const figure = root.querySelector("[data-hero-figure]");
		const bbox = root.querySelector("[data-hero-bbox]");
		const meta = root.querySelectorAll("[data-hero-meta]");
		const hud = root.querySelectorAll("[data-hero-hud]");
		const bloom = root.querySelector("[data-hero-bloom]");
		const badge = root.querySelector("[data-hero-badge]");
		const score = root.querySelector("[data-hero-score]");
		timeline.from(bloom, {
			scale: .4,
			autoAlpha: 0,
			duration: 2.4,
			ease: "expo.out"
		}, 0).fromTo(frame, {
			clipPath: "inset(50% 0% 50% 0%)",
			rotate: -6
		}, {
			clipPath: "inset(0% 0% 0% 0%)",
			rotate: 0,
			duration: 1.6,
			ease: "expo.inOut"
		}, 0).from(figure, {
			yPercent: 14,
			autoAlpha: 0,
			duration: 1.8,
			ease: "expo.out"
		}, .5).from(hud, {
			autoAlpha: 0,
			duration: .8,
			stagger: .06,
			ease: "power2.out"
		}, 1.1).from(meta, {
			autoAlpha: 0,
			y: 24,
			duration: 1.2,
			stagger: .08
		}, .9).from(badge, {
			scale: 0,
			rotate: -120,
			duration: 1.4,
			ease: "back.out(1.6)"
		}, 1.2).from(bbox, {
			scale: 1.18,
			autoAlpha: 0,
			duration: .9,
			ease: "power3.out"
		}, 1.5);
		lines.forEach((line) => {
			timeline.from(line.querySelectorAll("[data-hero-row-inner]"), {
				xPercent: (_, el) => el.dataset.dir === "l" ? -14 : 14,
				duration: 1.8,
				stagger: .08
			}, .3).from(line.querySelectorAll("[data-word]"), {
				yPercent: 120,
				rotate: 6,
				duration: 1.4,
				stagger: .1
			}, .35);
		});
		if (score) {
			const counter = { value: .41 };
			timeline.to(counter, {
				value: .99,
				duration: 1.6,
				ease: "power2.out",
				onUpdate: () => {
					score.textContent = counter.value.toFixed(2);
				}
			}, 1.5);
		}
	});
	useGSAP(() => {
		const root = scope.current;
		if (!root || !isFinePointer() || prefersReducedMotion()) return;
		const tilt = root.querySelector("[data-hero-tilt]");
		const texts = Array.from(root.querySelectorAll("[data-hero-pointer-text]"));
		const bloom = root.querySelector("[data-hero-bloom-move]");
		if (!tilt || texts.length === 0 || !bloom) return;
		const moveTiltX = gsapWithCSS.quickTo(tilt, "x", {
			duration: 1.2,
			ease: "expo.out"
		});
		const moveTiltY = gsapWithCSS.quickTo(tilt, "y", {
			duration: 1.2,
			ease: "expo.out"
		});
		const moveTexts = texts.map((text) => gsapWithCSS.quickTo(text, "x", {
			duration: 1.6,
			ease: "expo.out"
		}));
		const moveBloomX = gsapWithCSS.quickTo(bloom, "x", {
			duration: 2.4,
			ease: "expo.out"
		});
		const moveBloomY = gsapWithCSS.quickTo(bloom, "y", {
			duration: 2.4,
			ease: "expo.out"
		});
		const handleMove = (event) => {
			const bounds = root.getBoundingClientRect();
			const x = (event.clientX - bounds.left) / bounds.width - .5;
			const y = (event.clientY - bounds.top) / bounds.height - .5;
			moveTiltX(x * 40);
			moveTiltY(y * 30);
			moveTexts.forEach((move) => move(x * -30));
			moveBloomX(x * 160);
			moveBloomY(y * 120);
		};
		const handleLeave = () => {
			moveTiltX(0);
			moveTiltY(0);
			moveTexts.forEach((move) => move(0));
			moveBloomX(0);
			moveBloomY(0);
		};
		root.addEventListener("pointermove", handleMove);
		root.addEventListener("pointerleave", handleLeave);
		return () => {
			root.removeEventListener("pointermove", handleMove);
			root.removeEventListener("pointerleave", handleLeave);
		};
	}, { scope });
	useGSAP(() => {
		const root = scope.current;
		if (!root) return;
		const mm = gsapWithCSS.matchMedia();
		mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
			const cardTop = (_, el) => {
				const middle = el.parentElement.parentElement;
				const figure = el.firstElementChild;
				const wanted = parseFloat(el.dataset.y ?? "50") / 100 * middle.clientHeight;
				const room = root.clientHeight - middle.offsetTop - 20 - figure.offsetHeight / 2;
				return `${Math.min(wanted, room)}px`;
			};
			gsapWithCSS.timeline({
				defaults: { ease: "none" },
				scrollTrigger: {
					trigger: root,
					start: "top top",
					end: "+=110%",
					scrub: 1,
					pin: true,
					anticipatePin: 1,
					invalidateOnRefresh: true
				}
			}).to("[data-hero-row=\"1\"]", { xPercent: -14 }, 0).to("[data-hero-row=\"2\"]", { xPercent: 10 }, 0).to("[data-hero-row=\"3\"]", { xPercent: 16 }, 0).to("[data-hero-fade]", {
				autoAlpha: 0,
				y: -40,
				duration: .5
			}, 0).to("[data-hero-frame-wrap]", { scale: 1.15 }, 0).fromTo("[data-hero-card]", {
				left: "50%",
				top: "50%",
				scale: .3,
				rotate: 0,
				autoAlpha: 0
			}, {
				left: (_, el) => el.dataset.x ?? "50%",
				top: cardTop,
				scale: 1,
				rotate: (_, el) => Number(el.dataset.r ?? 0),
				autoAlpha: 1,
				ease: "power3.out",
				stagger: .04
			}, .1).fromTo("[data-hero-caption]", {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				duration: .4
			}, .6);
		});
		return () => mm.revert();
	}, { scope });
	(0, import_react.useEffect)(() => {
		const root = scope.current;
		const layer = xrayRef.current;
		const figure = root?.querySelector("[data-hero-figure]");
		const image = figure?.querySelector("img");
		if (!root || !layer || !figure || !image) return;
		const sync = () => {
			const layerRect = layer.getBoundingClientRect();
			if (layerRect.bottom < 0 || layerRect.top > window.innerHeight) return;
			const imageRect = image.getBoundingClientRect();
			layer.style.setProperty("--mx", `${imageRect.left - layerRect.left}px`);
			layer.style.setProperty("--my", `${imageRect.top - layerRect.top}px`);
			layer.style.setProperty("--mw", `${imageRect.width}px`);
			layer.style.setProperty("--mh", `${imageRect.height}px`);
			layer.style.opacity = getComputedStyle(figure).opacity;
		};
		sync();
		gsapWithCSS.ticker.add(sync);
		return () => gsapWithCSS.ticker.remove(sync);
	}, []);
	(0, import_react.useEffect)(() => {
		const root = scope.current;
		const image = root?.querySelector("[data-hero-figure] img");
		if (!root || !image || !isFinePointer() || prefersReducedMotion()) return;
		let detach;
		const start = () => {
			detach = attachHeroLens(root, image);
		};
		if (image.complete && image.naturalWidth) start();
		else image.addEventListener("load", start, { once: true });
		return () => {
			image.removeEventListener("load", start);
			detach?.();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: scope,
		id: "top",
		"aria-label": "Vedant Vardhaan introduction",
		className: "relative flex min-h-[100svh] flex-col overflow-hidden bg-ink pb-8 pt-24 text-bone md:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-1/2 top-1/2 size-[110vw] -translate-x-1/2 -translate-y-1/2 md:size-[70vw]",
				"data-hero-bloom-move": "",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-full",
					"data-hero-bloom": "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bloom bloom-breathe size-full opacity-[0.22]" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10",
				"data-hero-fade": "",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gutter grid grid-cols-2 items-start gap-4 md:grid-cols-3",
					"data-intro": "",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-hero-meta": "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecLabel, {
								label: "Human × AI",
								className: "text-bone"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden md:block",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-right text-stone",
							"data-hero-meta": "",
							children: "UC San Diego / La Jolla, CA"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-[58svh] flex-1 items-center py-10 md:min-h-0 md:py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute inset-0 hidden md:block",
						"aria-hidden": "true",
						children: [scatterCards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-auto invisible absolute left-1/2 top-1/2 size-0 opacity-0",
							"data-hero-card": "",
							"data-x": card.x,
							"data-y": card.y,
							"data-r": card.r,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "absolute left-0 top-0 flex w-[9vw] min-w-28 -translate-x-1/2 -translate-y-1/2 flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[3/4] overflow-hidden bg-ink-raised shadow-2xl shadow-black/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: card.image,
										alt: "",
										className: "size-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewfinder, {
										size: "sm",
										className: "inset-2"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "eyebrow flex justify-between text-[0.55rem] text-stone",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: card.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-flare",
										children: card.tag
									})]
								})]
							})
						}, card.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "invisible absolute inset-x-0 bottom-4 text-center opacity-0",
							"data-hero-caption": "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-stone",
								children: "One student / "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl italic text-bone",
								children: "every model, shipped to production."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-1/2 z-0 size-0",
						"data-hero-frame-wrap": "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-0 top-0 aspect-[9/16] h-[min(36svh,22rem)] -translate-x-1/2 -translate-y-1/2 md:h-[min(54svh,36rem)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-full",
								"data-hero-tilt": "",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative size-full",
									"data-intro": "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "frame-grid absolute inset-0 overflow-hidden bg-ink-raised",
										"data-hero-frame": "",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_100%,rgba(212,107,255,0.28),transparent_70%)]",
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewfinder, {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "eyebrow absolute inset-x-6 top-6 z-10 flex justify-between text-[0.6rem] text-bone/90",
												"data-hero-hud": "",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timecode, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "YOLOv8n" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "eyebrow absolute inset-x-6 bottom-6 z-10 flex justify-between text-[0.6rem] text-bone/90",
												"data-hero-hud": "",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "track_id 43789" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9:16" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-flare/80 shadow-[0_0_12px_2px_rgba(212,107,255,0.5)]",
												"aria-hidden": "true"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute bottom-[-4%] left-1/2 aspect-[1696/2528] h-[122%] -translate-x-1/2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative size-full",
											"data-hero-figure": "",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: media.hero,
												alt: "Illustrated portrait of Vedant Vardhaan in a plum shirt and glasses, one hand resting at his hip",
												className: "size-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]",
												fetchPriority: "high"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute bottom-[1.5%] left-[27%] top-[2%] w-[49%] border border-flare/80",
												"data-hero-bbox": "",
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "eyebrow absolute -top-5 left-[-1px] whitespace-nowrap bg-flare px-1.5 py-0.5 text-[0.55rem] text-ink",
													children: ["person ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														"data-hero-score": "",
														children: "0.99"
													})]
												})
											})]
										})
									})]
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headline, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: xrayRef,
						className: "pointer-events-none absolute inset-0 z-20 flex items-center opacity-0",
						style: {
							WebkitMaskImage: `url(${media.hero})`,
							maskImage: `url(${media.hero})`,
							WebkitMaskRepeat: "no-repeat",
							maskRepeat: "no-repeat",
							WebkitMaskSize: "var(--mw, 0px) var(--mh, 0px)",
							maskSize: "var(--mw, 0px) var(--mh, 0px)",
							WebkitMaskPosition: "var(--mx, 0px) var(--my, 0px)",
							maskPosition: "var(--mx, 0px) var(--my, 0px)"
						},
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headline, { xray: true })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10",
				"data-hero-fade": "",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gutter grid gap-8 md:grid-cols-12 md:items-end",
					"data-intro": "",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-5 md:col-span-5",
							"data-hero-meta": "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-sm text-base leading-relaxed text-bone/80 md:text-lg",
								children: "Data Science student at UC San Diego with a passion for machine learning, AI, and software development."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eyebrow flex flex-wrap items-center gap-x-5 gap-y-2 text-bone",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#projects",
										className: "link-underline flex items-center gap-1.5 py-1",
										children: ["View projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: LINKS.github,
										target: "_blank",
										rel: "noreferrer",
										className: "link-underline flex items-center gap-1.5 py-1",
										children: ["GitHub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: LINKS.linkedin,
										target: "_blank",
										rel: "noreferrer",
										className: "link-underline flex items-center gap-1.5 py-1",
										children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: LINKS.resumeAIML,
										target: "_blank",
										rel: "noreferrer",
										className: "link-underline flex items-center gap-1.5 py-1",
										children: ["Resume ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 md:col-span-4 md:col-start-7",
							"data-hero-meta": "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex -space-x-3",
								children: orgLogos.map((logo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative flex size-10 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-bone md:size-11",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: logo.src,
										alt: logo.alt,
										className: "size-full object-contain p-1.5"
									})
								}, logo.alt))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "Open to AI / ML Engineering and SWE roles"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-stone",
									children: "PwC · UCSD · IIT Guwahati · DS3 · E4E · CSES"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#about",
							className: "group hidden items-center justify-end gap-3 text-sm md:col-span-2 md:flex",
							"data-hero-meta": "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Scroll to explore"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex size-24 items-center justify-center",
								"data-hero-badge": "",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 100 100",
									className: "spin-slow absolute inset-0 size-full text-stone transition-colors group-hover:text-bone",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										id: "hero-badge-circle",
										d: "M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										className: "fill-current font-mono text-[9.5px] uppercase tracking-[0.32em]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
											href: "#hero-badge-circle",
											children: "Scroll to explore / Vedant Vardhaan /"
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-10 items-center justify-center rounded-full border border-bone/30 transition-colors group-hover:border-flare group-hover:bg-flare group-hover:text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })
								})]
							})]
						})
					]
				})
			})
		]
	});
}
var within = (root, selector) => Array.from(root.querySelectorAll(selector));
/**
* Wires the declarative motion attributes found inside `scope`:
* - data-reveal="fade"     fades and lifts one element
* - data-reveal="stagger"  fades and lifts every direct child in sequence
* - data-reveal="words"    raises the masked words rendered by <SplitWords>
* - data-reveal="image"    wipes an image frame open (inner [data-reveal-inner] settles)
* - data-reveal="line"     draws a hairline from the left
* - data-parallax="10"     drifts the frame's [data-parallax-inner] while scrolling
* Everything is skipped when the visitor prefers reduced motion.
*/
var useReveal = (scope, dependencies = []) => {
	useGSAP(() => {
		const root = scope.current;
		if (!root) return;
		const mm = gsapWithCSS.matchMedia();
		mm.add("(prefers-reduced-motion: no-preference)", () => {
			within(root, "[data-reveal=\"fade\"]").forEach((element) => {
				gsapWithCSS.from(element, {
					autoAlpha: 0,
					y: 56,
					duration: 1.3,
					delay: Number(element.dataset.revealDelay ?? 0),
					scrollTrigger: {
						trigger: element,
						start: "top 90%",
						toggleActions: "play none none none"
					}
				});
			});
			within(root, "[data-reveal=\"stagger\"]").forEach((group) => {
				gsapWithCSS.from(group.children, {
					autoAlpha: 0,
					y: 48,
					duration: 1.2,
					stagger: .09,
					scrollTrigger: {
						trigger: group,
						start: "top 88%",
						toggleActions: "play none none none"
					}
				});
			});
			within(root, "[data-reveal=\"words\"]").forEach((element) => {
				gsapWithCSS.from(element.querySelectorAll("[data-word]"), {
					yPercent: 118,
					duration: 1.25,
					stagger: .045,
					scrollTrigger: {
						trigger: element,
						start: "top 88%",
						toggleActions: "play none none none"
					}
				});
			});
			within(root, "[data-reveal=\"image\"]").forEach((element) => {
				const inner = element.querySelector("[data-reveal-inner]");
				gsapWithCSS.fromTo(element, { clipPath: "inset(100% 0% 0% 0%)" }, {
					clipPath: "inset(0% 0% 0% 0%)",
					duration: 1.5,
					ease: "expo.inOut",
					scrollTrigger: {
						trigger: element,
						start: "top 92%",
						toggleActions: "play none none none"
					}
				});
				if (inner) gsapWithCSS.fromTo(inner, { scale: 1.32 }, {
					scale: 1,
					duration: 2.1,
					delay: .1,
					ease: "expo.out",
					scrollTrigger: {
						trigger: element,
						start: "top 92%",
						toggleActions: "play none none none"
					}
				});
			});
			within(root, "[data-reveal=\"line\"]").forEach((element) => {
				gsapWithCSS.from(element, {
					scaleX: 0,
					transformOrigin: "0% 50%",
					duration: 1.6,
					ease: "expo.inOut",
					scrollTrigger: {
						trigger: element,
						start: "top 94%",
						toggleActions: "play none none none"
					}
				});
			});
			within(root, "[data-parallax]").forEach((element) => {
				const amount = Number(element.dataset.parallax) || 10;
				const inner = element.querySelector("[data-parallax-inner]") ?? element;
				gsapWithCSS.fromTo(inner, { yPercent: -amount }, {
					yPercent: amount,
					ease: "none",
					scrollTrigger: {
						trigger: element,
						start: "top bottom",
						end: "bottom top",
						scrub: true
					}
				});
			});
		});
		return () => mm.revert();
	}, {
		scope,
		dependencies,
		revertOnUpdate: true
	});
};
/** Endless horizontal loop. The content is rendered twice; the copy is hidden from assistive tech. */
function Marquee({ children, className, trackClassName, duration = 40, reverse = false, pauseOnHover = true }) {
	const style = {
		"--marquee-duration": `${duration}s`,
		animationDirection: reverse ? "reverse" : "normal"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("marquee relative flex overflow-hidden", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("marquee-track flex w-max shrink-0", trackClassName),
			style,
			"data-pause-on-hover": pauseOnHover ? "true" : "false",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0",
				children
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0",
				"aria-hidden": "true",
				children
			})]
		})
	});
}
var statement = "I turn messy data into models that ship to real users.";
var keywords = [
	"Agentic AI",
	"Computer Vision",
	"Applied ML",
	"Full-stack",
	"Research",
	"Leadership"
];
var facets = [
	{
		label: "Interests",
		text: "Machine learning, agentic AI and computer vision, aimed at problems with real stakes: health, ecology, finance and how people behave online."
	},
	{
		label: "Work",
		text: "Agentic AI engineering at PwC and Oaken, CTO at UniCircle, and ongoing applied AI research at UCSD's STSLab on whether AI conversations can reduce toxic discourse."
	},
	{
		label: "Achievements",
		text: "3.96 GPA with Provost Honors. Best project at the Claude Impact Lab, Best Project at DS3 Fall 2025, and Best Project and People's Choice among 42 teams in DSC 106. President of CSES Open Source."
	}
];
var stats = [
	{
		value: parseFloat(EDUCATION.gpa),
		decimals: 2,
		label: "GPA"
	},
	{
		value: PROJECTS.length,
		decimals: 0,
		label: "Projects built"
	},
	{
		value: EXPERIENCE.length,
		decimals: 0,
		label: "Roles held"
	},
	{
		value: Object.keys(projectAwards).length,
		decimals: 0,
		label: "Project wins"
	}
];
function CountStat({ value, decimals, label }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || prefersReducedMotion()) return;
		const state = { v: 0 };
		let tween;
		el.textContent = 0 .toFixed(decimals);
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			observer.disconnect();
			tween = gsapWithCSS.to(state, {
				v: value,
				duration: 2.4,
				ease: "expo.out",
				onUpdate: () => {
					el.textContent = state.v.toFixed(decimals);
				},
				onComplete: () => {
					el.textContent = value.toFixed(decimals);
				}
			});
		}, { threshold: .6 });
		observer.observe(el);
		return () => {
			observer.disconnect();
			tween?.kill();
			el.textContent = value.toFixed(decimals);
		};
	}, [value, decimals]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group/stat relative border-t border-ink/20 pt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-0 top-[-1px] h-px w-full origin-left scale-x-0 bg-flare transition-transform duration-700 ease-expo group-hover/stat:scale-x-100",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref,
				className: "block font-wide text-[clamp(3rem,7vw,7rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums transition-colors duration-500 group-hover/stat:text-flare",
				children: value.toFixed(decimals)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow mt-4 block text-stone-deep",
				children: label
			})
		]
	});
}
function About() {
	const scope = (0, import_react.useRef)(null);
	const statementRef = (0, import_react.useRef)(null);
	const tiltRef = (0, import_react.useRef)(null);
	const glareRef = (0, import_react.useRef)(null);
	useReveal(scope);
	useGSAP(() => {
		const el = statementRef.current;
		if (!el || prefersReducedMotion()) return;
		gsapWithCSS.fromTo(el.querySelectorAll("[data-mword]"), { opacity: .16 }, {
			opacity: 1,
			ease: "none",
			stagger: .12,
			scrollTrigger: {
				trigger: el,
				start: "top 82%",
				end: "bottom 52%",
				scrub: true
			}
		});
	}, { scope });
	useGSAP(() => {
		const card = tiltRef.current;
		const glare = glareRef.current;
		if (!card || !glare || !isFinePointer() || prefersReducedMotion()) return;
		gsapWithCSS.set(card, { transformPerspective: 900 });
		const rotY = gsapWithCSS.quickTo(card, "rotationY", {
			duration: .9,
			ease: "expo.out"
		});
		const rotX = gsapWithCSS.quickTo(card, "rotationX", {
			duration: .9,
			ease: "expo.out"
		});
		const handleMove = (event) => {
			const rect = card.getBoundingClientRect();
			const x = (event.clientX - rect.left) / rect.width - .5;
			const y = (event.clientY - rect.top) / rect.height - .5;
			rotY(x * 14);
			rotX(y * -14);
			glare.style.background = `radial-gradient(60% 60% at ${(x + .5) * 100}% ${(y + .5) * 100}%, rgba(212,107,255,0.35), transparent 70%)`;
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
	}, { scope });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: scope,
		id: "about",
		className: "relative scroll-mt-20 overflow-hidden bg-bone py-24 text-ink md:py-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gutter",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-y-10 md:grid-cols-12 md:gap-x-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						"data-reveal": "fade",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "01 About"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 block h-px w-full bg-ink/20",
							"data-reveal": "line"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						ref: statementRef,
						className: "font-wide text-[clamp(2rem,5.6vw,6.25rem)] font-semibold uppercase leading-[0.98] tracking-[-0.045em] md:col-span-9",
						children: statement.split(" ").map((word, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"data-mword": "",
							className: "inline-block cursor-default transition-[color,transform,text-shadow] duration-500 ease-expo hover:-translate-y-[0.05em] hover:text-[#9b3fd6] hover:opacity-100! hover:[text-shadow:0_0_0.6em_rgba(155,63,214,0.35)]",
							children: word
						}), " "] }, `${word}-${index}`))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 border-y border-ink/15 py-5 md:mt-24",
				"aria-hidden": "true",
				"data-reveal": "fade",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
					duration: 70,
					children: keywords.map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center whitespace-nowrap px-6 font-wide text-[clamp(1.6rem,3.6vw,3.6rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_var(--ink)]",
						children: [word, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-12 font-serif text-[0.7em] font-normal normal-case italic text-flare [-webkit-text-stroke:0]",
							children: "✦"
						})]
					}, word))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gutter",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-x-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								"data-reveal": "image",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									ref: tiltRef,
									className: "relative aspect-[4/5] overflow-hidden bg-ink will-change-transform",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-[-8%]",
											"data-parallax-inner": "",
											"data-reveal-inner": "",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: media.portrait,
												alt: "Vedant standing outside on the UC San Diego campus",
												className: "size-full object-cover object-[50%_30%]",
												loading: "lazy"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											ref: glareRef,
											className: "pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewfinder, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
											className: "eyebrow absolute inset-x-5 bottom-5 z-10 flex justify-between text-[0.6rem] text-bone",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fr 001" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "La Jolla, CA" })]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-none absolute -top-12 right-[-5.25rem] hidden size-28 items-center justify-center md:flex",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 100 100",
									className: "spin-slow absolute inset-0 size-full text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										id: "about-badge-circle",
										d: "M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										className: "fill-current font-mono text-[9.5px] uppercase tracking-[0.3em]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
											href: "#about-badge-circle",
											children: "Data Science / UC San Diego / Class of 2027 /"
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-flare" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow float-slow pointer-events-none absolute -left-3 bottom-24 hidden bg-ink px-3 py-2 text-[0.6rem] text-bone shadow-xl shadow-black/20 md:block",
								"aria-hidden": "true",
								children: "Provost Honors"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow float-slow pointer-events-none absolute -right-3 bottom-10 hidden bg-flare px-3 py-2 text-[0.6rem] text-ink shadow-xl shadow-black/20 [animation-delay:-3s] md:block",
								"aria-hidden": "true",
								children: "B.S. Data Science"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7 md:col-start-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lead leading-snug",
							"data-reveal": "words",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: ABOUT.primary })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-12 md:mt-16",
							"data-reveal": "stagger",
							children: facets.map((facet, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group/facet relative isolate -mx-5 grid gap-3 border-t border-ink/20 px-5 py-7 last:border-b md:grid-cols-[9rem_1fr] md:gap-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
									className: "eyebrow flex items-center gap-3 text-flare transition-colors duration-500 group-hover/facet:text-flare!",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-expo group-hover/facet:scale-y-100",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-stone-deep transition-colors duration-500 group-hover/facet:text-stone",
											children: ["0", index + 1]
										}),
										facet.label
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "max-w-xl pr-8 text-base leading-relaxed text-ink/85 transition-colors duration-500 group-hover/facet:text-bone",
									children: [facet.text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										className: "absolute right-5 top-7 hidden size-5 -translate-x-2 text-flare opacity-0 transition-[opacity,transform] duration-500 ease-expo group-hover/facet:translate-x-0 group-hover/facet:opacity-100 md:block",
										"aria-hidden": "true"
									})]
								})]
							}, facet.label))
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-32 md:grid-cols-4",
					"data-reveal": "stagger",
					children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountStat, { ...stat }, stat.label))
				})]
			})
		]
	});
}
/** Two plain-language sentences per organisation, shown in the experience monitor after two scans. Keyed by the company name in data.ts. */
var orgAbout = {
	"PricewaterhouseCoopers LLP (PwC)": "PwC is one of the world's largest professional services networks, known for audit, tax and consulting. Its technology consulting teams help clients adopt cloud and AI.",
	Oaken: "Oaken is an Indiana agtech software company that helps farm operators manage leases, finances and relationships with the landowners they farm for. Its platform keeps landowner records in one place and turns them into clear reports.",
	UniCircle: "UniCircle is a student platform that helps university students find campus communities, events and opportunities. It runs on a web app with a privacy-focused backend built to FERPA and CCPA requirements.",
	"Metro Infrasys": "Metro Infrasys is an Indian intelligent transportation systems company focused on tolling, traffic management and parking. Its systems help highway operators monitor roads and collect tolls.",
	"UCSD CSE (STSLab)": "STSLab is a research group in UC San Diego's Computer Science and Engineering department. Its work with Prof. Deepak Kumar studies online behavior, including whether AI chatbots can reduce toxic discourse.",
	"Engineers for Exploration (E4E)": "Engineers for Exploration is a student-led UC San Diego program where interdisciplinary teams build technology for conservation and exploration. Its mangrove project works with Scripps Institution of Oceanography to map mangroves from drones and satellites.",
	"IIT Guwahati": "IIT Guwahati is a public technical university in Assam, India, and one of the Indian Institutes of Technology. It is known for engineering and science research.",
	"CSES Open Source, TritonSpend": "CSES is UC San Diego's Computer Science and Engineering Society, and its Open Source program has students build real projects together. One of them is TritonSpend, a finance app for UCSD students to track budgets and expenses.",
	"UCSD Eighth College": "Eighth College is UC San Diego's newest undergraduate residential college, built around the theme of engagement and community. Resident assistants support the students living in its residence halls.",
	"DS3, Data Science Student Society": "DS3 is UC San Diego's Data Science Student Society, a student organization for learning and building with data. It runs quarterly team projects with mentors and ends each quarter with a showcase.",
	"Halicioglu Data Science Institute, UCSD": "The Halicioglu Data Science Institute is UC San Diego's home for data science education and research. It teaches the data science major and courses such as DSC 40A.",
	"Triton Quantitative Trading (TQT)": "TQT is a UC San Diego student organization focused on quantitative finance and algorithmic trading. Members build statistical and trading models and compete in trading contests."
};
var CAMS = [
	{
		id: "industry",
		cam: "A",
		tab: "Engineer"
	},
	{
		id: "research",
		cam: "B",
		tab: "Researcher"
	},
	{
		id: "campus",
		cam: "C",
		tab: "Leader"
	}
];
var keyOf = (e) => `${e.company}::${e.role}`;
var isLive = (e) => /present/i.test(e.period);
var frame = (index) => `Fr ${String(index + 1).padStart(3, "0")}`;
function Progression({ steps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8",
		"aria-label": "Career progression",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow text-flare",
			children: "Career progression"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative mt-5 grid grid-cols-3 gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-0 right-0 top-[5px] h-px bg-bone/20",
				"aria-hidden": "true"
			}), steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative pt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("absolute left-0 top-0 size-[11px] rounded-full border", step.current ? "border-flare bg-flare" : "border-bone/50 bg-ink"),
						"aria-hidden": "true",
						children: step.current && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ping-ring absolute inset-0 rounded-full bg-flare" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("text-sm font-medium leading-snug", step.current ? "text-bone" : "text-bone/65"),
						children: step.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-1 text-[0.6rem] text-stone",
						children: step.period
					})
				]
			}, `${step.role}-${step.period}`))]
		})]
	});
}
function RoleRow({ e, index, open, onToggle }) {
	const live = isLive(e);
	const logo = experienceLogos[e.company];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "group/row border-t border-bone/15 last:border-b",
		"data-open": open,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onToggle,
			"aria-expanded": open,
			"data-cursor": open ? "Close" : "Open",
			className: "grid w-full grid-cols-[2.25rem_1fr] items-start gap-x-3 py-6 text-left md:grid-cols-[3rem_1fr] md:gap-x-5 md:py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow pt-1 text-stone transition-colors group-data-[open=true]/row:text-flare",
				children: String(index + 1).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-wide text-[0.92rem] font-semibold uppercase leading-[1.1] tracking-[-0.035em] [overflow-wrap:anywhere] md:text-[clamp(1.1rem,2vw,2rem)] md:leading-[1.04] transition-transform duration-700 ease-expo group-hover/row:translate-x-2",
						children: e.company
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block font-serif text-[clamp(1.1rem,1.5vw,1.5rem)] italic leading-tight text-bone/75",
						children: e.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1",
						children: [live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecLabel, {
							label: "Live",
							className: "text-bone"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow inline-flex items-center gap-2 text-stone",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 bg-stone" }), "Wrapped"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-stone",
							children: e.period
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid transition-[grid-template-rows] duration-700 ease-expo", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pb-9 pl-[2.75rem] md:pb-12 md:pl-[4.25rem]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 flex items-center gap-4 lg:hidden",
							children: [logo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-24 items-center justify-center bg-bone p-2.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo,
									alt: `${e.company} logo`,
									className: "size-full object-contain",
									loading: "lazy"
								})
							}), (e.location || e.meta) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-stone",
								children: [e.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }), e.location]
								}), e.meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.meta })]
							})]
						}),
						orgAbout[e.company] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-6 max-w-md text-sm leading-relaxed text-bone/70 lg:hidden",
							children: orgAbout[e.company]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-5",
							children: e.bullets.map((bullet, bulletIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: cn("grid grid-cols-[3.25rem_1fr] gap-x-4 transition-[opacity,transform] duration-700 ease-expo md:grid-cols-[4rem_1fr]", open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"),
								style: { transitionDelay: open ? `${180 + bulletIndex * 90}ms` : "0ms" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow pt-[0.4rem] text-[0.6rem] text-flare",
									children: frame(bulletIndex)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-3xl text-[0.95rem] leading-relaxed text-bone/80 md:text-base",
									children: bullet
								})]
							}, bullet))
						}),
						e.progression && e.progression.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progression, { steps: e.progression }),
						e.tags && e.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 flex flex-wrap gap-2",
							children: e.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "eyebrow border border-bone/20 px-2.5 py-1.5 text-[0.6rem] text-bone/80",
								children: tag
							}, tag))
						})
					]
				})
			})
		})]
	});
}
/** Logo first; after one scan sweep the logo lifts and a short "about" blurb fades in. Remounts per role. */
function MonitorBody({ e }) {
	const logo = experienceLogos[e.company];
	const about = orgAbout[e.company];
	const [scans, setScans] = (0, import_react.useState)(0);
	const showAbout = Boolean(about) && scans >= 1;
	(0, import_react.useEffect)(() => {
		if (prefersReducedMotion()) setScans(1);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		onAnimationIteration: () => setScans((count) => count + 1),
		className: "scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-flare/80 shadow-[0_0_12px_2px_rgba(212,107,255,0.5)]",
		style: { animationDuration: "2s" },
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 flex flex-col items-center justify-center px-10 animate-in fade-in zoom-in-95 duration-700",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-col items-center gap-6 transition-transform duration-1000 ease-expo", showAbout && "-translate-y-[24%] scale-[0.86]"),
			children: [logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-52 items-center justify-center bg-bone p-6 shadow-2xl shadow-black/50 xl:size-60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo,
					alt: `${e.company} logo`,
					className: "size-full object-contain"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow text-stone",
				children: "No logo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-bone",
					children: e.period
				}), (e.location || e.meta) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-stone",
					children: [e.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }), e.location]
					}), e.meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.meta })]
				})]
			})]
		}), about && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("absolute inset-x-10 top-[63%] text-center transition-[opacity,translate] delay-300 duration-1000 ease-expo", showAbout ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-[0.6rem] text-flare",
				children: "About"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[0.92rem] leading-relaxed text-bone/85",
				children: about
			})]
		})]
	})] });
}
function Monitor({ e, cam, groupLabel }) {
	const live = isLive(e);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "frame-grid relative aspect-[4/5] w-full overflow-hidden border border-bone/10 bg-ink-raised",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_110%,rgba(212,107,255,0.22),transparent_70%)]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewfinder, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "eyebrow absolute inset-x-7 top-7 z-10 flex items-center justify-between text-[0.6rem] text-bone/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Cam ", cam] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timecode, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorBody, { e }, keyOf(e)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "eyebrow absolute inset-x-7 bottom-7 z-10 flex items-center justify-between text-[0.6rem] text-bone/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: groupLabel }), live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecLabel, {
					label: "Rec",
					className: "text-[0.6rem]"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 text-stone",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 bg-stone" }), "Wrapped"]
				})]
			})
		]
	});
}
function Experience() {
	const scope = (0, import_react.useRef)(null);
	const listRef = (0, import_react.useRef)(null);
	const scanRef = (0, import_react.useRef)(null);
	const mounted = (0, import_react.useRef)(false);
	const [activeGroup, setActiveGroup] = (0, import_react.useState)("industry");
	const [openKey, setOpenKey] = (0, import_react.useState)(null);
	useReveal(scope);
	const groups = (0, import_react.useMemo)(() => EXPERIENCE_GROUPS.map((group) => ({
		...group,
		items: EXPERIENCE.filter((e) => e.group === group.id).sort((a, b) => (b.sortKey ?? 0) - (a.sortKey ?? 0))
	})), []);
	const group = groups.find((g) => g.id === activeGroup) ?? groups[0];
	const cam = CAMS.find((c) => c.id === group.id) ?? CAMS[0];
	const activeItem = group.items.find((e) => keyOf(e) === openKey) ?? group.items[0];
	(0, import_react.useEffect)(() => {
		setOpenKey(group.items[0] ? keyOf(group.items[0]) : null);
	}, [group.id]);
	(0, import_react.useEffect)(() => {
		if (!mounted.current) {
			mounted.current = true;
			return;
		}
		const list = listRef.current;
		const scan = scanRef.current;
		if (!list || !scan || prefersReducedMotion()) return;
		const tween = gsapWithCSS.timeline().fromTo(list, { clipPath: "inset(0% 0% 100% 0%)" }, {
			clipPath: "inset(0% 0% 0% 0%)",
			duration: 1,
			ease: "expo.inOut"
		}, 0).fromTo(scan, {
			top: "0%",
			autoAlpha: 1
		}, {
			top: "100%",
			autoAlpha: 0,
			duration: 1,
			ease: "power2.inOut"
		}, 0);
		return () => {
			tween.kill();
			gsapWithCSS.set(list, { clearProps: "clipPath" });
		};
	}, [activeGroup]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: scope,
		id: "experience",
		className: "relative scroll-mt-20 bg-ink py-24 text-bone md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gutter",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-6 border-b border-bone/15 pb-5",
					"data-reveal": "fade",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "02 Experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecLabel, {
						label: `${CAMS.length} cameras / ${EXPERIENCE.length} roles`,
						className: "text-stone"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-10 font-wide text-[clamp(2.4rem,8.6vw,10rem)] font-semibold uppercase leading-[0.84] tracking-[-0.05em] md:mt-14",
					"data-reveal": "words",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Three cameras," }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
							text: "one engineer.",
							className: "font-serif text-[1.05em] font-normal normal-case italic tracking-[-0.03em]"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-col gap-6 md:mt-20 lg:flex-row lg:items-end lg:justify-between",
					"data-reveal": "fade",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "tablist",
						"aria-label": "Experience categories",
						className: "flex flex-wrap gap-2",
						children: CAMS.map((item) => {
							const g = groups.find((x) => x.id === item.id);
							const active = item.id === activeGroup;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": active,
								onClick: () => setActiveGroup(item.id),
								className: cn("eyebrow flex items-center gap-2.5 border px-4 py-3 transition-colors duration-500", active ? "border-flare bg-flare text-ink" : "border-bone/25 text-bone hover:border-bone/60"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", active ? "rec-dot bg-ink" : "bg-stone") }),
									"Cam ",
									item.cam,
									" · ",
									item.tab,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("tabular-nums", active ? "text-ink/70" : "text-stone"),
										children: String(g?.items.length ?? 0).padStart(2, "0")
									})
								]
							}, item.id);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-md text-sm leading-relaxed text-bone/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow mr-2 text-bone",
							children: [group.label, "."]
						}), group.blurb]
					}, group.id)]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative lg:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: listRef,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: group.items.map((e, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleRow, {
								e,
								index,
								open: keyOf(activeItem) === keyOf(e) && openKey !== "__closed__",
								onToggle: () => setOpenKey((current) => current === keyOf(e) ? "__closed__" : keyOf(e))
							}, keyOf(e))) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: scanRef,
							className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-flare opacity-0 shadow-[0_0_14px_3px_rgba(212,107,255,0.55)]",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "hidden lg:col-span-5 lg:block",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sticky top-28",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, {
								e: activeItem,
								cam: cam.cam,
								groupLabel: group.label
							})
						})
					})]
				})
			]
		})
	});
}
var useIsoLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var NUMBER = /(\d+(?:\.\d+)?%|\b0\.\d+\b|\b\d+\+(?=\s))/g;
var filterProjects = (filters) => {
	const useLatest = filters.includes("latest");
	const tagFilters = filters.filter((f) => f !== "latest");
	const base = useLatest ? PROJECTS.slice(0, 3) : PROJECTS;
	if (tagFilters.length === 0) return base;
	return base.filter((p) => tagFilters.every((f) => p.tags.includes(f)));
};
var runNumber = (title) => {
	const index = PROJECTS.findIndex((p) => p.title === title);
	return `Run ${String(PROJECTS.length - index).padStart(3, "0")}`;
};
function CountUp({ value }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
		if (!el || !match || prefersReducedMotion()) return;
		const target = parseFloat(match[1]);
		const decimals = (match[1].split(".")[1] ?? "").length;
		const suffix = match[2];
		const state = { v: 0 };
		let tween;
		el.textContent = `${0 .toFixed(decimals)}${suffix}`;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			observer.disconnect();
			tween = gsapWithCSS.to(state, {
				v: target,
				duration: 1.8,
				ease: "expo.out",
				onUpdate: () => {
					el.textContent = `${state.v.toFixed(decimals)}${suffix}`;
				},
				onComplete: () => {
					el.textContent = value;
				}
			});
		}, { threshold: .9 });
		observer.observe(el);
		return () => {
			observer.disconnect();
			tween?.kill();
			el.textContent = value;
		};
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className: "font-semibold tabular-nums text-flare",
		children: value
	});
}
function Description({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: text.split(NUMBER).map((part, index) => index % 2 === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { value: part }, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: part }, index)) });
}
function ProjectLinks({ project, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("eyebrow flex flex-wrap items-center gap-x-6 gap-y-2", className),
		children: [project.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: project.github,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": `View ${project.title} source code on GitHub`,
			className: "link-underline flex items-center gap-1.5 py-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-3.5" }), " Code"]
		}), project.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: project.demo,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": `Open ${project.title} demo`,
			className: "link-underline flex items-center gap-1.5 py-1 text-flare",
			children: ["Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
		})]
	});
}
function Stamp({ title, onPhoto }) {
	const award = projectAwards[title];
	if (!award) return null;
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: "★"
		}),
		award.label,
		award.photo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
			className: "size-3",
			"aria-hidden": "true"
		})
	] });
	const classes = "eyebrow inline-flex -rotate-2 items-center gap-1.5 bg-flare px-2.5 py-1.5 text-[0.6rem] text-ink transition-transform duration-500 ease-expo";
	return award.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => onPhoto(title),
		"aria-label": `${award.label}: view photo`,
		"data-cursor": "Photo",
		className: cn(classes, "hover:rotate-2 hover:scale-105"),
		children: content
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: classes,
		children: content
	});
}
function Card({ project, horizontal, onOpen, onPhoto }) {
	const cover = projectCovers[project.title];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		"data-flip-id": project.title,
		className: cn("group flex flex-col border-t border-ink/25 pt-5", horizontal && "md:w-[min(30vw,26rem)] md:shrink-0"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow mb-5 text-ink/70",
				children: [runNumber(project.title), project.period && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-stone-deep",
					children: [" · ", project.period]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onOpen(project.title),
					"aria-label": `Open ${project.title} details`,
					"data-cursor": "Open",
					className: cn("relative block aspect-[16/10] w-full overflow-hidden bg-ink text-left", horizontal && "md:aspect-[16/9]"),
					children: [cover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cover,
						alt: `${project.title} preview`,
						className: "size-full object-cover transition-transform duration-[1400ms] ease-expo group-hover:scale-[1.05]",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewfinder, {
						size: "sm",
						className: "inset-3"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -top-3 right-3 z-20 max-w-[85%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, {
						title: project.title,
						onPhoto
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 font-wide text-[clamp(1.35rem,2.1vw,2.1rem)] font-semibold uppercase leading-[1] tracking-[-0.04em]",
				children: project.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-[0.95rem] leading-relaxed text-ink/80",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, { text: project.description })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 flex flex-wrap gap-1.5",
				children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "eyebrow border border-ink/25 px-2 py-1 text-[0.6rem] text-ink/80",
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectLinks, {
				project,
				className: "mt-6 text-ink"
			})
		]
	});
}
function Detail({ project, onClose, onStep, onPhoto }) {
	const cover = projectCovers[project.title];
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
			if (event.key === "ArrowRight") onStep(1);
			if (event.key === "ArrowLeft") onStep(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose, onStep]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": project.title,
		className: "fixed inset-0 z-[70] overflow-y-auto bg-ink text-bone animate-in fade-in duration-500",
		"data-lenis-prevent": "",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gutter flex items-center justify-between py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecLabel, {
				label: `${runNumber(project.title)} / ${project.period ?? ""}`,
				className: "text-bone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onClose,
				className: "eyebrow flex items-center gap-2 rounded-full border border-bone/30 px-4 py-2 transition-colors hover:border-flare hover:bg-flare hover:text-ink",
				children: ["Close ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gutter grid gap-10 pb-16 pt-4 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-12 lg:items-center lg:gap-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[16/10] w-full overflow-hidden bg-ink-raised lg:col-span-7",
				children: [cover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: cover,
					alt: `${project.title} preview`,
					className: "size-full object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewfinder, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, {
						title: project.title,
						onPhoto
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-wide text-[clamp(1.8rem,3.4vw,3.6rem)] font-semibold uppercase leading-[0.95] tracking-[-0.045em]",
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-base leading-relaxed text-bone/85",
						children: project.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-wrap gap-1.5",
						children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "eyebrow border border-bone/25 px-2 py-1 text-[0.6rem] text-bone/80",
							children: item
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectLinks, {
						project,
						className: "mt-8 text-bone"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "eyebrow mt-12 flex items-center justify-between border-t border-bone/15 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onStep(-1),
							className: "link-underline py-1",
							children: "← Previous run"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onStep(1),
							className: "link-underline py-1",
							children: "Next run →"
						})]
					})
				]
			})]
		})]
	});
}
function Lightbox({ title, onClose }) {
	const award = projectAwards[title];
	(0, import_react.useEffect)(() => {
		const onKey = (event) => event.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	if (!award?.photo) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": award.label,
		className: "fixed inset-0 z-[80] flex flex-col items-center justify-center gap-5 bg-ink/95 p-6 text-bone animate-in fade-in duration-500",
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onClose,
				className: "eyebrow absolute right-6 top-6 flex items-center gap-2 rounded-full border border-bone/30 px-4 py-2",
				children: ["Close ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: award.photo,
				alt: award.photoAlt,
				className: "max-h-[78svh] max-w-full object-contain shadow-2xl shadow-black/60",
				onClick: (event) => event.stopPropagation()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow text-center text-bone/80",
				children: [
					"★ ",
					award.label,
					" · ",
					title
				]
			})
		]
	});
}
function Projects() {
	const scope = (0, import_react.useRef)(null);
	const gridRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const barRef = (0, import_react.useRef)(null);
	const flipState = (0, import_react.useRef)(null);
	const [activeFilters, setActiveFilters] = (0, import_react.useState)(["latest"]);
	const [openTitle, setOpenTitle] = (0, import_react.useState)(null);
	const [photoTitle, setPhotoTitle] = (0, import_react.useState)(null);
	useReveal(scope);
	const filtered = (0, import_react.useMemo)(() => filterProjects(activeFilters), [activeFilters]);
	const horizontal = filtered.length > 3;
	const counts = (0, import_react.useMemo)(() => {
		const map = {
			all: PROJECTS.length,
			latest: Math.min(3, PROJECTS.length)
		};
		PROJECT_FILTERS.forEach((f) => {
			if (f.id !== "all" && f.id !== "latest") map[f.id] = PROJECTS.filter((p) => p.tags.includes(f.id)).length;
		});
		return map;
	}, []);
	const applyFilters = (next) => {
		const sideways = window.innerWidth >= 768 && (horizontal || filterProjects(next).length > 3);
		if (gridRef.current && !prefersReducedMotion() && !sideways) flipState.current = Flip.getState(gridRef.current.children);
		setActiveFilters(next);
	};
	const toggleFilter = (id) => {
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
			duration: .9,
			ease: "expo.out",
			absolute: true,
			stagger: .04,
			onEnter: (elements) => gsapWithCSS.fromTo(elements, {
				autoAlpha: 0,
				y: 48
			}, {
				autoAlpha: 1,
				y: 0,
				duration: .9,
				stagger: .06
			})
		});
	}, [filtered]);
	useGSAP(() => {
		const wrap = wrapRef.current;
		const track = gridRef.current;
		if (!wrap || !track || !horizontal) return;
		const mm = gsapWithCSS.matchMedia();
		mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
			wrap.dataset.pinned = "true";
			const distance = () => Math.max(0, track.scrollWidth - wrap.clientWidth);
			gsapWithCSS.to(track, {
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
					}
				}
			});
			return () => {
				delete wrap.dataset.pinned;
				if (barRef.current) barRef.current.style.scale = "0 1";
			};
		});
		return () => mm.revert();
	}, {
		scope,
		dependencies: [horizontal, filtered.length],
		revertOnUpdate: true
	});
	const openProject = openTitle ? PROJECTS.find((p) => p.title === openTitle) : void 0;
	(0, import_react.useEffect)(() => {
		if (openTitle || photoTitle) stopScroll();
		else startScroll();
		return () => startScroll();
	}, [openTitle, photoTitle]);
	const step = (0, import_react.useCallback)((direction) => {
		const list = filtered.length > 0 ? filtered : PROJECTS;
		setOpenTitle((current) => {
			return list[(list.findIndex((p) => p.title === current) + direction + list.length) % list.length].title;
		});
	}, [filtered]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: scope,
		id: "projects",
		className: "relative scroll-mt-20 bg-bone py-24 text-ink md:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gutter",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-6 border-b border-ink/20 pb-5",
						"data-reveal": "fade",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "03 Projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-stone-deep",
							children: [PROJECTS.length, " runs logged"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-wide text-[clamp(2.6rem,9vw,10.5rem)] font-semibold uppercase leading-[0.84] tracking-[-0.05em] md:col-span-8",
							"data-reveal": "words",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Run" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
									text: "log",
									className: "font-serif text-[1.05em] font-normal normal-case italic tracking-[-0.03em]"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-base leading-relaxed text-stone-deep md:col-span-4",
							"data-reveal": "fade",
							children: "Production systems, research, and competition wins. Every run keeps its full write-up; open one for a bigger look."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex flex-wrap gap-2 md:mt-16",
						role: "group",
						"aria-label": "Filter projects",
						"data-reveal": "fade",
						children: PROJECT_FILTERS.map((filter) => {
							const active = filter.id === "all" ? activeFilters.length === 0 : filter.id === "latest" ? activeFilters.includes("latest") : activeFilters.includes(filter.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toggleFilter(filter.id),
								"aria-pressed": active,
								className: cn("eyebrow flex items-center gap-2 border px-3.5 py-2.5 transition-colors duration-500", active ? "border-ink bg-ink text-bone" : "border-ink/25 hover:border-ink"),
								children: [filter.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("tabular-nums", active ? "text-flare" : "text-stone-deep"),
									children: String(counts[filter.id] ?? 0).padStart(2, "0")
								})]
							}, filter.id);
						})
					}),
					filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-12 text-stone-deep",
						children: "No runs match every selected filter. Try removing one."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: wrapRef,
				className: cn("relative mt-12", horizontal && "md:mt-0 md:flex md:h-[100svh] md:items-center md:overflow-x-auto md:pb-16 md:pt-20 md:data-[pinned=true]:overflow-x-clip"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: gridRef,
					className: cn("gutter grid gap-y-16", horizontal ? "md:flex md:w-max md:gap-8" : "gap-x-8 md:grid-cols-2 xl:grid-cols-3"),
					children: filtered.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						project,
						horizontal,
						onOpen: setOpenTitle,
						onPhoto: setPhotoTitle
					}, project.title))
				}), horizontal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gutter pointer-events-none absolute inset-x-0 bottom-8 hidden items-center gap-5 md:flex",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow text-stone-deep",
						children: [
							"Scroll → ",
							filtered.length,
							" runs"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative h-px flex-1 bg-ink/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: barRef,
							className: "absolute inset-0 origin-left scale-x-0 bg-flare"
						})
					})]
				})]
			}),
			openProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
				project: openProject,
				onClose: () => setOpenTitle(null),
				onStep: step,
				onPhoto: setPhotoTitle
			}),
			photoTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				title: photoTitle,
				onClose: () => setPhotoTitle(null)
			})
		]
	});
}
function Education() {
	const scope = (0, import_react.useRef)(null);
	useReveal(scope);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: scope,
		id: "education",
		className: "relative scroll-mt-20 bg-ink py-24 text-bone md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gutter",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-6 border-b border-bone/15 pb-5",
				"data-reveal": "fade",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "04 Education"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-stone",
					children: EDUCATION.period
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-stone",
							"data-reveal": "fade",
							children: "Cumulative GPA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-wide text-[clamp(5rem,14vw,12.5rem)] font-semibold leading-[0.78] tracking-[-0.06em] text-flare",
							"data-reveal": "words",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: EDUCATION.gpa })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-8 text-bone/80",
							"data-reveal": "fade",
							children: EDUCATION.honors
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-5",
							"data-reveal": "fade",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex size-20 shrink-0 items-center justify-center bg-bone p-3 md:size-24",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: media.ucsd,
									alt: "UC San Diego logo",
									className: "size-full object-contain"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewfinder, {
									size: "sm",
									className: "inset-1.5 text-ink/40"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-wide text-[clamp(1.5rem,3vw,3rem)] font-semibold uppercase leading-[0.98] tracking-[-0.04em]",
									children: EDUCATION.school
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-serif text-[clamp(1.2rem,1.8vw,1.8rem)] italic leading-tight text-bone/80",
									children: EDUCATION.degree
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow mt-3 flex items-center gap-1.5 text-stone",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }), EDUCATION.location]
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 flex flex-wrap gap-2",
							"data-reveal": "fade",
							children: EDUCATION.badges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "eyebrow border border-flare/60 px-3 py-2 text-flare",
								children: badge
							}, badge))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-12 space-y-8 border-t border-bone/15 pt-8",
							"data-reveal": "stagger",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-stone",
								children: "Relevant coursework"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-3 max-w-2xl text-base leading-relaxed text-bone/80",
								children: EDUCATION.coursework
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-stone",
								children: "Clubs"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-3 flex flex-wrap gap-2",
								children: EDUCATION.clubs.map((club) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow border border-bone/25 px-3 py-2 text-bone",
									children: club
								}, club))
							})] })]
						})
					]
				})]
			})]
		})
	});
}
var allSkills = SKILLS.flatMap((group) => group.items);
var rowA = allSkills.filter((_, index) => index % 2 === 0);
var rowB = allSkills.filter((_, index) => index % 2 === 1);
var CYCLE_MS = 5500;
var pad = (value) => String(value).padStart(2, "0");
function Strip({ items, reverse, outline }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
		duration: reverse ? 95 : 110,
		reverse,
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: outline ? "flex items-center whitespace-nowrap px-6 font-wide text-[clamp(2rem,5vw,5rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_var(--ink)]" : "flex items-center whitespace-nowrap px-6 font-wide text-[clamp(2rem,5vw,5rem)] font-semibold uppercase leading-none tracking-[-0.04em]",
			children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-12 font-serif text-[0.6em] font-normal normal-case italic text-flare",
				children: "/"
			})]
		}, item))
	});
}
function Skills() {
	const scope = (0, import_react.useRef)(null);
	const explorerRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(0);
	const [inView, setInView] = (0, import_react.useState)(false);
	const [hovering, setHovering] = (0, import_react.useState)(false);
	const [manual, setManual] = (0, import_react.useState)(false);
	useReveal(scope);
	(0, import_react.useEffect)(() => {
		const el = explorerRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .35 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	const cycling = inView && !manual && !prefersReducedMotion();
	const choose = (index) => {
		setActive(index);
		setManual(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: scope,
		id: "skills",
		className: "relative scroll-mt-20 overflow-hidden bg-bone py-24 text-ink md:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gutter",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-6 border-b border-ink/20 pb-5",
					"data-reveal": "fade",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "05 Skills"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-stone-deep",
						children: [allSkills.length, " tools in the kit"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-10 font-wide text-[clamp(2.4rem,8.6vw,10rem)] font-semibold uppercase leading-[0.84] tracking-[-0.05em] md:mt-14",
					"data-reveal": "words",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Technical" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
							text: "stack",
							className: "font-serif text-[1.05em] font-normal normal-case italic tracking-[-0.03em]"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 space-y-4 md:mt-24",
				"data-reveal": "fade",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strip, { items: rowA }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strip, {
					items: rowB,
					reverse: true,
					outline: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: explorerRef,
				className: "gutter mt-20 grid gap-10 md:mt-28 lg:grid-cols-12 lg:gap-8",
				onMouseEnter: () => setHovering(true),
				onMouseLeave: () => setHovering(false),
				"data-reveal": "fade",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "tablist",
					"aria-label": "Skill categories",
					"aria-orientation": "vertical",
					className: "lg:col-span-5",
					children: SKILLS.map((group, index) => {
						const selected = index === active;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "tab",
							id: `skills-tab-${index}`,
							"aria-selected": selected,
							"aria-controls": `skills-panel-${index}`,
							onMouseEnter: () => window.matchMedia("(hover: hover)").matches && choose(index),
							onFocus: () => setActive(index),
							onClick: () => choose(index),
							className: "group/tab relative block w-full border-t border-ink/20 py-5 text-left last:border-b md:py-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-baseline gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("eyebrow w-8 shrink-0 transition-colors duration-500", selected ? "text-flare" : "text-stone-deep"),
										children: pad(index + 1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("font-wide text-[clamp(1.2rem,2.1vw,2.1rem)] font-semibold uppercase leading-[1.04] tracking-[-0.04em] transition-[color,transform] duration-700 ease-expo", selected ? "translate-x-3 text-ink" : "text-ink/35 group-hover/tab:text-ink/70"),
										children: group.group
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("eyebrow ml-auto shrink-0 tabular-nums transition-colors duration-500", selected ? "text-ink" : "text-stone-deep"),
										children: pad(group.items.length)
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-x-0 bottom-[-1px] h-px overflow-hidden",
								"aria-hidden": "true",
								children: selected && (cycling ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									onAnimationEnd: () => setActive((current) => (current + 1) % SKILLS.length),
									className: "block size-full origin-left bg-flare",
									style: {
										animation: `vv-fill ${CYCLE_MS}ms linear forwards`,
										animationPlayState: hovering ? "paused" : "running"
									}
								}, `${index}-${cycling}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block size-full bg-flare" }))
							})]
						}, group.group);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "frame-grid relative isolate overflow-hidden border border-bone/10 bg-ink p-6 text-bone md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_80%_110%,rgba(212,107,255,0.22),transparent_70%)]",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewfinder, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "scan-line pointer-events-none absolute inset-x-0 top-0 h-px bg-flare/80 shadow-[0_0_12px_2px_rgba(212,107,255,0.5)]",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eyebrow flex items-center justify-between text-[0.6rem] text-bone/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecLabel, {
									label: `Set ${pad(active + 1)} / ${pad(SKILLS.length)}`,
									live: cycling
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cycling ? "Auto" : "Manual" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid",
								children: SKILLS.map((group, index) => {
									const selected = index === active;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										role: "tabpanel",
										id: `skills-panel-${index}`,
										"aria-labelledby": `skills-tab-${index}`,
										"aria-hidden": !selected,
										inert: !selected,
										className: cn("col-start-1 row-start-1 transition-opacity duration-500", selected ? "opacity-100" : "pointer-events-none opacity-0"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-end justify-between gap-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: cn("font-serif text-[clamp(2rem,4vw,4rem)] italic leading-[0.95] tracking-[-0.02em] transition-[opacity,transform] duration-700 ease-expo", selected ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"),
												children: group.group
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("font-wide text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-flare tabular-nums transition-[opacity,transform] duration-700 ease-expo", selected ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"),
												children: pad(group.items.length)
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-8 flex flex-wrap gap-2 [&:hover>li:not(:hover)]:opacity-35",
											children: group.items.map((item, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: cn("eyebrow cursor-default border border-bone/20 px-3 py-2 text-[0.68rem] text-bone/90 transition-[opacity,translate,color,background-color,border-color] duration-500 ease-expo hover:-translate-y-0.5 hover:border-flare! hover:bg-flare! hover:text-ink!", selected && "animate-[vv-chip-in_700ms_cubic-bezier(0.19,1,0.22,1)_backwards]"),
												style: selected ? { animationDelay: `${120 + itemIndex * 28}ms` } : void 0,
												children: item
											}, item))
										})]
									}, group.group);
								})
							})
						]
					})
				})]
			})
		]
	});
}
/** Pulls its child gently toward the pointer, then springs back. Mouse only. */
function Magnetic({ children, className, strength = .32 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const element = ref.current;
		if (!element || !isFinePointer() || prefersReducedMotion()) return;
		const moveX = gsapWithCSS.quickTo(element, "x", {
			duration: .8,
			ease: "elastic.out(1, 0.4)"
		});
		const moveY = gsapWithCSS.quickTo(element, "y", {
			duration: .8,
			ease: "elastic.out(1, 0.4)"
		});
		const handleMove = (event) => {
			const rect = element.getBoundingClientRect();
			moveX((event.clientX - (rect.left + rect.width / 2)) * strength);
			moveY((event.clientY - (rect.top + rect.height / 2)) * strength);
		};
		const handleLeave = () => {
			moveX(0);
			moveY(0);
		};
		element.addEventListener("pointermove", handleMove);
		element.addEventListener("pointerleave", handleLeave);
		return () => {
			element.removeEventListener("pointermove", handleMove);
			element.removeEventListener("pointerleave", handleLeave);
		};
	}, [strength]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("inline-block will-change-transform", className),
		children
	});
}
function LaJollaClock() {
	const [time, setTime] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const format = () => new Intl.DateTimeFormat("en-US", {
			timeZone: "America/Los_Angeles",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
			timeZoneName: "short"
		}).format(/* @__PURE__ */ new Date());
		setTime(format());
		const id = window.setInterval(() => setTime(format()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "tabular-nums",
		children: time || "--:--:--"
	});
}
var fieldClass = "w-full border-0 border-b border-bone/25 bg-transparent py-3 text-base text-bone outline-none transition-colors duration-500 placeholder:text-stone focus:border-flare";
function Contact() {
	const scope = (0, import_react.useRef)(null);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(false);
	useReveal(scope);
	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		setError(false);
		const form = event.currentTarget;
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
		ref: scope,
		id: "contact",
		className: "relative scroll-mt-20 overflow-hidden bg-ink pt-24 text-bone md:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-1/2 top-[18%] size-[90vw] -translate-x-1/2 md:size-[55vw]",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bloom bloom-breathe size-full opacity-[0.16]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gutter relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-6 border-b border-bone/15 pb-5",
						"data-reveal": "fade",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "06 Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecLabel, {
							label: "Open to AI engineering roles",
							className: "text-stone"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-10 font-wide text-[clamp(2.4rem,9.6vw,11.5rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em] md:mt-14",
						"data-reveal": "words",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "Let's build" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, {
								text: "something",
								className: "font-serif text-[1.05em] font-normal normal-case italic tracking-[-0.03em]"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitWords, { text: "that ships." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-lg text-lead text-bone/75",
						"data-reveal": "fade",
						children: "Open to AI engineering roles, research collaboration, and ambitious projects."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5",
							"data-reveal": "stagger",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${LINKS.email}`,
									className: "group flex items-center justify-between gap-4 border-t border-bone/15 py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow block text-stone",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-wide text-[clamp(1rem,1.6vw,1.5rem)] font-semibold tracking-[-0.03em]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "link-underline",
											children: LINKS.email
										})
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: LINKS.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "group flex items-center justify-between gap-4 border-t border-bone/15 py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow block text-stone",
										children: "LinkedIn"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-wide text-[clamp(1rem,1.6vw,1.5rem)] font-semibold tracking-[-0.03em]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "link-underline",
											children: "in/vedantvardhaan"
										})
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: LINKS.github,
									target: "_blank",
									rel: "noreferrer",
									className: "group flex items-center justify-between gap-4 border-y border-bone/15 py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow block text-stone",
										children: "GitHub"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-wide text-[clamp(1rem,1.6vw,1.5rem)] font-semibold tracking-[-0.03em]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "link-underline",
											children: "VedVar43789"
										})
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-stone",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "La Jolla, California" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-bone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaJollaClock, {})
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "flex flex-col gap-7 lg:col-span-6 lg:col-start-7",
							"data-reveal": "fade",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow text-stone",
										children: "Your name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "name",
										autoComplete: "name",
										placeholder: "Ada Lovelace",
										className: fieldClass
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow text-stone",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "email",
										type: "email",
										autoComplete: "email",
										placeholder: "ada@example.com",
										className: fieldClass
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow text-stone",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										name: "message",
										rows: 4,
										placeholder: "Tell me about the role, project or idea.",
										className: `${fieldClass} resize-none`
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: loading,
										className: "eyebrow group flex items-center gap-3 rounded-full bg-flare px-7 py-4 text-ink transition-transform duration-500 ease-expo hover:scale-[1.04] disabled:opacity-60",
										children: [loading ? "Sending..." : sent ? "Thanks, I'll reply soon." : "Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										role: "status",
										className: "eyebrow text-stone",
										children: [sent && "Thank you! Your message has been sent successfully.", error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-destructive",
											children: "Something went wrong. Please try again."
										})]
									})]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative mt-28 border-t border-bone/15 md:mt-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
						duration: 60,
						className: "border-b border-bone/15 py-6",
						children: Array.from({ length: 4 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center whitespace-nowrap px-8 font-wide text-[clamp(2.4rem,7vw,7rem)] font-semibold uppercase leading-none tracking-[-0.05em]",
							children: ["Vedant Vardhaan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-8 font-serif text-[0.7em] font-normal normal-case italic tracking-normal text-flare",
								children: "AI Engineer"
							})]
						}, index))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Vedant Vardhaan, AI Engineer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gutter relative flex flex-wrap items-end justify-between gap-6 py-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-stone",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Vedant Vardhaan."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "eyebrow link-underline py-1",
							children: "Back to top ↑"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute bottom-0 right-[clamp(10rem,18vw,20rem)] hidden h-36 w-40 overflow-hidden md:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
							className: "pointer-events-auto",
							strength: .12,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: media.hero,
								alt: "",
								"aria-hidden": "true",
								className: "w-40 max-w-none",
								loading: "lazy"
							})
						})
					})
				]
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-x-clip bg-ink text-bone",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		]
	});
}
//#endregion
export { Index as component };
