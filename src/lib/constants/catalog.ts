/**
 * The one and only product-category list.
 *
 * On `main` this list existed in FOUR places — the Mongoose enum, a
 * PRODUCT_CATEGORIES map, a local const in the admin form, and another in the
 * admin list page — and they had already drifted. Everything now reads from
 * here: the schema enum, the Zod enum, the admin <Select>, and the public
 * catalogue filter.
 *
 * Not marked `server-only`: client components (the admin form, the catalogue
 * filter) import it too.
 */

export const PRODUCT_CATEGORIES = [
  { value: "sofa-cum-bed", label: "Sofa cum Bed" },
  { value: "sofa", label: "Sofa" },
  { value: "bed", label: "Bed" },
  { value: "wardrobe", label: "Wardrobe" },
  { value: "cupboard", label: "Cupboard" },
  { value: "locker", label: "Locker & Safe" },
  { value: "chair", label: "Chair" },
  { value: "table", label: "Table" },
  { value: "office", label: "Office Furniture" },
  { value: "other", label: "Other" },
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]["value"];

/**
 * Tuple form (not `string[]`) because both `z.enum()` and Mongoose's `enum`
 * want a non-empty literal tuple to derive the union type from.
 */
export const PRODUCT_CATEGORY_VALUES = PRODUCT_CATEGORIES.map((c) => c.value) as unknown as [
  ProductCategory,
  ...ProductCategory[],
];

export function categoryLabel(value: string): string {
  return PRODUCT_CATEGORIES.find((c) => c.value === value)?.label ?? value;
}

export function isProductCategory(value: string): value is ProductCategory {
  return PRODUCT_CATEGORY_VALUES.includes(value as ProductCategory);
}
