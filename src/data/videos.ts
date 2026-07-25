export type PerformanceVideo = {
  /** YouTube video ID. */
  id: string;
  title: string;
  description: string;
};

// One verified real clip of the band: Pete Sorce & Swing Explosion performing
// "Come Fly With Me" live at the Italian Community Center.
export const FEATURED_VIDEO: PerformanceVideo = {
  id: "RY3Xkdayx2s",
  title: "Come Fly With Me — Pete Sorce & Swing Explosion, Live",
  description:
    "Frontman Pete Sorce and the full band performing live at the Italian Community Center.",
};

// PLACEHOLDER: we could only verify one real performance clip publicly (the
// featured video above). Swap these for more real footage — ask the band for
// a YouTube channel link or additional clips to embed here.
export const MORE_VIDEOS: PerformanceVideo[] = [
  {
    id: "aqz-KE-bpKQ",
    title: "Placeholder — add a corporate event clip",
    description: "Replace with real footage from a corporate event or gala.",
  },
  {
    id: "TLkA0RELQ1g",
    title: "Placeholder — add a fundraiser/gala clip",
    description: "Replace with real footage from a fundraiser or gala.",
  },
  {
    id: "eRsGyueVLvQ",
    title: "Placeholder — add a private party clip",
    description: "Replace with real footage from a private party.",
  },
];
