import { Product } from "@/types/product";
import ProductCard from "../components/ProductCard";

async function searchProducts(query: string): Promise<Product[]> {
  if (!process.env.API_URL) {
    console.error("API_URL is not defined in environment variables");
    return [];
  }

  try {
    const res = await fetch(
      `${process.env.API_URL}/products/search?q=${encodeURIComponent(query)}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch search results:", error);
    return [];
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  const products = await searchProducts(query);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">
        {query ? `Search Results for "${query}"` : "Search Results"}
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found matching your search.</p>
      )}
    </div>
  );
}
