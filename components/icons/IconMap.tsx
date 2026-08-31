import {
  Shield,
  Heart,
  Headphones,
  Award,
  ShieldCheck,
  HeartPulse,
  Users,
  Clock,
  Bird,
  Syringe,
  CheckCircle2,
  FlaskConical,
  ClipboardCheck,
  Phone,
  CalendarCheck,
  MapPin,
  Star,
  Mail,
  type LucideProps,
} from "lucide-react";

export const ICONS = {
  shield: Shield,
  heart: Heart,
  headset: Headphones,
  award: Award,
  "shield-check": ShieldCheck,
  "heart-pulse": HeartPulse,
  users: Users,
  clock: Clock,
  bird: Bird,
  syringe: Syringe,
  "check-circle": CheckCircle2,
  "flask-conical": FlaskConical,
  "clipboard-check": ClipboardCheck,
  phone: Phone,
  calendar: CalendarCheck,
  "map-pin": MapPin,
  star: Star,
  mail: Mail,
} as const;

export type IconKey = keyof typeof ICONS;

export function AppIcon({
  name,
  ...props
}: { name: IconKey } & LucideProps) {
  const Icon = ICONS[name];
  return <Icon {...props} />;
}
