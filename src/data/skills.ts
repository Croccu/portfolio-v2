export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Ruby", "JavaScript", "TypeScript", "Java", "SQL", "Python", "C#"],
  },
  {
    category: "Frontend",
    items: ["React", "Vue", "Next.js", "HTML5", "SCSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Ruby on Rails", "Spring Boot", "Node.js"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Supabase", "MySQL", "SQLite"],
  },
  {
    category: "Tools & Other",
    items: ["Git", "Docker", "Postman", "Power BI", "Unity", "Figma"],
  },
];
