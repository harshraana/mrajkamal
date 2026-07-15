"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, Pencil, Star, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  deleteProduct,
  setProductActive,
  setProductFeatured,
} from "@/app/actions/products";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { adminPath } from "@/lib/admin-paths";

export default function ProductRowActions({
  id,
  name,
  isActive,
  isFeatured,
  imageCount,
}: {
  id: string;
  name: string;
  isActive: boolean;
  isFeatured: boolean;
  imageCount: number;
}) {
  const [pending, startTransition] = useTransition();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const run = (fn: () => Promise<void>, message: string) =>
    startTransition(async () => {
      try {
        await fn();
        toast.success(message);
      } catch {
        toast.error("Something went wrong.");
      }
    });

  return (
    <div className='flex items-center justify-end gap-1'>
      <Button
        variant='ghost'
        size='icon-sm'
        aria-label={isFeatured ? "Remove from home page" : "Show on home page"}
        title={isFeatured ? "Remove from home page" : "Show on home page"}
        disabled={pending}
        onClick={() =>
          run(
            () => setProductFeatured(id, !isFeatured),
            isFeatured ? "Removed from the home page." : "Featured on the home page.",
          )
        }
      >
        <Star size={15} className={isFeatured ? "fill-primary text-primary" : ""} />
      </Button>

      <Button
        variant='ghost'
        size='icon-sm'
        aria-label={isActive ? "Hide from the site" : "Show on the site"}
        title={isActive ? "Hide from the site" : "Show on the site"}
        disabled={pending}
        onClick={() =>
          run(
            () => setProductActive(id, !isActive),
            isActive ? "Hidden from the site." : "Live on the site.",
          )
        }
      >
        {isActive ? <Eye size={15} /> : <EyeOff size={15} />}
      </Button>

      <Link href={adminPath(`/products/${id}/edit`)} aria-label='Edit'>
        <Button variant='ghost' size='icon-sm' title='Edit'>
          <Pencil size={15} />
        </Button>
      </Link>

      <Button
        variant='ghost'
        size='icon-sm'
        aria-label='Delete'
        title='Delete'
        disabled={pending}
        onClick={() => setConfirmOpen(true)}
      >
        {pending ? (
          <Loader2 size={15} className='animate-spin' />
        ) : (
          <Trash2 size={15} className='text-destructive' />
        )}
      </Button>

      {/* A real dialog, not window.confirm() — which `main` used, and which is
          unstyled and silently blocked in some contexts. */}
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete “{name}”?</AlertDialogTitle>
            <AlertDialogDescription>
              This permanently deletes the product, its reviews
              {imageCount > 0
                ? `, and its ${imageCount} image${imageCount === 1 ? "" : "s"} from ImageKit`
                : ""}
              . This cannot be undone — to just take it off the site, hide it instead.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => run(() => deleteProduct(id), "Product deleted.")}
              className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
            >
              Delete permanently
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
