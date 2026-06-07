# Chinonso Oken — Portfolio Website v2.0

A clean, responsive, irresistible portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — ready to deploy on Vercel in minutes.

---

## ✨ What's Inside

- **Hero** — Typewriter role animation, shimmer CTA, social links, resume button
- **About** — Real CV stats, image with gold border treatment
- **Medicine** — OAU/OAUTHC timeline with active pulse badges
- **Engineering** — Video project cards (autoplay on hover), skill pills, live/GitHub links
- **Skills** — Categorised skill grid with certifications strip
- **Contact** — In-app email via EmailJS (no email client needed), success state with reset
- **Projects Archive** — `/projects` page with video cards, category filters, stack pills
- **Resume Modal** — Dual CV selector (Medical / Engineering), PDF iframe preview, download
- **Footer** — Upsell section + tech stack credit

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## 📧 Setting Up In-App Email (EmailJS)

The contact form sends email directly without opening an email client. To activate this:

1. Go to [emailjs.com](https://emailjs.com) and create a **free account** (200 emails/month free)
2. Create an **Email Service** (connect your Gmail/Outlook)
3. Create an **Email Template** with these variables:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   Message: {{message}}
   ```
4. Open `src/components/Contact.tsx` and replace these 3 lines:
   ```ts
   const SERVICE_ID = 'YOUR_SERVICE_ID';    // e.g. 'service_abc123'
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g. 'template_xyz456'
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g. 'abcDEFghiJKL'
   ```

> Until configured, the form falls back to opening your email client automatically.

---

## 📁 Project Structure

```
chinonso-portfolio/
├── public/
│   └── resumes/
│       ├── health.pdf                  ← Your medical CV
│       └── software-engineering.pdf   ← Your engineering CV
├── src/
│   ├── app/
│   │   ├── layout.tsx                 ← Root layout + fonts + metadata
│   │   ├── page.tsx                   ← Main page (assembles all sections)
│   │   ├── globals.css                ← Global styles + animations
│   │   └── projects/
│   │       └── page.tsx               ← /projects archive page
│   ├── components/
│   │   ├── Navbar.tsx                 ← Sticky nav + mobile drawer + Resume button
│   │   ├── Hero.tsx                   ← Full-screen hero + typewriter
│   │   ├── About.tsx                  ← Bio + stats
│   │   ├── Medicine.tsx               ← Clinical timeline (OAU/OAUTHC)
│   │   ├── Engineering.tsx            ← Video project cards
│   │   ├── Skills.tsx                 ← Skill groups + certifications
│   │   ├── Contact.tsx                ← EmailJS form + success/reset
│   │   ├── Footer.tsx                 ← Upsell + tech stack credit
│   │   ├── ResumeModal.tsx            ← Dual CV popup with PDF viewer
│   │   └── CursorGlow.tsx             ← Gold cursor glow effect
│   └── lib/
│       └── useReveal.ts               ← Scroll-reveal hook
├── .babelrc                           ← Babel fallback (fixes Windows SWC error)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## ✏️ Personalising Your Content

| What to change | File |
|---|---|
| Profile photo | `src/components/About.tsx` — swap the Unsplash URL with `/your-photo.jpg` (add to `/public`) |
| Email address | `src/components/Contact.tsx` and `src/components/Footer.tsx` |
| Project details | `src/components/Engineering.tsx` and `src/app/projects/page.tsx` |
| Medical timeline | `src/components/Medicine.tsx` |
| Skills | `src/components/Skills.tsx` |
| Resume PDFs | Replace files in `/public/resumes/` |

---

## 🌐 Deploy to Vercel

### Option A — GitHub (recommended, auto-deploys)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo
3. Click **Deploy** — done in ~60 seconds

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option C — Manual build
```bash
npm run build
npm start
```

---

## 🔧 Commands

| Command | Description |
|---|---|
| `npm run dev` | Development server at localhost:3000 |
| `npm run build` | Production build |
| `npm start` | Start production server |

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| Navy | `#0b1726` | Dark backgrounds |
| Gold | `#c8a04a` | Accent / brand colour |
| Cream | `#f8f5ef` | Light section backgrounds |
| Med Blue | `#1a6b8a` | Medical accent |
| Dev Green | `#2a7a4f` | Engineering accent |
| Cormorant Garamond | Serif | Headings |
| Outfit | Sans-serif | Body text |

---

## 📦 New in v2.0

- ✅ Real CV data from uploaded resumes (OAU, OAUTHC, IFUMSA, Clivoken Systems)
- ✅ Resume modal with dual Medical / Engineering CV selector + PDF viewer + download
- ✅ Video project cards (autoplay on hover, loop, fallback image)
- ✅ In-app email via EmailJS — no email client opens
- ✅ Contact form success state with **Send Another Message** reset button
- ✅ `/projects` archive page with category filters and video cards
- ✅ Typewriter hero animation cycling through roles
- ✅ Gold cursor glow effect
- ✅ Fully mobile responsive — tested at 320px to 1440px
- ✅ `.babelrc` included for Windows SWC compatibility

---

© 2025 Chinonso Oken · Built with Next.js · Deployed on Vercel
