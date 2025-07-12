import { FunctionComponent } from "react";
import SpaceverseDescription from "./(app)/projects/components/spaceverse-description";
import SonnetDescription from "./(app)/projects/components/sonnet-description";

export type projectcard = {
  topTitle: string;
  title: string;
  smallDescription: string;
  component: string | FunctionComponent;
  description: string;
  slug?: string;
  images: {
    src: string;
    alt: string;
  }[];
  links: {
    name: string;
    url: string;
  }[];
  tags?: string[];
  techStack?: string[];
  isFeatured?: boolean;
  isHighlighted?: boolean;
};

export const projects: projectcard[] = [
  {
    topTitle: "Blog Platform",
    title: "Sonnet",
    smallDescription: "Effortless Blogging, Endless Expression.",
    description:
      "Sonnet is a personal blogging platform I created with a local-first approach, empowering creators and professionals to write freely, sync across devices, and share their thoughts with the world — on their terms.",
    component: SonnetDescription,
    slug: "sonnet",
    images: [
      {
        src: "/images/projects/sonnet.png",
        alt: "sonnet-screenshot-1",
      },
      {
        src: "/images/projects/sonnet-2.png",
        alt: "sonnet-screenshot-2",
      },
    ],
    links: [
      {
        name: "Blog",
        url: "https://sonnet.leogadil.com/blog/sonnet",
      },
      {
        name: "Website",
        url: "https://sonnet.leogadil.com",
      },
    ],
    tags: [
      "web",
      "blog",
      "platform",
      "sonnet",
      "saas",
      "blogging",
      "blogger",
      "blogging platform",
      "blog",
      "Leo Gadil",
      "leogadddd",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Supabase",
      "Redis",
    ],
    isFeatured: true,
    isHighlighted: true,
  },
  {
    topTitle: "Chatbot",
    title: "Atlas",
    smallDescription: "Work in your universe, your way",
    description:
      "Spaceverse is a dynamic productivity web app that blends aesthetic ambiance with practical tools — a cosmic workspace designed to help you focus while vibing in your own digital universe.",
    component: SpaceverseDescription,
    slug: "spaceverse",
    images: [
      {
        src: "/images/projects/spaceverse-2.png",
        alt: "spaceverse-screenshot-2",
      },
      {
        src: "/images/projects/spaceverse.png",
        alt: "spaceverse-screenshot-1",
      },
      {
        src: "/images/projects/spaceverse-3.png",
        alt: "spaceverse-screenshot-3",
      },
      {
        src: "/images/projects/spaceverse-4.png",
        alt: "spaceverse-screenshot-4",
      },
    ],
    links: [
      {
        name: "Blog",
        url: "https://sonnet.leogadil.com/blog/spaceverse",
      },
      {
        name: "Website",
        url: "https://spaceverse.leogadil.com",
      },
      {
        name: "GitHub",
        url: "https://github.com/leogadddd/spaceverse-reimagined",
      },
    ],
    tags: [
      "web",
      "app",
      "productivity",
      "spaceverse",
      "saas",
      "workspace",
      "leogadddd",
      "leo gadil",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Firebase",
      "Framer Motion",
    ],
    isFeatured: true,
    isHighlighted: true,
  },
  {
    topTitle: "Web App",
    title: "Spaceverse",
    smallDescription: "Work in your universe, your way",
    description:
      "Spaceverse is a dynamic productivity web app that blends aesthetic ambiance with practical tools — a cosmic workspace designed to help you focus while vibing in your own digital universe.",
    component: SpaceverseDescription,
    slug: "spaceverse",
    images: [
      {
        src: "/images/projects/spaceverse-2.png",
        alt: "spaceverse-screenshot-2",
      },
      {
        src: "/images/projects/spaceverse.png",
        alt: "spaceverse-screenshot-1",
      },
      {
        src: "/images/projects/spaceverse-3.png",
        alt: "spaceverse-screenshot-3",
      },
      {
        src: "/images/projects/spaceverse-4.png",
        alt: "spaceverse-screenshot-4",
      },
    ],
    links: [
      {
        name: "Blog",
        url: "https://sonnet.leogadil.com/blog/spaceverse",
      },
      {
        name: "Website",
        url: "https://spaceverse.leogadil.com",
      },
      {
        name: "GitHub",
        url: "https://github.com/leogadddd/spaceverse-reimagined",
      },
    ],
    tags: [
      "web",
      "app",
      "productivity",
      "spaceverse",
      "saas",
      "workspace",
      "leogadddd",
      "leo gadil",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Firebase",
      "Framer Motion",
    ],
    isFeatured: true,
    isHighlighted: true,
  },
];
