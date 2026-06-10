export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/db";
import Product from "@/lib/models/Product";
import Link from "next/link";

export default async function AdminDashboard() {
  await connectDB();

  const [total, active, featured] = await Promise.all([
    Product.countDocuments(),
    Product.countDocuments({ isActive: true }),
    Product.countDocuments({ isFeatured: true, isActive: true }),
  ]);

  const stats = [
    { label: "Total Products", value: total, color: "dark" },
    { label: "Active Products", value: active, color: "success" },
    { label: "Featured Products", value: featured, color: "primary" },
    { label: "Inactive Products", value: total - active, color: "secondary" },
  ];

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h3 className='fw-bold mb-0'>Dashboard</h3>
        <Link href='/admin/products/new' className='btn btn-dark btn-sm'>
          + Add Product
        </Link>
      </div>

      <div className='row g-3 mb-4'>
        {stats.map(({ label, value, color }) => (
          <div key={label} className='col-6 col-md-3'>
            <div className={`card border-0 shadow-sm bg-${color} text-white`}>
              <div className='card-body'>
                <div className='fs-2 fw-bold'>{value}</div>
                <div className='small opacity-75'>{label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='row g-3'>
        <div className='col-md-6'>
          <div className='card border-0 shadow-sm'>
            <div className='card-body'>
              <h6 className='fw-semibold mb-3'>Quick Links</h6>
              <ul className='list-unstyled mb-0'>
                <li className='mb-2'>
                  <Link
                    href='/admin/products/new'
                    className='text-decoration-none'
                  >
                    → Add new product
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/admin/products' className='text-decoration-none'>
                    → Manage products
                  </Link>
                </li>
                <li>
                  <Link href='/admin/home' className='text-decoration-none'>
                    → Edit home page content
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
