import { ProductList } from "@/app/components/ProductList";
import { CategoryFilter } from "@/app/components/CategoryFilter";

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="mb-6">
        <CategoryFilter
          onCategoryChange={(category) => {
            // TODO: Implement filtering logic
            console.log("Selected category:", category);
          }}
        />
      </div>
      <ProductList />
    </div>
  );
}
