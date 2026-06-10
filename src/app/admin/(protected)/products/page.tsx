import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import DeactivateProductButton from "@/components/admin/DeactivateProductButton";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

const CATEGORIES: Record<string, string> = {
  sofa: "Sofa",
  wardrobe: "Wardrobe",
  locker: "Locker",
  bed: "Bed",
  chair: "Chair",
  table: "Table",
  other: "Other",
};

export default async function AdminProductsPage() {
  await connectDB();
  const products = await Product.find()
    .sort({ createdAt: -1 })
    .select(
      "name slug category price priceLabel thumbnailImage isFeatured isActive createdAt",
    )
    .lean();

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h3 className='fw-bold mb-0'>Products ({products.length})</h3>
        <Link href='/admin/products/new' className='btn btn-dark btn-sm'>
          + Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className='card border-0 shadow-sm p-5 text-center text-muted'>
          <p className='mb-3'>No products yet.</p>
          <Link
            href='/admin/products/new'
            className='btn btn-dark btn-sm mx-auto'
            style={{ width: 160 }}
          >
            Add First Product
          </Link>
        </div>
      ) : (
        <div className='card border-0 shadow-sm'>
          <div className='table-responsive'>
            <table className='table table-hover align-middle mb-0'>
              <thead className='table-dark'>
                <tr>
                  <th style={{ width: 60 }}>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th style={{ width: 160 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id.toString()}>
                    <td>
                      {product.thumbnailImage ? (
                        <Image
                          src={product.thumbnailImage}
                          alt={product.name}
                          width={48}
                          height={48}
                          style={{ objectFit: "cover", borderRadius: 4 }}
                        />
                      ) : (
                        <div
                          className='bg-light d-flex align-items-center justify-content-center'
                          style={{ width: 48, height: 48, borderRadius: 4 }}
                        >
                          <span className='text-muted small'>No img</span>
                        </div>
                      )}
                    </td>
                    <td>
                      <div className='fw-semibold'>{product.name}</div>
                      <div className='text-muted small'>
                        /products/{product.slug}
                      </div>
                      {product.isFeatured && (
                        <span className='badge bg-warning text-dark ms-0 mt-1'>
                          Featured
                        </span>
                      )}
                    </td>
                    <td>
                      <span className='badge bg-secondary'>
                        {CATEGORIES[product.category] ?? product.category}
                      </span>
                    </td>
                    <td>
                      <div>
                        {product.priceLabel ||
                          `₹${product.price.toLocaleString("en-IN")}`}
                      </div>
                    </td>
                    <td>
                      {product.isActive ? (
                        <span className='badge bg-success'>Active</span>
                      ) : (
                        <span className='badge bg-danger'>Inactive</span>
                      )}
                    </td>
                    <td>
                      <Link
                        href={`/admin/products/${product._id.toString()}/edit`}
                        className='btn btn-outline-dark btn-sm me-2'
                      >
                        Edit
                      </Link>
                      {product.isActive && (
                        <DeactivateProductButton
                          productId={product._id.toString()}
                          productName={product.name}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
