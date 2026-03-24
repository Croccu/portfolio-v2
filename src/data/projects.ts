export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  images: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  warning?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "traffic-simulator",
    title: "Traffic Simulator",
    tagline: "Interactive traffic simulation built in Unity",
    description:
      "A traffic simulation game built with Unity and C#. Features realistic vehicle behavior, intersection management, and traffic flow visualization. Designed as a systems-level project exploring game development, physics-based movement, and real-time state management.",
    images: [
      "/images/projects/traffic-simulator/traffic-sim-main.png",
      "/images/projects/traffic-simulator/traffic-sim-demo.png",
      "/images/projects/traffic-simulator/traffic-sim-levels.png",
      "/images/projects/traffic-simulator/traffic-sim-rocca.png",
      "/images/projects/traffic-simulator/traffic-sim-kadriorg.png",
      "/images/projects/traffic-simulator/traffic-sim-mustamae.png",
    ],
    techStack: ["C#", "Unity", "Game Development"],
    githubUrl: "https://github.com/Croccu/traffic-simulator",
    liveUrl: "https://croccu.github.io/traffic-sim-build/",
    warning:
      "This is an outdated build. You may encounter bugs, visual glitches, or unexpected behaviour during gameplay.",
    featured: true,
  },
  {
    slug: "mrz-validator",
    title: "MRZ Validator",
    tagline: "Web tool for validating machine-readable zone codes",
    description:
      "A lightweight web tool that validates MRZ (Machine Readable Zone) codes from identity documents. Performs check digit verification and field parsing according to ICAO 9303 standards. Built to streamline document verification workflows — directly inspired by my own work in KYC.",
    images: ["/images/projects/mrz-validator/mrz_validator.png"],
    techStack: ["Python", "Flask", "HTML/CSS"],
    githubUrl: "https://github.com/Croccu/mrz-validator",
    featured: true,
  },
  {
    slug: "nutikas-ostukorv",
    title: "Nutikas Ostukorv",
    tagline: "Smart grocery price comparison and shopping lists",
    description:
      "A full-stack grocery comparison app that lets users search products, compare prices across different store chains, and build exportable shopping lists. Built as a team project at Tallinn University using Next.js, Supabase, and a Python-based API layer.",
    images: [
      "/images/projects/nutikas-ostukorv/ostukorv_main.png",
      "/images/projects/nutikas-ostukorv/ostukorv_product-card.png",
      "/images/projects/nutikas-ostukorv/ostukorv_category.png",
      "/images/projects/nutikas-ostukorv/ostukorv_stores.png",
      "/images/projects/nutikas-ostukorv/ostukorv_stores:cart.png",
      "/images/projects/nutikas-ostukorv/ostukorv_cart-details.png",
    ],
    techStack: ["TypeScript", "Next.js", "Python", "Supabase", "Vercel"],
    githubUrl: "https://github.com/rakenduste-programmeerimine-2025/nutikas-ostukorv",
    liveUrl: "https://nutikas-ostukorv-deploy.vercel.app/",
    warning:
      "The live demo may appear empty or broken. Product data was loaded via local database migrations and is not available on the deployed version.",
    featured: true,
  },
  {
    slug: "color-game",
    title: "Simon Says color game",
    tagline: "Arduino-based memory game with lights and sound",
    description:
      "An interactive Simon Says memory game built with Arduino and C++. The system generates dynamic light and sound sequences using LEDs, buttons, and a buzzer, challenging players to replicate patterns with increasing difficulty.",
    images: ["/images/projects/color-game/color-game.png"],
    techStack: ["Arduino", "C++"],
    githubUrl: "https://github.com/Croccu/simon-says-game",
    featured: true,
  },
  {
    slug: "flashcards-app",
    title: "Flashcards App",
    tagline: "Interactive flashcard tool for exam prep",
    description:
      "A flashcard-based study tool built for Theoretical Informatics exam preparation. A lightweight solution for efficient review and practice accessible on all devices. Informatics concepts are rendered using KaTeX for clear visualization of formulas and equations.",
    images: [
      "/images/projects/flashcards-app/flashcards-home.png",
      "/images/projects/flashcards-app/flashcards-answer.png",
      "/images/projects/flashcards-app/flashcards-stats.png",
    ],
    techStack: ["JavaScript", "React", "CSS", "HTML"],
    githubUrl: "https://github.com/Croccu/flashcards-app",
    liveUrl: "https://croccu.github.io/flashcards-app/",
    featured: true,
  },
  {
    slug: "hinnavaatlus-redesign",
    title: "Hinnavaatlus Forum Redesign",
    tagline: "Modern UI redesign of the Hinnavaatlus forum",
    description:
      "A UI/UX redesign concept for the Hinnavaatlus forum, focused purely on visual design and front-end aesthetics — not a full-stack application. Features a forum home with categories and discussions, category and thread views, light/dark theme support, and responsive layouts. Built as a UI aesthetics course project at Tallinn University.",
    images: [
      "/images/projects/hinnavaatlus/hinnavaatlus-main.png",
      "/images/projects/hinnavaatlus/hinnavaatlus-category.png",
      "/images/projects/hinnavaatlus/hinnavaatlus-topic.png",
    ],
    techStack: ["TypeScript", "React", "Tailwind CSS", "Vite", "shadcn/ui"],
    githubUrl: "https://github.com/Croccu/hinnavaatlus_revamped",
    featured: true,
  },
];
