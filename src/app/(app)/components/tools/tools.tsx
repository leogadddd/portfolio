import { StaticImageData } from "next/image";

import vscodeimage from "@/assetsimages/icons/vscode.png";
import vercelimage from "@/assetsimages/icons/vercel.svg";
import chatgptimage from "@/assetsimages/icons/chatgpt.png";
import dockerimage from "@/assetsimages/icons/docker.webp";
import mongodbimage from "@/assetsimages/icons/mongodb.svg";
import figmaimage from "@/assetsimages/icons/figma.png";
import reactimage from "@/assetsimages/icons/react.png";
import reacticonsimage from "@/assetsimages/icons/react-icons.svg";
import supabaseimage from "@/assetsimages/icons/supabase.png";
import redisimage from "@/assetsimages/icons/redis.png";

type tools = {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
};

const tools: tools[] = [
  {
    title: "VS Code",
    description: "Code Editor",
    image: vscodeimage,
    url: "https://code.visualstudio.com/",
  },
  {
    title: "Vercel",
    description: "Deployment Platform",
    image: vercelimage,
    url: "https://vercel.com/",
  },
  {
    title: "ChatGPT",
    description: "Large Language Model",
    image: chatgptimage,
    url: "https://chat.openai.com/",
  },
  {
    title: "Docker",
    description: "Containerization Tool",
    image: dockerimage,
    url: "https://www.docker.com/",
  },
  {
    title: "MongoDB Atlas",
    description: "Database",
    image: mongodbimage,
    url: "https://www.mongodb.com/lp/cloud/atlas/try4-reg",
  },
  {
    title: "Figma",
    description: "Design Tool",
    image: figmaimage,
    url: "https://www.figma.com/",
  },
  {
    title: "React",
    description: "Frontend Library",
    image: reactimage,
    url: "https://react.dev/",
  },
  {
    title: "React Icons",
    description: "Icon Library",
    image: reacticonsimage,
    url: "https://react-icons.github.io/react-icons/",
  },
  {
    title: "Supabase",
    description: "Backend as a Service",
    image: supabaseimage,
    url: "https://supabase.com/",
  },
  {
    title: "Redis",
    description: "In-memory Storage",
    image: redisimage,
    url: "https://redis.io/",
  },
];

export default tools;
