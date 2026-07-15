import {
  BadgeCheck,
  Clock,
  CreditCard,
  Hammer,
  Headset,
  Package,
  Ruler,
  ShieldCheck,
  Sofa,
  Sparkles,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SERVICE_ICON_NAMES, type ServiceIconName } from "@/lib/constants/service-icons";

/**
 * Turns a stored icon name back into a component.
 *
 * A **static** map, deliberately — not `dynamic(() => import(\`lucide-react/${name}\`))`.
 * Dynamic-importing a string that came out of the database would defeat
 * tree-shaking and let a bad row reach for an arbitrary module inside the
 * package. Here the only icons that can ever render are the twelve compiled in.
 *
 * Kept out of `@/lib/constants/service-icons` so that the Mongoose schema — and
 * the seed script, which runs under the `react-server` condition where React has
 * no `createContext` — never has to load lucide-react at all.
 */
const ICONS = {
  Truck,
  Ruler,
  Wrench,
  ShieldCheck,
  Headset,
  CreditCard,
  Package,
  Sparkles,
  Hammer,
  Clock,
  BadgeCheck,
  Sofa,
} satisfies Record<ServiceIconName, LucideIcon>;

/** Never throws: an unrecognised name (hand-written into Mongo) renders a neutral icon. */
export function serviceIcon(name: string): LucideIcon {
  return ICONS[name as ServiceIconName] ?? Package;
}

/** For the admin icon picker. */
export const SERVICE_ICON_ENTRIES = SERVICE_ICON_NAMES.map((name) => ({
  name,
  Icon: ICONS[name],
}));
