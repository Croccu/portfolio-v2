"use client";

import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I've worked and what I've done."
    >
      <div className="relative space-y-0">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/60" />

        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative pl-8 pb-10 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-border bg-background" />

            <div className="space-y-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
