"use client";

import { type ReactNode } from "react";
import { ChevronDown, ChevronUp, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * A reorderable list of anything, serialized into one hidden JSON input.
 *
 * Services, clients, nav links, footer links and store hours are all the same
 * shape of problem, so they all use this rather than five bespoke editors. The
 * server parses it with `jsonArray(schema)`, so a malformed payload becomes a
 * field error rather than a thrown SyntaxError.
 */
export default function RepeatableList<T>({
  name,
  items,
  onChange,
  blank,
  renderItem,
  addLabel = "Add",
  max,
}: {
  name: string;
  items: T[];
  onChange: (items: T[]) => void;
  blank: () => T;
  renderItem: (item: T, update: (patch: Partial<T>) => void, index: number) => ReactNode;
  addLabel?: string;
  max?: number;
}) {
  const update = (index: number, patch: Partial<T>) =>
    onChange(items.map((item, i) => (i === index ? { ...item, ...patch } : item)));

  const move = (from: number, to: number) => {
    if (to < 0 || to >= items.length) return;
    const next = [...items];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    onChange(next);
  };

  return (
    <div className='space-y-3'>
      <input type='hidden' name={name} value={JSON.stringify(items)} />

      <ul className='space-y-3'>
        {items.map((item, index) => (
          <li
            key={index}
            className='flex items-start gap-2 rounded-lg border border-border bg-card p-3'
          >
            <div className='min-w-0 flex-1'>{renderItem(item, (p) => update(index, p), index)}</div>

            <div className='flex shrink-0 flex-col'>
              <Button
                type='button'
                variant='ghost'
                size='icon-xs'
                aria-label='Move up'
                disabled={index === 0}
                onClick={() => move(index, index - 1)}
              >
                <ChevronUp size={13} />
              </Button>
              <Button
                type='button'
                variant='ghost'
                size='icon-xs'
                aria-label='Move down'
                disabled={index === items.length - 1}
                onClick={() => move(index, index + 1)}
              >
                <ChevronDown size={13} />
              </Button>
              <Button
                type='button'
                variant='ghost'
                size='icon-xs'
                aria-label='Remove'
                onClick={() => onChange(items.filter((_, i) => i !== index))}
              >
                <X size={13} className='text-destructive' />
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {(max === undefined || items.length < max) && (
        <Button
          type='button'
          variant='outline'
          size='sm'
          className='gap-1'
          onClick={() => onChange([...items, blank()])}
        >
          <Plus size={14} /> {addLabel}
        </Button>
      )}
    </div>
  );
}
