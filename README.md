# Chinonso Oken — Portfolio Website

A clean, responsive portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — ready to deploy on Vercel.

## ✨ Features

- **Dual-identity design** — distinct sections for Medicine and Software Engineering
- **Responsive layout** — works beautifully on mobile, tablet, and desktop
- **Scroll-triggered animations** — sections fade in as you scroll
- **Sticky navigation** — glass-effect navbar that adapts on scroll
- **Contact form** — opens your email client with pre-filled content
- **Unsplash images** — real medical and tech imagery throughout
- **SEO ready** — OpenGraph metadata included
- **Vercel optimised** — zero-config deployment

---

## 🚀 Quick Start

### Prerequisites

- Node.js **18.17** or later
- npm, yarn, or pnpm

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
chinonso-oken-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout + metadata
│   │   ├── page.tsx          # Main page (assembles all sections)
│   │   └── globals.css       # Global styles + animations
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navigation bar
│   │   ├── Hero.tsx          # Full-screen hero section
│   │   ├── About.tsx         # About me + stats
│   │   ├── Medicine.tsx      # Clinical experience timeline
│   │   ├── Engineering.tsx   # Software project cards
│   │   ├── Skills.tsx        # Skills by category
│   │   ├── Contact.tsx       # Contact form + links
│   │   └── Footer.tsx        # Footer
│   └── lib/
│       └── useReveal.ts      # Scroll-reveal animation hook
├── public/                   # Static assets (add your photo here)
├── next.config.js            # Next.js config (image domains)
├── tailwind.config.ts        # Tailwind theme config
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## ✏️ Customising Your Content

### Personal details to update:

1. **Email address** → `src/components/Contact.tsx` (line with `mailto:chinonso@example.com`)
2. **University name** → `src/components/Medicine.tsx` (timeline entries)
3. **Hospital names** → `src/components/Medicine.tsx` (timeline entries)
4. **Projects** → `src/components/Engineering.tsx` (the `projects` array)
5. **Profile photo** → Replace the Unsplash URL in `src/components/About.tsx`
   - Add your photo to `/public/chinonso.jpg` and update the `src` to `/chinonso.jpg`

### To add your own profile photo:

```tsx
// In src/components/About.tsx, change:
src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80"
// To:
src="/chinonso.jpg"
```

Then place `chinonso.jpg` in the `/public` folder.

---

## 🌐 Deploying to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Your site will be live in ~60 seconds.

### Option 2 — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**

That's it. Your portfolio will be live at a `*.vercel.app` URL.

### Option 3 — Manual build

```bash
npm run build
npm start
```

---

## 🔧 Build Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Navy | `#0b1726` | Primary background |
| Gold | `#c8a04a` | Accent colour |
| Cream | `#f8f5ef` | Light background |
| Med Blue | `#1a6b8a` | Medicine accent |
| Dev Green | `#2a7a4f` | Engineering accent |
| Cormorant Garamond | serif display font | Headings |
| Outfit | sans-serif | Body text |

---

## 📄 License

Personal portfolio — all rights reserved by Chinonso Oken.
