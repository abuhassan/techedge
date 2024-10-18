"use client";

import { useState } from "react";
import { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    // TODO: Implement add to cart functionality
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
    setIsAdding(false);
    alert(`Added ${product.name} to cart`);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400"
    >
      {isAdding ? "Adding..." : "Add to Cart"}
    </button>
  );
}
