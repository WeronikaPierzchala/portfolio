export const PAGES = {
  home: "home",
  skills: "skills",
  projects: "projects",
  contact: "contact",
} as const;

export type PageType = keyof typeof PAGES;
