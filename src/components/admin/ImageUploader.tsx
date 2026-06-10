"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface ImageEntry {
  url: string;
  fileId: string;
}

interface ImageUploaderProps {
  value: ImageEntry[];
  onChange: (entries: ImageEntry[]) => void;
  maxImages?: number;
}

export default function ImageUploader({
  value,
  onChange,
  maxImages = 10,
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragIndex = useRef<number | null>(null);

  async function handleFiles(files: FileList) {
    if (value.length >= maxImages) {
      setError(`Maximum ${maxImages} image(s) allowed`);
      return;
    }

    setError(null);
    setUploading(true);

    const toUpload = Array.from(files).slice(0, maxImages - value.length);
    const results: ImageEntry[] = [];

    for (const file of toUpload) {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", "/mrajkamal/products");

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: fd,
        });
        const json = await res.json();
        if (!res.ok || !json.success) {
          setError(json.error ?? "Upload failed");
        } else {
          results.push({ url: json.data.url, fileId: json.data.fileId });
        }
      } catch {
        setError("Network error during upload");
      }
    }

    setUploading(false);
    if (results.length) onChange([...value, ...results]);
  }

  async function handleRemove(index: number) {
    const entry = value[index];
    const updated = value.filter((_, i) => i !== index);
    onChange(updated);

    // Delete from ImageKit in background
    try {
      await fetch("/api/admin/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileId: entry.fileId }),
      });
    } catch {
      // Non-critical — file may already be gone
    }
  }

  function handleDragStart(index: number) {
    dragIndex.current = index;
  }

  function handleDrop(targetIndex: number) {
    if (dragIndex.current === null || dragIndex.current === targetIndex) return;
    const reordered = [...value];
    const [moved] = reordered.splice(dragIndex.current, 1);
    reordered.splice(targetIndex, 0, moved);
    dragIndex.current = null;
    onChange(reordered);
  }

  return (
    <div>
      {/* Previews */}
      <div className='d-flex flex-wrap gap-2 mb-2'>
        {value.map((entry, i) => (
          <div
            key={entry.fileId || entry.url}
            draggable
            onDragStart={() => handleDragStart(i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(i)}
            style={{ position: "relative", cursor: "grab" }}
          >
            <Image
              src={entry.url}
              alt={`Image ${i + 1}`}
              width={80}
              height={80}
              style={{
                objectFit: "cover",
                borderRadius: 4,
                border: i === 0 ? "2px solid #333" : "1px solid #ccc",
              }}
            />
            {i === 0 && (
              <span
                style={{
                  position: "absolute",
                  bottom: 2,
                  left: 2,
                  background: "#333",
                  color: "#fff",
                  fontSize: 9,
                  padding: "1px 4px",
                  borderRadius: 2,
                }}
              >
                Cover
              </span>
            )}
            <button
              type='button'
              onClick={() => handleRemove(i)}
              style={{
                position: "absolute",
                top: 2,
                right: 2,
                background: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 18,
                height: 18,
                fontSize: 10,
                lineHeight: 1,
                cursor: "pointer",
                padding: 0,
              }}
              aria-label={`Remove image ${i + 1}`}
            >
              ×
            </button>
          </div>
        ))}

        {value.length < maxImages && (
          <button
            type='button'
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            style={{
              width: 80,
              height: 80,
              border: "2px dashed #ccc",
              borderRadius: 4,
              background: "transparent",
              cursor: "pointer",
              fontSize: 24,
              color: "#999",
            }}
            aria-label='Upload image'
          >
            {uploading ? (
              <span
                className='spinner-border spinner-border-sm'
                role='status'
              />
            ) : (
              "+"
            )}
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type='file'
        accept='image/jpeg,image/png,image/webp'
        multiple
        className='d-none'
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
      />

      {error && <div className='text-danger small mt-1'>{error}</div>}
      <div className='text-muted small'>
        Drag to reorder. First image is the cover/thumbnail. Max {maxImages}{" "}
        images.
      </div>
    </div>
  );
}
