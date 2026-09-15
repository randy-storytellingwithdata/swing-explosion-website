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
export const SITE_TAGLINE = "The Midwest's Premier 18-Piece Big Band";

// PLACEHOLDER: real booking contact info wasn't publicly listed anywhere
// we could find — replace with the band's actual inbox/phone.
export const CONTACT_EMAIL = "booking@swingexplosion.com";

export const FACEBOOK_URL =
  "https://www.facebook.com/p/Swing-Explosion-Big-Band-100063139704279/";
