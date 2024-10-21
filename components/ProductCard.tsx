import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

export function ProductCard({ name, description, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={300}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button>Add to Cart</Button>
    </div>
  );
}
