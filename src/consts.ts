import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Rado Pavelko",
  DESCRIPTION:
    "Sharing my AI experiments and how to disconnect to connect.",
  EMAIL: "rado@pavelko.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Sharing my AI experiments and how to disconnect to connect.",
};

export const AI_EXPERIMENTS: Metadata = {
  TITLE: "AI Experiments",
  DESCRIPTION:
    "Exploring the frontiers of artificial intelligence — experiments, findings, and reflections.",
};

export const DISCONNECT_TO_CONNECT: Metadata = {
  TITLE: "Disconnect to Connect",
  DESCRIPTION:
    "On the art of stepping back from technology to deepen real-world connections.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/radovanpavelko",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/radovanpavelko",
  },
];
