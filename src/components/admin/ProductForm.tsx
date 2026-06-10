"use client";

import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ImageUploader from "@/components/admin/ImageUploader";

const CATEGORIES = [
  { value: "sofa", label: "Sofa" },
  { value: "wardrobe", label: "Wardrobe" },
  { value: "locker", label: "Locker" },
  { value: "bed", label: "Bed" },
  { value: "chair", label: "Chair" },
  { value: "table", label: "Table" },
  { value: "other", label: "Other" },
];

interface ImageEntry {
  url: string;
  fileId: string;
}

interface ProductFormData {
  _id?: string;
  name?: string;
  slug?: string;
  description?: string;
  price?: number;
  priceLabel?: string;
  category?: string;
  images?: string[];
  features?: string[];
  isFeatured?: boolean;
  isActive?: boolean;
  whatsappMessage?: string;
}

interface ProductFormProps {
  product?: ProductFormData;
  action: (formData: FormData) => Promise<void>;
  isEdit?: boolean;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ProductForm({
  product,
  action,
  isEdit = false,
}: ProductFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState(product?.name ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [features, setFeatures] = useState<string[]>(product?.features ?? [""]);
  const [imageEntries, setImageEntries] = useState<ImageEntry[]>(
    (product?.images ?? []).map((url) => ({ url, fileId: url })),
  );
  const [submitting, setSubmitting] = useState(false);

  const previewSlug = isEdit ? (product?.slug ?? "") : slugify(name);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const fd = new FormData(e.currentTarget);
      // Inject computed fields not in native form inputs
      fd.set("description", description);
      fd.set("images", JSON.stringify(imageEntries.map((e) => e.url)));
      fd.set("features", JSON.stringify(features.filter(Boolean)));
      await action(fd);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  }

  function addFeature() {
    setFeatures((f) => [...f, ""]);
  }

  function removeFeature(i: number) {
    setFeatures((f) => f.filter((_, idx) => idx !== i));
  }

  function updateFeature(i: number, val: string) {
    setFeatures((f) => f.map((v, idx) => (idx === i ? val : v)));
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className='row g-4'>
        {/* Left column */}
        <div className='col-lg-8'>
          {/* Name */}
          <div className='card border-0 shadow-sm mb-4'>
            <div className='card-body'>
              <h6 className='fw-semibold mb-3'>Basic Info</h6>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label small fw-semibold'>
                  Product Name <span className='text-danger'>*</span>
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  className='form-control'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div className='text-muted small mt-1'>
                  Slug: <code>{previewSlug || "auto-generated"}</code>
                </div>
              </div>

              <div className='row g-3'>
                <div className='col-md-4'>
                  <label
                    htmlFor='category'
                    className='form-label small fw-semibold'
                  >
                    Category <span className='text-danger'>*</span>
                  </label>
                  <select
                    id='category'
                    name='category'
                    className='form-select'
                    defaultValue={product?.category ?? ""}
                    required
                  >
                    <option value='' disabled>
                      Select category
                    </option>
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col-md-4'>
                  <label
                    htmlFor='price'
                    className='form-label small fw-semibold'
                  >
                    Price (₹) <span className='text-danger'>*</span>
                  </label>
                  <input
                    id='price'
                    name='price'
                    type='number'
                    min='0'
                    step='1'
                    className='form-control'
                    defaultValue={product?.price ?? ""}
                    required
                  />
                </div>
                <div className='col-md-4'>
                  <label
                    htmlFor='priceLabel'
                    className='form-label small fw-semibold'
                  >
                    Price Label
                  </label>
                  <input
                    id='priceLabel'
                    name='priceLabel'
                    type='text'
                    className='form-control'
                    defaultValue={product?.priceLabel ?? ""}
                    placeholder='e.g. ₹45,000 onwards'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className='card border-0 shadow-sm mb-4'>
            <div className='card-body'>
              <label className='form-label small fw-semibold mb-2'>
                Description <span className='text-danger'>*</span>
              </label>
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
                value={description}
                onEditorChange={(content) => setDescription(content)}
                init={{
                  height: 400,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | " +
                    "alignleft aligncenter alignright alignjustify | " +
                    "bullist numlist outdent indent | removeformat | help",
                  content_style:
                    "body { font-family: Inter, sans-serif; font-size: 14px }",
                }}
              />
            </div>
          </div>

          {/* Features */}
          <div className='card border-0 shadow-sm mb-4'>
            <div className='card-body'>
              <h6 className='fw-semibold mb-3'>Key Features</h6>
              {features.map((feat, i) => (
                <div key={i} className='d-flex gap-2 mb-2'>
                  <input
                    type='text'
                    className='form-control form-control-sm'
                    value={feat}
                    onChange={(e) => updateFeature(i, e.target.value)}
                    placeholder={`Feature ${i + 1}`}
                  />
                  <button
                    type='button'
                    className='btn btn-outline-danger btn-sm'
                    onClick={() => removeFeature(i)}
                    aria-label='Remove feature'
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                type='button'
                className='btn btn-outline-secondary btn-sm mt-1'
                onClick={addFeature}
              >
                + Add Feature
              </button>
            </div>
          </div>

          {/* WhatsApp override */}
          <div className='card border-0 shadow-sm mb-4'>
            <div className='card-body'>
              <label
                htmlFor='whatsappMessage'
                className='form-label small fw-semibold'
              >
                WhatsApp Message Override{" "}
                <span className='text-muted fw-normal'>(optional)</span>
              </label>
              <textarea
                id='whatsappMessage'
                name='whatsappMessage'
                className='form-control'
                rows={3}
                defaultValue={product?.whatsappMessage ?? ""}
                placeholder='Leave blank to use auto-generated message'
              />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className='col-lg-4'>
          {/* Images */}
          <div className='card border-0 shadow-sm mb-4'>
            <div className='card-body'>
              <h6 className='fw-semibold mb-3'>
                Images <span className='text-danger'>*</span>
              </h6>
              <ImageUploader
                value={imageEntries}
                onChange={setImageEntries}
                maxImages={10}
              />
            </div>
          </div>

          {/* Settings */}
          <div className='card border-0 shadow-sm mb-4'>
            <div className='card-body'>
              <h6 className='fw-semibold mb-3'>Settings</h6>
              <div className='form-check mb-2'>
                <input
                  id='isFeatured'
                  name='isFeatured'
                  type='checkbox'
                  className='form-check-input'
                  defaultChecked={product?.isFeatured ?? false}
                />
                <label htmlFor='isFeatured' className='form-check-label small'>
                  Show on home page (Featured)
                </label>
              </div>
              <div className='form-check'>
                <input
                  id='isActive'
                  name='isActive'
                  type='checkbox'
                  className='form-check-input'
                  defaultChecked={product?.isActive ?? true}
                />
                <label htmlFor='isActive' className='form-check-label small'>
                  Active (visible on site)
                </label>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type='submit'
            className='btn btn-dark w-100'
            disabled={submitting || imageEntries.length === 0}
          >
            {submitting ? (
              <>
                <span
                  className='spinner-border spinner-border-sm me-2'
                  role='status'
                />
                Saving…
              </>
            ) : isEdit ? (
              "Update Product"
            ) : (
              "Create Product"
            )}
          </button>
          {imageEntries.length === 0 && (
            <div className='text-danger small mt-2 text-center'>
              At least one image is required
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
