import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import ProductForm from "@/components/admin/ProductForm";
import { updateProduct } from "@/app/actions/products";
import DeactivateProductButton from "@/components/admin/DeactivateProductButton";
import Link from "next/link";
import mongoose from "mongoose";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  await connectDB();
  if (!mongoose.Types.ObjectId.isValid(id))
    return { title: "Product Not Found | Admin" };
  const product = await Product.findById(id).select("name").lean();
  return {
    title: product
      ? `Edit ${product.name} | Admin`
      : "Product Not Found | Admin",
  };
}

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;

  if (!mongoose.Types.ObjectId.isValid(id)) notFound();

  await connectDB();
  const product = await Product.findById(id).lean();
  if (!product) notFound();

  const updateAction = updateProduct.bind(null, id);

  // Plain serializable product for client component
  const productData = {
    _id: product._id.toString(),
    name: product.name,
    slug: product.slug,
    description: product.description,
    price: product.price,
    priceLabel: product.priceLabel,
    category: product.category,
    images: product.images,
    features: product.features,
    isFeatured: product.isFeatured,
    isActive: product.isActive,
    whatsappMessage: product.whatsappMessage,
  };

  return (
    <div>
      <div className='d-flex align-items-center gap-3 mb-4'>
        <Link
          href='/admin/products'
          className='btn btn-outline-secondary btn-sm'
        >
          ← Back
        </Link>
        <h3 className='fw-bold mb-0'>Edit: {product.name}</h3>
        {!product.isActive && <span className='badge bg-danger'>Inactive</span>}
      </div>

      <ProductForm product={productData} action={updateAction} isEdit />

      {/* Danger zone */}
      {product.isActive && (
        <div className='card border-danger mt-4'>
          <div className='card-body'>
            <h6 className='text-danger fw-semibold mb-2'>Danger Zone</h6>
            <p className='small text-muted mb-3'>
              Deactivating hides the product from the public site. It can be
              re-activated by editing.
            </p>
            <DeactivateProductButton
              productId={id}
              productName={product.name}
              variant="danger-zone"
            />
          </div>
        </div>
      )}
    </div>
  );
}
