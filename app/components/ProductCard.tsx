"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { addItem } from "../redux/cartSlice";
import { Product } from "@/types/product";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    try {
      setIsLoading(true);
      dispatch(addItem(product));
      toast.success("Item added to cart");
    } catch (error) {
      toast.error("Failed to add item to cart. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48">
          <Image
            src={
              imageError
                ? "/placeholder.svg?height=200&width=200"
                : product.imageUrl || "/placeholder.svg?height=200&width=200"
            }
            alt={product.name}
            layout="fill"
            objectFit="cover"
            onError={() => setImageError(true)}
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Adding..." : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
}
