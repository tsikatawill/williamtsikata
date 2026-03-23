import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts } from "@/data/blog-posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | William Tsikata`,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-8">
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to blog
      </Link>
      <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
        <time dateTime={post.publishedAt}>
          {formatDate(post.publishedAt)}
        </time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readTime} min read</span>
      </div>
      <h1 className="font-heading text-2xl font-bold text-foreground">
        {post.title}
      </h1>
      <p className="mt-4 text-muted-foreground">{post.description}</p>
      <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6 text-center text-sm text-muted-foreground">
        Blog post content will go here.
      </div>
    </article>
  );
}
