import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { BlogPost } from "@/types/blog-post";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPostItem({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group border-border hover:bg-muted/50 flex flex-col gap-2 border-b px-2 py-5 transition-colors"
    >
      <div className="text-muted-foreground flex items-center gap-3 text-xs">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readTime} min read</span>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-foreground group-hover:text-primary text-base font-semibold transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
            {post.description}
          </p>
        </div>
        <ArrowUpRight
          size={20}
          className="text-muted-foreground group-hover:text-primary mt-1 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
        />
      </div>
    </Link>
  );
}
