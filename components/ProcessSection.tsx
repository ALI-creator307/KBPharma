import { Star } from "lucide-react";
import { AppIcon } from "@/components/icons/IconMap";
import { PROCESS_STEPS, TESTIMONIALS } from "@/data/site-data";

export default function ProcessSection() {
  return (
    <section id="why-us" className="py-20 lg:py-28">
      <div className="container-custom grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
        {/* How we work */}
        <div>
          <p className="eyebrow">Our Simple Process</p>
          <h2 className="section-heading mt-3">How We Work</h2>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-5">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {idx < PROCESS_STEPS.length - 1 && (
                  <span className="absolute left-1/2 top-7 hidden h-px w-full -translate-y-1/2 border-t-2 border-dashed border-brand/25 sm:block" />
                )}
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-dark ring-4 ring-white transition-colors duration-300 hover:bg-brand-dark hover:text-white">
                  <AppIcon name={step.icon as never} className="h-6 w-6" />
                </span>
                <span className="mt-3 font-heading text-xs font-bold text-brand">{step.number}</span>
                <h3 className="mt-1 text-sm font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-xs leading-snug text-ink-soft">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <p className="eyebrow">What Farmers Say</p>
          <div className="mt-6 space-y-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="card-hover rounded-2xl bg-white p-5 shadow-soft ring-1 ring-ink/5"
              >
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.round(t.rating) ? "fill-gold" : "fill-none text-ink/15"}`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-xs font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-ink-soft">{t.role}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
