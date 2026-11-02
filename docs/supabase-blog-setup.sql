-- BIPIN TECH HUB Blog: Supabase setup
-- Run this entire script in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  content text not null default '',
  cover_image text,
  category text not null default 'Technology',
  tags text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft', 'published')),
  seo_title text,
  seo_description text,
  author_name text not null default 'Bipin Thapa',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_status_published_idx
  on public.blog_posts (status, published_at desc);
create index if not exists blog_posts_category_idx
  on public.blog_posts (category);

create table if not exists public.blog_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.blog_posts enable row level security;
alter table public.blog_admins enable row level security;

-- Admins can read only their own allow-list row. Manage this table in SQL Editor.
drop policy if exists "Admins can read own role" on public.blog_admins;
create policy "Admins can read own role"
  on public.blog_admins for select to authenticated
  using (user_id = auth.uid());

-- Public readers can only read published posts.
drop policy if exists "Published posts are public" on public.blog_posts;
create policy "Published posts are public"
  on public.blog_posts for select
  using (status = 'published');

-- Only user IDs explicitly added to blog_admins can manage posts.
drop policy if exists "Only blog admins manage posts" on public.blog_posts;
create policy "Only blog admins manage posts"
  on public.blog_posts for all
  to authenticated
  using (exists (select 1 from public.blog_admins where user_id = auth.uid()))
  with check (exists (select 1 from public.blog_admins where user_id = auth.uid()));

-- Public image bucket for article cover images.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('blog-covers', 'blog-covers', true, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

drop policy if exists "Public can view blog covers" on storage.objects;
create policy "Public can view blog covers"
  on storage.objects for select
  using (bucket_id = 'blog-covers');

drop policy if exists "Only blog admins upload blog covers" on storage.objects;
create policy "Only blog admins upload blog covers"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'blog-covers' and exists (select 1 from public.blog_admins where user_id = auth.uid()));

drop policy if exists "Only blog admins update blog covers" on storage.objects;
create policy "Only blog admins update blog covers"
  on storage.objects for update to authenticated
  using (bucket_id = 'blog-covers' and exists (select 1 from public.blog_admins where user_id = auth.uid()))
  with check (bucket_id = 'blog-covers' and exists (select 1 from public.blog_admins where user_id = auth.uid()));

drop policy if exists "Only blog admins delete blog covers" on storage.objects;
create policy "Only blog admins delete blog covers"
  on storage.objects for delete to authenticated
  using (bucket_id = 'blog-covers' and exists (select 1 from public.blog_admins where user_id = auth.uid()));


-- After creating your admin user in Supabase Authentication > Users, add that
-- user's UUID here. Replace the UUID with the actual Auth user ID:
-- insert into public.blog_admins (user_id) values ('YOUR-AUTH-USER-UUID');
