"use client";

import { useEffect, useState } from "react";
import { Bird, Calendar, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/data/site-data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-300 ${
        isScrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-4 py-3.5 lg:py-4">
        {/* Logo */}
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-dark ring-1 ring-brand/15">
            <Bird className="h-6 w-6" strokeWidth={2} />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-lg font-bold text-ink">KBFarma</span>
            <span className="block text-[11px] font-medium uppercase tracking-wide text-ink/50">
              Vaccination Services
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-7">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={`${link.label}-${idx}`}
              href={link.href}
              className={`group relative py-1 text-sm font-medium transition-colors ${
                idx === 0 ? "text-brand" : "text-ink/70 hover:text-brand"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-brand transition-all duration-300 ${
                  idx === 0 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="btn-primary !py-3">
            <Calendar className="h-4 w-4" />
            Request Service
          </a>
          <a
            href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
            className="flex items-center gap-2.5 border-l border-ink/10 pl-3.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-dark">
              <Phone className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] text-ink/50">Call / WhatsApp</span>
              <span className="block text-sm font-semibold text-ink">{CONTACT_INFO.phone1}</span>
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-brand-50 hover:text-brand-dark lg:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <nav className="container-custom flex flex-col gap-1 border-t border-ink/10 py-4">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={`${link.label}-mobile-${idx}`}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:bg-brand-50 hover:text-brand-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary mt-2 w-full !py-3"
          >
            <Calendar className="h-4 w-4" />
            Request Service
          </a>
        </nav>
      </div>
    </header>
  );
}
