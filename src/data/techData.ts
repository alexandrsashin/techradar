import type { TechEntry } from "../types/radar";

export const techEntries: TechEntry[] = [
  // Languages
  {
    id: "1",
    name: "TypeScript",
    ring: "adopt",
    quadrant: "languages",
    isNew: false,
    description:
      "Strongly typed programming language that builds on JavaScript. Recommended for all new projects requiring type safety and better tooling support.",
    moved: 0,
  },
  {
    id: "2",
    name: "Python",
    ring: "adopt",
    quadrant: "languages",
    isNew: false,
    description:
      "Versatile language for backend services, data science, and automation. Industry standard for ML/AI projects.",
    moved: 0,
  },
  {
    id: "3",
    name: "Rust",
    ring: "trial",
    quadrant: "languages",
    isNew: false,
    description:
      "Systems programming language focused on safety and performance. Being evaluated for performance-critical services.",
    moved: 1,
  },
  {
    id: "4",
    name: "Go",
    ring: "adopt",
    quadrant: "languages",
    isNew: false,
    description:
      "Efficient language for microservices and cloud-native applications. Excellent concurrency support.",
    moved: 0,
  },

  // Frameworks
  {
    id: "5",
    name: "React",
    ring: "adopt",
    quadrant: "frameworks",
    isNew: false,
    description:
      "Component-based library for building user interfaces. Default choice for web applications.",
    moved: 0,
  },
  {
    id: "6",
    name: "Next.js",
    ring: "adopt",
    quadrant: "frameworks",
    isNew: false,
    description:
      "React framework with server-side rendering and static generation. Recommended for production web apps.",
    moved: 1,
  },
  {
    id: "7",
    name: "Vue 3",
    ring: "trial",
    quadrant: "frameworks",
    isNew: false,
    description:
      "Progressive framework for building UIs. Being evaluated for specific use cases.",
    moved: 0,
  },
  {
    id: "8",
    name: "Svelte",
    ring: "assess",
    quadrant: "frameworks",
    isNew: true,
    description:
      "Compiler-based framework with minimal runtime. Under assessment for performance-critical UIs.",
    moved: 0,
  },
  {
    id: "9",
    name: "FastAPI",
    ring: "adopt",
    quadrant: "frameworks",
    isNew: false,
    description:
      "Modern Python web framework for building APIs. High performance with automatic documentation.",
    moved: 0,
  },

  // Tools
  {
    id: "10",
    name: "Vite",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Next-generation build tool. Significantly faster than traditional bundlers.",
    moved: 1,
  },
  {
    id: "11",
    name: "React Router",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Declarative routing library for React applications. Industry standard for client-side routing with support for nested routes, lazy loading, and data loading patterns.",
    moved: 0,
  },
  {
    id: "12",
    name: "Zod",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "TypeScript-first schema validation library. Provides type-safe runtime validation with excellent inference and composability for API payloads, form data, and configuration.",
    moved: 1,
  },
  {
    id: "13",
    name: "Docker",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Containerization platform. Standard for deployment and development environments.",
    moved: 0,
  },
  {
    id: "14",
    name: "Kubernetes",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Container orchestration platform. Used for production deployments.",
    moved: 0,
  },
  {
    id: "15",
    name: "ESBuild",
    ring: "trial",
    quadrant: "tools",
    isNew: false,
    description:
      "Extremely fast JavaScript bundler. Being evaluated as Vite alternative.",
    moved: 0,
  },
  {
    id: "16",
    name: "Terraform",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Infrastructure as code tool. Standard for managing cloud resources.",
    moved: 0,
  },

  // Platforms
  {
    id: "17",
    name: "AWS",
    ring: "adopt",
    quadrant: "platforms",
    isNew: false,
    description:
      "Primary cloud platform. Comprehensive services for all workloads.",
    moved: 0,
  },
  {
    id: "18",
    name: "Vercel",
    ring: "adopt",
    quadrant: "platforms",
    isNew: false,
    description:
      "Platform for frontend deployment. Optimized for Next.js applications.",
    moved: 0,
  },
  {
    id: "19",
    name: "CloudFlare Workers",
    ring: "trial",
    quadrant: "platforms",
    isNew: true,
    description:
      "Edge computing platform. Being evaluated for low-latency applications.",
    moved: 0,
  },
  {
    id: "20",
    name: "Supabase",
    ring: "assess",
    quadrant: "platforms",
    isNew: true,
    description:
      "Open source Firebase alternative. Under assessment for rapid prototyping.",
    moved: 0,
  },
  {
    id: "21",
    name: "PostgreSQL",
    ring: "adopt",
    quadrant: "platforms",
    isNew: false,
    description: "Relational database. Default choice for structured data.",
    moved: 0,
  },
  {
    id: "22",
    name: "Redis",
    ring: "adopt",
    quadrant: "platforms",
    isNew: false,
    description:
      "In-memory data store. Used for caching and session management.",
    moved: 0,
  },
];
