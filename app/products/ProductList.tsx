"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/app/products/ProductCard";

type Product = {
  id: string | number;
  // Add other product properties here
};

function getProducts() {
  // In a real app, you'd use your actual API endpoint
  return fetch("https://your-api.com/products").then((res) => {
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  });
}

export default function ProductList() {
  type Product = {
    id: string | number;
    // Add other product properties here
  };

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
