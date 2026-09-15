// Corporate/private/fundraiser audiences lead intentionally, per the band's
// request to foreground those bookings over weddings.
export const AUDIENCES = [
  "Corporate Events",
  "Private Parties",
  "Fundraisers & Galas",
  "Weddings",
];

export type Feature = {
  title: string;
  description: string;
};

export const FEATURES: Feature[] = [
  {
    title: "A Frontman With a Pedigree",
    description:
      "Pete Sorce has been singing since he was eight years old and won the Ted Mack Original Amateur Hour as an original “American Idol.” He's shared the stage with Les Brown, Frank Sinatra Jr., Mel Tormé, Jack Jones, and Duke Ellington — and brings that same polish to your event.",
  },
  {
    title: "Arrangements by Jeff La Barge",
    description:
      "Led by one of the country's finest arrangers, Swing Explosion can add almost any song on request — from a donor's favorite standard to a CEO's walk-on music.",
  },
  {
    title: "Right-Sized for Any Event",
    description:
      "The full 18-piece band delivers five saxes, four trumpets, four trombones, and a driving rhythm section — or scale down to a tighter combo for a smaller venue or budget without losing the big-band sound.",
  },
  {
    title: "A Regional Favorite",
    description:
      "The house band at Aliotto's and a staple of southeastern Wisconsin's swing scene, Swing Explosion brings the music of Sinatra, Tony Bennett, Sammy Davis Jr., Dean Martin, and Michael Bublé to corporate parties, fundraising galas, and civic events across the region.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// PLACEHOLDER TESTIMONIALS: we couldn't find published client quotes to pull
// from — replace these with real feedback before launch.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Swing Explosion turned our ballroom into an absolute party. Every planner I work with asks who the band was.",
    name: "Sample Quote",
    role: "Corporate Event Planner",
  },
  {
    quote:
      "We book entertainment for our gala every year, and this was the first time the dance floor stayed full all night.",
    name: "Sample Quote",
    role: "Nonprofit Gala Chair",
  },
  {
    quote:
      "Professional from the first email to the last song. Exactly what we needed for our fundraiser.",
    name: "Sample Quote",
    role: "Fundraising Committee Chair",
  },
];
