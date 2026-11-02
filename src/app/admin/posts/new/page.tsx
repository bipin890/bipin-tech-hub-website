"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ImagePlus, Save, Send } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { BlogStatus } from "@/types/blog";

const categoryOptions = ["Technology", "Cybersecurity", "Web Development", "AI Tools", "Tutorials & Guides", "Digital Services Nepal"];

function makeSlug(value: string) {
  return value.toLowerCase().trim().normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function BlogEditorPage() {
  const router = useRouter();
  const params = useSearchParams();
  const postId = params.get("id");
  const [checking, setChecking] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categoryOptions[0]);
  const [tags, setTags] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [status, setStatus] = useState<BlogStatus>("draft");

  useEffect(() => {
    let active = true;
    async function initialize() {
      const supabase = getSupabaseBrowserClient();
      const { data: auth } = await supabase.auth.getUser();
      if (!auth.user) { router.replace("/admin/login"); return; }
      if (postId) {
        const { data, error } = await supabase.from("blog_posts").select("*").eq("id", postId).maybeSingle();
        if (error) { if (active) setMessage(error.message); }
        else if (data && active) {
          setTitle(data.title); setSlug(data.slug); setExcerpt(data.excerpt); setContent(data.content);
          setCategory(data.category); setTags((data.tags || []).join(", ")); setCoverImage(data.cover_image || "");
          setSeoTitle(data.seo_title || ""); setSeoDescription(data.seo_description || ""); setStatus(data.status);
        }
      }
      if (active) setChecking(false);
    }
    void initialize();
    return () => { active = false; };
  }, [postId, router]);

  async function uploadCover(file?: File) {
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) { setMessage("Please choose a JPG, PNG or WebP image."); return; }
    if (file.size > 5 * 1024 * 1024) { setMessage("Cover image must be 5 MB or smaller."); return; }
    setMessage("Uploading cover image…");
    try {
      const supabase = getSupabaseBrowserClient();
      const safeName = file.name.toLowerCase().replace(/[^a-z0-9.-]/g, "-");
      const path = `${Date.now()}-${safeName}`;
      const { error } = await supabase.storage.from("blog-covers").upload(path, file, { upsert: true, contentType: file.type });
      if (error) throw error;
      const { data } = supabase.storage.from("blog-covers").getPublicUrl(path);
      setCoverImage(data.publicUrl);
      setMessage("Cover image uploaded.");
    } catch (err) { setMessage(err instanceof Error ? err.message : "Image upload failed."); }
  }

  async function savePost(nextStatus: BlogStatus) {
    if (!title.trim() || !excerpt.trim() || !content.trim()) { setMessage("Title, excerpt and article content are required."); return; }
    const finalSlug = makeSlug(slug || title);
    if (!finalSlug) { setMessage("Please enter a valid English URL slug."); return; }
    setSaving(true); setMessage("");
    try {
      const supabase = getSupabaseBrowserClient();
      const { data: auth } = await supabase.auth.getUser();
      if (!auth.user) throw new Error("Your admin session expired. Please sign in again.");
      const now = new Date().toISOString();
      const payload = {
        title: title.trim(), slug: finalSlug, excerpt: excerpt.trim(), content: content.trim(),
        category, tags: tags.split(",").map(tag => tag.trim()).filter(Boolean),
        cover_image: coverImage || null, status: nextStatus, seo_title: seoTitle.trim() || title.trim(),
        seo_description: seoDescription.trim() || excerpt.trim(), author_name: "Bipin Thapa",
        published_at: nextStatus === "published" ? now : null, updated_at: now,
      };
      const query = postId
        ? supabase.from("blog_posts").update(payload).eq("id", postId)
        : supabase.from("blog_posts").insert(payload);
      const { error } = await query;
      if (error) throw error;
      router.replace("/admin");
      router.refresh();
    } catch (err) { setMessage(err instanceof Error ? err.message : "Unable to save article."); }
    finally { setSaving(false); }
  }

  if (checking) return <main className="min-h-[70vh] bg-slate-50 p-12 text-center text-slate-500">Checking admin session…</main>;

  return <main className="min-h-[75vh] bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl">
      <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700"><ArrowLeft className="h-4 w-4"/> Back to dashboard</Link>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-wider text-blue-700">BIPIN TECH HUB</p><h1 className="mt-1 text-3xl font-extrabold text-slate-950">{postId ? "Edit Article" : "Write New Article"}</h1></div><div className="flex gap-2"><button disabled={saving} onClick={()=>void savePost("draft")} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 disabled:opacity-50"><Save className="h-4 w-4"/> Save Draft</button><button disabled={saving} onClick={()=>void savePost("published")} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-50"><Send className="h-4 w-4"/> {saving ? "Saving…" : "Publish"}</button></div></div>
      {message && <p role="status" className="mt-5 rounded-xl bg-blue-50 p-3 text-sm text-blue-800">{message}</p>}
      <div className="mt-7 space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-8">
        <div><label className="mb-2 block text-sm font-bold text-slate-700">Article Title *</label><input value={title} onChange={e=>{setTitle(e.target.value);if(!postId)setSlug(makeSlug(e.target.value));}} placeholder="e.g. Cybersecurity Roadmap for Beginners" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-lg font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"/></div>
        <div><label className="mb-2 block text-sm font-bold text-slate-700">URL Slug *</label><input value={slug} onChange={e=>setSlug(makeSlug(e.target.value))} placeholder="cybersecurity-roadmap-beginners" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"/><p className="mt-1 text-xs text-slate-500">Use English letters, numbers and hyphens.</p></div>
        <div><label className="mb-2 block text-sm font-bold text-slate-700">Short Excerpt *</label><textarea rows={3} value={excerpt} onChange={e=>setExcerpt(e.target.value)} placeholder="A short summary shown on blog cards and search results…" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"/></div>
        <div className="grid gap-5 sm:grid-cols-2"><div><label className="mb-2 block text-sm font-bold text-slate-700">Category</label><select value={category} onChange={e=>setCategory(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3">{categoryOptions.map(item=><option key={item}>{item}</option>)}</select></div><div><label className="mb-2 block text-sm font-bold text-slate-700">Tags (comma separated)</label><input value={tags} onChange={e=>setTags(e.target.value)} placeholder="html, beginner, tutorial" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"/></div></div>
        <div><label className="mb-2 block text-sm font-bold text-slate-700">Cover Image</label><div className="flex flex-wrap items-center gap-3"><label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-blue-300"><ImagePlus className="h-4 w-4"/> Upload image<input type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" onChange={e=>void uploadCover(e.target.files?.[0])}/></label><span className="text-xs text-slate-500">JPG, PNG or WebP · max 5 MB</span></div>{coverImage && <div className="mt-4"><img src={coverImage} alt="Blog cover preview" className="max-h-64 rounded-xl object-cover"/><button type="button" onClick={()=>setCoverImage("")} className="mt-2 text-xs font-semibold text-red-600">Remove image</button></div>}</div>
        <div><label className="mb-2 block text-sm font-bold text-slate-700">Article Content *</label><textarea rows={18} value={content} onChange={e=>setContent(e.target.value)} placeholder="Write your full article here. Use headings, paragraphs and numbered steps. Separate sections with blank lines." className="w-full rounded-xl border border-slate-200 px-4 py-3 font-mono text-sm leading-7 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"/><p className="mt-1 text-xs text-slate-500">This first version supports plain text with line breaks. A rich-text editor can be added later.</p></div>
        <div className="border-t border-slate-100 pt-5"><h2 className="font-bold text-slate-900">SEO Settings</h2><div className="mt-4 space-y-4"><div><label className="mb-2 block text-sm font-semibold text-slate-700">SEO Title</label><input value={seoTitle} onChange={e=>setSeoTitle(e.target.value)} placeholder="Search engine title" className="w-full rounded-xl border border-slate-200 px-4 py-3"/></div><div><label className="mb-2 block text-sm font-semibold text-slate-700">SEO Description</label><textarea rows={2} value={seoDescription} onChange={e=>setSeoDescription(e.target.value)} placeholder="Short description for Google…" className="w-full rounded-xl border border-slate-200 px-4 py-3"/></div></div></div>
      </div>
    </div>
  </main>;
}
