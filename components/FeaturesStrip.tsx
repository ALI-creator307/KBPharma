import { AppIcon } from "@/components/icons/IconMap";
import { TRUST_FEATURES } from "@/data/site-data";

export default function FeaturesStrip() {
  return (
    <section className="relative z-10 -mt-20 lg:-mt-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 rounded-3xl bg-white p-7 shadow-card sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:p-9">
          {TRUST_FEATURES.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-dark transition-colors duration-300">
                <AppIcon name={feature.icon as never} className="h-5.5 w-5.5" />
              </span>
              <div>
                <h3 className="font-heading text-[15px] font-semibold text-ink">{feature.title}</h3>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
