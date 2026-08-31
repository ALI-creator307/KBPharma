import Image from "next/image";
import { AppIcon } from "@/components/icons/IconMap";
import { ABOUT_STATS } from "@/data/site-data";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Image */}
        <div className="relative lg:col-span-3">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs lg:max-w-none">
            <div className="blob-mask-alt absolute -inset-3 -z-10 bg-gradient-to-br from-gold/15 to-brand-50" />
            <div className="blob-mask-alt relative h-full w-full overflow-hidden shadow-card ring-1 ring-ink/5">
              <Image
                src="/images/about.png"
                alt="KBFarma team member vaccinating a chick"
                fill
                sizes="(min-width: 1024px) 320px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <span className="absolute -bottom-4 -right-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-white shadow-card ring-4 ring-white">
            <AppIcon name="bird" className="h-6 w-6" />
          </span>
        </div>

        {/* Copy */}
        <div className="lg:col-span-5">
          <p className="eyebrow">About Our Service</p>
          <h2 className="section-heading mt-3">
            Dedicated to Protecting Your <span className="text-brand">Poultry</span>, Every Time
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            We are not doctors, but vaccination specialists with practical experience in the poultry
            field. Our goal is simple — to help farmers keep their flocks safe, healthy and
            productive through proper vaccination.
          </p>
          <p className="mt-6 font-script text-3xl text-brand-dark">KBFarma Team</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-4 lg:gap-5">
          {ABOUT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-hover rounded-2xl bg-white p-5 text-center shadow-soft ring-1 ring-ink/5 lg:text-left"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-dark lg:mx-0">
                <AppIcon name={stat.icon as never} className="h-5 w-5" />
              </span>
              <p className="mt-3 font-heading text-2xl font-bold text-ink">{stat.value}</p>
              <p className="text-xs text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
