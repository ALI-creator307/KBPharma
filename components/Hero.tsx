import Image from "next/image";
import { Calendar, PlayCircle, Star } from "lucide-react";
import { AppIcon } from "@/components/icons/IconMap";
import CircularBadge from "@/components/CircularBadge";
import { HERO_STATS } from "@/data/site-data";

const AVATAR_COLORS = ["bg-brand", "bg-gold", "bg-brand-dark"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white pt-12 pb-28 lg:pt-16 lg:pb-32">
      <div className="container-custom grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
        {/* Left copy */}
        <div className="animate-fadeUp">
          <p className="mb-3 font-script text-2xl text-gold-dark sm:text-3xl">Healthy Chicks, Strong Future</p>
          <h1 className="font-heading text-4xl font-bold leading-[1.15] text-ink sm:text-5xl lg:text-[3.2rem]">
            Professional Poultry <span className="text-brand">Vaccination Services</span> You Can Trust
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-[17px]">
            We provide safe, effective and timely vaccination services to protect your chicks from
            deadly diseases and ensure healthy growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              <Calendar className="h-4 w-4" />
              Request Service
            </a>
            <a href="#services" className="btn-outline">
              <PlayCircle className="h-4 w-4" />
              Learn More
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <div className="flex items-center">
              {AVATAR_COLORS.map((color, i) => (
                <span
                  key={color + i}
                  style={{ zIndex: AVATAR_COLORS.length - i }}
                  className={`-ml-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white first:ml-0 ${color}`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
              ))}
              <span className="ml-3 text-sm font-semibold text-ink">
                Trusted by <span className="text-brand">1000+ Farmers</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">4.9</span>
              <span className="text-sm text-ink-soft">(120+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative animate-fadeUp [animation-delay:150ms] [animation-fill-mode:backwards]">
          <div className="absolute -left-6 -top-6 z-20 hidden sm:block">
            <CircularBadge />
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px]">
            <div className="blob-mask absolute -inset-4 -z-10 bg-gradient-to-br from-brand-50 to-gold/20" />
            <div className="blob-mask relative h-full w-full overflow-hidden shadow-card ring-1 ring-ink/5">
              <Image
                src="/images/hero.png"
                alt="KBFarma specialist vaccinating a day-old chick on a poultry farm"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -right-2 top-6 hidden flex-col gap-3 sm:flex lg:-right-6">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="card-hover flex w-44 items-center gap-3 rounded-2xl bg-white p-3.5 shadow-card"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-dark">
                  <AppIcon name={stat.icon as never} className="h-4.5 w-4.5" />
                </span>
                <span className="leading-tight">
                  <span className="block font-heading text-lg font-bold text-ink">{stat.value}</span>
                  <span className="block text-[11px] text-ink-soft">{stat.label}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Mobile stat row (since floating cards are hidden on small screens) */}
          <div className="mt-6 grid grid-cols-3 gap-3 sm:hidden">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 rounded-2xl bg-white p-3 text-center shadow-soft">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-dark">
                  <AppIcon name={stat.icon as never} className="h-4 w-4" />
                </span>
                <span className="font-heading text-base font-bold text-ink">{stat.value}</span>
                <span className="text-[10px] leading-tight text-ink-soft">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
