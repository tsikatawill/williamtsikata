import { PenLine } from "lucide-react";

import { BlogPostItem } from "@/components/blog-post-item";
import { blogPosts } from "@/data/blog-posts";

export function BlogList() {
  if (blogPosts.length === 0) {
    return (
      <section className="py-6">
        <div className="border-border bg-muted/30 flex flex-col items-center justify-center rounded-lg border py-16 text-center">
          <PenLine className="text-muted-foreground mb-3 size-8" />
          <p className="font-heading text-foreground text-lg font-semibold">
            Blog posts are on the way
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            I&apos;m currently writing some new posts. <br />
            Check back soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6">
      <div className="flex flex-col">
        {blogPosts.map((post) => (
          <BlogPostItem key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
