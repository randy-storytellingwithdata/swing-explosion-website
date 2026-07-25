"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING_LINK, NAV_LINKS } from "@/data/nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  // Close the mobile menu whenever the route changes (adjusting state
  // during render avoids the extra render pass a useEffect would cause).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  // Let Escape close the mobile menu from anywhere on the page.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-display text-2xl tracking-widest text-cream transition-colors hover:text-gold sm:text-3xl"
        >
          SWING <span className="text-gold">EXPLOSION</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-gold ${
                      active ? "text-gold" : "text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={BOOKING_LINK.href}
            className="rounded-sm bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-bright"
          >
            {BOOKING_LINK.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-gold/40 p-2 text-cream lg:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id={menuId}
        aria-label="Primary"
        hidden={!menuOpen}
        className="border-t border-gold/15 bg-ink lg:hidden"
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-sm px-2 py-3 text-base font-semibold uppercase tracking-wide transition-colors hover:text-gold ${
                    active ? "text-gold" : "text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href={BOOKING_LINK.href}
              className="block rounded-sm bg-gold px-4 py-3 text-center text-base font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-bright"
            >
              {BOOKING_LINK.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
