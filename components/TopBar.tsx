import { AppIcon } from "@/components/icons/IconMap";
import { TOP_BAR_ITEMS } from "@/data/site-data";

export default function TopBar() {
  return (
    <div className="hidden bg-brand-darker text-white md:block">
      <div className="container-custom flex items-center justify-between gap-6 py-2 text-xs lg:text-sm">
        {TOP_BAR_ITEMS.map((item) => (
          <div key={item.text} className="flex items-center gap-2 text-white/85">
            <AppIcon name={item.icon as never} className="h-3.5 w-3.5 shrink-0 text-gold" />
            <span className="whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
