"use client";

import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/Section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SkillGroup({ group, groupIndex }: { group: (typeof skills)[number]; groupIndex: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} key={group.category}>
      <h3 className="mb-2 text-sm font-medium text-foreground">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {group.items.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.25,
              delay: groupIndex * 0.05 + i * 0.04,
              ease: "easeOut",
            }}
          >
            <Badge variant="secondary" className="font-normal">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about" title="About" subtitle="A bit about me and what I work with.">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="leading-relaxed text-muted-foreground">
            Combining risk analysis experience with a growing focus on building
            software and leading product-driven initiatives. Working at the
            intersection of operations and technology, I&apos;m increasingly
            drawn to building products from idea to execution. Identifying real problems and developing practical, scalable
            solutions.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Currently studying Computer Science at Tallinn
            University, having previously completed a web development bootcamp
            at LeWagon.
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((group, groupIndex) => (
            <SkillGroup key={group.category} group={group} groupIndex={groupIndex} />
          ))}
        </div>
      </div>
    </Section>
  );
}
