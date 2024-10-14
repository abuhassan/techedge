import Link from "next/link";
import { Button } from "@/components/ui/button";

// This would typically come from an API or database
const categories = [
  { id: "cookware", name: "Cookware" },
  { id: "cutlery", name: "Cutlery" },
  { id: "appliances", name: "Appliances" },
  { id: "bakeware", name: "Bakeware" },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Product Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="border rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <Button asChild>
              <Link href={`/categories/${category.id}`}>View Products</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
