# NY Cookie Ebook Sales Page EU (Tier 2)

## Project Overview
React-based multi-language sales page for the NY Cookie Ebook. Targets Tier 2 EU markets: FR/DE/IT/NL/PL.

**Business flow:** Facebook Ad → Sales Page → Hotmart Checkout → Instant Download

## Tech Stack
Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui + React Query

## Key Files
- `src/pages/Index.tsx` — Main page with checkout URL routing
- `src/contexts/LanguageContext.tsx` — 211 translation keys (FR/DE/IT/NL/PL)
- `src/components/HeroSection.tsx` — Hero section with Vimeo video embeds
- `src/components/Footer.tsx` — Contact info
- `vite.config.ts` — Build configuration
- `tailwind.config.ts` — Styling

## Git Remote
`https://github.com/SomewhatTechy/NY-Cookie-Ebook-Sales-Page-EU.git`

## Development
```bash
npm install
npm run dev      # Local dev server
npm run build    # Production build (outputs to dist/)
```

## Deployment
Cloudflare Pages: `npx wrangler pages deploy dist --project-name=ny-cookie-ebook-sales-page-eu`

## Related Projects
- **NY Cookie Ebook Sales Page** — Tier 1 variant (EN/ES/PT)
- **NY-Cookie-Ebooks** — Asset repository (ebooks, PDFs, videos)
- **Ebook-Launch-Tools** — Automation platform that generates content for this site

---

## Session Log
<!-- Append session notes below this line. Each entry: date, what was done, what to investigate next. -->
