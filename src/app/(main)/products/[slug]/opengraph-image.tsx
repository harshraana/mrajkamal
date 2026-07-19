import { ImageResponse } from "next/og";
import { getProductBySlug } from "@/lib/products";
import { formatINR, absoluteUrl } from "@/lib/site-url";

/**
 * The link-preview card for a product — and the reason the product PHOTO shows
 * up in a WhatsApp chat at all.
 *
 * `wa.me` accepts only `?text=`; there is no way to attach an image. So when a
 * customer taps "Inquire on WhatsApp", the photo they see in the message is the
 * link preview WhatsApp renders by crawling this page's OG tags. That makes this
 * file the feature, not decoration — if it breaks, the inquiry message degrades
 * to a bare URL.
 *
 * ImageResponse constraints, from the docs rather than from memory:
 *   • FLEXBOX ONLY. `display: grid` silently does not work.
 *   • ~500KB total budget including any images and fonts.
 *   • Images must be referenced by absolute URL.
 */
export const alt = "M Rajkamal furniture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  const photo = product?.thumbnail?.url ? absoluteUrl(product.thumbnail.url) : null;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#f9f9f9",
          fontFamily: "sans-serif",
        }}
      >
        {photo && (
          <div style={{ display: "flex", width: "50%", height: "100%" }}>
            {/* A raw <img> is correct here, not a lint escape: ImageResponse
                renders with Satori, which understands plain <img> and knows
                nothing about next/image. */}
            <img
              src={photo}
              alt=''
              width={600}
              height={630}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: photo ? "50%" : "100%",
            padding: 60,
          }}
        >
          <div style={{ display: "flex", fontSize: 22, color: "#f54a00", letterSpacing: 2 }}>
            M RAJKAMAL · SINCE 1962
          </div>

          <div
            style={{
              display: "flex",
              fontSize: photo ? 46 : 64,
              fontWeight: 700,
              color: "#202020",
              marginTop: 20,
              lineHeight: 1.15,
            }}
          >
            {product?.name ?? "Premium furniture, Dadar West"}
          </div>

          {product && (
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 14,
                marginTop: 28,
              }}
            >
              <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#202020" }}>
                ₹{formatINR(product.price)}
              </div>
              {product.hasDiscount && product.mrp !== null && (
                <div
                  style={{
                    display: "flex",
                    fontSize: 26,
                    color: "#9a9a9a",
                    textDecoration: "line-through",
                    paddingBottom: 6,
                  }}
                >
                  ₹{formatINR(product.mrp)}
                </div>
              )}
            </div>
          )}

          <div style={{ display: "flex", fontSize: 22, color: "#646464", marginTop: 24 }}>
            Authorised Godrej Interio dealer
          </div>
        </div>
      </div>
    ),
    size,
  );
}
