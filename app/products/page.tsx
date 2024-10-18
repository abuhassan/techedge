import { PrismaClient, Product, Category } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../components/Pagination";

const prisma = new PrismaClient();

function ProductCard({
  product,
}: {
  product: Product & { category: Category | null };
}) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
        <div className="relative w-full h-48">
          <Image
            src={product.image || "/hightech-placeholder.png"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/hightech-placeholder.png";
              target.onerror = null;
            }}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.category?.name}</p>
          <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = parseInt(searchParams.page || "1");
  const limit = 10;
  const skip = (page - 1) * limit;

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      skip,
      take: limit,
      include: { category: true },
    }),
    prisma.product.count(),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          baseUrl="/products"
        />
      </div>
    </div>
  );
}
