"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useScriptReinit from "@/hooks/useScriptReinit";
import type { ProductListItemDTO } from "@/types";
import { PRODUCT_CATEGORIES } from "@/types";

interface ProductsPageProps {
  initialProducts: ProductListItemDTO[];
  activeCategory?: string;
}

const ProductsPage = ({
  initialProducts,
  activeCategory = "",
}: ProductsPageProps) => {
  useScriptReinit();

  const products = initialProducts;

  return (
    <>
      {/* page-title */}
      <div className="tf-page-title">
        <h2 className="text-center text-uppercase title">Our Collection</h2>
        <ul className="breadcrumb-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Shop</li>
          <li>Collection</li>
        </ul>
      </div>
      {/* /page-title */}

      {/* main-content */}
      <div className="main-content">
        <div className="tf-spacing-10">
          <div className="tf-container w-1548">
            {activeCategory && (
              <div className="mb-4">
                <span className="badge bg-dark me-2">
                  {PRODUCT_CATEGORIES[activeCategory] ?? activeCategory}
                </span>
                <Link href="/products" className="small text-muted">
                  Clear filter
                </Link>
              </div>
            )}
            <div className="wrapper-control-shop gridLayout-wrapper">
              <div className="row">
                <div
                  className="wrapper-shop tf-grid-layout lg-col-3 tf-col-2"
                  id="gridLayout"
                >
                  {products.length === 0 && (
                    <div className="col-12 text-center py-5 text-muted">
                      <p>No products available yet. Check back soon.</p>
                    </div>
                  )}

                  {products.map((product) => (
                    <div
                      key={product._id}
                      className="card-product has-price-default loadItem grid"
                      data-category={product.category}
                    >
                      <div className="card-product_wrapper">
                        <Link
                          href={`/products/${product.slug}`}
                          className="product-img"
                        >
                          <Image
                            className="img-product"
                            width={338}
                            height={338}
                            loading="lazy"
                            decoding="async"
                            src={product.thumbnailImage}
                            alt={product.name}
                            sizes="(max-width: 768px) 100vw, 338px"
                          />
                        </Link>
                      </div>
                      <div className="card-product_info">
                        <span
                          className="badge bg-secondary mb-1"
                          style={{ fontSize: 11 }}
                        >
                          {PRODUCT_CATEGORIES[product.category] ??
                            product.category}
                        </span>
                        <Link
                          href={`/products/${product.slug}`}
                          className="name-product h6 link d-block"
                        >
                          {product.name}
                        </Link>
                        <div className="price-wrap text-body-default fw-5">
                          {product.priceLabel ||
                            `₹${product.price.toLocaleString("en-IN")}`}
                        </div>
                        <div className="mt-2">
                          <Link
                            href={`/products/${product.slug}`}
                            className="btn btn-sm btn-outline-dark"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /main-content */}
    </>
  );
};

export default ProductsPage;
