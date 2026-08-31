import { ArrowRight, Bird } from "lucide-react";
import { AppIcon } from "@/components/icons/IconMap";
import { CTA_FEATURES } from "@/data/site-data";

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-darker px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-20 right-24 h-52 w-52 rounded-full bg-white/5" />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Let&apos;s Work Together</p>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                Let&apos;s Keep Your Poultry Healthy &amp; Productive
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                Book a vaccination service today and give your flock the best protection.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {CTA_FEATURES.map((f) => (
                  <div key={f.text} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
                      <AppIcon name={f.icon as never} className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-snug text-white/85">{f.text}</span>
                  </div>
                ))}
              </div>

              <a href="tel:+923001234567" className="btn-gold mt-9">
                Request Service Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="hidden justify-self-center lg:flex">
              <div className="relative flex h-52 w-52 items-center justify-center">
                <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full text-white/15">
                  <path
                    d="M100 10 L180 40 V100 C180 145 145 175 100 190 C55 175 20 145 20 100 V40 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                </svg>
                <Bird className="h-20 w-20 text-gold" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
