# Aryan Singh — Portfolio

Personal site for my work in finance, data analytics, and full-stack development. Built to give a fast read on what I've done and a way into the code behind it.

**Live:** [aryansingh.app](https://aryansingh.app)

## Features

- **Live market ticker.** Scrolling tape of 12 US and TSX-listed names, pulled from Yahoo Finance and refreshed every 60 seconds. Pauses on hover.
- **Dark and light mode**, with a toggle that persists across sessions.
- **Scroll-triggered fade-ins** via a custom `useFadeIn` hook using IntersectionObserver.
- **Typing animation** on the hero heading.
- **Responsive** from mobile through desktop.

## Structure

```
aryan-singh-website/
├── app/
│   ├── api/quote/route.ts    # Yahoo Finance quote endpoint
│   ├── layout.tsx
│   └── page.tsx              # Hero section
└── components/
    ├── Navbar.tsx            # Nav + ticker
    ├── Ticker.tsx            # Scrolling market tape
    ├── About.tsx             # Bio + tech stack grid
    ├── Experience.tsx        # Work history
    ├── Projects.tsx          # Featured and additional projects
    ├── Contact.tsx
    ├── ThemeToggle.tsx
    └── useFadeIn.ts          # Scroll animation hook
```

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | lucide-react, react-icons |
| Market data | Yahoo Finance |
| Deployment | Vercel |

## Running Locally

```bash
git clone https://github.com/aryan29-dev/personal-website.git
cd personal-website
npm install
npm run dev
```

Open http://localhost:3000.