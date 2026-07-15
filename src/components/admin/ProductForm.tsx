"use client";

import { useActionState, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Plus, X } from "lucide-react";
import { saveProduct, discardDraftImages } from "@/app/actions/products";
import { fieldErrors, idleState } from "@/lib/action-state";
import { PRODUCT_CATEGORIES } from "@/lib/constants/catalog";
import { slugify } from "@/lib/slug";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel, FieldDescription } from "@/components/ui/field";
import ImageUploader from "@/components/admin/ImageUploader";
import type { ImageRefDTO, ProductDetailDTO } from "@/types";
import { adminPath } from "@/lib/admin-paths";

// TinyMCE touches `window` on load, so it can't be server-rendered.
// `ssr: false` is only legal inside a Client Component in Next 16 — this file is one.
const RichTextEditor = dynamic(() => import("@/components/admin/RichTextEditor"), {
  ssr: false,
  loading: () => (
    <div className='h-[380px] animate-pulse rounded-lg border border-border bg-muted' />
  ),
});

type Props = {
  /**
   * The product id, minted SERVER-SIDE before this form ever renders.
   *
   * That's what lets images upload straight into /mrajkamal/products/<id>/
   * before the product exists — no temp folder, no move-on-save, no draft rows.
   */
  productId: string;
  product?: ProductDetailDTO;
};

export default function ProductForm({ productId, product }: Props) {
  const [state, formAction, pending] = useActionState(saveProduct, idleState);

  const [name, setName] = useState(product?.name ?? "");
  const [images, setImages] = useState<ImageRefDTO[]>(product?.images ?? []);
  const [features, setFeatures] = useState<string[]>(product?.features ?? [""]);

  const isEdit = Boolean(product);
  const slugPreview = slugify(name) || "…";

  return (
    <form action={formAction} className='space-y-8'>
      <input type='hidden' name='id' value={productId} />
      <input type='hidden' name='images' value={JSON.stringify(images)} />
      <input
        type='hidden'
        name='features'
        value={JSON.stringify(features.map((f) => f.trim()).filter(Boolean))}
      />

      {state.status === "error" && (
        <p
          role='alert'
          className='rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive'
        >
          {state.message}
        </p>
      )}

      <section className='grid gap-6 md:grid-cols-2'>
        <Field className='md:col-span-2'>
          <FieldLabel htmlFor='name'>Product name</FieldLabel>
          <Input
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FieldDescription>
            URL: /products/<span className='font-mono'>{slugPreview}</span>
            {isEdit && product?.slug !== slugPreview && name
              ? " — the old URL will keep working and redirect here."
              : ""}
          </FieldDescription>
          <FieldError errors={fieldErrors(state, "name")} />
        </Field>

        <Field>
          <FieldLabel htmlFor='category'>Category</FieldLabel>
          {/* A native <select>: it posts with FormData and needs no JS. */}
          <select
            id='category'
            name='category'
            defaultValue={product?.category ?? ""}
            required
            className='h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm'
          >
            <option value='' disabled>
              Choose…
            </option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          <FieldError errors={fieldErrors(state, "category")} />
        </Field>

        <div className='grid grid-cols-2 gap-4'>
          <Field>
            <FieldLabel htmlFor='price'>Price (₹)</FieldLabel>
            <Input
              id='price'
              name='price'
              type='number'
              min={0}
              step={1}
              defaultValue={product?.price ?? ""}
              required
            />
            <FieldError errors={fieldErrors(state, "price")} />
          </Field>

          <Field>
            <FieldLabel htmlFor='mrp'>M.R.P. (₹)</FieldLabel>
            <Input
              id='mrp'
              name='mrp'
              type='number'
              min={0}
              step={1}
              defaultValue={product?.mrp ?? ""}
              placeholder='Optional'
            />
            <FieldDescription>Shown struck through, only if above the price.</FieldDescription>
            <FieldError errors={fieldErrors(state, "mrp")} />
          </Field>
        </div>
      </section>

      <section>
        <h2 className='mb-3 font-heading text-lg italic'>Images</h2>
        <ImageUploader
          value={images}
          onChange={setImages}
          target={{ scope: "product", productId }}
        />
        <FieldError errors={fieldErrors(state, "images")} />
      </section>

      <section>
        <h2 className='mb-3 font-heading text-lg italic'>Description</h2>
        <RichTextEditor name='descriptionHtml' defaultValue={product?.descriptionHtml ?? ""} />
        <FieldError errors={fieldErrors(state, "descriptionHtml")} />
      </section>

      <section>
        <h2 className='mb-3 font-heading text-lg italic'>Features</h2>
        <ul className='space-y-2'>
          {features.map((feature, i) => (
            <li key={i} className='flex gap-2'>
              <Input
                value={feature}
                onChange={(e) => {
                  const next = [...features];
                  next[i] = e.target.value;
                  setFeatures(next);
                }}
                placeholder='e.g. Powder-coated steel'
              />
              <Button
                type='button'
                variant='ghost'
                size='icon'
                aria-label='Remove feature'
                onClick={() => setFeatures(features.filter((_, j) => j !== i))}
              >
                <X size={15} />
              </Button>
            </li>
          ))}
        </ul>
        <Button
          type='button'
          variant='outline'
          size='sm'
          className='mt-3 gap-1'
          onClick={() => setFeatures([...features, ""])}
        >
          <Plus size={14} /> Add a feature
        </Button>
        <FieldError errors={fieldErrors(state, "features")} />
      </section>

      <section className='space-y-4'>
        <h2 className='font-heading text-lg italic'>Visibility</h2>

        <label className='flex items-start gap-3'>
          <Checkbox
            name='isFeatured'
            defaultChecked={product?.isFeatured ?? false}
            className='mt-0.5'
          />
          <span className='text-sm'>
            Show on the home page
            <span className='block text-xs text-muted-foreground'>
              At most 10 featured products.
            </span>
          </span>
        </label>
        <FieldError errors={fieldErrors(state, "isFeatured")} />

        <label className='flex items-start gap-3'>
          <Checkbox name='isActive' defaultChecked={product?.isActive ?? true} className='mt-0.5' />
          <span className='text-sm'>
            Live on the site
            <span className='block text-xs text-muted-foreground'>
              Unchecked, it disappears from the catalogue but is not deleted.
            </span>
          </span>
        </label>
      </section>

      <section className='space-y-4'>
        <h2 className='font-heading text-lg italic'>WhatsApp &amp; SEO</h2>

        <Field>
          <FieldLabel htmlFor='whatsappMessage'>WhatsApp opening line</FieldLabel>
          <Textarea
            id='whatsappMessage'
            name='whatsappMessage'
            rows={2}
            defaultValue={product?.whatsappMessage ?? ""}
            placeholder="Hi! I'd like to know more about this product."
          />
          <FieldDescription>
            The product name, price and link are appended automatically.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor='seoTitle'>Search title</FieldLabel>
          <Input
            id='seoTitle'
            name='seoTitle'
            defaultValue={product?.seo.title ?? ""}
            placeholder='Defaults to the product name'
          />
        </Field>

        <Field>
          <FieldLabel htmlFor='seoDescription'>Search description</FieldLabel>
          <Textarea
            id='seoDescription'
            name='seoDescription'
            rows={2}
            defaultValue={product?.seo.description ?? ""}
            placeholder='Defaults to the start of the description'
          />
        </Field>
      </section>

      <div className='flex flex-wrap gap-3 border-t border-border pt-6'>
        <Button type='submit' size='lg' disabled={pending}>
          {pending ? "Saving…" : isEdit ? "Save changes" : "Create product"}
        </Button>

        {isEdit ? (
          <Link href={adminPath("/products")} className='hover:no-underline'>
            <Button type='button' variant='outline' size='lg'>
              Cancel
            </Button>
          </Link>
        ) : (
          /*
           * Discarding a NEW product deletes any images already uploaded into its
           * folder — abandoning the form would otherwise leave them orphaned in
           * ImageKit forever. The action re-checks that no product with this id
           * exists, so it can never touch a real one.
           *
           * A submit button with its own `formAction`, NOT a nested <form>:
           * <form> inside <form> is invalid HTML and the browser drops it.
           */
          <Button
            type='submit'
            variant='outline'
            size='lg'
            formNoValidate
            formAction={discardDraftImages.bind(null, productId)}
          >
            Discard
          </Button>
        )}
      </div>
    </form>
  );
}
