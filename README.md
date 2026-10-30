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

## 📄 License & Attribution

© 2026 **BIPIN TECH HUB**. All rights reserved.
Built with Next.js, TypeScript, and Tailwind CSS.
