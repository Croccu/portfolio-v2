"use client";

import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section id="about" title="About" subtitle="A bit about me and what I work with.">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="leading-relaxed text-muted-foreground">
            I&apos;m a fraud &amp; risk analyst with practical software
            development experience gained through academic and personal
            projects. Experienced in KYC, transaction monitoring, and building
            internal tools to streamline verification processes.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Passionate about developing automation solutions that simplify
            repetitive tasks and improve operational efficiency. Currently
            studying Computer Science at Tallinn University, having previously
            completed a web development bootcamp at LeWagon.
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-2 text-sm font-medium text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
