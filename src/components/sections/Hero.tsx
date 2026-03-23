"use client";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/topography.svg')] bg-repeat opacity-100" />
        <div className="absolute -left-1/4 -top-1/4 h-150 w-150 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-125 w-125 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="shrink-0"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-primary/20 shadow-xl sm:h-72 sm:w-72">
              <Image
                src="/images/hero/profile.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="288px"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              I build automation tools and web applications that solve real
              problems. Currently studying Computer Science at Tallinn University
              while working in fraud prevention and KYC.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  Contact
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon-lg">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon-lg">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
