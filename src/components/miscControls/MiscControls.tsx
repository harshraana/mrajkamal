"use client";

import Link from "next/link";
import React from "react";
import useScriptReinit from "@/hooks/useScriptReinit";
import { PRODUCT_CATEGORIES } from "@/types";

const MiscControls = () => {
  useScriptReinit();

  return (
    <>
      {/* Mobile toolbar */}
      <div className="tf-toolbar-bottom">
        <div className="toolbar-item">
          <Link href="/">
            <span className="toolbar-icon">
              <i className="icon icon-house"></i>
            </span>
            <span className="toolbar-label">Home</span>
          </Link>
        </div>
        <div className="toolbar-item">
          <Link href="/products">
            <span className="toolbar-icon">
              <i className="icon icon-storefront"></i>
            </span>
            <span className="toolbar-label">Shop</span>
          </Link>
        </div>
        <div className="toolbar-item">
          <Link href="/about">
            <span className="toolbar-icon">
              <i className="icon icon-user"></i>
            </span>
            <span className="toolbar-label">About</span>
          </Link>
        </div>
        <div className="toolbar-item">
          <a
            href="#filterShop"
            data-bs-toggle="offcanvas"
            aria-controls="filterShop"
          >
            <span className="toolbar-icon">
              <i className="icon icon-funnel"></i>
            </span>
            <span className="toolbar-label">Filter</span>
          </a>
        </div>
      </div>

      {/* Category filter */}
      <div className="offcanvas offcanvas-start canvas-filter" id="filterShop">
        <div className="canvas-wrapper">
          <div className="canvas-header">
            <div className="h5 title">Categories</div>
            <span className="icon-close-popup" data-bs-dismiss="offcanvas">
              <i className="icon-close"></i>
            </span>
          </div>
          <div className="canvas-body">
            <div className="widget-facet mb-0">
              <ul className="filter-group-check current-scrollbar list-unstyled mb-0">
                <li className="list-item mb-2">
                  <Link
                    href="/products"
                    className="label d-flex justify-content-between text-decoration-none"
                    data-bs-dismiss="offcanvas"
                  >
                    <span className="cate-text">All Products</span>
                  </Link>
                </li>
                {Object.entries(PRODUCT_CATEGORIES).map(([key, label]) => (
                  <li key={key} className="list-item mb-2">
                    <Link
                      href={`/products?category=${key}`}
                      className="label d-flex justify-content-between text-decoration-none"
                      data-bs-dismiss="offcanvas"
                    >
                      <span className="cate-text">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiscControls;
