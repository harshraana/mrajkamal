"use client";

import { deactivateProduct } from "@/app/actions/products";

interface DeactivateProductButtonProps {
  productId: string;
  productName: string;
  variant?: "table" | "danger-zone";
}

export default function DeactivateProductButton({
  productId,
  productName,
  variant = "table",
}: DeactivateProductButtonProps) {
  const action = deactivateProduct.bind(null, productId);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (!confirm(`Deactivate "${productName}"?`)) {
      e.preventDefault();
    }
  }

  if (variant === "danger-zone") {
    return (
      <form action={action}>
        <button
          type="submit"
          className="btn btn-outline-danger btn-sm"
          onClick={handleClick}
        >
          Deactivate Product
        </button>
      </form>
    );
  }

  return (
    <form action={action} style={{ display: "inline" }}>
      <button
        type="submit"
        className="btn btn-outline-danger btn-sm"
        onClick={handleClick}
      >
        Deactivate
      </button>
    </form>
  );
}
