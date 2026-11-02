export type BlogStatus = "draft" | "published";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  category: string;
  tags: string[];
  status: BlogStatus;
  seo_title: string | null;
  seo_description: string | null;
  author_name: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export type BlogPostInput = Omit<
  BlogPost,
  "id" | "created_at" | "updated_at"
>;
