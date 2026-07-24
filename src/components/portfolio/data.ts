export const LINKS = {
  github: "https://github.com/VedVar43789",
  linkedin: "https://www.linkedin.com/in/vedantvardhaan/",
  email: "vvardhaan@ucsd.edu",
  resumeSWE: "/assets/Vedant_Vardhaan_SWE-2.pdf",
  resumeAIML: "/assets/Vedant_Vardhaan_AI_ML_Engineer-2.pdf",
  formspree: "https://formspree.io/f/xgvkjvro",
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const ABOUT = {
  primary:
    "I am a Data Science student at UC San Diego with a passion for machine learning, AI, and software development. My goal is to create meaningful solutions that leverage data to solve complex problems.",
  secondary:
    "Experience spans TensorFlow, Scikit-learn, NLP, generative AI, agentic AI, MCP-based workflows, and end-to-end full-stack delivery with React/Node. I regularly use Claude Code and Cursor for high-velocity AI engineering, and ship analytics/ML systems with cloud tooling including AWS, GCP, and Tableau-driven reporting.",
};

export const EDUCATION = {
  degree: "B.S. Data Science (Minor: Finance)",
  school: "University of California, San Diego",
  location: "La Jolla, California",
  period: "Expected June 2027",
  gpa: "3.96",
  badges: ["Major: Data Science", "Minor: Finance", "Senior Standing"],
  honors: "Honors: Provost Honors (all quarters to date)",
  coursework:
    "Data Structures & Algorithms, Statistical Methods, Linear Algebra, Calculus for Science & Engineering, Introduction to Data Science, Managing Diverse Teams, Statistical Analysis, Data Visualization, Probabilistic Modeling, Machine Learning",
  clubs: ["DS3", "CSES", "Engineers for Exploration (E4E)"],
};

export type ExperienceGroupId = "industry" | "research" | "campus";

export const EXPERIENCE_GROUPS: { id: ExperienceGroupId; label: string; blurb: string }[] = [
  {
    id: "industry",
    label: "Industry Experience",
    blurb: "Internships and full-time-style engineering roles.",
  },
  {
    id: "research",
    label: "Research",
    blurb: "Applied AI, ML, and computer vision research across labs and institutions.",
  },
  {
    id: "campus",
    label: "Campus Leadership",
    blurb: "Student organizations, teaching, and quant/trading clubs at UCSD.",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  meta?: string;
  description: string;
  tags?: string[];
  featured?: boolean;
  group: ExperienceGroupId;
  sortKey: number;
  progression?: {
    role: string;
    period: string;
    current?: boolean;
  }[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Technology Consultant Intern, AI Engineering",
    company: "PricewaterhouseCoopers LLP (PwC)",
    period: "Jun 2025 - Sep 2025",
    location: "Gurugram, India",
    featured: true,
    group: "industry",
    sortKey: 100,
    description:
      "Built an agentic AI chatbot for natural language AWS/Azure/GCP onboarding across 15+ cloud services. Designed multi-agent orchestration with LangGraph, Gemini 2.5 Pro, and LangChain, cutting manual configuration time by 60%. Implemented secure credential management, automated baseline security with Azure Key Vault, and Tableau-ready reporting outputs for stakeholder visibility.",
    tags: ["LangGraph", "Gemini 2.5 Pro", "Agentic AI", "Generative AI", "AWS", "Azure", "GCP", "Tableau"],
  },
  {
    role: "Chief Technology Officer & Full Stack Engineer",
    company: "UniCircle",
    period: "May 2026 - Present",
    location: "San Diego, CA",
    featured: true,
    group: "industry",
    sortKey: 90,
    description:
      "Own all technical architecture and infrastructure for unicircle.app (React/TypeScript, Supabase, Vercel). Designed a FERPA/CCPA-compliant backend with Supabase Edge Functions and PostgreSQL. Lead engineering contributors, code review, CI/CD, and the technical roadmap with the CEO.",
    tags: ["React", "TypeScript", "Supabase", "Vercel"],
  },
  {
    role: "Applied AI Research Assistant",
    company: "UCSD CSE (STSLab)",
    period: "Nov 2025 - Present",
    location: "San Diego, CA",
    group: "research",
    sortKey: 100,
    description:
      "Research with Prof. Deepak Kumar (UCSD) and Prof. Jeremy D. Foote (Purdue) on chatbot-driven interventions and Reddit user behavior. Co-authoring a paper on whether AI-mediated conversations can reduce toxic discourse at scale. Built data pipelines and evaluation workflows for generative AI and agentic AI research, including MCP-based tooling and model analysis.",
    tags: ["LLMs", "Applied ML", "Generative AI", "Agentic AI", "MCP"],
  },
  {
    role: "Undergraduate Researcher (Project Lead)",
    company: "Engineers for Exploration (E4E)",
    period: "Oct 2025 - Apr 2026",
    location: "San Diego, CA",
    group: "research",
    sortKey: 90,
    description:
      "Lead an interdisciplinary team building an AI system that predicts mangrove presence by fusing drone imagery and Sentinel-2 satellite data for Scripps Institution of Oceanography. Oversee data pipelines, feature fusion, and model integration with Python, TensorFlow, NumPy, and Google Earth Engine.",
    tags: ["TensorFlow", "Google Earth Engine", "Sentinel-2"],
  },
  {
    role: "ML Research Intern",
    company: "IIT Guwahati",
    period: "Jun 2024 - Sep 2024",
    location: "Assam, India",
    group: "research",
    sortKey: 70,
    description:
      "Developed a ResNet50 CNN for SAR image classification achieving 80% accuracy across land cover types. Applied Lee and Gamma MAP speckle filters. Evaluated with precision, recall, F1-scores, and confusion matrices.",
    tags: ["PyTorch", "SAR", "CNN", "ResNet50"],
  },
  {
    role: "President",
    company: "CSES Open Source, TritonSpend",
    period: "Jun 2026 - Present",
    location: "San Diego, CA",
    featured: true,
    group: "campus",
    sortKey: 100,
    description:
      "Lead CSES Open Source strategy, org-wide engineering initiatives, and cross-team execution while continuing to drive TritonSpend product direction and delivery.",
    tags: ["Leadership", "React Native", "Node.js", "PostgreSQL"],
    progression: [
      { role: "Software Developer", period: "Nov 2024 - Jul 2025" },
      { role: "Engineering Manager", period: "Jul 2025 - Jun 2026" },
      { role: "President", period: "Jun 2026 - Present", current: true },
    ],
  },
  {
    role: "Assistant Projects Director (Projects Mentor)",
    company: "DS3, Data Science Student Society",
    period: "Jul 2025 - Present",
    location: "San Diego, CA",
    group: "campus",
    sortKey: 90,
    description:
      "Lead ideation and selection of 10-12+ quarterly data science projects. Mentor teams through full data pipelines, including preprocessing, feature engineering, model selection, and deployment. Coordinate timelines and evaluation metrics with senior leadership for end-of-quarter showcases.",
    tags: ["Leadership", "Data Science"],
  },
  {
    role: "Tutor / Instructional Assistant",
    company: "Halicioglu Data Science Institute, UCSD",
    period: "Mar 2025 - Jun 2025",
    location: "San Diego, CA",
    group: "campus",
    sortKey: 80,
    description:
      "Conducted weekly discussion sections and office hours for DSC 40A covering empirical risk minimization, optimization, regression, classification, and discrete probability. Evaluated assignments and exams with structured feedback.",
    tags: ["Machine Learning", "Teaching"],
  },
  {
    role: "Quantitative Analyst",
    company: "Triton Quantitative Trading (TQT)",
    period: "Oct 2024 - Jan 2025",
    location: "San Diego, CA",
    group: "campus",
    sortKey: 70,
    description:
      "Built a hybrid LSTM/GRU forecasting model with Monte Carlo simulations (Geometric Brownian Motion). Integrated technical indicators, VADER sentiment analysis, and Sharpe Ratio risk metrics. Deployed as a modular Streamlit app with yFinance and REST API support.",
    tags: ["LSTM", "GRU", "Streamlit", "Monte Carlo"],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  period?: string;
  tags: string[];
  sortKey: number;
};

export const PROJECT_FILTERS = [
  { id: "latest", label: "Latest" },
  { id: "all", label: "All" },
  { id: "ml", label: "ML/AI" },
  { id: "cv", label: "Computer Vision" },
  { id: "nlp", label: "NLP/RAG" },
  { id: "streamlit", label: "Streamlit" },
  { id: "dataviz", label: "Data Viz" },
  { id: "timeseries", label: "Time Series" },
  { id: "recsys", label: "Recommenders" },
  { id: "api", label: "APIs" },
  { id: "backend", label: "Backend/DB" },
];

const PROJECTS_RAW: Project[] = [
  {
    title: "TumorSense",
    period: "Spring 2026",
    description:
      "Built an end-to-end breast tumor classification system combining WDBC SVMs and IDC image models (CNN/ViT) with FastAPI inference, explainability modules, and production deployment. Achieved 98% malignant recall, 98% precision, and 0.995 ROC-AUC.",
    stack: ["Next.js", "TypeScript", "FastAPI", "scikit-learn", "PyTorch", "Hugging Face"],
    github: "https://github.com/nathaniel-trueba/TumorSense",
    demo: "https://tumorsense-n70xj8pny-ntrueba-5031s-projects.vercel.app/#developers",
    tags: ["ml", "cv", "nlp", "api", "backend", "dataviz"],
    sortKey: 202606,
  },
  {
    title: "Math Reasoning (Qwen3-4B-Thinking)",
    period: "May 2026",
    description:
      "Reproduced the official CSE 151B Math Reasoning judger and improved Qwen3-4B-Thinking-2507 with inference-time methods (judger-aligned prompt builder, two-phase MC strategy, and no-box retry), finishing 23rd public (0.720) and 19th private (0.634) without changing base weights.",
    stack: ["Python", "Prompt Engineering", "LLM Evaluation", "Inference-Time Optimization"],
    github: "https://github.com/ChinmayB1/Optimizing-Qwen3-4B-for-Maths",
    tags: ["ml", "nlp"],
    sortKey: 202605,
  },
  {
    title: "Invasive Species Tracker",
    period: "Jan 2026 - Mar 2026",
    description:
      "Mentored full-stack environmental intelligence platform predicting invasive plant species risk. Combined map-based scanning with a hybrid ML risk engine (climate similarity, aggression traits, invasion history). Won DS3 showcase recognition.",
    stack: ["React", "Mapbox", "FastAPI", "FAISS", "Open-Meteo", "GBIF"],
    github: "https://github.com/VedVar43789/InvasiveSpeciesTracker",
    demo: "https://invasive-watch.vercel.app",
    tags: ["ml", "dataviz", "api", "backend"],
    sortKey: 202603,
  },
  {
    title: "SoCal-Guessr",
    period: "Feb 2026",
    description:
      "Fine-tuned ImageNet-pretrained ResNet18 with a 6-class head to predict Southern California cities from street photos. End-to-end training workflow with checkpointing and deployable inference.",
    stack: ["Python", "PyTorch", "ResNet18", "Computer Vision"],
    github: "https://github.com/VedVar43789/SoCal-Guessr",
    tags: ["ml", "cv"],
    sortKey: 202602,
  },
  {
    title: "Reinforcement Learning Poker Bot",
    period: "Nov 2025 - Dec 2025",
    description:
      "Implemented MCCFR (95.3% win rate), DQN, and NFSP v2 for Texas Hold'em. Built evaluation framework with confidence intervals and BB/100 metrics. GPU-accelerated training with TensorFlow/PyTorch and RLCard.",
    stack: ["Python", "TensorFlow", "PyTorch", "MCCFR", "DQN", "NFSP"],
    github: "https://github.com/ChinmayB1/RL-Poker-Bot/tree/main",
    tags: ["ml"],
    sortKey: 202512,
  },
  {
    title: "Steam Game Recommendation System",
    period: "Nov 2025 - Dec 2025",
    description:
      "92.79% AUC-ROC and 95.17% precision combining statistical features, user encoding, and SBERT embeddings, a 20.9% improvement over baseline. 85.32% AUC-ROC for cold-start users.",
    stack: ["Python", "SBERT", "Logistic Regression", "NLP"],
    github: "https://github.com/VedVar43789/Steam-Game-Recommendation-System",
    tags: ["ml", "recsys", "nlp"],
    sortKey: 202512,
  },
  {
    title: "PantryPal, Smart Recipe Recommender",
    period: "Oct 2025 - Dec 2025",
    description:
      "Streamlit app suggesting recipes from text or pantry photos via EfficientNetB0 ingredient detection, fuzzy matching, and nutrition-aware ranking. Won Best Project at DS3 Fall 2025 showcase.",
    stack: ["Python", "PyTorch", "EfficientNetB0", "OpenCV", "Streamlit"],
    github: "https://github.com/VedVar43789/PantryPal",
    demo: "https://pantrypalucsd.streamlit.app/",
    tags: ["ml", "cv", "streamlit", "recsys", "api"],
    sortKey: 202512,
  },
  {
    title: "TubeScope, Trending Lifecycle Analytics",
    period: "Oct 2025 - Dec 2025",
    description:
      "ML dashboard predicting sustained YouTube virality with Random Forest and Kaplan-Meier survival curves. Automated daily YouTube Data API pulls. 3rd place at DS3 Fall 2025 showcase.",
    stack: ["Python", "scikit-learn", "YouTube Data API", "Streamlit", "lifelines"],
    github: "https://github.com/VedVar43789/TubeScope",
    demo: "https://tubescopeds3.streamlit.app/",
    tags: ["ml", "streamlit", "dataviz", "timeseries", "api"],
    sortKey: 202512,
  },
  {
    title: "The Seismic Lottery",
    period: "May 2025 - Jun 2025",
    description:
      "Interactive D3.js earthquake visualization exploring how infrastructure resilience shapes outcomes. Won Best Project & People's Choice among 42 teams in DSC 106.",
    stack: ["JavaScript", "D3.js", "TopoJSON"],
    github: "https://github.com/VedVar43789/earthquakes",
    demo: "https://vedvar43789.github.io/earthquakes/",
    tags: ["dataviz"],
    sortKey: 202506,
  },
  {
    title: "Watts the Problem?",
    period: "Mar 2025",
    description:
      "Power outage prediction with end-to-end ML pipeline. Optimized Random Forest via GridSearchCV with 74.3% accuracy.",
    stack: ["Python", "Scikit-learn", "Random Forest", "GridSearchCV"],
    github: "https://github.com/VedVar43789/watts-the-problem",
    demo: "https://vedvar43789.github.io/watts-the-problem/",
    tags: ["ml"],
    sortKey: 202503,
  },
  {
    title: "MarketScope: Intelligent Stock Forecasting",
    period: "Oct 2024 - Jan 2025",
    description:
      "Hybrid LSTM/GRU model with Monte Carlo simulations, technical indicators, sentiment analysis, and risk metrics. Modular Streamlit app with yFinance and REST API.",
    stack: ["Python", "LSTM/GRU", "Monte Carlo", "Streamlit"],
    github: "https://github.com/Igosain08/stock-forecast-app",
    tags: ["ml", "timeseries", "streamlit"],
    sortKey: 202501,
  },
  {
    title: "TritonSpend",
    period: "Nov 2024 - May 2026",
    description:
      "Student finance app with 100+ active UCSD users for budgeting, expense tracking, and social spending insights.",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    github: "https://github.com/CSES-Open-Source/TritonSpend",
    demo: "https://tritonspend.netlify.app",
    tags: ["backend", "api"],
    sortKey: 202411,
  },
  {
    title: "Blood Report Analysis Chatbot",
    period: "Oct 2024",
    description:
      "RAG chatbot for medical report analysis using LangChain, ChromaDB, Hugging Face embeddings, and PyPDFLoader with a Streamlit chat UI.",
    stack: ["RAG", "LangChain", "ChromaDB", "Hugging Face", "Streamlit"],
    tags: ["ml", "nlp", "streamlit", "api"],
    sortKey: 202410,
  },
  {
    title: "SAR Image Classification with CNN",
    period: "Jun 2024 - Sep 2024",
    description:
      "ResNet50 CNN for SAR land cover classification at 80% accuracy with Lee and Gamma MAP speckle filtering.",
    stack: ["Python", "TensorFlow", "CNN", "ResNet50"],
    github: "https://github.com/VedVar43789/SAR-Image-Classification",
    tags: ["ml", "cv"],
    sortKey: 202409,
  },
  {
    title: "Advanced Image Processing & KNN",
    period: "Jan 2024 - Mar 2024",
    description:
      "Image processing suite with PIL/NumPy operations and K-Nearest Neighbors classification.",
    stack: ["Python", "NumPy", "PIL", "KNN"],
    tags: ["ml"],
    sortKey: 202403,
  },
  {
    title: "CampusShelf",
    period: "2024",
    description: "Python-Tkinter library management desktop app with MySQL for book lending and tracking.",
    stack: ["Python", "Tkinter", "MySQL"],
    tags: ["backend"],
    sortKey: 202401,
  },
  {
    title: "Song Recommender",
    period: "2024",
    description: "Music recommendation engine using audio features and artist discography similarity matching.",
    stack: ["Python", "ML", "Audio Analysis"],
    tags: ["ml", "recsys"],
    sortKey: 202401,
  },
];

export const PROJECTS = [...PROJECTS_RAW].sort((a, b) => b.sortKey - a.sortKey);

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "R", "SQL", "HTML", "CSS"],
  },
  {
    group: "Cloud & Infrastructure",
    items: ["AWS", "GCP", "EC2", "S3", "RDS", "Azure", "Azure Key Vault", "Docker", "CI/CD", "IAM", "GuardDuty"],
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
      "LLM Fine-tuning",
    ],
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
      "Geospatial Analytics",
    ],
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
      "Git",
    ],
  },
];
