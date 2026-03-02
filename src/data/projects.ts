export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  images: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "traffic-simulator",
    title: "Traffic Simulator",
    tagline: "Interactive traffic simulation built in Unity",
    description:
      "A traffic simulation game built with Unity and C#. Features realistic vehicle behavior, intersection management, and traffic flow visualization. Designed as a systems-level project exploring game development, physics-based movement, and real-time state management.",
    images: ["/images/projects/traffic-simulator-1.jpg"],
    techStack: ["C#", "Unity", "Game Development"],
    githubUrl: "https://github.com/Croccu/traffic-simulator",
    featured: true,
  },
  {
    slug: "mrz-validator",
    title: "MRZ Validator",
    tagline: "Web tool for validating machine-readable zone codes",
    description:
      "A lightweight web tool that validates MRZ (Machine Readable Zone) codes from identity documents. Performs check digit verification and field parsing according to ICAO 9303 standards. Built to streamline document verification workflows — directly inspired by real-world KYC and fraud prevention processes.",
    images: ["/images/projects/mrz-validator-1.jpg"],
    techStack: ["Python", "Flask", "HTML/CSS"],
    githubUrl: "https://github.com/Croccu/mrz-validator",
    featured: true,
  },
  {
    slug: "flashcard-app",
    title: "Flashcard App",
    tagline: "Study tool for exam preparation",
    description:
      "A full-stack flashcard application built with Next.js and Supabase. Supports creating, editing, and reviewing flashcard decks with spaced repetition. Originally built to prepare for Theoretical Informatics exams, deployed and used in production on Vercel.",
    images: ["/images/projects/flashcard-app-1.jpg"],
    techStack: ["TypeScript", "Next.js", "Supabase", "PostgreSQL", "Vercel"],
    githubUrl: "https://github.com/Croccu/flashcard-app",
    liveUrl: "https://flashcard-app-seven-ochre.vercel.app",
    featured: true,
  },
  {
    slug: "hinnavaatlus-revamped",
    title: "Hinnavaatlus Revamped",
    tagline: "Redesigned price comparison UI",
    description:
      "A modern redesign of the Hinnavaatlus price comparison platform, built as a UI/UX aesthetics course project at Tallinn University. Focused on clean typography, responsive layout, and improved information hierarchy compared to the original site.",
    images: ["/images/projects/hinnavaatlus-1.jpg"],
    techStack: ["TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/Croccu/hinnavaatlus_revamped",
    featured: true,
  },
];
