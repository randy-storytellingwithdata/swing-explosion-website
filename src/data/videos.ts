export type PerformanceVideo = {
  /** YouTube video ID. Replace these with Swing Explosion's real performance clips. */
  id: string;
  title: string;
  description: string;
};

// PLACEHOLDER DATA: swap these YouTube IDs for real Swing Explosion footage
// before launch. IDs below point to neutral, freely-embeddable Creative
// Commons clips so the hero/video sections render correctly out of the box.
export const FEATURED_VIDEO: PerformanceVideo = {
  id: "aqz-KE-bpKQ",
  title: "Swing Explosion Live at a Milwaukee Gala",
  description:
    "The full 18-piece band on stage — replace with your best performance clip.",
};

export const MORE_VIDEOS: PerformanceVideo[] = [
  {
    id: "TLkA0RELQ1g",
    title: "First Dance Set at a Wedding Reception",
    description: "Smooth, romantic swing for the first dance and dinner hour.",
  },
  {
    id: "eRsGyueVLvQ",
    title: "Corporate Gala Dance Floor",
    description: "High-energy horns that keep a corporate crowd on the floor.",
  },
  {
    id: "aqz-KE-bpKQ",
    title: "Behind the Scenes with the Horn Section",
    description: "A look at rehearsal and the band getting ready for showtime.",
  },
];
