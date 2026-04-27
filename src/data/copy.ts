/**
 * Bilingual copy for the portfolio. Sourced from Portfolio/Portfolio.html (#copy-data).
 * Single source of truth — Header / Hero / About / Experience / Projects / Stack / Contact / Footer
 * read from here.
 */

export type Lang = "es" | "en";

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  summary: string;
  more: string;
  stack: string[];
}

export interface ProjectItem {
  name: string;
  tag: string;
  desc: string;
  stack: string[];
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface Copy {
  nav: { home: string; about: string; experience: string; projects: string; stack: string; contact: string };
  hero: { greeting: string; role: string; intro: string; cta: string; scroll: string };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    stats: { value: string; label: string }[];
  };
  experience: { title: string; more: string; less: string; items: ExperienceItem[] };
  projects: { title: string; items: ProjectItem[] };
  stack: { title: string; groups: StackGroup[] };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    form: {
      name: { label: string; placeholder: string; error: string };
      email: { label: string; placeholder: string; error: string; invalid: string };
      message: { label: string; placeholder: string; error: string };
      submit: string;
      submitting: string;
      success: { title: string; body: string; again: string };
      error: { title: string; body: string };
      offline: string;
      orMail: string;
    };
  };
  footer: { credit: string; build: string };
  sections: { about: string; experience: string; projects: string; stack: string; contact: string };
}

export const COPY: Record<Lang, Copy> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      stack: "Stack",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Ingeniero Full-Stack",
      intro:
        "enfocado en sistemas internos, IA aplicada y software que mueve operaciones reales. Construyo de punta a punta con React, Node.js y herramientas modernas de IA.",
      cta: "Contáctame",
      scroll: "experiencia y proyectos",
    },
    about: {
      title: "Sobre mí",
      p1: "Soy Ingeniero Full-Stack desde la República Dominicana, con más de cuatro años construyendo software que mueve operaciones reales. Mi trabajo abarca todo el ciclo: arquitectura de backend con Node.js y Postgres, búsqueda semántica con embeddings y bases de datos vectoriales, e interfaces pulidas en React y Electron.",
      p2: "Actualmente desarrollo productos internos en Telecom Networks Outsourcing, una empresa de tecnología y BPO, donde diseñé un sistema RAG para quality assurance, una plataforma de nómina y herramientas de QA usadas a diario por equipos de operaciones.",
      p3: "Lo que me distingue es el cruce entre IA aplicada y software empresarial: usar modelos locales, embeddings y agentes para automatizar trabajo que antes tomaba horas de esfuerzo manual. Me importa cada capa del stack — desde la consulta SQL hasta el contenedor en producción.",
      stats: [
        { value: "4+", label: "años de experiencia" },
        { value: "3", label: "productos en producción" },
        { value: "100%", label: "end-to-end ownership" },
      ],
    },
    experience: {
      title: "Experiencia",
      more: "ver más",
      less: "ver menos",
      items: [
        {
          period: "06/2024 — actualidad",
          role: "Ingeniero Full-Stack",
          company: "Telecom Networks Outsourcing",
          summary:
            "Diseño y desarrollo de productos internos para una operación con cientos de agentes. Construí <strong>TNO Companion</strong>, un sistema RAG basado en Electron que asiste a los agentes de campaña con consultas en tiempo real para mantener estándares de calidad.",
          more: "También lideré el desarrollo del sistema interno de nómina y de la plataforma de evaluación del equipo de QA. Trabajo end-to-end: arquitectura, backend, frontend, despliegue y mantenimiento.",
          stack: ["Electron", "Next.js", "Node.js", "PostgreSQL", "pgvector", "Ollama", "LangGraph"],
        },
        {
          period: "2024",
          role: "Tech Support Engineer",
          company: "Data Vimenca",
          summary:
            "Soporte técnico para infraestructura y aplicaciones críticas en una de las instituciones financieras más establecidas de la República Dominicana.",
          more: "Resolución de incidentes, mantenimiento de sistemas y coordinación con equipos de desarrollo para garantizar continuidad operacional.",
          stack: ["Linux", "Bash", "Networking", "Soporte L2"],
        },
        {
          period: "2022 — 2024",
          role: "Desarrollador VBA",
          company: "D' Diógenes SRL",
          summary:
            "Automatización de procesos de negocio: herramientas que reemplazaron flujos manuales en Excel y Access en operaciones contables y administrativas.",
          more: "Diseño de macros, formularios y reportería que redujeron horas de trabajo repetitivo a clicks individuales.",
          stack: ["VBA", "Excel", "Access", "SQL"],
        },
      ],
    },
    projects: {
      title: "Proyectos destacados",
      items: [
        {
          name: "TNO Companion",
          tag: "Producto interno · 2024",
          desc: "Sistema RAG empresarial en Electron diseñado para ayudar a los agentes de campaña a mantener estándares de calidad y acceder a información de procesos en tiempo real. Combina embeddings, búsqueda vectorial y modelos locales para entregar respuestas precisas sin enviar datos sensibles a terceros.",
          stack: ["Electron", "Next.js", "Node.js", "PostgreSQL", "pgvector", "Qdrant", "Ollama", "LangGraph", "Vercel AI SDK"],
        },
        {
          name: "Sistema de Nómina",
          tag: "Producto interno · 2024",
          desc: "Plataforma de nómina interna end-to-end: cálculo de comisiones y deducciones, generación de reportes y exportaciones. Reemplazó hojas de cálculo y flujos manuales que antes le tomaban días al equipo de RRHH.",
          stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript"],
        },
        {
          name: "QA Operations Platform",
          tag: "Producto interno · 2024",
          desc: "Plataforma de flujo de trabajo centralizada para el equipo de QA: evaluación de llamadas, métricas de rendimiento y reportería para supervisores. Hoy es la herramienta principal del equipo.",
          stack: ["React", "Node.js", "Express", "PostgreSQL", "Redis"],
        },
      ],
    },
    stack: {
      title: "Stack técnico",
      groups: [
        { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Framer Motion", "Electron"] },
        { name: "Backend & IA", items: ["Node.js", "Express", "Python", "Prisma", "LangGraph", "Vercel AI SDK", "Ollama"] },
        { name: "Bases de datos", items: ["PostgreSQL", "Redis", "pgvector", "Qdrant"] },
        { name: "DevOps & herramientas", items: ["Docker", "Nginx", "Apache", "Linux", "Bash", "Git", "Vite", "Postman"] },
        { name: "Testing", items: ["Playwright", "Jest", "Vitest"] },
      ],
    },
    contact: {
      title: "Hablemos",
      subtitle: "¿Tienes un proyecto en mente, o solo quieres saludar? Mi bandeja de entrada está abierta.",
      cta: "Enviar mensaje",
      form: {
        name: {
          label: "Nombre",
          placeholder: "Cómo te llamas",
          error: "Cuéntame tu nombre.",
        },
        email: {
          label: "Email",
          placeholder: "tu@correo.com",
          error: "Necesito un email para responderte.",
          invalid: "Ese email no parece válido.",
        },
        message: {
          label: "Mensaje",
          placeholder: "Cuéntame qué tienes en mente…",
          error: "Escríbeme al menos un par de líneas.",
        },
        submit: "Enviar mensaje",
        submitting: "Enviando…",
        success: {
          title: "¡Mensaje enviado!",
          body: "Gracias por escribirme. Te respondo pronto.",
          again: "Enviar otro",
        },
        error: {
          title: "Algo salió mal",
          body: "No pude enviar el mensaje. Intenta de nuevo o escríbeme directo a jtzorinos@gmail.com.",
        },
        offline: "Sin conexión — revisa tu internet e intenta otra vez.",
        orMail: "o escríbeme directo a",
      },
    },
    footer: {
      credit: "© 2026 · Diseñado y construido por Johan Taveras",
      build: "build_v1.0 · Astro · ☕",
    },
    sections: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos destacados",
      stack: "Stack técnico",
      contact: "Contacto",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Full-Stack Engineer",
      intro:
        "focused on internal systems, applied AI, and software that powers real operations. I build end-to-end with React, Node.js, and modern AI tooling.",
      cta: "Get in touch",
      scroll: "experience and projects",
    },
    about: {
      title: "About me",
      p1: "I'm a Full-Stack Engineer from the Dominican Republic with over four years building software that drives real operations. My work spans the full cycle: backend architecture with Node.js and Postgres, semantic search with embeddings and vector databases, and polished interfaces in React and Electron.",
      p2: "I currently develop internal products at Telecom Networks Outsourcing, a technology and BPO company, where I've designed a RAG system for quality assurance, a payroll platform, and QA tools used daily by operations teams.",
      p3: "What sets me apart is the intersection of applied AI and enterprise software: leveraging local models, embeddings, and agents to automate work that previously took hours of manual effort. I care about every layer of the stack — from the SQL query to the production container.",
      stats: [
        { value: "4+", label: "years of experience" },
        { value: "3", label: "products in production" },
        { value: "100%", label: "end-to-end ownership" },
      ],
    },
    experience: {
      title: "Experience",
      more: "see more",
      less: "see less",
      items: [
        {
          period: "June 2024 — Present",
          role: "Full-Stack Engineer",
          company: "Telecom Networks Outsourcing",
          summary:
            "Design and development of internal products for an operation with hundreds of agents. Built <strong>TNO Companion</strong>, an Electron-based RAG system that assists campaign agents with real-time queries to maintain quality standards.",
          more: "Also led development of the internal payroll system and the QA team's evaluation platform. End-to-end ownership: architecture, backend, frontend, deployment, and maintenance.",
          stack: ["Electron", "Next.js", "Node.js", "PostgreSQL", "pgvector", "Ollama", "LangGraph"],
        },
        {
          period: "2024",
          role: "Tech Support Engineer",
          company: "Data Vimenca",
          summary:
            "Technical support for critical infrastructure and applications at one of the Dominican Republic's most established financial institutions.",
          more: "Incident response, system maintenance, and coordination with development teams to keep the operation running smoothly.",
          stack: ["Linux", "Bash", "Networking", "L2 Support"],
        },
        {
          period: "2022 — 2024",
          role: "VBA Developer",
          company: "D' Diógenes SRL",
          summary:
            "Business process automation: tools that replaced manual Excel and Access workflows across accounting and administrative operations.",
          more: "Macros, forms, and reporting that turned hours of repetitive work into single clicks.",
          stack: ["VBA", "Excel", "Access", "SQL"],
        },
      ],
    },
    projects: {
      title: "Featured projects",
      items: [
        {
          name: "TNO Companion",
          tag: "Internal product · 2024",
          desc: "Enterprise RAG system in Electron designed to help campaign agents maintain quality standards and access process information in real time. Combines embeddings, vector search, and local models to deliver accurate answers without sending sensitive data to third parties.",
          stack: ["Electron", "Next.js", "Node.js", "PostgreSQL", "pgvector", "Qdrant", "Ollama", "LangGraph", "Vercel AI SDK"],
        },
        {
          name: "Payroll System",
          tag: "Internal product · 2024",
          desc: "End-to-end internal payroll platform: commission and deduction calculations, report generation, and exports. Replaced spreadsheets and manual workflows that previously took the HR team days to complete.",
          stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript"],
        },
        {
          name: "QA Operations Platform",
          tag: "Internal product · 2024",
          desc: "Centralized workflow platform for the QA team: call evaluation, performance metrics, and supervisor reporting. Now the team's primary tool.",
          stack: ["React", "Node.js", "Express", "PostgreSQL", "Redis"],
        },
      ],
    },
    stack: {
      title: "Tech stack",
      groups: [
        { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Framer Motion", "Electron"] },
        { name: "Backend & AI", items: ["Node.js", "Express", "Python", "Prisma", "LangGraph", "Vercel AI SDK", "Ollama"] },
        { name: "Databases", items: ["PostgreSQL", "Redis", "pgvector", "Qdrant"] },
        { name: "DevOps & tooling", items: ["Docker", "Nginx", "Apache", "Linux", "Bash", "Git", "Vite", "Postman"] },
        { name: "Testing", items: ["Playwright", "Jest", "Vitest"] },
      ],
    },
    contact: {
      title: "Let's talk",
      subtitle: "Have a project in mind, or just want to say hi? My inbox is always open.",
      cta: "Send a message",
      form: {
        name: {
          label: "Name",
          placeholder: "What should I call you",
          error: "Tell me your name.",
        },
        email: {
          label: "Email",
          placeholder: "you@email.com",
          error: "I'll need an email to reply.",
          invalid: "That email doesn't look right.",
        },
        message: {
          label: "Message",
          placeholder: "Tell me what's on your mind…",
          error: "Write me at least a couple of lines.",
        },
        submit: "Send message",
        submitting: "Sending…",
        success: {
          title: "Message sent!",
          body: "Thanks for reaching out. I'll get back to you soon.",
          again: "Send another",
        },
        error: {
          title: "Something went wrong",
          body: "Couldn't send your message. Try again or email me directly at jtzorinos@gmail.com.",
        },
        offline: "You're offline — check your internet and try again.",
        orMail: "or email me directly at",
      },
    },
    footer: {
      credit: "© 2026 · Designed and built by Johan Taveras",
      build: "build_v1.0 · Astro · ☕",
    },
    sections: {
      about: "About",
      experience: "Experience",
      projects: "Featured projects",
      stack: "Tech stack",
      contact: "Contact",
    },
  },
};

export const SOCIALS = {
  email: "mailto:jtzorinos@gmail.com",
  linkedin: "https://www.linkedin.com/in/johan-abel-taveras-21a2311b6/",
  github: "https://github.com/HansAbele",
} as const;
