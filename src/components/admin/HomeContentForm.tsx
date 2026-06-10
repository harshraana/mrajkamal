"use client";

import { useState } from "react";
import ImageUploader from "@/components/admin/ImageUploader";
import { updateHomeContent } from "@/app/actions/home";

interface FeaturedCategoryImage {
  label: string;
  imageUrl: string;
  imageFileId: string;
  href: string;
}

interface HomeContentFormProps {
  initial: {
    heroTitle: string;
    heroSubtitle: string;
    heroBannerUrl: string;
    lockerAdUrl: string;
    lockerAdText: string;
    featuredCategoryImages: FeaturedCategoryImage[];
  };
}

export default function HomeContentForm({ initial }: HomeContentFormProps) {
  const [heroBanner, setHeroBanner] = useState(
    initial.heroBannerUrl
      ? [{ url: initial.heroBannerUrl, fileId: initial.heroBannerUrl }]
      : [],
  );
  const [lockerAd, setLockerAd] = useState(
    initial.lockerAdUrl
      ? [{ url: initial.lockerAdUrl, fileId: initial.lockerAdUrl }]
      : [],
  );
  const [categories, setCategories] = useState<FeaturedCategoryImage[]>(
    initial.featuredCategoryImages.length
      ? initial.featuredCategoryImages
      : [{ label: "", imageUrl: "", imageFileId: "", href: "/products" }],
  );
  const [submitting, setSubmitting] = useState(false);
  const [saved, setSaved] = useState(false);

  function updateCategory(
    i: number,
    field: keyof FeaturedCategoryImage,
    val: string,
  ) {
    setCategories((cats) =>
      cats.map((c, idx) => (idx === i ? { ...c, [field]: val } : c)),
    );
  }

  function addCategory() {
    if (categories.length >= 3) return;
    setCategories((c) => [
      ...c,
      { label: "", imageUrl: "", imageFileId: "", href: "/products" },
    ]);
  }

  function removeCategory(i: number) {
    setCategories((c) => c.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSaved(false);
    try {
      const fd = new FormData(e.currentTarget);
      fd.set("heroBannerUrl", heroBanner[0]?.url ?? "");
      fd.set("lockerAdUrl", lockerAd[0]?.url ?? "");
      fd.set(
        "featuredCategoryImages",
        JSON.stringify(
          categories
            .filter((c) => c.label && c.imageUrl)
            .map(({ label, imageUrl, href, imageFileId }) => ({
              label,
              imageUrl,
              href,
              imageFileId: imageFileId || undefined,
            })),
        ),
      );
      await updateHomeContent(fd);
      setSaved(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {saved && (
        <div className='alert alert-success py-2 mb-4'>
          Home content saved successfully.
        </div>
      )}

      <div className='row g-4'>
        <div className='col-lg-8'>
          {/* Hero */}
          <div className='card border-0 shadow-sm mb-4'>
            <div className='card-body'>
              <h6 className='fw-semibold mb-3'>Hero Section</h6>
              <div className='mb-3'>
                <label
                  htmlFor='heroTitle'
                  className='form-label small fw-semibold'
                >
                  Hero Title
                </label>
                <input
                  id='heroTitle'
                  name='heroTitle'
                  type='text'
                  className='form-control'
                  defaultValue={initial.heroTitle}
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='heroSubtitle'
                  className='form-label small fw-semibold'
                >
                  Hero Subtitle
                </label>
                <textarea
                  id='heroSubtitle'
                  name='heroSubtitle'
                  className='form-control'
                  rows={2}
                  defaultValue={initial.heroSubtitle}
                />
              </div>
              <div>
                <label className='form-label small fw-semibold'>
                  Hero Banner Image
                </label>
                <ImageUploader
                  value={heroBanner}
                  onChange={setHeroBanner}
                  maxImages={1}
                />
              </div>
            </div>
          </div>

          {/* Locker Ad */}
          <div className='card border-0 shadow-sm mb-4'>
            <div className='card-body'>
              <h6 className='fw-semibold mb-3'>Featured Section (Locker Ad)</h6>
              <div className='mb-3'>
                <label className='form-label small fw-semibold'>
                  Locker Ad Image
                </label>
                <ImageUploader
                  value={lockerAd}
                  onChange={setLockerAd}
                  maxImages={1}
                />
              </div>
              <div>
                <label
                  htmlFor='lockerAdText'
                  className='form-label small fw-semibold'
                >
                  Locker Ad Text
                </label>
                <input
                  id='lockerAdText'
                  name='lockerAdText'
                  type='text'
                  className='form-control'
                  defaultValue={initial.lockerAdText}
                />
              </div>
            </div>
          </div>

          {/* Category grid */}
          <div className='card border-0 shadow-sm mb-4'>
            <div className='card-body'>
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <h6 className='fw-semibold mb-0'>
                  Featured Categories (max 3)
                </h6>
                {categories.length < 3 && (
                  <button
                    type='button'
                    className='btn btn-outline-secondary btn-sm'
                    onClick={addCategory}
                  >
                    + Add
                  </button>
                )}
              </div>
              {categories.map((cat, i) => (
                <div key={i} className='border rounded p-3 mb-3'>
                  <div className='d-flex justify-content-between mb-2'>
                    <strong className='small'>Category {i + 1}</strong>
                    <button
                      type='button'
                      className='btn btn-link text-danger btn-sm p-0'
                      onClick={() => removeCategory(i)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      className='form-control form-control-sm mb-2'
                      placeholder='Label (e.g. Premium Cupboards)'
                      value={cat.label}
                      onChange={(e) =>
                        updateCategory(i, "label", e.target.value)
                      }
                    />
                    <input
                      type='text'
                      className='form-control form-control-sm mb-2'
                      placeholder='Link (e.g. /products?category=wardrobe)'
                      value={cat.href}
                      onChange={(e) =>
                        updateCategory(i, "href", e.target.value)
                      }
                    />
                    <label className='form-label small fw-semibold'>
                      Category Image
                    </label>
                    <ImageUploader
                      value={
                        cat.imageUrl
                          ? [
                              {
                                url: cat.imageUrl,
                                fileId: cat.imageFileId || cat.imageUrl,
                              },
                            ]
                          : []
                      }
                      onChange={(entries) => {
                        updateCategory(i, "imageUrl", entries[0]?.url ?? "");
                        updateCategory(
                          i,
                          "imageFileId",
                          entries[0]?.fileId ?? "",
                        );
                      }}
                      maxImages={1}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='col-lg-4'>
          <div className='card border-0 shadow-sm'>
            <div className='card-body'>
              <button
                type='submit'
                className='btn btn-dark w-100'
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span
                      className='spinner-border spinner-border-sm me-2'
                      role='status'
                    />
                    Saving…
                  </>
                ) : (
                  "Save Home Content"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
