"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, ArrowLeft } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setError("");
    try {
      const { error: authError } = await getSupabaseBrowserClient().auth.signInWithPassword({ email, password });
      if (authError) throw authError;
      router.replace("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally { setBusy(false); }
  }

  return <main className="flex min-h-[75vh] items-center justify-center bg-slate-50 px-4 py-14">
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-700"><ArrowLeft className="h-4 w-4"/> Back to website</Link>
      <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><LockKeyhole className="h-6 w-6"/></div>
      <h1 className="mt-5 text-2xl font-extrabold text-slate-950">Blog Admin Login</h1>
      <p className="mt-2 text-sm leading-6 text-slate-500">Sign in with the admin account created in your Supabase project.</p>
      <form onSubmit={signIn} className="mt-7 space-y-4">
        <div><label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">Email</label><input id="email" type="email" required autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"/></div>
        <div><label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-slate-700">Password</label><input id="password" type="password" required autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"/></div>
        {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <button disabled={busy} className="w-full rounded-xl bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60">{busy ? "Signing in…" : "Sign in to Dashboard"}</button>
      </form>
    </div>
  </main>;
}
