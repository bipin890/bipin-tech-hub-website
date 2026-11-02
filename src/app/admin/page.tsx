"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, LogOut, FileText, Eye } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { BlogPost } from "@/types/blog";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  async function loadPosts() {
    const supabase = getSupabaseBrowserClient();
    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) { router.replace("/admin/login"); return; }
    setEmail(auth.user.email || "");
    const { data, error } = await supabase.from("blog_posts").select("*").order("updated_at", { ascending: false });
    if (error) setMessage(error.message);
    else setPosts((data || []) as BlogPost[]);
    setLoading(false);
  }

  useEffect(() => { void loadPosts(); }, []);

  async function logout() {
    await getSupabaseBrowserClient().auth.signOut();
    router.replace("/admin/login");
  }

  async function removePost(post: BlogPost) {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    const { error } = await getSupabaseBrowserClient().from("blog_posts").delete().eq("id", post.id);
    if (error) setMessage(error.message);
    else { setPosts(current => current.filter(item => item.id !== post.id)); setMessage("Article deleted."); }
  }

  const published = posts.filter(post => post.status === "published").length;
  return <main className="min-h-[75vh] bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div><p className="text-sm font-bold uppercase tracking-wider text-blue-700">BIPIN TECH HUB</p><h1 className="mt-1 text-3xl font-extrabold text-slate-950">Blog Dashboard</h1><p className="mt-1 text-sm text-slate-500">Signed in as {email}</p></div>
        <div className="flex gap-2"><Link href="/blog" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700"><Eye className="h-4 w-4"/> View Blog</Link><button onClick={logout} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700"><LogOut className="h-4 w-4"/> Logout</button></div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[{label:"Total Articles",value:posts.length},{label:"Published",value:published},{label:"Drafts",value:posts.length-published}].map(card=><div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"><p className="text-sm text-slate-500">{card.label}</p><p className="mt-2 text-3xl font-extrabold text-slate-950">{card.value}</p></div>)}
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-5"><div><h2 className="text-lg font-bold text-slate-900">Your Articles</h2><p className="text-sm text-slate-500">Create, edit, publish or remove blog posts.</p></div><Link href="/admin/posts/new" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700"><Plus className="h-4 w-4"/> New Article</Link></div>
        {message && <p className="m-5 rounded-xl bg-blue-50 p-3 text-sm text-blue-800">{message}</p>}
        {loading ? <p className="p-8 text-center text-slate-500">Loading dashboard…</p> : posts.length === 0 ? <div className="p-12 text-center"><FileText className="mx-auto h-10 w-10 text-slate-300"/><p className="mt-3 font-semibold text-slate-800">No articles yet</p><p className="mt-1 text-sm text-slate-500">Create your first blog post to get started.</p></div> :
          <div className="divide-y divide-slate-100">{posts.map(post=><div key={post.id} className="flex flex-wrap items-center justify-between gap-4 p-5"><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="font-bold text-slate-900">{post.title}</h3><span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase ${post.status==="published"?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700"}`}>{post.status}</span></div><p className="mt-1 text-sm text-slate-500">{post.category} · /{post.slug}</p></div><div className="flex items-center gap-2"><Link href={`/admin/posts/edit?id=${post.id}`} aria-label={`Edit ${post.title}`} className="rounded-lg border border-slate-200 p-2.5 text-slate-600 hover:border-blue-200 hover:text-blue-700"><Pencil className="h-4 w-4"/></Link><button onClick={()=>void removePost(post)} aria-label={`Delete ${post.title}`} className="rounded-lg border border-slate-200 p-2.5 text-slate-600 hover:border-red-200 hover:text-red-600"><Trash2 className="h-4 w-4"/></button></div></div>)}</div>}
      </div>
    </div>
  </main>;
}
