# LenoTech frontend (React + Vite)

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production files in dist/
```

## Fill these in
- `src/config.js`: GitHub, LinkedIn, WhatsApp number.
  - The contact form needs no server: "Send by email" opens the visitor's email app and "Send on WhatsApp" opens WhatsApp, both with the message ready.
- `src/data/siteContent.js`: services, skills, and other static copy.
- `src/data/projects.json`: projects. Add `liveUrl` and `repoUrl` when you have them.
- `index.html`: set `og:image` to the full URL of your hero image after deploying.

## Deploy
Netlify, Vercel or Cloudflare Pages: build command `npm run build`, output folder `dist`.

## Language switch (English / தமிழ்)
- Header toggle, remembered in `localStorage` (`lenotech_lang`); also sets `<html lang>`, the page title and meta description.
- UI strings: `src/data/translations.js` (`en` and `ta`, same keys, `{name}` placeholders).
- Section copy: `src/data/siteContent.js` (English) and `src/data/siteContent.ta.js` (Tamil), same shape.
- Projects: `src/data/projects.json` (English, plus tech, links, images) and `src/data/projects.ta.json` (Tamil text keyed by `slug`). A new project works without a Tamil entry and shows English until you add one.
- Tamil text uses Noto Sans Tamil (loaded in `style.css`, applied in `extra.css`).
