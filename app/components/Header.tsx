import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          GourmetKitchen
        </Link>

        <div className="flex-1 max-w-xl mx-4">
          <Input
            type="search"
            placeholder="Search for kitchenware..."
            className="w-full"
          />
        </div>

        <nav className="flex items-center space-x-4">
          <Link
            href="/categories"
            className="text-gray-600 hover:text-gray-800"
          >
            Categories
          </Link>
          <Link href="/deals" className="text-gray-600 hover:text-gray-800">
            Deals
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
