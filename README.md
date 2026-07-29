# Jake Ontiveros — UGC Creator Portfolio

A portfolio website for showing brands my UGC work, with links to all my
social accounts so they can verify everything live.

## What's on the site

- **Hero** — who I am and what I do
- **What I Create** — my four content niches (food, couple/lifestyle, small business, talking-head UGC)
- **Portfolio** — my video showcase (see "Adding your videos" below)
- **Check My Work** — direct links to my TikTok, Instagram, and Facebook accounts
- **Contact** — email button for brand inquiries

## Adding your videos (2 steps)

1. Put the video file into the `assets/videos/` folder (vertical `.mp4` works best).
2. Open `js/videos.js` and add one block to the `VIDEOS` list:

   ```js
   {
     src: "assets/videos/my-ad.mp4",
     title: "Skincare Brand Ad",
     note: "TikTok ad · 1.2M views",
   },
   ```

That's it — the site shows the video automatically. (Optional: add a
`poster: "assets/thumbs/my-ad.jpg"` line for a custom thumbnail.)

Until you add videos, the portfolio section shows "coming soon" tiles that
point brands to your live accounts.

> Tip: keep video files under ~50 MB each so the page loads fast. Export at
> 1080×1920 with H.264/MP4 for best results.

## Putting the site live (GitHub Pages — free)

1. On GitHub, open this repo → **Settings** → **Pages**
2. Under **Build and deployment**, set Source to **Deploy from a branch**
3. Pick branch **main**, folder **/ (root)**, and click **Save**
4. After a minute, your site is live at `https://ontiverosj.github.io/ugc-brands/`

Share that link with brands. Every time you push a change, the live site
updates automatically.

## Editing text

Everything on the page lives in `index.html` — open it and edit the words
directly. Colors and fonts live in `css/styles.css` (the accent color is
`--accent` at the top of the file).
