# BIPIN TECH HUB — Professional Digital Service Website

A modern, responsive, high-performance digital service business website built for **BIPIN TECH HUB** in Nepal.

Inspired by clean, professional agency designs with a pure white background, royal blue accents, modern typography, subtle shadows, rounded cards, and smooth animations.

---

## 🚀 Key Features

- **Bilingual Experience (English / नेपाली)**: Fully functional client-side language switcher that instantaneously translates all headings, descriptions, buttons, and badges across the entire site.
- **7 Approved Core Services**:
  1. Police Clearance Report (PCC) with Consular Stamp
  2. Europass CV and Cover Letter
  3. All Online Forms
  4. Driving License Services
  5. Loksewa Online Forms
  6. Personal Portfolio Website with Hosting
  7. C Programming Guide
- **WhatsApp Integration (wa.me)**:
  - Centralized phone number configuration in `src/config/site.ts`.
  - Floating WhatsApp button with notification badge.
  - WhatsApp action on every service card with pre-filled order inquiry.
  - Interactive "Order Now" modal allowing customers to optionally enter their name and special notes.
  - "Check Status on WhatsApp" feature with pre-filled message.
  - "Looking for Something Else?" custom service inquiry banner.
- **Manual Payment System**:
  - eSewa QR and ConnectIPS QR cards with clean image fallbacks.
  - 6-step payment and manual verification workflow.
  - Transparent pricing policy: "Contact for Price" (no fabricated fees or payment gateways).
- **Official Compliance & Disclaimers**: Clear disclosures for government-related services (PCC, Driving License, Loksewa) that final approval and issuance are determined solely by the respective Nepal government authorities.
- **Technical SEO & Performance**:
  - Next.js App Router metadata API with Open Graph and Twitter cards.
  - Structured Data (Schema.org Organization, WebSite, Service, BreadcrumbList JSON-LD).
  - Dynamic XML sitemap (`/sitemap.xml`) and robots file (`/robots.txt`).
  - Minimal geometric favicon and icons in `public/`.
  - 100% static HTML generation (SSG) for ultra-fast loading on mobile and desktop.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + custom SVG branding
- **Hosting**: Vercel Free Plan / GitHub Pages

> **Important**: This project operates 100% statically without custom backends, MongoDB, Express, external databases, or paid payment gateways. All data is managed cleanly via static TypeScript files.

---

## 📁 Project Structure

```
├── public/
│   ├── images/
│   │   ├── esewa-qr.png          # eSewa QR code
│   │   └── connectips-qr.png     # ConnectIPS QR code
│   ├── favicon.ico
│   ├── favicon.png
│   ├── icon.png
│   └── apple-icon.png
├── src/
│   ├── app/
│   │   ├── about/                # About Us page
│   │   ├── contact/              # Contact page
│   │   ├── how-it-works/         # 4-step process & payment guide
│   │   ├── privacy-policy/       # Privacy & document confidentiality
│   │   ├── refund-policy/        # Manual payment refund rules
│   │   ├── services/             # Services catalog & [slug] details
│   │   ├── terms/                # Terms and Conditions
│   │   ├── globals.css           # Tailwind & custom tokens
│   │   ├── layout.tsx            # Root layout & SEO JSON-LD
│   │   ├── page.tsx              # Homepage
│   │   ├── robots.ts             # Dynamic robots.txt
│   │   └── sitemap.ts            # Dynamic sitemap.xml
│   ├── components/               # Navbar, Hero, ServiceCard, Payment, etc.
│   ├── config/
│   │   └── site.ts               # Central WhatsApp number & links
│   ├── context/
│   │   └── LanguageContext.tsx   # Bilingual context (en/ne)
│   ├── data/
│   │   ├── content.ts            # UI text translations
│   │   └── services.ts           # 7 approved services data
│   └── types/                    # TypeScript interfaces
```

---

## ⚙️ Updating Business Configuration

All contact details and placeholders are centralized in:

📂 `src/config/site.ts`

```typescript
export const siteConfig = {
  name: "BIPIN TECH HUB",
  url: "https://bipintechhub.com",
  
  // 1. WhatsApp Business Number (Nepal code 977 + 10 digits)
  whatsappNumber: "97798XXXXXXXX", 
  
  // 2. YouTube Channel
  youtubeChannelUrl: "https://youtube.com/@yourchannel",
  
  // 3. Email & Location
  email: "support@bipintechhub.com",
  location: "Kathmandu, Nepal",
};
```

To update your QR codes:
Replace the placeholder image files in `/public/images/esewa-qr.png` and `/public/images/connectips-qr.png`.

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Test the production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Beginner-Friendly Deployment Guide

### Option A: Deploying to Vercel (Recommended & 100% Free)

Vercel is the creator of Next.js and provides instant, free global hosting with automated SSL certificates:

1. **Create a GitHub account** (if you don't already have one) at [github.com](https://github.com).
2. **Push your code to GitHub**:
   - Open PowerShell or terminal in the project directory:
     ```bash
     git init
     git add .
     git commit -m "Initial commit of BIPIN TECH HUB website"
     ```
   - Create a new repository on GitHub named `bipin-tech-hub-website`.
   - Run the commands GitHub displays to link and push your repository:
     ```bash
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/bipin-tech-hub-website.git
     git push -u origin main
     ```
3. **Deploy on Vercel**:
   - Sign up or log into [vercel.com](https://vercel.com) using your GitHub account.
   - Click **"Add New..."** → **"Project"**.
   - Select your `bipin-tech-hub-website` repository from the list.
   - Leave the default settings (Framework Preset: **Next.js**, Root Directory: `./`).
   - Click **"Deploy"**.
4. In under 1 minute, your website will be live with a free `*.vercel.app` URL and automatic HTTPS!
5. When you purchase a custom domain (e.g. `bipintechhub.com`), you can add it for free under **Project Settings → Domains** in Vercel.

---

## 📝 Blog & Admin Dashboard

The blog is added as a static-friendly, browser-connected feature. GitHub Pages serves the Next.js exported frontend; Supabase provides the database, admin authentication, and public cover-image storage. No custom Node.js server is required for this setup.

### Blog routes

- `/blog/` — public article listing, category filters and search
- `/blog/post/?slug=your-article-slug` — public article detail
- `/admin/login/` — admin sign-in
- `/admin/` — article dashboard
- `/admin/posts/new/` — create article
- `/admin/posts/edit/?id=POST_UUID` — edit article

### Supabase setup

1. Create a Supabase project.
2. Open **SQL Editor** and run the complete script at `docs/supabase-blog-setup.sql`.
3. In **Project Settings → API**, copy the Project URL and the publishable/anon key.
4. Add these as GitHub Actions repository secrets (or the equivalent build environment variables):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. In **Authentication → Users**, create your admin user. Turn off public sign-ups if you do not need public account creation.
6. Copy that user's UUID and run this in SQL Editor:
   `insert into public.blog_admins (user_id) values ('YOUR-AUTH-USER-UUID');`
7. Rebuild and redeploy the site. Open `/admin/login/` and sign in.

### Security notes

- The frontend uses only the Supabase publishable/anon key. Never add a Supabase `service_role` key to a `NEXT_PUBLIC_*` variable or commit it to Git.
- Row Level Security makes published posts public and restricts post/image management to user IDs explicitly listed in `public.blog_admins`.
- Create admin accounts manually. Disable public sign-ups unless you intentionally need them.
- Cover images are limited to JPG, PNG and WebP up to 5 MB.

### Writing articles

The first editor version supports plain text with line breaks, article title, slug, excerpt, category, tags, cover image and SEO title/description. Rich-text formatting can be added in a later iteration.

---

## 📄 License & Attribution

© 2026 **BIPIN TECH HUB**. All rights reserved.
Built with Next.js, TypeScript, and Tailwind CSS.
