**Aryan Singh — Portfolio**

Personal portfolio showcasing my work across finance, data analytics, and full-stack development. Built to give a quick overview of my experience and projects while providing direct access to the code behind them.

**Live Site:** [aryansingh.app](https://aryansingh.app)

**Features**

- **Live market ticker:** Displays 12 U.S. and TSX-listed equities using Yahoo Finance market data, refreshed every 60 seconds. Pauses on hover for easier viewing.

- **Dark and light mode:** Theme toggle with the selected preference saved across sessions.

- **Scroll animations:** Custom `useFadeIn` hook built with `IntersectionObserver` to animate sections as they enter the viewport.

- **Typing animation:** Animated hero heading for the landing section.

- **Responsive design:** Optimized for mobile, tablet, and desktop layouts.

**Project Structure**

```text
aryan-singh-website/
├── app/
│   ├── api/quote/route.ts    # Yahoo Finance quote endpoint
│   ├── layout.tsx
│   └── page.tsx              # Main landing page
└── components/
    ├── Navbar.tsx            # Navigation and market ticker
    ├── Ticker.tsx            # Scrolling market data
    ├── About.tsx             # Bio and technology stack
    ├── Experience.tsx        # Work experience
    ├── Projects.tsx          # Featured and additional projects
    ├── Contact.tsx           # Contact section
    ├── ThemeToggle.tsx       # Dark/light mode toggle
    └── useFadeIn.ts          # Scroll animation hook
```

**Tech Stack**

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | lucide-react, react-icons |
| Market Data | Yahoo Finance |
| Deployment | Vercel |

**Running Locally**

```bash
git clone https://github.com/aryan29-dev/personal-website.git
cd personal-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
