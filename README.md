# Swing Explosion

Website for Swing Explosion, an 18-piece big band based in the Greater
Milwaukee area (New Berlin, WI), fronted by Pete Sorce and arranged by
Jeff La Barge. Built with Next.js (App Router), TypeScript, and Tailwind
CSS.

## Status

Homepage is built. Remaining pages (About, Videos, Song List, Events,
Booking, Contact) are scaffolded as routes with placeholder content and
will be built out next.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint
npm run build   # production build
```

## Project structure

- `src/app/` — one folder per route (`about/`, `videos/`, `songs/`,
  `events/`, `booking/`, `contact/`), each with a `page.tsx`.
- `src/components/` — shared UI (`Header`, `Footer`, `PageHero`,
  `YouTubeFacade`) and homepage sections under `components/home/`.
- `src/data/` — site content as plain data (nav links, videos,
  testimonials, features) so copy can be edited without touching layout
  code.

## Design system

- **Colors**: near-black ink background (`--color-ink`), warm charcoal
  surfaces, cream text, brass gold accent, deep crimson for banners.
  Defined in `src/app/globals.css` as CSS variables wired into Tailwind
  via `@theme inline`.
- **Type**: Bebas Neue for display headings, Inter for body text (both
  via `next/font/google`, loaded in `src/app/layout.tsx`).

## Integrations (set up when their pages are built)

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_FORMSPREE_FORM_ID` — for the booking/contact forms
  (create a form at [formspree.io](https://formspree.io), free tier).
- `GOOGLE_SHEET_EVENTS_CSV_URL` — for the Events page. In Google
  Sheets: File > Share > Publish to web > select the sheet tab > CSV,
  then paste the resulting URL here. This lets a non-technical person
  update the schedule by editing the spreadsheet directly.

Add the same variables in the Vercel project's Environment Variables
settings for production.

## Placeholder content to replace before launch

Homepage copy (bio, repertoire, hero video) was sourced from the band's
public listings (thebash.com, milwaukeestomp.com) since the live
swingexplosion.com site couldn't be crawled directly. Still outstanding:

- `src/data/videos.ts` — only one real performance clip was verifiable
  (`FEATURED_VIDEO`, "Come Fly With Me" at the Italian Community Center).
  `MORE_VIDEOS` are explicitly-labeled placeholders — swap in real clips
  from corporate events, fundraisers, and private parties.
- `src/data/homepage.ts` — testimonials are sample quotes; replace with
  real client feedback.
- `src/data/nav.ts` — `CONTACT_EMAIL` is a placeholder; real booking
  contact info wasn't publicly listed anywhere we could find.
- Footer — Facebook link is real; Instagram/YouTube still point to the
  generic homepages pending real profile URLs.
- No photography yet — current design is typography/color-driven by
  choice, but stock or band photos (black-tie events, horn section,
  no faces) could be added to the hero/About/Features sections if
  supplied as image files.

## Deployment

Deploy on [Vercel](https://vercel.com/new) connected to this GitHub
repo — pushes to the main branch redeploy automatically. Add the
environment variables above in the Vercel project settings before the
Events/Booking pages go live.
