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
  },
  {
    id: "2",
    name: "Python",
    ring: "adopt",
    quadrant: "languages",
    isNew: false,
    description:
      "Versatile language for backend services, data science, and automation. Industry standard for ML/AI projects.",
  },
  {
    id: "3",
    name: "Rust",
    ring: "trial",
    quadrant: "languages",
    isNew: false,
    description:
      "Systems programming language focused on safety and performance. Being evaluated for performance-critical services.",
  },
  {
    id: "4",
    name: "Go",
    ring: "adopt",
    quadrant: "languages",
    isNew: false,
    description:
      "Efficient language for microservices and cloud-native applications. Excellent concurrency support.",
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
  },
  {
    id: "6",
    name: "Next.js",
    ring: "adopt",
    quadrant: "frameworks",
    isNew: false,
    description:
      "React framework with server-side rendering and static generation. Recommended for production web apps.",
  },
  {
    id: "7",
    name: "Vue 3",
    ring: "trial",
    quadrant: "frameworks",
    isNew: false,
    description:
      "Progressive framework for building UIs. Being evaluated for specific use cases.",
  },
  {
    id: "8",
    name: "Svelte",
    ring: "assess",
    quadrant: "frameworks",
    isNew: true,
    description:
      "Compiler-based framework with minimal runtime. Under assessment for performance-critical UIs.",
  },
  {
    id: "9",
    name: "FastAPI",
    ring: "adopt",
    quadrant: "frameworks",
    isNew: false,
    description:
      "Modern Python web framework for building APIs. High performance with automatic documentation.",
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
  },
  {
    id: "11",
    name: "React Router",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Declarative routing library for React applications. Industry standard for client-side routing with support for nested routes, lazy loading, and data loading patterns.",
  },
  {
    id: "12",
    name: "Zod",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "TypeScript-first schema validation library. Provides type-safe runtime validation with excellent inference and composability for API payloads, form data, and configuration.",
  },
  {
    id: "13",
    name: "Docker",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Containerization platform. Standard for deployment and development environments.",
  },
  {
    id: "14",
    name: "Kubernetes",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Container orchestration platform. Used for production deployments.",
  },
  {
    id: "15",
    name: "ESBuild",
    ring: "trial",
    quadrant: "tools",
    isNew: false,
    description:
      "Extremely fast JavaScript bundler. Being evaluated as Vite alternative.",
  },
  {
    id: "16",
    name: "Terraform",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Infrastructure as code tool. Standard for managing cloud resources.",
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
  },
  {
    id: "18",
    name: "Vercel",
    ring: "adopt",
    quadrant: "platforms",
    isNew: false,
    description:
      "Platform for frontend deployment. Optimized for Next.js applications.",
  },
  {
    id: "19",
    name: "CloudFlare Workers",
    ring: "trial",
    quadrant: "platforms",
    isNew: true,
    description:
      "Edge computing platform. Being evaluated for low-latency applications.",
  },
  {
    id: "20",
    name: "Supabase",
    ring: "assess",
    quadrant: "platforms",
    isNew: true,
    description:
      "Open source Firebase alternative. Under assessment for rapid prototyping.",
  },
  {
    id: "21",
    name: "PostgreSQL",
    ring: "adopt",
    quadrant: "platforms",
    isNew: false,
    description: "Relational database. Default choice for structured data.",
  },
  {
    id: "22",
    name: "Redis",
    ring: "adopt",
    quadrant: "platforms",
    isNew: false,
    description:
      "In-memory data store. Used for caching and session management.",
  },
];
