import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Welcome to GourmetKitchen</h1>
        <p className="text-xl mb-6">
          Discover premium kitchenware for your culinary adventures
        </p>
        <Button asChild>
          <Link href="/categories">Shop Now</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        {/* Add a grid of featured products here */}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
        {/* Add a grid of popular categories here */}
      </section>

      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose GourmetKitchen?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Premium quality kitchenware</li>
          <li>Expert customer support</li>
          <li>Free shipping on orders over $100</li>
          <li>30-day money-back guarantee</li>
        </ul>
      </section>
    </div>
  );
}
