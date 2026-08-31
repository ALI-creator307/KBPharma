import { Bird } from "lucide-react";

export default function CircularBadge({
  text = "Healthy Flock • Happy Farm • ",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const id = "circularBadgePath";
  return (
    <div className={`relative h-28 w-28 shrink-0 ${className}`}>
      <svg viewBox="0 0 120 120" className="h-full w-full animate-[spin_16s_linear_infinite]">
        <defs>
          <path id={id} d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" fill="none" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="#1F6B3E" strokeOpacity="0.25" strokeDasharray="4 5" />
        <text fill="#0F3D28" fontSize="9.2" fontWeight={600} letterSpacing="1.2">
          <textPath href={`#${id}`} startOffset="0%">
            {text.repeat(2)}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-dark shadow-soft">
        <Bird className="h-5 w-5" />
      </span>
    </div>
  );
}
