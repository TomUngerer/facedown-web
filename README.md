# facedown.io

The Facedown website: a landing page and the privacy policy. Astro, no CSS framework: all styles are in
`src/styles/global.css`.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Needs Node 22.12 or newer (Astro 6). To move to Astro 7 later, use Node 22.23.4+ and bump `astro` in `package.json`.

## Where things are

- `src/site.ts`: name, caption, contact email, and the **store links**. Paste the Google Play / App Store URLs
  there when the pages are live; the buttons switch from "Coming soon" to "Get it on" automatically.
- `src/pages/index.astro`: the landing page (hero, How it plays, Meet the llamas, What's inside, call to action).
- `src/pages/privacy.md`: the privacy policy. **Replace `[YOUR FULL NAME]` (twice) before publishing.**
- `src/layouts/`: `Base.astro` (head, meta, footer), `Text.astro` (white card for Markdown pages).
- `public/app-ads.txt`: replace the comment with the line AdMob gives you.
- `public/img/`: logo, the eye, llama avatars, screenshots (from the game, 540 x 1080), `og.png` for link previews.
- `public/fonts/sen-latin.woff2`: Sen (variable, 400-800), subset to Latin.

## Deploy

Any static host works: Netlify, Vercel or Cloudflare Pages with build command `npm run build` and output folder
`dist`. Point facedown.io at it in your registrar's DNS settings.
# facedown-web
