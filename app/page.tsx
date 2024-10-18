import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import CategoryHighlights from "./components/CategoryHighlights";
import { FeaturedProducts } from "./components/FeaturedProducts";
import PromotionBanner from "./components/PromotionalBanner";
import NewsletterSignup from "./components/NewsletterSignup";
import Loading from "./components/LoadingSpinner";
import { getFeaturedProducts } from "../lib/products"; // Updated import path
import { Product as ImportedProduct } from "../types/product";

export default async function Home() {
  const featuredProductsWithCategory = await getFeaturedProducts();

  // Transform ProductWithCategory[] to ImportedProduct[]
  const featuredProducts: ImportedProduct[] = featuredProductsWithCategory.map(
    ({ category, image, description, ...product }) => ({
      ...product,
      categoryId: category?.id ?? "uncategorized",
      imageUrl: image ?? "",
      description: description ?? undefined,
    })
  );

  return (
    <main className="space-y-12">
      <HeroSection />
      <Suspense fallback={<Loading />}>
        <CategoryHighlights />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FeaturedProducts products={featuredProducts} />
      </Suspense>
      <PromotionBanner />
      <NewsletterSignup />
    </main>
  );
}
