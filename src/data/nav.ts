export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "About the Band" },
  { href: "/videos", label: "Videos" },
  { href: "/songs", label: "Song List" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export const BOOKING_LINK: NavLink = { href: "/booking", label: "Book Us" };

export const SITE_NAME = "Swing Explosion";
export const SITE_TAGLINE = "Milwaukee's 18-Piece Big Band";

export const CONTACT_EMAIL = "booking@swingexplosion.com";
