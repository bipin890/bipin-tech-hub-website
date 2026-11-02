"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpen, Search, Clock3, CalendarDays } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { BlogPost } from "@/types/blog";

const categories = ["All", "Technology", "Cybersecurity", "Web Development", "AI Tools", "Tutorials & Guides", "Digital Services Nepal"];

function readingTime(content: string) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let active = true;
    async function loadPosts() {
      try {
        const { data, error: queryError } = await getSupabaseBrowserClient()
          .from("blog_posts").select("*").eq("status", "published")
          .order("published_at", { ascending: false });
        if (queryError) throw queryError;
        if (active) setPosts((data || []) as BlogPost[]);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Unable to load blog posts.");
      } finally {
        if (active) setLoading(false);
      }
    }
    void loadPosts();
    return () => { active = false; };
  }, []);

  const visiblePosts = useMemo(() => posts.filter(post => {
    const matchesCategory = category === "All" || post.category === category;
    const term = search.trim().toLowerCase();
    const matchesSearch = !term || [post.title, post.excerpt, post.category, ...(post.tags || [])].join(" ").toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  }), [posts, category, search]);

  return (
    <main className="min-h-[70vh] bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700"><BookOpen className="h-4 w-4" /> BIPIN TECH HUB Blog</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Ideas, guides & practical tech knowledge.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Explore useful tutorials, digital service guides, web development tips and technology articles for learners in Nepal and beyond.</p>
          </div>
          <div className="mt-9 max-w-xl">
            <label htmlFor="blog-search" className="sr-only">Search articles</label>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100">
              <Search className="h-5 w-5 text-slate-400" />
              <input id="blog-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles, topics or tags..." className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(item => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${category === item ? "bg-blue-600 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"}`}>{item}</button>)}
        </div>
        {loading ? <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">Loading latest articles…</div> :
          error ? <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-800">{error}<p className="mt-1 text-sm">Please configure Supabase to enable the blog.</p></div> :
          visiblePosts.length === 0 ? <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center"><BookOpen className="mx-auto h-10 w-10 text-slate-300"/><h2 className="mt-4 text-xl font-bold text-slate-900">No articles found</h2><p className="mt-2 text-slate-500">{posts.length === 0 ? "New articles will appear here once published." : "Try another search or category."}</p></div> :
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map(post => <article key={post.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card-hover">
              <Link href={`/blog/post?slug=${encodeURIComponent(post.slug)}`} className="block">
                {post.cover_image ? <div className="aspect-[16/9] overflow-hidden bg-slate-100"><img src={post.cover_image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/></div> : <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100"><BookOpen className="h-12 w-12 text-blue-300"/></div>}
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">{post.category}</span>
                  <h2 className="mt-3 line-clamp-2 text-xl font-bold leading-snug text-slate-900 group-hover:text-blue-700">{post.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    {post.published_at && <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5"/>{new Date(post.published_at).toLocaleDateString()}</span>}
                    <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5"/>{readingTime(post.content)} min read</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></span>
                </div>
              </Link>
            </article>)}
          </div>}
      </section>
    </main>
  );
}
