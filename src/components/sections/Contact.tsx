"use client";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/layout/Section";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: siteConfig.links.github, icon: Github },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${siteConfig.links.email}`, icon: Mail },
];

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Have a project in mind? Let's talk."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <form
          action={`mailto:${siteConfig.links.email}`}
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              name="name"
              placeholder="Name"
              required
              className="bg-card/50"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="bg-card/50"
            />
          </div>
          <Textarea
            name="message"
            placeholder="Your message..."
            rows={5}
            required
            className="resize-none bg-card/50"
          />
          <Button type="submit" size="lg">
            Send Message
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </form>

        <div className="flex flex-col justify-center space-y-6">
          <p className="leading-relaxed text-muted-foreground">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something great. Feel free to reach out
            through the form or connect with me directly.
          </p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
