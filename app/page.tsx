import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Welcome to TechEdge</h1>
      <p className="text-xl mb-8">
        Discover our high-tech kitchenware collection
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((product) => (
          <div
            key={product}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <Image
              src={`https://picsum.photos/id/${product + 100}/300/200`}
              alt={`Kitchen Gadget ${product}`}
              width={300}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">
              Smart Kitchen Gadget {product}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Experience the future of cooking with our advanced kitchen
              technology.
            </p>
            <Button className="w-full">Add to Cart</Button>
          </div>
        ))}
      </div>
    </>
  );
}
