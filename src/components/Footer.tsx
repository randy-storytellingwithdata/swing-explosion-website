import Link from "next/link";
import { BOOKING_LINK, CONTACT_EMAIL, NAV_LINKS, SITE_TAGLINE } from "@/data/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/15 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl tracking-widest text-cream">
            SWING <span className="text-gold">EXPLOSION</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">{SITE_TAGLINE}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm tracking-widest text-gold">
            EXPLORE
          </h2>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/90 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={BOOKING_LINK.href}
                className="text-sm text-cream/90 transition-colors hover:text-gold"
              >
                {BOOKING_LINK.label}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm tracking-widest text-gold">
            GET IN TOUCH
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/90">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-gold"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="text-muted">Milwaukee, Wisconsin</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-widest text-gold">
            FOLLOW ALONG
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/90">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 px-6 py-6 text-center text-xs text-muted">
        &copy; {year} Swing Explosion. All rights reserved.
      </div>
    </footer>
  );
}
