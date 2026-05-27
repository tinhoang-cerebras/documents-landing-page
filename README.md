# Cerebras Docs Landing Page Recovery

This repository rebuilds the production site currently deployed at `https://docs.cerebras.ai/` as a standalone Next.js App Router application that can be deployed to a separate preview Vercel project before any production reconnect happens.

## Architecture Summary

### Deployed site fingerprint

- Runtime: client-rendered React 18 single-page app
- Build shape: Create React App style static bundle
- Entry HTML: one `div#root`, one hashed JS bundle, one hashed CSS bundle
- Styling: Tailwind CSS v3 output plus a remote Fontshare Satoshi font stylesheet
- Routing: no React Router and no multi-page docs runtime; the shipped source map only contains `index.tsx`, `App.tsx`, and `components/Home/Home.tsx`
- Assets:
  - external: `background-light.svg`, `background-dark.svg`
  - inlined: logo, arrows, social icons, dark-mode icons, section icons embedded as base64 PNGs in the JS bundle
- Metadata:
  - title: `Cerebras Training and Inference Docs`
  - description: `Cerebras Training and Inference Docs`
  - `google` and `edge` `notranslate` meta tags
- Public source maps: exposed for both JS and CSS, which made source recovery possible

### Reconnaissance notes

- `/` returns a minimal SPA shell and loads:
  - `/static/js/main.1f1e6107.js`
  - `/static/css/main.a0005d89.css`
- `/asset-manifest.json` is public and confirms the CRA-style build
- `robots.txt`, `sitemap.xml`, `manifest.json`, `favicon.ico`, and `favicon.png` currently fall through to the SPA HTML instead of returning dedicated files
- No evidence of Next.js, Docusaurus, Mintlify, Nextra, or a custom multi-route docs app on `docs.cerebras.ai` itself
- The current production site is a landing page that links out to:
  - `https://training-docs.cerebras.ai`
  - `https://inference-docs.cerebras.ai`

## Rebuild Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4 via PostCSS

The rebuild intentionally keeps the site scope narrow and faithful to production: a single landing page route with the same copy, layout, cards, social links, dark-mode toggle, and background treatment.

## Routes

- `/` - recovered landing page
- `/robots.txt` - proper robots output added during hardening
- `/sitemap.xml` - proper sitemap output added during hardening

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Environment Variables

No environment variables are required.

Optional:

- `NEXT_PUBLIC_SITE_URL`
  - Used by the generated sitemap and robots entries.
  - Defaults to `https://docs.cerebras.ai`.

## Deployment Notes

1. Create a new temporary Vercel project from this repository.
2. Do not attach or modify the existing production Vercel project during validation.
3. Set `NEXT_PUBLIC_SITE_URL` only if the preview environment should emit preview-specific sitemap URLs.
4. Validate visual parity and external links in preview.
5. Only after validation should the existing production Vercel project be reconnected to this repository.

`vercel.json` is not required for this rebuild.

## Parity Checklist

### Visual parity

- [x] Preserves the original single-screen landing-page layout
- [x] Preserves the header, CTA, theme toggle, hero copy, doc cards, and footer
- [x] Preserves the light and dark background art
- [x] Preserves the original linked destinations and social links
- [x] Preserves the Satoshi font source

### Route parity

- [x] `/` matches the production site scope
- [x] External destinations remain `training-docs.cerebras.ai` and `inference-docs.cerebras.ai`
- [~] `robots.txt` and `sitemap.xml` are improved from production rather than mirrored exactly

### Responsive behavior

- [x] Card stacking and width behavior remain mobile-first
- [x] Header and footer spacing preserve the original breakpoint intent
- [x] The production min-width behavior is preserved to avoid unexpected layout drift

### Performance / Lighthouse notes

- Base64 inlined PNG assets avoid additional icon requests and mirror current production behavior
- Background SVGs remain static assets and cache well
- Next.js adds a modern production pipeline, but this rebuild still intentionally favors parity over aggressive redesign or asset re-encoding

### Known gaps / recovery limitations

- The original repo history and original source assets were not available; recovery used public production artifacts and public source maps
- Current production does not expose a real robots file, sitemap, manifest, or favicon; the rebuild only adds robots and sitemap
- The recovered app matches the observed production landing page, not the separate training or inference documentation sites

