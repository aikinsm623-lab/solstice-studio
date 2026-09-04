"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line">
      <div className="container-wide flex items-center justify-between py-6">
        <Link
          href="/"
          className="font-display text-[19px] tracking-tight text-ink"
        >
          Solstice Studio
        </Link>

        <nav
          className="hidden md:flex items-center gap-9 text-[14.5px] text-umber"
          aria-label="Primary"
        >
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-4 py-2 bg-ink text-paper text-[14px] hover:bg-bronze transition-colors"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-4 h-px bg-ink" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-line px-6 py-5 flex flex-col gap-4 text-[15px] text-umber"
          aria-label="Primary"
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-ink font-medium"
          >
            Start a project
          </Link>
        </nav>
      )}
    </header>
  );
}
