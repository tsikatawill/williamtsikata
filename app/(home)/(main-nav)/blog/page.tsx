import { BlogList } from "@/components/blog-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on web development, design systems, accessibility, and the tools I use to build for the web.",
  openGraph: {
    title: "Blog | William Tsikata",
    description:
      "Thoughts on web development, design systems, accessibility, and the tools I use to build for the web.",
  },
};

export default function Blog() {
  return <BlogList />;
}
