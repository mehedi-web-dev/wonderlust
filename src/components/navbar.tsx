"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleUserRound, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/#destinations" },
  { label: "My Bookings", href: "/#bookings" },
  { label: "Add Destination", href: "/add-destination" },
  { label: "Admin", href: "/#admin" },
];

const authLinks = [
  { label: "Profile", href: "/#profile", withIcon: true },
  { label: "Login", href: "/#login" },
  { label: "Sign Up", href: "/#signup" },
];

function linkClasses(isActive: boolean) {
  return isActive
    ? "text-sm font-medium text-brand underline decoration-2 underline-offset-4"
    : "text-sm font-medium text-foreground transition-colors hover:text-brand";
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    !href.includes("#") && href === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <nav className="relative mx-auto flex h-14 items-center justify-between px-4 md:h-12 md:px-6">
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-9 items-center justify-center rounded text-foreground hover:bg-muted md:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={linkClasses(isActive(link.href))}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          aria-label="Wanderlast home"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/image/Wanderlast.png"
            alt="Wanderlast"
            width={162}
            height={24}
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {authLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-brand"
            >
              {link.withIcon ? <CircleUserRound className="size-4" /> : null}
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#profile"
          aria-label="Profile"
          className="flex size-9 items-center justify-center rounded text-foreground hover:bg-muted md:hidden"
        >
          <CircleUserRound className="size-5" />
        </Link>
      </nav>

      {menuOpen ? (
        <div className="border-t border-border bg-white md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={linkClasses(isActive(link.href))}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 border-t border-border px-4 py-3">
            {authLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-brand"
              >
                {link.withIcon ? <CircleUserRound className="size-4" /> : null}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
