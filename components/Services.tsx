import { AppIcon } from "@/components/icons/IconMap";
import { SERVICES } from "@/data/site-data";

export default function Services() {
  return (
    <section id="services" className="bg-brand-50/40 py-20 lg:py-28">
      <div className="container-custom">
        <div className="text-center">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-heading mt-3">Our Vaccination Services</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card-hover group rounded-2xl bg-white p-6 text-center shadow-soft ring-1 ring-ink/5"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-dark transition-colors duration-300 group-hover:bg-brand-dark group-hover:text-white">
                <AppIcon name={service.icon as never} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
