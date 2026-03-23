import type { BlogPost } from "@/types/blog-post";

export const blogPosts: BlogPost[] = [];
export const blogPostss: BlogPost[] = [
  {
    id: "1",
    slug: "building-accessible-design-systems",
    title: "Building Accessible Design Systems",
    description:
      "How to bake accessibility into your component library from day one, with practical patterns for color contrast, focus management, and screen reader support.",
    publishedAt: "2026-03-15",
    readTime: 8,
  },
  {
    id: "2",
    slug: "server-components-mental-model",
    title: "The Mental Model for Server Components",
    description:
      "A practical guide to thinking about React Server Components — when to use them, where the boundaries are, and how data flows between server and client.",
    publishedAt: "2026-02-28",
    readTime: 12,
  },
  {
    id: "3",
    slug: "type-safe-api-routes",
    title: "Type-Safe API Routes with Zod and Next.js",
    description:
      "End-to-end type safety from your API layer to the frontend using Zod schemas, with validation that works at both compile time and runtime.",
    publishedAt: "2026-02-10",
    readTime: 6,
  },
  {
    id: "4",
    slug: "css-color-theory-for-developers",
    title: "CSS Color Theory for Developers",
    description:
      "Understanding OKLCH, perceptual uniformity, and how to build color palettes that actually work — no design degree required.",
    publishedAt: "2026-01-22",
    readTime: 10,
  },
  {
    id: "5",
    slug: "optimistic-ui-patterns",
    title: "Optimistic UI Patterns That Feel Right",
    description:
      "Strategies for making your app feel instant with optimistic updates, rollback handling, and the subtle UX details that make or break the experience.",
    publishedAt: "2026-01-05",
    readTime: 7,
  },
];
