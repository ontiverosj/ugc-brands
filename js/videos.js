// ============================================================
// YOUR VIDEO LIST — this is the only file you edit to add videos.
//
// TWO WAYS TO ADD A VIDEO:
//
// A) A TikTok you've already posted — just paste its link:
//
//      {
//        tiktok: "https://www.tiktok.com/@wecutglass101/video/1234567890123456789",
//        title: "Custom shower door install",
//      },
//
//    (Open the video on TikTok → Share → Copy link. If the link looks
//    short like vm.tiktok.com/XYZ, open it in a browser first and copy
//    the full address from the address bar instead.)
//
// B) A video file you upload to this site:
//      1. Put the file in the assets/videos/ folder
//         (vertical 9:16 .mp4 works best, e.g. my-ad.mp4)
//      2. Add one block like this:
//
//      {
//        src: "assets/videos/my-ad.mp4",
//        title: "Skincare Brand Ad",
//        note: "TikTok ad · 1.2M views",
//      },
//
//      Optional: add  poster: "assets/thumbs/my-ad.jpg"  for a thumbnail.
//
// Delete a block to remove a video. That's it — the site updates itself.
// ============================================================

const VIDEOS = [
  // Paste @jake.eatsss videos (or any others) here.
  // Example (delete the // to activate):
  // {
  //   tiktok: "https://www.tiktok.com/@jake.eatsss/video/1234567890123456789",
  //   title: "Restaurant Review",
  // },
];

// Placeholder tiles shown while the list above is empty.
const PLACEHOLDERS = [
  { icon: "🍔", title: "@jake.eatsss", note: "Food videos coming soon" },
  { icon: "💑", title: "Lifestyle Ad", note: "Video coming soon" },
  { icon: "🎥", title: "Talking-Head UGC", note: "Video coming soon" },
];
