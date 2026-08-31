import { Bird, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon, YoutubeIcon } from "@/components/icons/SocialIcons";
import { QUICK_LINKS, FOOTER_SERVICES, CONTACT_INFO } from "@/data/site-data";

const SOCIALS = [
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: WhatsAppIcon, label: "WhatsApp", href: "#" },
  { Icon: YoutubeIcon, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-white/70">
      <div className="container-custom grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-2">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-gold">
              <Bird className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-bold text-white">KBFarma</span>
              <span className="block text-[11px] font-medium uppercase tracking-wide text-white/50">
                Vaccination Services
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            We provide reliable poultry vaccination services to help farmers protect their flocks
            and build a healthier future.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors duration-300 hover:bg-gold hover:text-brand-darker"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm transition-colors hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Our Services</h3>
          <ul className="mt-4 space-y-2.5">
            {FOOTER_SERVICES.map((service) => (
              <li key={service}>
                <a href="#services" className="text-sm transition-colors hover:text-gold">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2.5 text-sm">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                {CONTACT_INFO.phone1}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${CONTACT_INFO.phone2.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                {CONTACT_INFO.phone2}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="break-all transition-colors hover:text-gold">
                {CONTACT_INFO.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Working hours strip */}
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h4 className="font-heading text-sm font-semibold text-white">Working Hours</h4>
            <p className="mt-1 text-sm">Monday - Sunday, 8:00 AM - 8:00 PM</p>
            <p className="mt-1 text-sm font-semibold text-gold">We are available 24/7 for emergency support.</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} KBFarma Vaccination Services. All Rights Reserved.</p>
          <p>
            Designed with <span className="text-gold">♥</span> for Poultry Farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
