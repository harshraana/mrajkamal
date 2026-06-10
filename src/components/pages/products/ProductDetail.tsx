"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useScriptReinit from "@/hooks/useScriptReinit";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { ProductDetailDTO } from "@/types";

interface ProductDetailProps {
  product: ProductDetailDTO;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  useScriptReinit();
  const [activeImage, setActiveImage] = useState(0);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const productUrl = `${siteUrl}/products/${product.slug}`;
  const priceDisplay =
    product.priceLabel || `₹${product.price.toLocaleString("en-IN")}`;

  return (
    <>
      {/* page-title */}
      <div className="tf-page-title-v2">
        <div className="tf-container">
          <ul className="breadcrumb-list v2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Shop</Link>
            </li>
            <li>{product.name}</li>
          </ul>
        </div>
      </div>
      {/* /page-title */}

      {/* main-content */}
      <div className="main-content">
        <section className="flat-single-product flat-spacing-3">
          <div className="tf-main-product section-image-zoom">
            <div className="tf-container">
              <div className="row">
                {/* Product Images */}
                <div className="col-md-6">
                  <div className="tf-product-media-wrap sticky-top">
                    <div className="product-thumbs-slider thumbs-bottom">
                      <div
                        style={{
                          position: "relative",
                          aspectRatio: "1/1",
                          background: "#f8f8f8",
                          borderRadius: 4,
                        }}
                      >
                        <Image
                          src={
                            product.images[activeImage] ??
                            product.thumbnailImage
                          }
                          alt={product.name}
                          fill
                          style={{ objectFit: "contain" }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>

                      {product.images.length > 1 && (
                        <div className="d-flex gap-2 mt-3 flex-wrap">
                          {product.images.map((img, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setActiveImage(i)}
                              style={{
                                border:
                                  i === activeImage
                                    ? "2px solid #333"
                                    : "1px solid #ccc",
                                borderRadius: 4,
                                padding: 0,
                                cursor: "pointer",
                                background: "none",
                              }}
                              aria-label={`View image ${i + 1}`}
                            >
                              <Image
                                src={img}
                                alt={`${product.name} view ${i + 1}`}
                                width={80}
                                height={80}
                                style={{
                                  objectFit: "cover",
                                  borderRadius: 3,
                                  display: "block",
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="col-md-6">
                  <div className="tf-product-info-wrap position-relative">
                    <div className="tf-product-info-list other-image-zoom">
                      <div className="tf-product-info-title">
                        <h1 className="font-1 fw-6 fs-32">{product.name}</h1>
                        <span
                          className="badge bg-secondary mb-2 d-inline-block"
                          style={{ textTransform: "capitalize" }}
                        >
                          {product.category}
                        </span>
                      </div>

                      <div className="tf-product-info-price">
                        <div className="price-on-sale fs-24 fw-6">
                          {priceDisplay}
                        </div>
                      </div>

                      {product.features.length > 0 && (
                        <div className="tf-product-info-extra-link my-3">
                          <ul className="list-unstyled">
                            {product.features.map((feat, i) => (
                              <li
                                key={i}
                                className="d-flex align-items-start gap-2 mb-1"
                              >
                                <span style={{ marginTop: 3 }}>✓</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="tf-product-info-buy-button mt-4">
                        <div className="d-flex flex-column gap-3 w-100">
                          <WhatsAppButton
                            productName={product.name}
                            price={priceDisplay}
                            productUrl={productUrl}
                            thumbnailUrl={product.thumbnailImage}
                            customMessage={product.whatsappMessage}
                          />
                        </div>
                      </div>

                      <div className="tf-product-info-des mt-4">
                        <h6 className="fw-semibold mb-2">Description</h6>
                        <div
                          className="product-description"
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* /main-content */}
    </>
  );
};

export default ProductDetail;
