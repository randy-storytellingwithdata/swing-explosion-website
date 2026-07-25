export const AUDIENCES = [
  "Weddings",
  "Corporate Events",
  "Nonprofit Galas",
  "Private Parties",
];

export type Feature = {
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    title: "The Full 18-Piece Experience",
    description:
      "Five saxes, four trumpets, four trombones, and a full rhythm section — the real, unmistakable big-band sound, not a downsized combo.",
  },
  {
    title: "Built for Your Timeline",
    description:
      "From cocktail hour to first dance to a packed dance floor at 11pm, we read the room and shape the set list to match your event.",
  },
  {
    title: "Professional & Dependable",
    description:
      "Fully insured, punctual, and experienced with venues, planners, and production teams across Wisconsin.",
  },
  {
    title: "Flexible for Any Venue",
    description:
      "From ballrooms to backyard tents, our sound and stage plot scale to fit your space without losing energy.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// PLACEHOLDER TESTIMONIALS: replace with real client quotes before launch.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Swing Explosion turned our ballroom into an absolute party. Every planner I work with asks who the band was.",
    name: "Sample Quote",
    role: "Wedding Planner",
  },
  {
    quote:
      "We book entertainment for our gala every year, and this was the first time the dance floor stayed full all night.",
    name: "Sample Quote",
    role: "Nonprofit Gala Chair",
  },
  {
    quote:
      "Professional from the first email to the last song. Exactly what we needed for our corporate anniversary event.",
    name: "Sample Quote",
    role: "Corporate Event Director",
  },
];
