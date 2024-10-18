import Link from "next/link";
import Image from "next/image";
import { Category } from "../../types/category";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/categories/${category.id}`} className="block group">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={category.imageUrl}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
}
