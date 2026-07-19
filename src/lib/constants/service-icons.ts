/**
 * The allowlist of icon NAMES for the CMS-managed "Services We Provide" section.
 *
 * Names only — deliberately no React, no `lucide-react` import. The Mongoose
 * schema and the Zod schema both derive their enum from this list, and neither
 * has any business pulling an icon *component library* into the database layer
 * just to learn a list of strings. (It also genuinely breaks: under the
 * `react-server` export condition that scripts and RSC use, React has no
 * `createContext`, and importing lucide-react throws.)
 *
 * The name → component map lives in `@/components/icons/service-icon-map`,
 * imported only by the component that actually renders one.
 */
export const SERVICE_ICON_NAMES = [
  "Truck",
  "Ruler",
  "Wrench",
  "ShieldCheck",
  "Headset",
  "CreditCard",
  "Package",
  "Sparkles",
  "Hammer",
  "Clock",
  "BadgeCheck",
  "Sofa",
] as const;

export type ServiceIconName = (typeof SERVICE_ICON_NAMES)[number];

/** Tuple form for `z.enum()` and Mongoose's `enum`, both of which want a non-empty literal tuple. */
export const SERVICE_ICON_NAME_VALUES = SERVICE_ICON_NAMES as unknown as [
  ServiceIconName,
  ...ServiceIconName[],
];
