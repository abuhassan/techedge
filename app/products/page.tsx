import { Product } from "@/types/product";
import ProductCard from "../components/ProductCard";

async function getProducts(): Promise<Product[]> {
  // In a real app, this would be an API call
  return [
    {
      id: "1",
      name: "Professional Chef Knife",
      price: 129.99,
      image: "/images/chef-knife.jpg",
      categoryId: "cutlery", // Add this if you're using categories
    },
    {
      id: "2",
      name: "Stainless Steel Cookware Set",
      price: 299.99,
      image: "/images/cookware-set.jpg",
      categoryId: "cookware", // Add this if you're using categories
    },
    // ... more products
  ];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
