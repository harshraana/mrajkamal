import type { Metadata } from "next";
import ProductForm from "@/components/admin/ProductForm";
import { createProduct } from "@/app/actions/products";
import Link from "next/link";

export const metadata: Metadata = { title: "Add Product | Admin" };

export default function NewProductPage() {
  return (
    <div>
      <div className='d-flex align-items-center gap-3 mb-4'>
        <Link
          href='/admin/products'
          className='btn btn-outline-secondary btn-sm'
        >
          ← Back
        </Link>
        <h3 className='fw-bold mb-0'>Add New Product</h3>
      </div>
      <ProductForm action={createProduct} />
    </div>
  );
}
