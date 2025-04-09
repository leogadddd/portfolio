import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Leo Gadil",
    short_name: "Leo Gadil",
    description: "A Passionate Software Developer Based in Manila, Philippines",
    theme_color: "#f56f10",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    start_url: "/",
  };
}
