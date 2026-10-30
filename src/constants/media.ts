import hero from "@/assets/vedant_hero.webp";
import portrait from "@/assets/vedant_ds3.webp";
import geisel from "@/assets/geisel.jpg.webp";
import pantrypalWin from "@/assets/pantrypal_win.webp";
import tubescopeWin from "@/assets/tubescope_win.webp";

import worthyourread from "@/assets/worthyourread.png";
import tumor from "@/assets/tumor.png";
import qwen from "@/assets/qwen.png";
import invasive from "@/assets/invasive.png";
import socal from "@/assets/socal.png";
import rl from "@/assets/rl.png";
import steam from "@/assets/steam.png";
import pantrypal from "@/assets/pantrypal.png";
import tubescope from "@/assets/tubescope.png";
import earth from "@/assets/earth.png";
import outage from "@/assets/outage.png";
import market from "@/assets/market.png";
import tritonspend from "@/assets/tritonspend.png";
import blood from "@/assets/blood.png";
import sar from "@/assets/sar.png";
import knn from "@/assets/knn.png";
import lib from "@/assets/lib.png";
import song from "@/assets/song.png";

import metro from "@/assets/metro.png";
import oaken from "@/assets/oaken.png";
import unicircle from "@/assets/unicircle.png";
import cse from "@/assets/cse.png";
import e4e from "@/assets/e4e.png";
import pwc from "@/assets/pwc-2.png";
import pwcMain from "@/assets/pwc_main.svg.webp";
import ds3 from "@/assets/ds3.png";
import hdsi from "@/assets/hdsi.png";
import cses from "@/assets/cses.png";
import eighth from "@/assets/eighth.png";
import tqt from "@/assets/tqt.png";
import iitg from "@/assets/IITG_logo.png";
import ucsd from "@/assets/ucsd.png";

export const media = { hero, portrait, geisel, ucsd };

export const projectCovers: Record<string, string> = {
  "Worth Your Read": worthyourread,
  TumorSense: tumor,
  "Math Reasoning (Qwen3-4B-Thinking)": qwen,
  "Invasive Species Tracker": invasive,
  "SoCal-Guessr": socal,
  "Reinforcement Learning Poker Bot": rl,
  "Steam Game Recommendation System": steam,
  "PantryPal, Smart Recipe Recommender": pantrypal,
  "TubeScope, Trending Lifecycle Analytics": tubescope,
  "The Seismic Lottery": earth,
  "Watts the Problem?": outage,
  "MarketScope: Intelligent Stock Forecasting": market,
  TritonSpend: tritonspend,
  "Blood Report Analysis Chatbot": blood,
  "SAR Image Classification with CNN": sar,
  "Advanced Image Processing & KNN": knn,
  CampusShelf: lib,
  "Song Recommender": song,
};

export const experienceLogos: Record<string, string> = {
  "Metro Infrasys": metro,
  Oaken: oaken,
  UniCircle: unicircle,
  "UCSD CSE (STSLab)": cse,
  "Engineers for Exploration (E4E)": e4e,
  "PricewaterhouseCoopers LLP (PwC)": pwcMain,
  "DS3, Data Science Student Society": ds3,
  "Halicioglu Data Science Institute, UCSD": hdsi,
  "CSES Open Source, TritonSpend": cses,
  "UCSD Eighth College": eighth,
  "Triton Quantitative Trading (TQT)": tqt,
  "IIT Guwahati": iitg,
};

/** Hero logo cluster, in display order. */
export const orgLogos: { src: string; alt: string }[] = [
  { src: pwc, alt: "PwC" },
  { src: ucsd, alt: "UC San Diego" },
  { src: iitg, alt: "IIT Guwahati" },
  { src: ds3, alt: "DS3" },
  { src: e4e, alt: "Engineers for Exploration" },
  { src: cses, alt: "CSES" },
];

/** Wins taken verbatim from each project's own description. A photo makes the stamp clickable. */
export const projectAwards: Record<string, { label: string; photo?: string; photoAlt?: string }> = {
  "Worth Your Read": { label: "Best Project · Claude Impact Lab" },
  "Invasive Species Tracker": { label: "DS3 Showcase Recognition" },
  "PantryPal, Smart Recipe Recommender": {
    label: "Best Project · DS3 Fall 2025",
    photo: pantrypalWin,
    photoAlt: "The PantryPal team wearing medals at the DS3 Fall 2025 showcase",
  },
  "TubeScope, Trending Lifecycle Analytics": {
    label: "3rd Place · DS3 Fall 2025",
    photo: tubescopeWin,
    photoAlt: "The TubeScope team wearing medals at the DS3 Fall 2025 showcase",
  },
  "The Seismic Lottery": { label: "Best Project & People's Choice · DSC 106" },
};
