"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { GripVertical, Loader2, Upload, X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { ImageRefDTO } from "@/types";

export type UploadScope =
  | { scope: "product"; productId: string }
  | { scope: "site" };

type Props = {
  value: ImageRefDTO[];
  onChange: (images: ImageRefDTO[]) => void;
  target: UploadScope;
  max?: number;
  /** Single-image fields (hero photo, OG image) render without the reorder affordances. */
  single?: boolean;
};

const ACCEPT = "image/jpeg,image/png,image/webp,image/avif";

/** Bounded concurrency. Serial uploads (what `main` did) make 10 images feel like a hang. */
async function pool<T, R>(limit: number, items: T[], fn: (item: T) => Promise<R>) {
  const results: R[] = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (i < items.length) {
        const index = i++;
        results[index] = await fn(items[index]);
      }
    }),
  );
  return results;
}

export default function ImageUploader({
  value,
  onChange,
  target,
  max = 10,
  single = false,
}: Props) {
  const [busy, setBusy] = useState(false);
  const dragIndex = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const limit = single ? 1 : max;

  async function uploadOne(file: File): Promise<ImageRefDTO | null> {
    const body = new FormData();
    body.append("file", file);
    // The client says WHAT kind of upload this is. It never names a folder —
    // the server derives the path. `main` took the folder straight from the
    // form, which was an arbitrary-path write into the ImageKit account.
    body.append("scope", target.scope);
    if (target.scope === "product") body.append("productId", target.productId);

    const res = await fetch("/api/admin/upload", { method: "POST", body });
    const json = await res.json();

    if (!res.ok) {
      toast.error(json.error ?? `Could not upload ${file.name}`);
      return null;
    }
    return {
      url: json.data.url,
      // The real ImageKit fileId, persisted. This is what makes "remove" actually
      // delete instead of silently orphaning the file forever.
      fileId: json.data.fileId,
      alt: "",
      width: json.data.width ?? 0,
      height: json.data.height ?? 0,
    };
  }

  async function handleFiles(files: FileList | null) {
    if (!files?.length) return;

    const room = limit - value.length;
    const chosen = Array.from(files).slice(0, single ? 1 : Math.max(0, room));
    if (!chosen.length) {
      toast.error(`At most ${limit} image${limit > 1 ? "s" : ""}.`);
      return;
    }

    setBusy(true);
    try {
      const uploaded = (await pool(3, chosen, uploadOne)).filter(
        (i): i is ImageRefDTO => i !== null,
      );
      if (uploaded.length) {
        onChange(single ? uploaded.slice(0, 1) : [...value, ...uploaded]);
      }
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  async function remove(index: number) {
    const image = value[index];
    onChange(value.filter((_, i) => i !== index));

    // fileId "" = a seeded /public asset ImageKit doesn't own. Nothing to delete.
    if (!image.fileId) return;
    try {
      await fetch("/api/admin/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileId: image.fileId }),
      });
    } catch {
      // Deliberately non-blocking. If ImageKit is unreachable, the admin's edit
      // still goes through and the file becomes an orphan that
      // `npm run imagekit:reconcile` will sweep.
    }
  }

  function reorder(to: number) {
    const from = dragIndex.current;
    dragIndex.current = null;
    if (from === null || from === to) return;

    const next = [...value];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    onChange(next);
  }

  return (
    <div className='space-y-3'>
      {value.length > 0 && (
        <ul
          className={cn(
            "grid gap-3",
            single ? "grid-cols-1 max-w-[220px]" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
          )}
        >
          {value.map((image, index) => (
            <li
              key={image.fileId || image.url}
              draggable={!single}
              onDragStart={() => (dragIndex.current = index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => reorder(index)}
              className='group relative aspect-square overflow-hidden rounded-lg border border-border bg-muted'
            >
              <Image
                src={image.url}
                alt={image.alt || ""}
                fill
                sizes='200px'
                className='object-cover'
              />

              {!single && index === 0 && (
                <span className='absolute top-1 left-1 rounded bg-primary px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground'>
                  Cover
                </span>
              )}
              {!single && (
                <GripVertical
                  size={14}
                  className='absolute bottom-1 left-1 text-white/70 opacity-0 transition group-hover:opacity-100'
                />
              )}

              <button
                type='button'
                onClick={() => remove(index)}
                aria-label='Remove image'
                className='absolute top-1 right-1 rounded-full bg-black/60 p-1 text-white opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100'
              >
                <X size={13} />
              </button>
            </li>
          ))}
        </ul>
      )}

      {value.length < limit && (
        <label
          className={cn(
            "flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-card px-4 py-6 text-sm text-muted-foreground transition",
            busy ? "opacity-60" : "hover:border-primary hover:text-primary",
          )}
        >
          {busy ? <Loader2 size={16} className='animate-spin' /> : <Upload size={16} />}
          {busy ? "Uploading…" : single ? "Choose an image" : "Add images"}
          <input
            ref={inputRef}
            type='file'
            accept={ACCEPT}
            multiple={!single}
            disabled={busy}
            className='sr-only'
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
      )}

      {!single && (
        <p className='text-xs text-muted-foreground'>
          JPEG, PNG, WebP or AVIF · up to 5MB each · the first image is the cover.
          Drag to reorder.
        </p>
      )}
    </div>
  );
}
