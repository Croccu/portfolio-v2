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
    <main className="min-h-screen pb-24 pt-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back link */}
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          {/* Header */}
          <div className="mb-8 space-y-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground">{project.tagline}</p>
          </div>

          {/* Carousel */}
          <Carousel
            images={project.images}
            alt={project.title}
            className="mb-10"
          />

          {/* Content grid */}
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-lg font-semibold">About this project</h2>
              <p className="leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech stack */}
              <div>
                <h3 className="mb-3 text-sm font-medium">Tech Stack</h3>
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
              <div className="flex flex-col gap-2">
                {project.githubUrl && (
                  <Button asChild variant="outline" className="w-full">
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
                  <Button asChild className="w-full">
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
