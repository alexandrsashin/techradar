import type { TechEntry, Ring } from "../types/radar";

type BaseEntry = Omit<
  TechEntry,
  "detail" | "website" | "repository" | "resources"
>;

const baseEntries: BaseEntry[] = [
  // Methods & Techniques
  {
    id: "23",
    name: "TDD",
    ring: "adopt",
    quadrant: "methods",
    description:
      "Test-Driven Development. Writing tests before code to ensure quality and maintainability.",
  },
  {
    id: "24",
    name: "CI/CD",
    ring: "adopt",
    quadrant: "methods",
    description:
      "Continuous Integration and Continuous Deployment. Automated testing and deployment pipelines.",
  },
  {
    id: "25",
    name: "Microservices",
    ring: "adopt",
    quadrant: "methods",
    description:
      "Architectural pattern for building distributed systems as loosely coupled services.",
  },
  {
    id: "26",
    name: "Infrastructure as Code",
    ring: "adopt",
    quadrant: "methods",
    description:
      "Managing infrastructure through machine-readable definition files.",
  },
  {
    id: "27",
    name: "Domain-Driven Design",
    ring: "adopt",
    quadrant: "methods",
    description:
      "Strategic approach to software design that focuses on modeling the business domain.",
  },
  {
    id: "28",
    name: "Event Sourcing",
    ring: "trial",
    quadrant: "methods",
    description:
      "Storing state changes as a sequence of events. Useful for audit trails and temporal queries.",
  },
  {
    id: "29",
    name: "CQRS",
    ring: "trial",
    quadrant: "methods",
    description:
      "Command Query Responsibility Segregation. Separating read and write models for better scalability.",
  },
  {
    id: "30",
    name: "Pair Programming",
    ring: "adopt",
    quadrant: "methods",
    description:
      "Two developers working together at one workstation. Improves code quality and knowledge sharing.",
  },
  {
    id: "31",
    name: "Code Review",
    ring: "adopt",
    quadrant: "methods",
    description:
      "Systematic examination of code by peers. Essential quality assurance practice.",
  },
  {
    id: "32",
    name: "Chaos Engineering",
    ring: "assess",
    quadrant: "methods",
    description:
      "Testing system resilience by intentionally introducing failures in production.",
  },
  {
    id: "33",
    name: "Gitflow",
    ring: "hold",
    quadrant: "methods",
    description:
      "Git branching model. Considered too complex for modern CI/CD practices.",
  },
  {
    id: "34",
    name: "Trunk-Based Development",
    ring: "adopt",
    quadrant: "methods",
    description:
      "Development model with short-lived branches and frequent merges to main.",
  },
  {
    id: "35",
    name: "BDD",
    ring: "trial",
    quadrant: "methods",
    description:
      "Behavior-Driven Development. Using natural language to describe test scenarios.",
  },
  {
    id: "36",
    name: "API-First Design",
    ring: "adopt",
    quadrant: "methods",
    description:
      "Designing APIs before implementation. Ensures better integration and documentation.",
  },
  {
    id: "37",
    name: "Zero Trust Security",
    ring: "adopt",
    quadrant: "methods",
    description:
      "Security model that assumes no implicit trust. Verify every request regardless of source.",
  },

  // Languages & Frameworks
  {
    id: "1",
    name: "TypeScript",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "Strongly typed programming language that builds on JavaScript. Recommended for all new projects requiring type safety and better tooling support.",
  },
  {
    id: "2",
    name: "Python",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "Versatile language for backend services, data science, and automation. Industry standard for ML/AI projects.",
  },
  {
    id: "3",
    name: "Rust",
    ring: "trial",
    quadrant: "languages-frameworks",
    description:
      "Systems programming language focused on safety and performance. Being evaluated for performance-critical services.",
  },
  {
    id: "4",
    name: "Go",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "Efficient language for microservices and cloud-native applications. Excellent concurrency support.",
  },
  {
    id: "5",
    name: "React",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "Component-based library for building user interfaces. Default choice for web applications.",
  },
  {
    id: "6",
    name: "Next.js",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "React framework with server-side rendering and static generation. Recommended for production web apps.",
  },
  {
    id: "7",
    name: "Vue 3",
    ring: "trial",
    quadrant: "languages-frameworks",
    description:
      "Progressive framework for building UIs. Being evaluated for specific use cases.",
  },
  {
    id: "8",
    name: "Svelte",
    ring: "assess",
    quadrant: "languages-frameworks",
    description:
      "Compiler-based framework with minimal runtime. Under assessment for performance-critical UIs.",
  },
  {
    id: "9",
    name: "FastAPI",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "Modern Python web framework for building APIs. High performance with automatic documentation.",
  },
  {
    id: "38",
    name: "Django",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "High-level Python web framework. Batteries-included approach for rapid development.",
  },
  {
    id: "39",
    name: "Spring Boot",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "Java framework for building production-ready applications. Strong enterprise support.",
  },
  {
    id: "40",
    name: "Express.js",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "Minimal Node.js web framework. Flexible and widely adopted for APIs.",
  },
  {
    id: "41",
    name: "NestJS",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "Progressive Node.js framework with TypeScript. Angular-inspired architecture for scalable backends.",
  },
  {
    id: "42",
    name: "Angular",
    ring: "hold",
    quadrant: "languages-frameworks",
    description:
      "Comprehensive frontend framework. Prefer React or Vue for new projects.",
  },
  {
    id: "43",
    name: "Solid.js",
    ring: "assess",
    quadrant: "languages-frameworks",
    description:
      "Reactive UI library with fine-grained reactivity. Exceptional performance without virtual DOM.",
  },
  {
    id: "44",
    name: "Astro",
    ring: "trial",
    quadrant: "languages-frameworks",
    description:
      "Static site generator with partial hydration. Excellent for content-heavy sites.",
  },
  {
    id: "45",
    name: "Kotlin",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "Modern JVM language. Recommended for Android and backend development.",
  },
  {
    id: "46",
    name: "Swift",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description: "Apple's language for iOS/macOS development. Modern and safe.",
  },
  {
    id: "47",
    name: "Flutter",
    ring: "trial",
    quadrant: "languages-frameworks",
    description:
      "Cross-platform UI framework. Single codebase for mobile, web, and desktop.",
  },
  {
    id: "48",
    name: "Elixir",
    ring: "assess",
    quadrant: "languages-frameworks",
    description:
      "Functional language for scalable applications. Built on Erlang VM.",
  },
  {
    id: "49",
    name: "Phoenix",
    ring: "assess",
    quadrant: "languages-frameworks",
    description:
      "Elixir web framework. Real-time capabilities and high concurrency.",
  },
  {
    id: "50",
    name: "GraphQL",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "Query language for APIs. Efficient data fetching with flexible schemas.",
  },
  {
    id: "51",
    name: "tRPC",
    ring: "trial",
    quadrant: "languages-frameworks",
    description:
      "End-to-end typesafe APIs. No code generation needed for TypeScript projects.",
  },
  {
    id: "52",
    name: "Remix",
    ring: "trial",
    quadrant: "languages-frameworks",
    description:
      "Full-stack React framework. Focus on web fundamentals and progressive enhancement.",
  },
  {
    id: "53",
    name: "Node.js",
    ring: "adopt",
    quadrant: "languages-frameworks",
    description:
      "JavaScript runtime built on Chrome's V8 engine. Standard for backend JavaScript applications.",
  },
  {
    id: "54",
    name: "Deno",
    ring: "assess",
    quadrant: "languages-frameworks",
    description:
      "Modern runtime for JavaScript and TypeScript. Secure by default with built-in TypeScript support.",
  },
  {
    id: "55",
    name: "Bun",
    ring: "assess",
    quadrant: "languages-frameworks",
    description:
      "All-in-one JavaScript runtime & toolkit. Significantly faster than Node.js.",
  },

  // Tools
  {
    id: "10",
    name: "Vite",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Next-generation build tool. Significantly faster than traditional bundlers.",
  },
  {
    id: "11",
    name: "React Router",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Declarative routing library for React applications. Industry standard for client-side routing with support for nested routes, lazy loading, and data loading patterns.",
  },
  {
    id: "12",
    name: "Zod",
    ring: "adopt",
    quadrant: "tools",
    description:
      "TypeScript-first schema validation library. Provides type-safe runtime validation with excellent inference and composability for API payloads, form data, and configuration.",
  },
  {
    id: "13",
    name: "Docker",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Containerization platform. Standard for deployment and development environments.",
  },
  {
    id: "14",
    name: "Kubernetes",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Container orchestration platform. Used for production deployments.",
  },
  {
    id: "15",
    name: "ESBuild",
    ring: "trial",
    quadrant: "tools",
    description:
      "Extremely fast JavaScript bundler. Being evaluated as Vite alternative.",
  },
  {
    id: "16",
    name: "Terraform",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Infrastructure as code tool. Standard for managing cloud resources.",
  },
  {
    id: "56",
    name: "React Query (TanStack Query)",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Powerful data synchronization library for React. Handles server state management with caching, background updates, and automatic refetching.",
  },
  {
    id: "57",
    name: "Zustand",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Lightweight state management library. Simple API with minimal boilerplate for React applications.",
  },
  {
    id: "58",
    name: "Redux Toolkit",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Official Redux toolset with batteries included. Simplifies store setup and reduces boilerplate significantly.",
  },
  {
    id: "59",
    name: "Jotai",
    ring: "trial",
    quadrant: "tools",
    description:
      "Primitive and flexible state management for React. Atomic approach with bottom-up composition.",
  },
  {
    id: "60",
    name: "Axios",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Promise-based HTTP client. Supports request/response interceptors, automatic JSON transformation.",
  },
  {
    id: "61",
    name: "SWR",
    ring: "trial",
    quadrant: "tools",
    description:
      "React Hooks library for data fetching. Stale-while-revalidate strategy for optimal UX.",
  },
  {
    id: "62",
    name: "Tailwind CSS",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Utility-first CSS framework. Rapid UI development with design constraints built-in.",
  },
  {
    id: "63",
    name: "shadcn/ui",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Collection of re-usable components. Built with Radix UI and Tailwind CSS, copy-paste approach.",
  },
  {
    id: "64",
    name: "Radix UI",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Unstyled, accessible UI components. Excellent primitives for building design systems.",
  },
  {
    id: "65",
    name: "Material-UI (MUI)",
    ring: "adopt",
    quadrant: "tools",
    description:
      "React component library implementing Material Design. Comprehensive set of pre-built components.",
  },
  {
    id: "66",
    name: "Ant Design",
    ring: "trial",
    quadrant: "tools",
    description:
      "Enterprise-class UI design system. Rich component library for React applications.",
  },
  {
    id: "67",
    name: "Framer Motion",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Production-ready animation library for React. Simple API for complex animations.",
  },
  {
    id: "68",
    name: "React Hook Form",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Performant form library with easy validation. Minimal re-renders and flexible integration.",
  },
  {
    id: "69",
    name: "Formik",
    ring: "hold",
    quadrant: "tools",
    description:
      "Form library for React. Consider React Hook Form for better performance.",
  },
  {
    id: "70",
    name: "date-fns",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Modern JavaScript date utility library. Modular and functional approach.",
  },
  {
    id: "71",
    name: "Day.js",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Lightweight date library. Moment.js-compatible API with tiny footprint.",
  },
  {
    id: "72",
    name: "Lodash",
    ring: "adopt",
    quadrant: "tools",
    description:
      "JavaScript utility library. Provides utility functions for common programming tasks.",
  },
  {
    id: "73",
    name: "Playwright",
    ring: "adopt",
    quadrant: "tools",
    description:
      "End-to-end testing framework. Cross-browser automation with excellent developer experience.",
  },
  {
    id: "74",
    name: "Vitest",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Blazing fast unit test framework. Vite-native testing with Jest-compatible API.",
  },
  {
    id: "75",
    name: "Testing Library",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Simple and complete testing utilities. Encourages good testing practices focused on user behavior.",
  },
  {
    id: "76",
    name: "Storybook",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Frontend workshop for building UI components and pages in isolation. Essential for design systems.",
  },
  {
    id: "77",
    name: "Prettier",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Opinionated code formatter. Enforces consistent code style across projects.",
  },
  {
    id: "78",
    name: "ESLint",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Pluggable JavaScript linter. Finds and fixes problems in your code.",
  },
  {
    id: "79",
    name: "Turborepo",
    ring: "trial",
    quadrant: "tools",
    description:
      "High-performance build system for JavaScript/TypeScript monorepos. Smart caching and parallel execution.",
  },
  {
    id: "80",
    name: "pnpm",
    ring: "adopt",
    quadrant: "tools",
    description:
      "Fast, disk space efficient package manager. Uses content-addressable storage for dependencies.",
  },

  // Platforms
  {
    id: "17",
    name: "AWS",
    ring: "adopt",
    quadrant: "platforms",
    description:
      "Primary cloud platform. Comprehensive services for all workloads.",
  },
  {
    id: "18",
    name: "Vercel",
    ring: "adopt",
    quadrant: "platforms",
    description:
      "Platform for frontend deployment. Optimized for Next.js applications.",
  },
  {
    id: "19",
    name: "CloudFlare Workers",
    ring: "trial",
    quadrant: "platforms",
    description:
      "Edge computing platform. Being evaluated for low-latency applications.",
  },
  {
    id: "20",
    name: "Supabase",
    ring: "assess",
    quadrant: "platforms",
    description:
      "Open source Firebase alternative. Under assessment for rapid prototyping.",
  },
  {
    id: "21",
    name: "PostgreSQL",
    ring: "adopt",
    quadrant: "platforms",
    description: "Relational database. Default choice for structured data.",
  },
  {
    id: "22",
    name: "Redis",
    ring: "adopt",
    quadrant: "platforms",
    description:
      "In-memory data store. Used for caching and session management.",
  },
];

const ringGuidance: Record<Ring, string> = {
  adopt:
    "Use as a default choice; invest in upskilling and automation so teams can deliver quickly and safely.",
  trial:
    "Run contained pilots with clear success criteria before scaling to critical workloads.",
  assess:
    "Allocate exploration time for discovery spikes and gather feedback from early adopters.",
  hold: "Limit to existing footprints and plan migrations toward more sustainable options.",
};

const quadrantThemes: Record<BaseEntry["quadrant"], string> = {
  methods:
    "Practices that influence collaboration, release cadence, and how we design resilient systems.",
  "languages-frameworks":
    "Language and framework choices that shape developer experience, velocity, and runtime characteristics.",
  tools:
    "Tooling that improves local feedback loops, testing ergonomics, and operational robustness.",
  platforms:
    "Foundational services that power deployment targets, data persistence, and runtime environments.",
};

const defaultDetail = (entry: BaseEntry): string => {
  const guidance = ringGuidance[entry.ring];
  const focus = quadrantThemes[entry.quadrant];

  return `### Overview
${entry.description}

### Focus areas
${focus}

### Guidance
${guidance}`;
};

type EntryMeta = Partial<
  Pick<TechEntry, "detail" | "website" | "repository" | "resources">
>;

const entryMeta: Record<string, EntryMeta> = {
  "23": {
    detail: `### Practice highlights
- Lock expected behavior in tests before writing implementation code.
- Keeps regression feedback tight so refactors stay low risk.

### Team recommendations
- Pair TDD with trunk-based development to keep the build green.
- Keep unit tests fast and push slow end-to-end checks into separate pipelines.`,
    website: "https://martinfowler.com/bliki/TestDrivenDevelopment.html",
    resources: [
      {
        label: "Thoughtworks primer",
        url: "https://www.thoughtworks.com/insights/articles/test-driven-development",
      },
      {
        label: "xUnit Patterns",
        url: "https://xunitpatterns.com/Test-Driven%20Development.html",
      },
    ],
  },
  "24": {
    detail: `### Practice highlights
- Automates build, test, and deployment steps for every change.
- Surfaces integration issues early across teams and services.

### Team recommendations
- Treat pipelines as code and review them like application logic.
- Measure mean time to restore as a top-level reliability metric.`,
    website: "https://continuousdelivery.com/",
    resources: [
      {
        label: "Accelerate book summary",
        url: "https://itrevolution.com/accelerate-the-book/",
      },
      {
        label: "GitHub Actions starter workflows",
        url: "https://docs.github.com/actions/using-workflows/about-workflows",
      },
    ],
  },
  "25": {
    detail: `### Practice highlights
- Breaks large systems into independent services with clear ownership.
- Enables technology diversity and focused scaling per capability.

### Team recommendations
- Introduce platform guardrails for observability, auth, and messaging.
- Keep domains small enough that a single team can deploy independently.`,
    website: "https://microservices.io/",
    resources: [
      {
        label: "Microservices patterns",
        url: "https://microservices.io/patterns/index.html",
      },
      {
        label: "Sam Newman talk",
        url: "https://www.youtube.com/watch?v=PFQnNFe27kU",
      },
    ],
  },
  "26": {
    detail: `### Practice highlights
- Models infrastructure alongside application code for repeatable builds.
- Provides auditability and drift detection across environments.

### Team recommendations
- Enforce code reviews on IaC modules before promotion to shared libraries.
- Pair automated policy checks with preview plans to catch misconfigurations.`,
    website:
      "https://www.hashicorp.com/resources/what-is-infrastructure-as-code",
    resources: [
      {
        label: "Terraform tutorials",
        url: "https://developer.hashicorp.com/terraform/tutorials",
      },
      {
        label: "Pulumi quickstart",
        url: "https://www.pulumi.com/docs/get-started/",
      },
    ],
  },
  "27": {
    detail: `### Practice highlights
- Aligns code boundaries with business language and ubiquitous terminology.
- Encourages discovery workshops that surface bounded contexts early.

### Team recommendations
- Keep context maps current; outdated diagrams lead to integration surprises.
- Combine DDD with event storming to visualise domain flows with stakeholders.`,
    website: "https://domainlanguage.com/ddd/",
    resources: [
      {
        label: "DDD reference",
        url: "https://domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf",
      },
      {
        label: "Event storming guide",
        url: "https://www.eventstorming.com/wp-content/uploads/2020/02/ES-Explained.pdf",
      },
    ],
  },
  "28": {
    detail: `### Practice highlights
- Stores every state mutation as an immutable event log.
- Enables temporal queries and audit history for critical systems.

### Team recommendations
- Pair with snapshotting to keep read performance predictable.
- Agree on event versioning rules before production to avoid consumer breakage.`,
    website: "https://martinfowler.com/eaaDev/EventSourcing.html",
    resources: [
      {
        label: "Greg Young intro",
        url: "https://www.youtube.com/watch?v=JHGkaShoyNs",
      },
      {
        label: "Event sourcing patterns",
        url: "https://docs.microsoft.com/azure/architecture/patterns/event-sourcing",
      },
    ],
  },
  "29": {
    detail: `### Practice highlights
- Splits write models from read models for scaling and performance.
- Keeps responsibility clear: commands mutate, queries simply return data.

### Team recommendations
- Use explicit messaging contracts between sides to avoid coupling.
- Rebuild projections automatically; manual repair slows incident recovery.`,
    website: "https://martinfowler.com/bliki/CQRS.html",
    resources: [
      {
        label: "Udi Dahan guidance",
        url: "https://udidahan.com/2009/12/09/clarified-cqrs/",
      },
      {
        label: "Microsoft CQRS sample",
        url: "https://docs.microsoft.com/azure/architecture/patterns/cqrs",
      },
    ],
  },
  "30": {
    detail: `### Practice highlights
- Promotes shared context and reduces ramp-up time for new joiners.
- Catches defects earlier because two sets of eyes review every change.

### Team recommendations
- Rotate pairs frequently to diffuse knowledge across the codebase.
- Capture pairing agreements (driver/navigator, ping-pong) within team working agreements.`,
    website: "https://martinfowler.com/articles/pairProgramming.html",
    resources: [
      {
        label: "Industrial Logic guide",
        url: "https://industriallogic.com/blog/pair-programming/",
      },
      {
        label: "Pairing anti-patterns",
        url: "https://martinfowler.com/articles/on-pair-programming.html",
      },
    ],
  },
  "31": {
    detail: `### Practice highlights
- Ensures coding standards are applied consistently across teams.
- Spreads architectural knowledge through lightweight review comments.

### Team recommendations
- Automate linting and tests to keep review focus on design discussions.
- Document review checklists per service to reinforce quality expectations.`,
    website: "https://google.github.io/eng-practices/review/",
    resources: [
      {
        label: "Smart code reviews",
        url: "https://smartbear.com/learn/code-review/what-is-code-review/",
      },
      {
        label: "Best kept secrets of code review",
        url: "https://engineering.atspotify.com/2020/09/the-best-kept-secret-of-code-review/",
      },
    ],
  },
  "32": {
    detail: `### Practice highlights
- Injects controlled failure to validate resilience assumptions.
- Builds confidence in incident response playbooks and observability.

### Team recommendations
- Run experiments in production-like environments with automated rollback.
- Capture learnings in runbooks and refine alert thresholds after every game day.`,
    website: "https://principlesofchaos.org/",
    resources: [
      {
        label: "Chaos Engineering book",
        url: "https://www.oreilly.com/library/view/chaos-engineering/9781492043852/",
      },
      {
        label: "Netflix Simian Army",
        url: "https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116",
      },
    ],
  },
  "33": {
    detail: `### Practice highlights
- Provides long-lived branches for release preparation and hotfixes.
- Useful when compliance demands explicit release snapshots.

### Team recommendations
- Default to trunk-based workflows; reserve Gitflow for legacy repos that cannot adopt CI/CD yet.
- Automate merge-back to avoid divergent histories when release branches linger.`,
    website: "https://nvie.com/posts/a-successful-git-branching-model/",
    resources: [
      {
        label: "Why we moved off Gitflow",
        url: "https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development",
      },
      {
        label: "Release branch strategies",
        url: "https://martinfowler.com/articles/feature-toggles.html",
      },
    ],
  },
  "34": {
    detail: `### Practice highlights
- Keeps integration overhead low with short-lived branches.
- Works well with feature toggles and continuous deployment.

### Team recommendations
- Enforce automated tests before merges; the main branch must stay releasable.
- Use feature flags rather than long-running branches for risky changes.`,
    website: "https://trunkbaseddevelopment.com/",
    resources: [
      {
        label: "Accelerate research",
        url: "https://services.google.com/fh/files/misc/state-of-devops-2019.pdf",
      },
      {
        label: "Atlassian guide",
        url: "https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development",
      },
    ],
  },
  "35": {
    detail: `### Practice highlights
- Uses shared language (Given-When-Then) to align business and engineering.
- Generates executable specifications that double as documentation.

### Team recommendations
- Keep scenarios high-level; push low-level checks into unit tests.
- Run living documentation sessions so stakeholders validate the vocabulary.`,
    website: "https://cucumber.io/docs/bdd/",
    resources: [
      {
        label: "SpecFlow guide",
        url: "https://specflow.org/bdd/",
      },
      {
        label: "Dan North on BDD",
        url: "https://dannorth.net/introducing-bdd/",
      },
    ],
  },
  "36": {
    detail: `### Practice highlights
- Encourages designing clear interfaces before implementation begins.
- Simplifies integration by treating APIs as first-class products.

### Team recommendations
- Use collaborative design reviews (e.g., Stoplight, SwaggerHub) before coding.
- Track API lifecycle metrics: adoption, breaking changes, and deprecation plans.`,
    website: "https://www.stoplight.io/open-api-first",
    resources: [
      {
        label: "API design guide",
        url: "https://apis.guru/awesome-openapi3/",
      },
      {
        label: "Microsoft API guidelines",
        url: "https://github.com/microsoft/api-guidelines",
      },
    ],
  },
  "37": {
    detail: `### Practice highlights
- Validates every request regardless of network location or identity claims.
- Reduces blast radius by segmenting workloads and enforcing least privilege.

### Team recommendations
- Use device posture, strong identity, and continuous monitoring together.
- Document escalation flows when adaptive policies block legitimate traffic.`,
    website: "https://www.cisa.gov/zero-trust-maturity-model",
    resources: [
      {
        label: "Google BeyondCorp",
        url: "https://cloud.google.com/beyondcorp",
      },
      {
        label: "NIST zero trust architecture",
        url: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
      },
    ],
  },
  "1": {
    detail: `### Why teams choose it
- Brings static analysis and autocomplete to any JavaScript codebase.
- Eliminates whole classes of runtime bugs through gradual typing.

### Team recommendations
- Enforce strict mode in new packages and migrate legacy modules incrementally.
- Share reusable type definitions in a dedicated internal package.`,
    website: "https://www.typescriptlang.org/",
    repository: "https://github.com/microsoft/TypeScript",
    resources: [
      {
        label: "TypeScript handbook",
        url: "https://www.typescriptlang.org/docs/handbook/intro.html",
      },
      {
        label: "TS deep dive",
        url: "https://basarat.gitbook.io/typescript/",
      },
    ],
  },
  "2": {
    detail: `### Why teams choose it
- Offers batteries-included tooling for automation, data science, and backend APIs.
- Massive ecosystem of libraries for ML, scripting, and cloud automation.

### Team recommendations
- Pin interpreter versions with pyenv or tox to ensure reproducible builds.
- Standardise on black and mypy to keep style and types consistent.`,
    website: "https://www.python.org/",
    repository: "https://github.com/python/cpython",
    resources: [
      {
        label: "Official tutorial",
        url: "https://docs.python.org/3/tutorial/",
      },
      {
        label: "Effective Python",
        url: "https://effectivepython.com/",
      },
    ],
  },
  "3": {
    detail: `### Why teams choose it
- Guarantees memory safety without garbage collection pauses.
- Produces lightweight binaries ideal for high-performance services.

### Team recommendations
- Pilot Rust for components with tight latency or security constraints.
- Invest in shared build scripts and Clippy configs to shorten onboarding.`,
    website: "https://www.rust-lang.org/",
    repository: "https://github.com/rust-lang/rust",
    resources: [
      {
        label: "The Rust book",
        url: "https://doc.rust-lang.org/book/",
      },
      {
        label: "Rustlings exercises",
        url: "https://github.com/rust-lang/rustlings",
      },
    ],
  },
  "4": {
    detail: `### Why teams choose it
- Simple concurrency model with goroutines and channels.
- Fast builds and small container images fit cloud-native workflows.

### Team recommendations
- Use gofmt and golangci-lint in every repository to keep code uniform.
- Capture service templates (logging, metrics, tracing) in starter repos.`,
    website: "https://go.dev/",
    repository: "https://github.com/golang/go",
    resources: [
      {
        label: "Tour of Go",
        url: "https://go.dev/tour/",
      },
      {
        label: "Effective Go",
        url: "https://go.dev/doc/effective_go",
      },
    ],
  },
  "5": {
    detail: `### Why teams choose it
- Component-driven patterns that align with modern design systems.
- Mature ecosystem of tooling, libraries, and platform support.

### Team recommendations
- Prefer function components with hooks; avoid legacy class patterns.
- Co-locate tests and stories with components to increase reusability.`,
    website: "https://react.dev/",
    repository: "https://github.com/facebook/react",
    resources: [
      {
        label: "React docs",
        url: "https://react.dev/learn",
      },
      {
        label: "Epic React patterns",
        url: "https://epicreact.dev/patterns/",
      },
    ],
  },
  "6": {
    detail: `### Why teams choose it
- Bridges static rendering, server components, and API routes elegantly.
- File-system routing and data fetching conventions reduce boilerplate.

### Team recommendations
- Enable instrumentation hooks to capture cache and ISR metrics in observability.
- Use the app router for new builds; migrate pages router gradually.`,
    website: "https://nextjs.org/",
    repository: "https://github.com/vercel/next.js",
    resources: [
      {
        label: "Next.js docs",
        url: "https://nextjs.org/docs",
      },
      {
        label: "Architecture guide",
        url: "https://vercel.com/docs/architecture",
      },
    ],
  },
  "7": {
    detail: `### Why teams explore it
- Progressive adoption model that works in legacy and greenfield stacks.
- Single-file components encourage tight coupling of template, script, and style.

### Team recommendations
- Standardise on the composition API to keep code modular.
- Use Vite-based tooling (Nuxt, Vitest) to match modern DX expectations.`,
    website: "https://vuejs.org/",
    repository: "https://github.com/vuejs/core",
    resources: [
      {
        label: "Vue documentation",
        url: "https://vuejs.org/guide/introduction.html",
      },
      {
        label: "Vue Mastery intro",
        url: "https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3",
      },
    ],
  },
  "8": {
    detail: `### Why teams assess it
- Compiles to tiny bundles with minimal runtime cost.
- Built-in reactivity model eliminates state management boilerplate.

### Team recommendations
- Compare hydration strategies when targeting large marketing surfaces.
- Track ecosystem maturity for accessibility and testing libraries before scaling.`,
    website: "https://svelte.dev/",
    repository: "https://github.com/sveltejs/svelte",
    resources: [
      {
        label: "Svelte tutorial",
        url: "https://learn.svelte.dev/tutorial/welcome-to-svelte",
      },
      {
        label: "Svelte Society talks",
        url: "https://www.youtube.com/c/SvelteSociety",
      },
    ],
  },
  "9": {
    detail: `### Why teams adopt it
- Auto-generates OpenAPI docs and client SDKs with minimal configuration.
- Leverages Python type hints for validation and serialization.

### Team recommendations
- Guard startup time by keeping dependency injection containers lightweight.
- Pair with Pydantic models shared across async workers for consistency.`,
    website: "https://fastapi.tiangolo.com/",
    repository: "https://github.com/tiangolo/fastapi",
    resources: [
      {
        label: "FastAPI docs",
        url: "https://fastapi.tiangolo.com/tutorial/",
      },
      {
        label: "Test-driven FastAPI",
        url: "https://testdriven.io/courses/tdd-fastapi/",
      },
    ],
  },
  "10": {
    detail: `### Why teams adopt it
- Lightning-fast dev server with hot module replacement out of the box.
- Uses native ESM during development and optimised Rollup builds for production.

### Team recommendations
- Define shared plugin presets so teams converge on consistent build outputs.
- Monitor bundle size budgets via Vite's Rollup reports in CI.`,
    website: "https://vitejs.dev/",
    repository: "https://github.com/vitejs/vite",
    resources: [
      {
        label: "Vite guide",
        url: "https://vitejs.dev/guide/",
      },
      {
        label: "Awesome Vite",
        url: "https://github.com/vitejs/awesome-vite",
      },
    ],
  },
  "38": {
    detail: `### Why teams adopt it
- Batteries-included admin, ORM, auth, and migrations accelerate delivery.
- Strong ecosystem for security hardening and compliance-heavy products.

### Team recommendations
- Split configuration via settings modules and load secrets at runtime.
- Combine with Django REST Framework for APIs that need robust serialization.`,
    website: "https://www.djangoproject.com/",
    repository: "https://github.com/django/django",
    resources: [
      {
        label: "Django documentation",
        url: "https://docs.djangoproject.com/en/stable/",
      },
      {
        label: "DRF guide",
        url: "https://www.django-rest-framework.org/tutorial/quickstart/",
      },
    ],
  },
  "39": {
    detail: `### Why teams adopt it
- Opinionated defaults for production-grade Java services.
- Auto-configuration trims boilerplate while keeping Spring flexibility.

### Team recommendations
- Monitor startup time and heap usage when layering multiple starters.
- Rely on Spring Actuator endpoints for health checks and metrics.`,
    website: "https://spring.io/projects/spring-boot",
    repository: "https://github.com/spring-projects/spring-boot",
    resources: [
      {
        label: "Spring guides",
        url: "https://spring.io/guides",
      },
      {
        label: "Spring Boot reference",
        url: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/",
      },
    ],
  },
  "40": {
    detail: `### Why teams adopt it
- Minimalistic API for HTTP services that scales with middleware.
- Massive ecosystem of plugins and community recipes.

### Team recommendations
- Wrap common middleware (logging, tracing, security) in reusable modules.
- Prefer async/await patterns and centralised error handling for maintainability.`,
    website: "https://expressjs.com/",
    repository: "https://github.com/expressjs/express",
    resources: [
      {
        label: "Express guides",
        url: "https://expressjs.com/en/guide/routing.html",
      },
      {
        label: "Security best practices",
        url: "https://expressjs.com/en/advanced/best-practice-security.html",
      },
    ],
  },
  "41": {
    detail: `### Why teams adopt it
- Brings familiar dependency injection and modules to Node.js backends.
- Built-in testing, validation, and GraphQL adapters reduce glue code.

### Team recommendations
- Share base modules for logging, configuration, and caching across services.
- Use class-validator and class-transformer to keep DTOs strict.`,
    website: "https://nestjs.com/",
    repository: "https://github.com/nestjs/nest",
    resources: [
      {
        label: "NestJS docs",
        url: "https://docs.nestjs.com/",
      },
      {
        label: "Awesome NestJS",
        url: "https://github.com/juliandavidmr/awesome-nestjs",
      },
    ],
  },
  "42": {
    detail: `### Why teams hold
- Enterprise-grade framework with batteries included, but heavy runtime cost.
- Complexity of zone.js and change detection impacts performance on rich UIs.

### Team recommendations
- Prioritise standalone components and signals if maintaining existing apps.
- Consider migration paths to lighter stacks for new product work.`,
    website: "https://angular.dev/",
    repository: "https://github.com/angular/angular",
    resources: [
      {
        label: "Angular docs",
        url: "https://angular.dev/overview",
      },
      {
        label: "Angular update guide",
        url: "https://update.angular.io/",
      },
    ],
  },
  "43": {
    detail: `### Why teams assess it
- Fine-grained reactivity delivers exceptional runtime performance.
- JSX-compatible syntax eases adoption for React-experienced teams.

### Team recommendations
- Evaluate tooling maturity (SSR, routing) before production commitments.
- Monitor ecosystem stability; lock versions during pilot projects.`,
    website: "https://www.solidjs.com/",
    repository: "https://github.com/solidjs/solid",
    resources: [
      {
        label: "Solid docs",
        url: "https://www.solidjs.com/docs/latest",
      },
      {
        label: "SolidStart guide",
        url: "https://start.solidjs.com/getting-started/quick-start",
      },
    ],
  },
  "44": {
    detail: `### Why teams trial it
- Partial hydration keeps content-heavy sites fast by default.
- UI-agnostic islands architecture integrates React, Vue, or Svelte.

### Team recommendations
- Use Astro integrations to standardise linting, testing, and image optimisation.
- Benchmark build output against existing SSR setups before migrating.`,
    website: "https://astro.build/",
    repository: "https://github.com/withastro/astro",
    resources: [
      {
        label: "Astro docs",
        url: "https://docs.astro.build/en/getting-started/",
      },
      {
        label: "Astro integrations",
        url: "https://astro.build/integrations/",
      },
    ],
  },
  "45": {
    detail: `### Why teams adopt it
- Interoperates seamlessly with JVM tooling while modernising syntax.
- Null safety, coroutines, and data classes improve developer velocity.

### Team recommendations
- Share multiplatform modules for shared domain logic across Android and backend services.
- Enforce detekt and ktlint to keep style consistent across repositories.`,
    website: "https://kotlinlang.org/",
    repository: "https://github.com/JetBrains/kotlin",
    resources: [
      {
        label: "Kotlin docs",
        url: "https://kotlinlang.org/docs/home.html",
      },
      {
        label: "Kotlin coroutines guide",
        url: "https://kotlinlang.org/docs/coroutines-guide.html",
      },
    ],
  },
  "46": {
    detail: `### Why teams adopt it
- Native Apple platform support with emphasis on safety and performance.
- SwiftUI and async/await make modern iOS development far more productive.

### Team recommendations
- Keep Swift Package Manager dependencies pinned to avoid Xcode drift.
- Pair with SwiftLint and SwiftFormat to maintain consistent styling.`,
    website: "https://swift.org/",
    repository: "https://github.com/apple/swift",
    resources: [
      {
        label: "The Swift Programming Language",
        url: "https://docs.swift.org/swift-book/",
      },
      {
        label: "Swift.org blog",
        url: "https://www.swift.org/blog/",
      },
    ],
  },
  "47": {
    detail: `### Why teams trial it
- Single codebase for iOS, Android, web, and desktop experiences.
- Hot reload and widget catalog accelerate UI experimentation.

### Team recommendations
- Profile startup time on lower-end Android hardware before committing.
- Abstract platform integrations cleanly to keep plugins manageable.`,
    website: "https://flutter.dev/",
    repository: "https://github.com/flutter/flutter",
    resources: [
      {
        label: "Flutter docs",
        url: "https://docs.flutter.dev/",
      },
      {
        label: "Flutter cookbook",
        url: "https://docs.flutter.dev/cookbook",
      },
    ],
  },
  "48": {
    detail: `### Why teams assess it
- Functional programming on BEAM delivers resilience and fault tolerance.
- Great fit for event-driven systems with massive concurrency needs.

### Team recommendations
- Start with services that need soft real-time guarantees (e.g., notifications).
- Use Credo and Dialyzer to keep codebase maintainable at scale.`,
    website: "https://elixir-lang.org/",
    repository: "https://github.com/elixir-lang/elixir",
    resources: [
      {
        label: "Elixir getting started",
        url: "https://elixir-lang.org/getting-started/introduction.html",
      },
      {
        label: "Elixir School",
        url: "https://elixirschool.com/en/lessons/basics/",
      },
    ],
  },
  "49": {
    detail: `### Why teams assess it
- Real-time friendly web framework built on Elixir and the BEAM.
- LiveView simplifies reactive UI without heavy client-side JavaScript.

### Team recommendations
- Instrument PubSub channels to understand fan-out cost under load.
- Share Phoenix contexts with domain teams to avoid anemic models.`,
    website: "https://www.phoenixframework.org/",
    repository: "https://github.com/phoenixframework/phoenix",
    resources: [
      {
        label: "Phoenix guides",
        url: "https://hexdocs.pm/phoenix/overview.html",
      },
      {
        label: "LiveView docs",
        url: "https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html",
      },
    ],
  },
  "50": {
    detail: `### Why teams adopt it
- Declarative data fetching that eliminates over- and under-fetching.
- Strong tooling for schema evolution and typed clients.

### Team recommendations
- Version schemas with directives instead of breaking changes.
- Monitor resolver performance and cache hot queries with persisted operations.`,
    website: "https://graphql.org/",
    repository: "https://github.com/graphql/graphql-spec",
    resources: [
      {
        label: "GraphQL docs",
        url: "https://graphql.org/learn/",
      },
      {
        label: "Apollo Odyssey",
        url: "https://www.apollographql.com/tutorials/",
      },
    ],
  },
  "51": {
    detail: `### Why teams trial it
- End-to-end type safety for APIs without code generation.
- Seamless integration with React Query keeps server state predictable.

### Team recommendations
- Keep routers modular to avoid a monolithic tRPC server.
- Define error formats up front so clients share consistent handling.`,
    website: "https://trpc.io/",
    repository: "https://github.com/trpc/trpc",
    resources: [
      {
        label: "tRPC docs",
        url: "https://trpc.io/docs",
      },
      {
        label: "End-to-end type safety",
        url: "https://colinhacks.com/essays/trpc",
      },
    ],
  },
  "52": {
    detail: `### Why teams trial it
- Leans on standard web APIs for routing, data, and progressive enhancement.
- First-class server rendering and nested routes keep UX fast.

### Team recommendations
- Prefer resource routes for mutations to inherit built-in data conventions.
- Deploy on edge-friendly runtimes (e.g., Remix on Vercel) to maximise benefits.`,
    website: "https://remix.run/",
    repository: "https://github.com/remix-run/remix",
    resources: [
      {
        label: "Remix docs",
        url: "https://remix.run/docs/en/main",
      },
      {
        label: "Remix stacks",
        url: "https://remix.run/stacks",
      },
    ],
  },
  "53": {
    detail: `### Why teams adopt it
- Ubiquitous runtime with vibrant package ecosystem and tooling.
- Event-driven architecture handles IO-heavy workloads efficiently.

### Team recommendations
- Use Node LTS releases and keep dependencies patched via automation.
- Instrument async contexts to maintain tracing continuity across awaits.`,
    website: "https://nodejs.org/",
    repository: "https://github.com/nodejs/node",
    resources: [
      {
        label: "Node docs",
        url: "https://nodejs.org/en/docs",
      },
      {
        label: "Node best practices",
        url: "https://github.com/goldbergyoni/nodebestpractices",
      },
    ],
  },
  "54": {
    detail: `### Why teams assess it
- Secure-by-default runtime with explicit permissions and modern tooling.
- Ships with first-class TypeScript support and built-in bundler/test runner.

### Team recommendations
- Evaluate compatibility with npm ecosystem using the std/node shim.
- Track cold start performance when deploying to serverless targets.`,
    website: "https://deno.com/",
    repository: "https://github.com/denoland/deno",
    resources: [
      {
        label: "Deno manual",
        url: "https://docs.deno.com/runtime/manual/",
      },
      {
        label: "Fresh framework",
        url: "https://fresh.deno.dev/docs/introduction/",
      },
    ],
  },
  "55": {
    detail: `### Why teams assess it
- Combines runtime, bundler, test runner, and package manager in one tool.
- Extremely fast dev server built on Zig and JavaScriptCore.

### Team recommendations
- Validate production parity for edge cases like native extensions.
- Pilot in internal tools before migrating customer-facing workloads.`,
    website: "https://bun.sh/",
    repository: "https://github.com/oven-sh/bun",
    resources: [
      {
        label: "Bun docs",
        url: "https://bun.sh/docs",
      },
      {
        label: "Bun roadmap",
        url: "https://github.com/oven-sh/bun#roadmap",
      },
    ],
  },
  "11": {
    detail: `### Why teams adopt it
- Declarative routing with nested layouts, loaders, and actions.
- Aligns with web standards thanks to the Remix core team stewardship.

### Team recommendations
- Centralise route configuration for analytics and access control policies.
- Use data routers to co-locate fetching and mutations with UI modules.`,
    website: "https://reactrouter.com/",
    repository: "https://github.com/remix-run/react-router",
    resources: [
      {
        label: "React Router docs",
        url: "https://reactrouter.com/en/main/start/tutorial",
      },
      {
        label: "Data router patterns",
        url: "https://reactrouter.com/en/main/route/route",
      },
    ],
  },
  "12": {
    detail: `### Why teams adopt it
- TypeScript-first schemas that infer static types automatically.
- Composable validators for APIs, forms, and configuration files.

### Team recommendations
- Export shared schemas from backend packages to prevent drift across clients.
- Combine with superstruct or io-ts only when advanced codecs are required.`,
    website: "https://zod.dev/",
    repository: "https://github.com/colinhacks/zod",
    resources: [
      {
        label: "Zod docs",
        url: "https://zod.dev/?id=basic-usage",
      },
      {
        label: "Awesome Zod",
        url: "https://github.com/colinhacks/awesome-zod",
      },
    ],
  },
  "13": {
    detail: `### Why teams adopt it
- Standardises local development and CI environments with containers.
- Rich ecosystem for registries, compose, and secure supply chain tooling.

### Team recommendations
- Use multi-stage builds to keep production images lean.
- Scan base images regularly and automate rebuilds when vulnerabilities appear.`,
    website: "https://www.docker.com/",
    repository: "https://github.com/docker/cli",
    resources: [
      {
        label: "Docker docs",
        url: "https://docs.docker.com/get-started/",
      },
      {
        label: "Docker best practices",
        url: "https://docs.docker.com/develop/dev-best-practices/",
      },
    ],
  },
  "14": {
    detail: `### Why teams adopt it
- Production-grade orchestration for containers and microservices.
- Ecosystem support for autoscaling, service meshes, and GitOps workflows.

### Team recommendations
- Keep manifests in Git and enforce admission policies via OPA or Kyverno.
- Use managed control planes (EKS, GKE) unless you have dedicated SRE capacity.`,
    website: "https://kubernetes.io/",
    repository: "https://github.com/kubernetes/kubernetes",
    resources: [
      {
        label: "Kubernetes docs",
        url: "https://kubernetes.io/docs/home/",
      },
      {
        label: "Production best practices",
        url: "https://kubernetes.io/docs/concepts/cluster-administration/cluster-administration-overview/",
      },
    ],
  },
  "15": {
    detail: `### Why teams trial it
- Blazing fast bundler and minifier written in Go.
- Simplifies build pipelines for packages that do not need complex transforms.

### Team recommendations
- Use esbuild in tooling pipelines (storybook, docs) to shorten iteration loops.
- Validate source map accuracy before replacing Rollup or Webpack in production.`,
    website: "https://esbuild.github.io/",
    repository: "https://github.com/evanw/esbuild",
    resources: [
      {
        label: "esbuild docs",
        url: "https://esbuild.github.io/getting-started/",
      },
      {
        label: "esbuild plugins",
        url: "https://github.com/esbuild/community-plugins",
      },
    ],
  },
  "16": {
    detail: `### Why teams adopt it
- Declarative infrastructure management across multiple cloud providers.
- Rich module ecosystem and state locking keep environments consistent.

### Team recommendations
- Store state in remote backends (S3 + DynamoDB) with mandatory locking.
- Enforce policy-as-code with Sentinel or Open Policy Agent to prevent drift.`,
    website: "https://www.terraform.io/",
    repository: "https://github.com/hashicorp/terraform",
    resources: [
      {
        label: "Terraform docs",
        url: "https://developer.hashicorp.com/terraform/docs",
      },
      {
        label: "Terraform best practices",
        url: "https://developer.hashicorp.com/terraform/tutorials/best-practices",
      },
    ],
  },
  "56": {
    detail: `### Why teams adopt it
- Handles caching, retries, and background refresh for remote data.
- Declarative hooks simplify server state management in React apps.

### Team recommendations
- Co-locate query keys in a central file to avoid duplication across modules.
- Enable devtools in storybook to surface cache behaviour during review.`,
    website: "https://tanstack.com/query/latest",
    repository: "https://github.com/TanStack/query",
    resources: [
      {
        label: "TanStack Query docs",
        url: "https://tanstack.com/query/latest/docs/react/overview",
      },
      {
        label: "Query patterns",
        url: "https://tkdodo.eu/blog/practical-react-query",
      },
    ],
  },
  "57": {
    detail: `### Why teams adopt it
- Minimal API for managing global state with excellent TypeScript support.
- No boilerplate and good interoperability with server state libraries.

### Team recommendations
- Keep store slices small and composable to preserve traceability.
- Use middleware for logging, persistence, and immer integration when needed.`,
    website: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    repository: "https://github.com/pmndrs/zustand",
    resources: [
      {
        label: "Zustand docs",
        url: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
      {
        label: "Zustand patterns",
        url: "https://tkdodo.eu/blog/zustand-introduction",
      },
    ],
  },
  "58": {
    detail: `### Why teams adopt it
- Reduces Redux ceremony with opinionated APIs and immer under the hood.
- Built-in RTK Query handles data fetching and caching elegantly.

### Team recommendations
- Use createSlice and createAsyncThunk for most scenarios; avoid legacy patterns.
- Generate selectors and types centrally to share between UI packages.`,
    website: "https://redux-toolkit.js.org/",
    repository: "https://github.com/reduxjs/redux-toolkit",
    resources: [
      {
        label: "RTK docs",
        url: "https://redux-toolkit.js.org/introduction/getting-started",
      },
      {
        label: "RTK best practices",
        url: "https://redux.js.org/usage/usage-with-typescript",
      },
    ],
  },
  "59": {
    detail: `### Why teams trial it
- Atoms-first model gives granular control over state subscriptions.
- Works with React Suspense and async selectors for smooth UX.

### Team recommendations
- Organise atoms in modules to prevent duplication and circular imports.
- Benchmark large trees to ensure re-render performance meets expectations.`,
    website: "https://jotai.org/",
    repository: "https://github.com/pmndrs/jotai",
    resources: [
      {
        label: "Jotai docs",
        url: "https://jotai.org/docs/introduction",
      },
      {
        label: "Jotai recipes",
        url: "https://jotai.org/docs/recipes",
      },
    ],
  },
  "60": {
    detail: `### Why teams adopt it
- Promise-based HTTP client supporting interceptors and cancellation.
- Works identically in Node.js and browsers for shared API clients.

### Team recommendations
- Centralise axios instances per service to standardise headers and retries.
- Surface request metrics via interceptors tied into observability tooling.`,
    website: "https://axios-http.com/",
    repository: "https://github.com/axios/axios",
    resources: [
      {
        label: "Axios docs",
        url: "https://axios-http.com/docs/intro",
      },
      {
        label: "Axios interceptors",
        url: "https://axios-http.com/docs/interceptors",
      },
    ],
  },
  "61": {
    detail: `### Why teams trial it
- Implements stale-while-revalidate pattern with minimal configuration.
- Great fit for Next.js and Vercel deployments with built-in cache helpers.

### Team recommendations
- Define cache keys carefully to avoid duplicate fetches across tabs.
- Pair with SWR middleware for auth token refresh and error handling.`,
    website: "https://swr.vercel.app/",
    repository: "https://github.com/vercel/swr",
    resources: [
      {
        label: "SWR docs",
        url: "https://swr.vercel.app/docs/getting-started",
      },
      {
        label: "SWR patterns",
        url: "https://swr.vercel.app/docs/advanced/cache",
      },
    ],
  },
  "62": {
    detail: `### Why teams adopt it
- Utility-first approach accelerates prototyping without leaving design tokens.
- JIT engine keeps bundles small while offering dynamic theming.

### Team recommendations
- Define shared config presets for spacing, colors, and typography across apps.
- Pair with components (Radix, shadcn/ui) to avoid rebuilding primitives.`,
    website: "https://tailwindcss.com/",
    repository: "https://github.com/tailwindlabs/tailwindcss",
    resources: [
      {
        label: "Tailwind docs",
        url: "https://tailwindcss.com/docs/installation",
      },
      {
        label: "Tailwind UI patterns",
        url: "https://tailwindui.com/resources",
      },
    ],
  },
  "63": {
    detail: `### Why teams adopt it
- Copy-paste friendly component library built on Radix and Tailwind.
- Maintains accessibility and design consistency with minimal setup.

### Team recommendations
- Fork the repo to align tokens and motion specs with your design system.
- Keep components up to date; upstream improvements land frequently.`,
    website: "https://ui.shadcn.com/",
    repository: "https://github.com/shadcn/ui",
    resources: [
      {
        label: "Component docs",
        url: "https://ui.shadcn.com/docs/components",
      },
      {
        label: "Theming guide",
        url: "https://ui.shadcn.com/docs/theming",
      },
    ],
  },
  "64": {
    detail: `### Why teams adopt it
- Provides accessible, unstyled primitives ready for custom design systems.
- Works across frameworks with consistent APIs and WAI-ARIA compliance.

### Team recommendations
- Compose primitives into shared components and document usage in Storybook.
- Include axe-core tests to ensure accessibility regressions are caught.`,
    website: "https://www.radix-ui.com/",
    repository: "https://github.com/radix-ui/primitives",
    resources: [
      {
        label: "Radix docs",
        url: "https://www.radix-ui.com/docs/primitives/overview/introduction",
      },
      {
        label: "Accessibility checklist",
        url: "https://www.radix-ui.com/primitives/docs/guides/accessibility",
      },
    ],
  },
  "65": {
    detail: `### Why teams adopt it
- Mature Material Design implementation with extensive component coverage.
- Supports theming, data grids, and date pickers out of the box.

### Team recommendations
- Theme via CSS variables to align with branding without heavy overrides.
- Use tree-shaking and lab components selectively to control bundle size.`,
    website: "https://mui.com/",
    repository: "https://github.com/mui/material-ui",
    resources: [
      {
        label: "MUI docs",
        url: "https://mui.com/material-ui/getting-started/overview/",
      },
      {
        label: "Material design guidelines",
        url: "https://m3.material.io/",
      },
    ],
  },
  "66": {
    detail: `### Why teams trial it
- Comprehensive enterprise UI kit popular in Asia-Pacific markets.
- Rich data entry components and business-friendly themes.

### Team recommendations
- Evaluate against accessibility requirements; customise focus states where needed.
- Configure babel-plugin-import to enable per-component bundling.`,
    website: "https://ant.design/",
    repository: "https://github.com/ant-design/ant-design",
    resources: [
      {
        label: "Ant Design docs",
        url: "https://ant.design/docs/react/introduce",
      },
      {
        label: "Design resources",
        url: "https://ant.design/docs/spec/introduce",
      },
    ],
  },
  "67": {
    detail: `### Why teams adopt it
- Intuitive animation API for gestures, layout transitions, and scroll-linked effects.
- Works with server components and headless UI libraries seamlessly.

### Team recommendations
- Profile animation performance on low-end devices before shipping complex flows.
- Centralise motion tokens (duration, easing) to maintain consistency.`,
    website: "https://www.framer.com/motion/",
    repository: "https://github.com/framer/motion",
    resources: [
      {
        label: "Framer Motion docs",
        url: "https://www.framer.com/motion/introduction/",
      },
      {
        label: "Motion examples",
        url: "https://www.framer.com/motion/examples/",
      },
    ],
  },
  "68": {
    detail: `### Why teams adopt it
- Minimises re-renders by subscribing inputs to isolated state slices.
- Integrates with schema validators like Zod for ergonomic validation.

### Team recommendations
- Use the resolver pattern for consistent validation feedback.
- Document complex forms in Storybook with play functions to surface behavior.`,
    website: "https://react-hook-form.com/",
    repository: "https://github.com/react-hook-form/react-hook-form",
    resources: [
      {
        label: "React Hook Form docs",
        url: "https://react-hook-form.com/get-started",
      },
      {
        label: "Best practices",
        url: "https://react-hook-form.com/advanced-usage",
      },
    ],
  },
  "69": {
    detail: `### Why teams hold
- Provides a convenient abstraction for form state but adds extra renders.
- Modern alternatives like React Hook Form offer better performance.

### Team recommendations
- Maintain existing Formik-based flows but avoid using it for new work.
- Plan gradual rewrites to lighter libraries when touching legacy forms.`,
    website: "https://formik.org/",
    repository: "https://github.com/jaredpalmer/formik",
    resources: [
      {
        label: "Formik docs",
        url: "https://formik.org/docs/overview",
      },
      {
        label: "Upgrading guide",
        url: "https://formik.org/docs/guides/migrating-v2",
      },
    ],
  },
  "70": {
    detail: `### Why teams adopt it
- Pure functions for date manipulation without mutating inputs.
- Tree-shakeable modules keep bundles lean.

### Team recommendations
- Prefer explicit imports (date-fns/format) to avoid bundling entire library.
- Configure timezone handling explicitly when running on the server.`,
    website: "https://date-fns.org/",
    repository: "https://github.com/date-fns/date-fns",
    resources: [
      {
        label: "date-fns docs",
        url: "https://date-fns.org/docs/Getting-Started",
      },
      {
        label: "Upgrade guide",
        url: "https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md",
      },
    ],
  },
  "71": {
    detail: `### Why teams adopt it
- Moment.js-compatible API with 2 kB footprint.
- Immutable instances reduce accidental side effects.

### Team recommendations
- Localise calendars carefully; rely on Intl APIs where available.
- Use plugins sparingly to keep bundle size low.`,
    website: "https://day.js.org/",
    repository: "https://github.com/iamkun/dayjs",
    resources: [
      {
        label: "Day.js docs",
        url: "https://day.js.org/docs/en/installation/installation",
      },
      {
        label: "Plugin list",
        url: "https://day.js.org/docs/en/plugin/plugin",
      },
    ],
  },
  "72": {
    detail: `### Why teams adopt it
- Trusted utility belt for arrays, objects, and functional patterns.
- Excellent TypeScript support for complex manipulation.

### Team recommendations
- Import by path (lodash/merge) to keep bundles slim.
- Replace with native methods when available to reduce dependencies.`,
    website: "https://lodash.com/",
    repository: "https://github.com/lodash/lodash",
    resources: [
      {
        label: "Lodash docs",
        url: "https://lodash.com/docs/",
      },
      {
        label: "You might not need Lodash",
        url: "https://youmightnotneed.com/lodash/",
      },
    ],
  },
  "73": {
    detail: `### Why teams adopt it
- Cross-browser automation with first-party support for Chromium, Firefox, and WebKit.
- API for tracing, HAR recording, and network mocking aids debugging.

### Team recommendations
- Run tests headless in CI but record traces for flaky investigations.
- Group specs by user journeys to keep suites parallelisable.`,
    website: "https://playwright.dev/",
    repository: "https://github.com/microsoft/playwright",
    resources: [
      {
        label: "Playwright docs",
        url: "https://playwright.dev/docs/intro",
      },
      {
        label: "Trace viewer",
        url: "https://playwright.dev/docs/trace-viewer",
      },
    ],
  },
  "74": {
    detail: `### Why teams adopt it
- Jest-compatible API with Vite-powered performance.
- Built-in snapshotting, coverage, and watch mode keep DX smooth.

### Team recommendations
- Share test utilities across packages to reuse mocks and setup logic.
- Enable threads and isolates to speed up large monorepo test suites.`,
    website: "https://vitest.dev/",
    repository: "https://github.com/vitest-dev/vitest",
    resources: [
      {
        label: "Vitest docs",
        url: "https://vitest.dev/guide/",
      },
      {
        label: "Vitest examples",
        url: "https://github.com/vitest-dev/vitest/tree/main/examples",
      },
    ],
  },
  "75": {
    detail: `### Why teams adopt it
- Encourages testing from the user's perspective with DOM queries.
- Works seamlessly with Jest, Vitest, and Cypress component tests.

### Team recommendations
- Avoid implementation-specific selectors; prefer accessible roles.
- Pair with Storybook play functions to reuse scenarios across tooling.`,
    website: "https://testing-library.com/",
    repository: "https://github.com/testing-library/react-testing-library",
    resources: [
      {
        label: "Testing Library docs",
        url: "https://testing-library.com/docs/react-testing-library/intro/",
      },
      {
        label: "Common mistakes",
        url: "https://kentcdodds.com/blog/common-mistakes-with-react-testing-library",
      },
    ],
  },
  "76": {
    detail: `### Why teams adopt it
- Living style guide and component workbench enabling UI collaboration.
- Supports docs, interaction tests, and design tokens in one place.

### Team recommendations
- Configure automatic screenshot and accessibility checks for every story.
- Publish Storybook to Vercel/Chromatic on every PR for asynchronous review.`,
    website: "https://storybook.js.org/",
    repository: "https://github.com/storybookjs/storybook",
    resources: [
      {
        label: "Storybook docs",
        url: "https://storybook.js.org/docs",
      },
      {
        label: "Storybook testing",
        url: "https://storybook.js.org/docs/react/writing-tests/introduction",
      },
    ],
  },
  "77": {
    detail: `### Why teams adopt it
- Eliminates style debates by enforcing a single canonical format.
- Supports code blocks inside markdown, JSON, YAML, and more.

### Team recommendations
- Run Prettier in pre-commit hooks and CI to prevent drift.
- Align print width and tab settings with ESLint to avoid conflicts.`,
    website: "https://prettier.io/",
    repository: "https://github.com/prettier/prettier",
    resources: [
      {
        label: "Prettier docs",
        url: "https://prettier.io/docs/en/index.html",
      },
      {
        label: "Editor integration",
        url: "https://prettier.io/docs/en/editors.html",
      },
    ],
  },
  "78": {
    detail: `### Why teams adopt it
- Pluggable linting for JavaScript, TypeScript, JSX, and beyond.
- Ecosystem of rules helps catch bugs, accessibility issues, and style drift.

### Team recommendations
- Share a root configuration with flat configs to keep rules aligned.
- Enable eslint-plugin-security and jsx-a11y for production-grade coverage.`,
    website: "https://eslint.org/",
    repository: "https://github.com/eslint/eslint",
    resources: [
      {
        label: "ESLint docs",
        url: "https://eslint.org/docs/latest/use/getting-started",
      },
      {
        label: "Config migration guide",
        url: "https://eslint.org/docs/latest/use/configure/migration-guide",
      },
    ],
  },
  "79": {
    detail: `### Why teams trial it
- Remote caching and task pipelines accelerate monorepo builds.
- Works across JavaScript and Rust tooling with minimal configuration.

### Team recommendations
- Define pipeline dependencies explicitly to avoid hidden build order coupling.
- Monitor cache hit rates; tune inputs to maximise reuse.`,
    website: "https://turbo.build/repo",
    repository: "https://github.com/vercel/turbo",
    resources: [
      {
        label: "Turborepo docs",
        url: "https://turbo.build/repo/docs",
      },
      {
        label: "Remote caching guide",
        url: "https://turbo.build/repo/docs/features/remote-caching",
      },
    ],
  },
  "80": {
    detail: `### Why teams adopt it
- Content-addressable storage saves disk space and speeds up installs.
- Strict node_modules layout prevents phantom dependencies.

### Team recommendations
- Configure workspace filters to keep scripts scoped and fast.
- Mirror internal registries to take advantage of pnpm's caching strategy.`,
    website: "https://pnpm.io/",
    repository: "https://github.com/pnpm/pnpm",
    resources: [
      {
        label: "pnpm docs",
        url: "https://pnpm.io/motivation",
      },
      {
        label: "Workspace guide",
        url: "https://pnpm.io/workspaces",
      },
    ],
  },
  "17": {
    detail: `### Why teams adopt it
- Comprehensive cloud portfolio covering compute, data, analytics, and ML.
- Mature global footprint with compliance offerings for regulated workloads.

### Team recommendations
- Standardise on infrastructure blueprints (VPC, IAM, networking) to avoid drift.
- Leverage Control Tower and Organizations for guardrails and cost governance.`,
    website: "https://aws.amazon.com/",
    repository: "https://github.com/aws/aws-cdk",
    resources: [
      {
        label: "Well-Architected framework",
        url: "https://aws.amazon.com/architecture/well-architected/",
      },
      {
        label: "AWS workshops",
        url: "https://workshops.aws/",
      },
    ],
  },
  "18": {
    detail: `### Why teams adopt it
- Zero-config platform for static and serverless frontends with global edge cache.
- Tight integration with Next.js and automatic preview deployments.

### Team recommendations
- Use environment protection rules and preview comments in PR workflow.
- Monitor function cold starts; upgrade to edge functions when latency matters.`,
    website: "https://vercel.com/",
    repository: "https://github.com/vercel/vercel",
    resources: [
      {
        label: "Vercel docs",
        url: "https://vercel.com/docs",
      },
      {
        label: "Observability guide",
        url: "https://vercel.com/docs/observability/overview",
      },
    ],
  },
  "19": {
    detail: `### Why teams trial it
- Edge compute close to users with sub-millisecond cold starts.
- Built-in KV, durable objects, and R2 unlock globally consistent apps.

### Team recommendations
- Design for eventual consistency; durable objects help coordinate shared state.
- Use Wrangler to manage environments and keep secrets synced.`,
    website: "https://developers.cloudflare.com/workers/",
    repository: "https://github.com/cloudflare/workers-sdk",
    resources: [
      {
        label: "Workers docs",
        url: "https://developers.cloudflare.com/workers/learning/",
      },
      {
        label: "Full-stack starter",
        url: "https://github.com/cloudflare/workers-sdk/tree/main/templates/worker",
      },
    ],
  },
  "20": {
    detail: `### Why teams assess it
- Open-source alternative to Firebase with Postgres, auth, and storage baked in.
- Rapid prototyping velocity with SQL-first mindset.

### Team recommendations
- Validate multi-region availability for production workloads.
- Automate database migrations early; Prisma or Supabase CLI keep schema in sync.`,
    website: "https://supabase.com/",
    repository: "https://github.com/supabase/supabase",
    resources: [
      {
        label: "Supabase docs",
        url: "https://supabase.com/docs",
      },
      {
        label: "Launch week replays",
        url: "https://www.youtube.com/playlist?list=PL5S_Z24jS1h2GWPBHRkeNawuO_Z7XXdck",
      },
    ],
  },
  "21": {
    detail: `### Why teams adopt it
- Reliable open-source relational database with rich SQL and indexing features.
- Excellent extensibility (PostGIS, logical replication) for complex workloads.

### Team recommendations
- Use managed offerings (RDS, Cloud SQL) unless you have DBA capacity.
- Monitor vacuum and autovacuum settings to avoid bloat.`,
    website: "https://www.postgresql.org/",
    repository: "https://github.com/postgres/postgres",
    resources: [
      {
        label: "Postgres docs",
        url: "https://www.postgresql.org/docs/current/",
      },
      {
        label: "Postgres weekly",
        url: "https://www.postgresqlweekly.com/",
      },
    ],
  },
  "22": {
    detail: `### Why teams adopt it
- In-memory data store with versatile data structures and modules.
- Powers caching, queues, leaderboards, and session storage with low latency.

### Team recommendations
- Run Redis in managed mode (Elasticache, Redis Enterprise) for durability.
- Use Redis Streams or Pub/Sub with clear retention policies to avoid surprises.`,
    website: "https://redis.io/",
    repository: "https://github.com/redis/redis",
    resources: [
      {
        label: "Redis docs",
        url: "https://redis.io/docs/latest/",
      },
      {
        label: "Redis patterns",
        url: "https://redis.io/docs/interact/data-types/streams/",
      },
    ],
  },
};

export const techEntries: TechEntry[] = baseEntries.map((entry) => {
  const meta = entryMeta[entry.id] ?? {};
  const resources =
    meta.resources && meta.resources.length > 0 ? meta.resources : undefined;

  return {
    ...entry,
    detail: meta.detail ?? defaultDetail(entry),
    website: meta.website,
    repository: meta.repository,
    resources,
  };
});
