"use client";

import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/Carousel";
import { Container } from "@/components/layout/Container";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="relative flex h-dvh flex-col overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0_0%_15%)_0%,transparent_80%)]" />

      {/* Header */}
      <Container className="max-w-7xl shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back link */}
          <Link
            href="/#projects"
            className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          {/* Header */}
          <div className="mb-4 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground">{project.tagline}</p>
          </div>
        </motion.div>
      </Container>

      {/* Carousel */}
      <div className="relative h-[42vh] md:h-[50vh] lg:h-[55vh]">
        <div className="mx-auto h-full w-full max-w-[90rem] px-6 sm:px-8">
          <Carousel images={project.images} alt={project.title} className="h-full" />
        </div>
      </div>

      {/* Content grid */}
      <Container className="relative z-10 max-w-7xl shrink-0 pt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="mb-2 text-lg font-semibold">About this project</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Tech stack */}
              <div>
                <h3 className="mb-2 text-sm font-medium">Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button asChild variant="outline" className="flex-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild className="flex-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
