/**
 * Tech registry — maps the human-readable tech names used throughout the
 * site (Stack section, Experience cards, Project cards) to an Iconify
 * identifier, so the same name in any language renders the same icon.
 *
 * Icon collections in use:
 *  - devicon         → full-color brand logos (preferred when available)
 *  - simple-icons    → monochrome brand glyphs (fallback for tech not in devicon)
 *  - lucide          → generic icons (for non-brand concepts like SQL, Networking)
 *
 * Names not in this map render as a plain text chip (no icon) — that way
 * adding new tech to copy.ts never breaks the build.
 */

export const TECH_ICON: Record<string, string> = {
  // Frontend
  React: "devicon:react",
  "Next.js": "devicon:nextjs",
  TypeScript: "devicon:typescript",
  Tailwind: "devicon:tailwindcss",
  "shadcn/ui": "simple-icons:shadcnui",
  "Framer Motion": "simple-icons:framer",
  Electron: "devicon:electron",

  // Backend & AI
  "Node.js": "devicon:nodejs",
  Express: "devicon:express",
  Python: "devicon:python",
  Prisma: "devicon:prisma",
  LangGraph: "simple-icons:langchain",
  "Vercel AI SDK": "devicon:vercel",
  Ollama: "simple-icons:ollama",

  // Databases
  PostgreSQL: "devicon:postgresql",
  Redis: "devicon:redis",
  pgvector: "devicon:postgresql",
  Qdrant: "simple-icons:qdrant",

  // DevOps & tooling
  Docker: "devicon:docker",
  Nginx: "devicon:nginx",
  Apache: "devicon:apache",
  Linux: "devicon:linux",
  Bash: "devicon:bash",
  Git: "devicon:git",
  Vite: "devicon:vitejs",
  Postman: "devicon:postman",

  // Testing
  Playwright: "devicon:playwright",
  Jest: "simple-icons:jest",
  Vitest: "devicon:vitest",

  // Experience-only items
  "L2 Support": "lucide:headphones",
  "Soporte L2": "lucide:headphones",
  Networking: "lucide:network",
  Excel: "simple-icons:microsoftexcel",
  Access: "simple-icons:microsoftaccess",
  VBA: "lucide:braces",
  SQL: "lucide:database",
};

export type TechName = keyof typeof TECH_ICON;

export function getTechIcon(name: string): string | undefined {
  return TECH_ICON[name];
}
