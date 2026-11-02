"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { useLanguage } from "@/context/LanguageContext";
import type { BlogPost } from "@/types/blog";

export function LatestBlogSection() {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    let active = true;
    async function load() {
      try {
        const { data } = await getSupabaseBrowserClient().from("blog_posts").select("*")
          .eq("status", "published").order("published_at", { ascending: false }).limit(3);
        if (active && data) setPosts(data as BlogPost[]);
      } catch { /* Blog preview stays hidden until Supabase is configured. */ }
    }
    void load();
    return () => { active = false; };
  }, []);

  if (posts.length === 0) return null;
  const ne = language === "ne";
  return <section className="bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700"><BookOpen className="h-4 w-4"/> {ne ? "ज्ञान र ट्युटोरियल" : "Knowledge & Tutorials"}</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">{ne ? "हाम्रा नयाँ लेखहरू" : "Latest from our blog"}</h2>
          <p className="mt-2 max-w-2xl text-slate-600">{ne ? "प्रविधि, डिजिटल सेवा र उपयोगी गाइडहरू पढ्नुहोस्।" : "Explore practical technology articles, digital service guides and tutorials."}</p></div>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800">{ne ? "सबै लेख हेर्नुहोस्" : "View all articles"} <ArrowRight className="h-4 w-4"/></Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{posts.map(post=><Link key={post.id} href={`/blog/post?slug=${encodeURIComponent(post.slug)}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card-hover">
        {post.cover_image ? <img src={post.cover_image} alt={post.title} className="aspect-[16/9] w-full object-cover"/> : <div className="flex aspect-[16/9] items-center justify-center bg-blue-50"><BookOpen className="h-10 w-10 text-blue-300"/></div>}
        <div className="p-5"><span className="text-xs font-bold uppercase tracking-wider text-blue-700">{post.category}</span><h3 className="mt-2 line-clamp-2 text-lg font-bold text-slate-900 group-hover:text-blue-700">{post.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{post.excerpt}</p></div>
      </Link>)}</div>
    </div>
  </section>;
}
