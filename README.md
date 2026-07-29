# Jake Ontiveros — UGC Creator Portfolio

A portfolio website for showing brands my UGC work, with links to all my
social accounts so they can verify everything live.

## What's on the site

- **Hero** — who I am and what I do
- **What I Create** — my four content niches (food, couple/lifestyle, small business, talking-head UGC)
- **Portfolio** — my video showcase (see "Adding your videos" below)
- **Check My Work** — direct links to my TikTok, Instagram, and Facebook accounts
- **Contact** — email button for brand inquiries

## Adding your videos

The portfolio section already shows a **live TikTok widget** of the
@wecutglass101 account — it always displays the latest videos automatically,
nothing to maintain.

To feature specific videos, open `js/videos.js` and add blocks to the
`VIDEOS` list. Two ways:

**A) A TikTok you've posted** — paste its link (Share → Copy link on the video):

   ```js
   {
     tiktok: "https://www.tiktok.com/@jake.eatsss/video/1234567890123456789",
     title: "Restaurant Review",
   },
   ```

**B) A video file** — put it in `assets/videos/`, then:

   ```js
   {
     src: "assets/videos/my-ad.mp4",
     title: "Skincare Brand Ad",
     note: "TikTok ad · 1.2M views",
   },
   ```

(Optional for files: add a `poster: "assets/thumbs/my-ad.jpg"` line for a
custom thumbnail.)

Until you add featured videos, the section shows "coming soon" tiles under
the live TikTok widget.

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
