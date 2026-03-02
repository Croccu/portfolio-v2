"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/layout/Section";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work I've built and shipped."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects
          .filter((p) => p.featured)
          .map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
      </div>
    </Section>
  );
}
