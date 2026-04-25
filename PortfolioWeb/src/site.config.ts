/**
 * ────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — single source of truth
 * ────────────────────────────────────────────────────────────────────────────
 *  Edit this file to make the portfolio your own. Every identity, link,
 *  SEO string, nav entry, and content list is read from here.
 *
 *  After cloning:
 *    1. Update `identity`, `contact`, `assets`, and `socials` below.
 *    2. Edit `seo` defaults and `nav` items.
 *    3. Replace `experiences`, `projects`, `hackathons`, `research`.
 *
 *  Runtime-only values (API keys, etc.) still live in `.env.local`.
 * ────────────────────────────────────────────────────────────────────────────
 */

export type SocialPlatform =
  | "twitter"
  | "github"
  | "linkedin"
  | "leetcode"
  | "tryhackme"
  | "codeforces";

export const siteConfig = {
  // ── Identity ──────────────────────────────────────────────────────────────
  identity: {
    name: "Ashiq Ahamed",
    firstName: "Ashiq",
    title: "Computer Science Student",
    tagline: "Aspiring Blockchain developer & Zero-knowledge Engineer",
    bio: "Computer Science student focused on Blockchain, Zero-Knowledge Proofs, cryptography, and privacy-preserving Ethereum systems. Building deep expertise through ZK circuits, protocol design, and real-world security research.",
    intros: [
      "Blockchain Developer",
      "ZKP Engineer",
      "CS Student",
      "Cryptography Enthusiast",
      "Smart Contract Auditor",
    ],
  },

  // ── Contact & URL ─────────────────────────────────────────────────────────
  contact: {
    email: "aashiq121205@gmail.com",
    url: "https://github.com/AshiqAhamed17",
    calUrl: "",
    resumeUrl: "/Resume0.pdf",
  },

  // ── Assets (images in /public) ────────────────────────────────────────────
  assets: {
    ogImage: "/default-image.webp",
    blogOgImage: "/default-image-blogs.webp",
    favicon: "/favicon.ico",
  },

  // ── Socials (platform → username + url) ───────────────────────────────────
  //  Adding/removing entries here updates the hero social buttons automatically.
  socials: {
    twitter: {
      label: "X",
      username: "https://x.com/AshiqAhamed_",
      url: "https://x.com/AshiqAhamed_",
    },
    github: {
      label: "Github",
      username: "AshiqAhamed17",
      url: "https://github.com/AshiqAhamed17",
    },
    linkedin: {
      label: "LinkedIn",
      username: "ashiq-n17",
      url: "https://www.linkedin.com/in/ashiq-n17/",
    },
    leetcode: {
      label: "LeetCode",
      username: "ashiq_17",
      url: "https://leetcode.com/u/ashiq_17",
    },
    tryhackme: {
      label: "TryHackMe",
      username: "ashiq_17",
      url: "https://tryhackme.com/p/ashiq_17",
    },
    codeforces: {
      label: "Codeforces",
      username: "AshiqAhamed",
      url: "https://codeforces.com/profile/AshiqAhamed",
    },
  } satisfies Record<SocialPlatform, { label: string; username: string; url: string }>,

  // ── SEO defaults ──────────────────────────────────────────────────────────
  seo: {
    titleTemplate: "%s | Ashiq Ahamed",
    defaultTitle: "Ashiq Ahamed",
    defaultDescription:
      "Computer Science student focused on Blockchain , web3, Zero-Knowledge Proofs, cryptography, and privacy-preserving Ethereum systems. Portfolio showcasing ZK circuits, smart contract security research, and protocol design.",
    keywords: [
      "Ashiq Ahamed",
      "0xArektQ",
      "Zero-Knowledge Proofs",
      "ZK Circuits",
      "Cryptography",
      "Smart Contract Auditing",
      "Ethereum",
      "ZK Rollups",
      "Noir",
      "Circom",
      "Privacy-Preserving Systems",
      "Blockchain Security",
      "Portfolio",
    ],
    twitterHandle: "AshiqAhamed_",
    locale: "en_US",
    themeColor: "#0B0D0E",
  },

  // ── Navigation ────────────────────────────────────────────────────────────
  nav: [
    { path: "/", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/audits", name: "Audits" },
    { path: "/experience", name: "Experience" },
  ],

  // ── Content: Experiences ──────────────────────────────────────────────────
  // Add your experiences here as you accumulate them.
  experiences: [] as Array<{
    role: "Blockchain Developer Intern";
    year: "2025";
    company: "Hooman Digital";
    type: "Remote";
    location: "Kolkata, India";
    logo: "/hooman.png";
    responsibility: [
      { text: "Contributed to building privacy  preserving ZK L2 solutions in Aztec.", bold: false },
      { text: "Built ZK circuits for proving "}
    ];
    techstacks: ["ZKP", "Typescript", "Solidity", "Aztec", "Rust"];
  }>,

  // ── Content: Projects ─────────────────────────────────────────────────────
  projects: [
    {
      title: "Zero-Knowledge Circuits",
      category: "Research · ZK Engineering",
      description:
        "Building and experimenting with custom zero-knowledge circuits and constraint systems using Noir and Circom. Exploring zkSNARKs and zk-STARKs from first principles.",
      techstacks: ["Noir", "Circom", "Rust", "Solidity", "zkSNARKs"],
      status: "building",
      github: "AshiqAhamed17",
      preview: "/projects/zk-circuits.png",
    },
    {
      title: "Smart Contract Security Research",
      category: "Security · Auditing",
      description:
        "Analyzing smart contract vulnerabilities, studying audit reports, and investigating real-world attack vectors to build practical security expertise in the EVM ecosystem.",
      techstacks: ["Solidity", "Foundry", "Slither", "Hardhat", "EVM"],
      status: "active",
      github: "AshiqAhamed17",
      preview: "/projects/security-research.png",
    },
    {
      title: "Ethereum & ZK Protocol Research",
      category: "Research · Protocol Design",
      description:
        "Studying rollup architectures, Aztec-style privacy systems, and ZK protocol design. Focused on understanding Ethereum internals and the cryptographic foundations of ZK rollups.",
      techstacks: ["Ethereum", "ZK Rollups", "Rust", "Solidity", "Cryptography"],
      status: "building",
      github: "AshiqAhamed17",
      preview: "/projects/protocol-research.png",
    },
  ],

  // ── Content: Hackathons ───────────────────────────────────────────────────
  // Add hackathon entries here as you participate in them.
  hackathons: [] as Array<{
    title: "ETHGlobal New Delhi 2025";
    event: "ETHGlobal New Delhi 2025";
    year: "2025";
    placement?: "";
    college?: "";
    body: Array<{ text: string; bold?: boolean }>;
    techstacks: string[];
    link?: string;
  }>,

  // ── Content: Research ─────────────────────────────────────────────────────
  research: [] as Array<{
    title: string;
    year: string;
    authors?: string[];
    venue?: string;
    link?: string;
    description?: string;
  }>,
};

export type SiteConfig = typeof siteConfig;
