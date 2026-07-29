// Render the video portfolio grid from the VIDEOS list (js/videos.js).
(function renderVideos() {
  const grid = document.getElementById("videoGrid");
  if (!grid) return;

  if (typeof VIDEOS !== "undefined" && VIDEOS.length > 0) {
    VIDEOS.forEach((v) => {
      // TikTok link → official embed (processed by TikTok's embed.js)
      if (v.tiktok) {
        const wrap = document.createElement("div");
        wrap.className = "video-embed";
        const quote = document.createElement("blockquote");
        quote.className = "tiktok-embed";
        quote.setAttribute("cite", v.tiktok);
        const idMatch = v.tiktok.match(/video\/(\d+)/);
        if (idMatch) quote.setAttribute("data-video-id", idMatch[1]);
        quote.style.maxWidth = "605px";
        quote.style.minWidth = "260px";
        const section = document.createElement("section");
        const link = document.createElement("a");
        link.target = "_blank";
        link.rel = "noopener";
        link.href = v.tiktok;
        link.textContent = v.title || "Watch on TikTok";
        section.appendChild(link);
        quote.appendChild(section);
        wrap.appendChild(quote);
        grid.appendChild(wrap);
        return;
      }

      const card = document.createElement("article");
      card.className = "video-card";

      const video = document.createElement("video");
      video.src = v.src;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      if (v.poster) video.poster = v.poster;

      const meta = document.createElement("div");
      meta.className = "video-meta";
      const title = document.createElement("strong");
      title.textContent = v.title || "Untitled";
      meta.appendChild(title);
      if (v.note) {
        const note = document.createElement("span");
        note.textContent = v.note;
        meta.appendChild(note);
      }

      card.appendChild(video);
      card.appendChild(meta);
      grid.appendChild(card);
    });
  } else {
    PLACEHOLDERS.forEach((p) => {
      const card = document.createElement("div");
      card.className = "video-placeholder";
      card.innerHTML =
        '<div class="ph-icon">' + p.icon + "</div>" +
        "<strong>" + p.title + "</strong>" +
        "<span>" + p.note + " — see my live work on my accounts below</span>";
      grid.appendChild(card);
    });
  }
})();

// Mobile nav toggle
(function mobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close the menu after tapping a link
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
})();

// Footer year
(function year() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();
