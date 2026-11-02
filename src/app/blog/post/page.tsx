"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { BlogPost } from "@/types/blog";

function estimateMinutes(content: string) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
}

export default function BlogPostPage() {
  const params = useSearchParams();
  const slug = params.get("slug");
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      if (!slug) {
        setError("No article was selected.");
        setLoading(false);
        return;
      }
      try {
        const { data, error: queryError } = await getSupabaseBrowserClient()
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .eq("status", "published")
          .maybeSingle();
        if (queryError) throw queryError;
        if (active) {
          setPost(data as BlogPost | null);
          if (!data) setError("This article could not be found.");
        }
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Unable to load this article.");
      } finally {
        if (active) setLoading(false);
      }
    }
    void load();
    return () => { active = false; };
  }, [slug]);

  return (
    <main className="min-h-[70vh] bg-slate-50 py-12 sm:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-500">Loading article…</div>
        ) : error || !post ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h1 className="text-2xl font-bold text-slate-900">Article unavailable</h1>
            <p className="mt-2 text-slate-600">{error || "Please return to the blog and choose another article."}</p>
          </div>
        ) : (
          <>
            {post.cover_image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.cover_image} alt={post.title} className="mb-8 aspect-[16/9] w-full rounded-3xl object-cover shadow-soft" />
            )}
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{post.category}</span>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5 border-y border-slate-200 py-4 text-sm text-slate-500">
              <span>By {post.author_name}</span>
              {post.published_at && <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{new Date(post.published_at).toLocaleDateString()}</span>}
              <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" />{estimateMinutes(post.content)} min read</span>
            </div>
            <div className="prose prose-slate mt-10 max-w-none whitespace-pre-wrap break-words text-base leading-8">{post.content}</div>
            {post.tags?.length > 0 && <div className="mt-10 flex flex-wrap gap-2">{post.tags.map(tag => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">#{tag}</span>)}</div>}
          </>
        )}
      </article>
    </main>
  );
}
