import type { TechEntry } from "../types/radar";

export const techEntries: TechEntry[] = [
  // Methods & Techniques
  {
    id: "23",
    name: "TDD",
    ring: "adopt",
    quadrant: "methods",
    isNew: false,
    description:
      "Test-Driven Development. Writing tests before code to ensure quality and maintainability.",
  },
  {
    id: "24",
    name: "CI/CD",
    ring: "adopt",
    quadrant: "methods",
    isNew: false,
    description:
      "Continuous Integration and Continuous Deployment. Automated testing and deployment pipelines.",
  },
  {
    id: "25",
    name: "Microservices",
    ring: "adopt",
    quadrant: "methods",
    isNew: false,
    description:
      "Architectural pattern for building distributed systems as loosely coupled services.",
  },
  {
    id: "26",
    name: "Infrastructure as Code",
    ring: "adopt",
    quadrant: "methods",
    isNew: false,
    description:
      "Managing infrastructure through machine-readable definition files.",
  },
  {
    id: "27",
    name: "Domain-Driven Design",
    ring: "adopt",
    quadrant: "methods",
    isNew: false,
    description:
      "Strategic approach to software design that focuses on modeling the business domain.",
  },
  {
    id: "28",
    name: "Event Sourcing",
    ring: "trial",
    quadrant: "methods",
    isNew: false,
    description:
      "Storing state changes as a sequence of events. Useful for audit trails and temporal queries.",
  },
  {
    id: "29",
    name: "CQRS",
    ring: "trial",
    quadrant: "methods",
    isNew: false,
    description:
      "Command Query Responsibility Segregation. Separating read and write models for better scalability.",
  },
  {
    id: "30",
    name: "Pair Programming",
    ring: "adopt",
    quadrant: "methods",
    isNew: false,
    description:
      "Two developers working together at one workstation. Improves code quality and knowledge sharing.",
  },
  {
    id: "31",
    name: "Code Review",
    ring: "adopt",
    quadrant: "methods",
    isNew: false,
    description:
      "Systematic examination of code by peers. Essential quality assurance practice.",
  },
  {
    id: "32",
    name: "Chaos Engineering",
    ring: "assess",
    quadrant: "methods",
    isNew: true,
    description:
      "Testing system resilience by intentionally introducing failures in production.",
  },
  {
    id: "33",
    name: "Gitflow",
    ring: "hold",
    quadrant: "methods",
    isNew: false,
    description:
      "Git branching model. Considered too complex for modern CI/CD practices.",
  },
  {
    id: "34",
    name: "Trunk-Based Development",
    ring: "adopt",
    quadrant: "methods",
    isNew: false,
    description:
      "Development model with short-lived branches and frequent merges to main.",
  },
  {
    id: "35",
    name: "BDD",
    ring: "trial",
    quadrant: "methods",
    isNew: false,
    description:
      "Behavior-Driven Development. Using natural language to describe test scenarios.",
  },
  {
    id: "36",
    name: "API-First Design",
    ring: "adopt",
    quadrant: "methods",
    isNew: false,
    description:
      "Designing APIs before implementation. Ensures better integration and documentation.",
  },
  {
    id: "37",
    name: "Zero Trust Security",
    ring: "adopt",
    quadrant: "methods",
    isNew: false,
    description:
      "Security model that assumes no implicit trust. Verify every request regardless of source.",
  },

  // Languages & Frameworks
  {
    id: "1",
    name: "TypeScript",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Strongly typed programming language that builds on JavaScript. Recommended for all new projects requiring type safety and better tooling support.",
  },
  {
    id: "2",
    name: "Python",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Versatile language for backend services, data science, and automation. Industry standard for ML/AI projects.",
  },
  {
    id: "3",
    name: "Rust",
    ring: "trial",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Systems programming language focused on safety and performance. Being evaluated for performance-critical services.",
  },
  {
    id: "4",
    name: "Go",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Efficient language for microservices and cloud-native applications. Excellent concurrency support.",
  },
  {
    id: "5",
    name: "React",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Component-based library for building user interfaces. Default choice for web applications.",
  },
  {
    id: "6",
    name: "Next.js",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "React framework with server-side rendering and static generation. Recommended for production web apps.",
  },
  {
    id: "7",
    name: "Vue 3",
    ring: "trial",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Progressive framework for building UIs. Being evaluated for specific use cases.",
  },
  {
    id: "8",
    name: "Svelte",
    ring: "assess",
    quadrant: "languages-frameworks",
    isNew: true,
    description:
      "Compiler-based framework with minimal runtime. Under assessment for performance-critical UIs.",
  },
  {
    id: "9",
    name: "FastAPI",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Modern Python web framework for building APIs. High performance with automatic documentation.",
  },
  {
    id: "38",
    name: "Django",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "High-level Python web framework. Batteries-included approach for rapid development.",
  },
  {
    id: "39",
    name: "Spring Boot",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Java framework for building production-ready applications. Strong enterprise support.",
  },
  {
    id: "40",
    name: "Express.js",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Minimal Node.js web framework. Flexible and widely adopted for APIs.",
  },
  {
    id: "41",
    name: "NestJS",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Progressive Node.js framework with TypeScript. Angular-inspired architecture for scalable backends.",
  },
  {
    id: "42",
    name: "Angular",
    ring: "hold",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Comprehensive frontend framework. Prefer React or Vue for new projects.",
  },
  {
    id: "43",
    name: "Solid.js",
    ring: "assess",
    quadrant: "languages-frameworks",
    isNew: true,
    description:
      "Reactive UI library with fine-grained reactivity. Exceptional performance without virtual DOM.",
  },
  {
    id: "44",
    name: "Astro",
    ring: "trial",
    quadrant: "languages-frameworks",
    isNew: true,
    description:
      "Static site generator with partial hydration. Excellent for content-heavy sites.",
  },
  {
    id: "45",
    name: "Kotlin",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Modern JVM language. Recommended for Android and backend development.",
  },
  {
    id: "46",
    name: "Swift",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description: "Apple's language for iOS/macOS development. Modern and safe.",
  },
  {
    id: "47",
    name: "Flutter",
    ring: "trial",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Cross-platform UI framework. Single codebase for mobile, web, and desktop.",
  },
  {
    id: "48",
    name: "Elixir",
    ring: "assess",
    quadrant: "languages-frameworks",
    isNew: true,
    description:
      "Functional language for scalable applications. Built on Erlang VM.",
  },
  {
    id: "49",
    name: "Phoenix",
    ring: "assess",
    quadrant: "languages-frameworks",
    isNew: true,
    description:
      "Elixir web framework. Real-time capabilities and high concurrency.",
  },
  {
    id: "50",
    name: "GraphQL",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "Query language for APIs. Efficient data fetching with flexible schemas.",
  },
  {
    id: "51",
    name: "tRPC",
    ring: "trial",
    quadrant: "languages-frameworks",
    isNew: true,
    description:
      "End-to-end typesafe APIs. No code generation needed for TypeScript projects.",
  },
  {
    id: "52",
    name: "Remix",
    ring: "trial",
    quadrant: "languages-frameworks",
    isNew: true,
    description:
      "Full-stack React framework. Focus on web fundamentals and progressive enhancement.",
  },
  {
    id: "53",
    name: "Node.js",
    ring: "adopt",
    quadrant: "languages-frameworks",
    isNew: false,
    description:
      "JavaScript runtime built on Chrome's V8 engine. Standard for backend JavaScript applications.",
  },
  {
    id: "54",
    name: "Deno",
    ring: "assess",
    quadrant: "languages-frameworks",
    isNew: true,
    description:
      "Modern runtime for JavaScript and TypeScript. Secure by default with built-in TypeScript support.",
  },
  {
    id: "55",
    name: "Bun",
    ring: "assess",
    quadrant: "languages-frameworks",
    isNew: true,
    description:
      "All-in-one JavaScript runtime & toolkit. Significantly faster than Node.js.",
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
  {
    id: "56",
    name: "React Query (TanStack Query)",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Powerful data synchronization library for React. Handles server state management with caching, background updates, and automatic refetching.",
  },
  {
    id: "57",
    name: "Zustand",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Lightweight state management library. Simple API with minimal boilerplate for React applications.",
  },
  {
    id: "58",
    name: "Redux Toolkit",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Official Redux toolset with batteries included. Simplifies store setup and reduces boilerplate significantly.",
  },
  {
    id: "59",
    name: "Jotai",
    ring: "trial",
    quadrant: "tools",
    isNew: true,
    description:
      "Primitive and flexible state management for React. Atomic approach with bottom-up composition.",
  },
  {
    id: "60",
    name: "Axios",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Promise-based HTTP client. Supports request/response interceptors, automatic JSON transformation.",
  },
  {
    id: "61",
    name: "SWR",
    ring: "trial",
    quadrant: "tools",
    isNew: false,
    description:
      "React Hooks library for data fetching. Stale-while-revalidate strategy for optimal UX.",
  },
  {
    id: "62",
    name: "Tailwind CSS",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Utility-first CSS framework. Rapid UI development with design constraints built-in.",
  },
  {
    id: "63",
    name: "shadcn/ui",
    ring: "adopt",
    quadrant: "tools",
    isNew: true,
    description:
      "Collection of re-usable components. Built with Radix UI and Tailwind CSS, copy-paste approach.",
  },
  {
    id: "64",
    name: "Radix UI",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Unstyled, accessible UI components. Excellent primitives for building design systems.",
  },
  {
    id: "65",
    name: "Material-UI (MUI)",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "React component library implementing Material Design. Comprehensive set of pre-built components.",
  },
  {
    id: "66",
    name: "Ant Design",
    ring: "trial",
    quadrant: "tools",
    isNew: false,
    description:
      "Enterprise-class UI design system. Rich component library for React applications.",
  },
  {
    id: "67",
    name: "Framer Motion",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Production-ready animation library for React. Simple API for complex animations.",
  },
  {
    id: "68",
    name: "React Hook Form",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Performant form library with easy validation. Minimal re-renders and flexible integration.",
  },
  {
    id: "69",
    name: "Formik",
    ring: "hold",
    quadrant: "tools",
    isNew: false,
    description:
      "Form library for React. Consider React Hook Form for better performance.",
  },
  {
    id: "70",
    name: "date-fns",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Modern JavaScript date utility library. Modular and functional approach.",
  },
  {
    id: "71",
    name: "Day.js",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Lightweight date library. Moment.js-compatible API with tiny footprint.",
  },
  {
    id: "72",
    name: "Lodash",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "JavaScript utility library. Provides utility functions for common programming tasks.",
  },
  {
    id: "73",
    name: "Playwright",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "End-to-end testing framework. Cross-browser automation with excellent developer experience.",
  },
  {
    id: "74",
    name: "Vitest",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Blazing fast unit test framework. Vite-native testing with Jest-compatible API.",
  },
  {
    id: "75",
    name: "Testing Library",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Simple and complete testing utilities. Encourages good testing practices focused on user behavior.",
  },
  {
    id: "76",
    name: "Storybook",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Frontend workshop for building UI components and pages in isolation. Essential for design systems.",
  },
  {
    id: "77",
    name: "Prettier",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Opinionated code formatter. Enforces consistent code style across projects.",
  },
  {
    id: "78",
    name: "ESLint",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Pluggable JavaScript linter. Finds and fixes problems in your code.",
  },
  {
    id: "79",
    name: "Turborepo",
    ring: "trial",
    quadrant: "tools",
    isNew: true,
    description:
      "High-performance build system for JavaScript/TypeScript monorepos. Smart caching and parallel execution.",
  },
  {
    id: "80",
    name: "pnpm",
    ring: "adopt",
    quadrant: "tools",
    isNew: false,
    description:
      "Fast, disk space efficient package manager. Uses content-addressable storage for dependencies.",
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
