// Notes:
// - If your experience data is in a separate data file (e.g., lib/data.ts), move this block there instead.
// - Keep structure consistent with existing entries.

const mplExperience = {
  company: "MPL (Mobile Premier League)",
  role: "SDE-3 iOS",
  location: "Bangalore, India",
  period: "June 2025 — Discontinued (Govt. laws)",
  logoSrc: "/public/images/MPLogo.jpeg".replace("/public", ""), // normalize to /images/MPLogo.jpeg
  highlights: [
    "Reduced app launch time by 2s with parallel APIs, E-Tag caching, and launch-time metrics.",
    "Improved responsiveness by fixing threading bugs, eliminating CA hitches, and adopting async/await.",
    "Integrated App Intents & Spotlight Search, indexing games for better discovery and re‑engagement.",
    "Reduced app size by 30 MB with WebP, asset catalogs (1x/2x/3x), and binary/resource pruning.",
    "Added Live Activities & Dynamic Island for real-time match score updates.",
    "Boosted API performance through batching, caching, and prefetching strategies.",
    "Strengthened observability with custom performance dashboards and runtime profiling.",
    "Ensured smooth 60fps gameplay UI while optimizing for energy efficiency and memory.",
  ],
}

// Insert MPL above Walmart by unshifting into the list or rendering first.
// Example pattern if experiences is an array:
const experiences = [mplExperience]
// If experiences is already defined elsewhere, add mplExperience at index 0:
// experiences.unshift(mplExperience)

// In the JSX, ensure logo shows. Example:
// <Image src={exp.logoSrc || "/images/fallback.png"} alt={`${exp.company} logo`} width={40} height={40} className="rounded-sm" />
