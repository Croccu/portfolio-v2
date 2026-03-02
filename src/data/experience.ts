export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
}

export const experience: Experience[] = [
  {
    company: "Coolbet",
    role: "Fraud, Risk & Payments Analyst",
    period: "2024 — Present",
    description:
      "Ensuring compliance with KYC regulations by verifying customer identities against global databases. Created a tool for checking MRZ validity through check digits. Currently developing Python-based tools to improve internal reporting workflows.",
    techStack: ["Fraud Detection", "KYC", "Risk Analysis", "Compliance", "Identity Verification"],
  },
  {
    company: "Monese",
    role: "KYC & Screening Investigator",
    period: "2021 — 2023",
    description:
      "Conducted customer due diligence during onboarding and enhanced due diligence for existing customers. Screened customers against CIFAS, PEP, sanctions and internal watchlists to mitigate onboarding risk. Monitored transactions to detect suspicious activity and prepared AML and sanctions reports.",
    techStack: ["KYC/AML", "Transaction Monitoring", "Risk Analysis"],
  },
  {
    company: "ForPeeps Payments",
    role: "Business Development Manager",
    period: "2020 — 2021",
    description:
      "Managed B2B partnerships and supported company growth initiatives in the fintech sector. Contributed to go-to-market strategy and CRM implementation.",
    techStack: ["Fintech", "B2B", "CRM", "Partnerships"],
  },
  {
    company: "Veriff",
    role: "Verification Specialist",
    period: "2019 — 2020",
    description:
      "Reviewed identity documents and customer-submitted information to verify authenticity and detect potential identity fraud. Contributed to internal projects including market research and data annotation, supporting the development of Veriff's document database.",
    techStack: ["Identity Verification", "Data Annotation", "Fraud Detection"],
  },
];
