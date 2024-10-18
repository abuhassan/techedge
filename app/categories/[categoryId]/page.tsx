import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductCard from "../.././components/ProductCard";
import { Product } from "@/types/product";
import LoadingSpinner from "../../components/LoadingSpinner";
import Pagination, { PaginationProps } from "@/components/Pagination"; // adjust the import path as needed

// Define CategoryId type
type CategoryId = string;

// Define Category type
type Category = {
  id: CategoryId;
  name: string;
  description: string;
  imageUrl: string;
};

async function getCategory(categoryId: CategoryId): Promise<Category | null> {
  if (!process.env.API_URL) {
    console.error("API_URL is not defined in environment variables");
    return null;
  }

  try {
    const res = await fetch(`${process.env.API_URL}/categories/${categoryId}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch category:", error);
    return null;
  }
}

async function getProductsByCategory(
  categoryId: CategoryId,
  page: number = 1,
  limit: number = 9
): Promise<{ products: Product[]; total: number }> {
  if (!process.env.API_URL) {
    console.error("API_URL is not defined in environment variables");
    return { products: [], total: 0 };
  }

  try {
    const res = await fetch(
      `${process.env.API_URL}/products?category=${categoryId}&page=${page}&limit=${limit}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return { products: [], total: 0 };
  }
}

// Updated metadata generation function
export async function generateMetadata({
  params,
}: {
  params: { categoryId: CategoryId };
}): Promise<Metadata> {
  const category = await getCategory(params.categoryId);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category does not exist.",
    };
  }

  return {
    title: `${category.name} | Your Store Name`,
    description:
      category.description || `Browse our selection of ${category.name}`,
    openGraph: {
      title: `${category.name} | Your Store Name`,
      description:
        category.description || `Browse our selection of ${category.name}`,
      images: [{ url: category.imageUrl || "/default-category-image.jpg" }],
    },
  };
}

async function ProductList({
  categoryId,
  page,
}: {
  categoryId: CategoryId;
  page: number;
}) {
  const limit = 9; // Products per page
  const { products, total } = await getProductsByCategory(
    categoryId,
    page,
    limit
  );

  if (products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(total / limit)}
        baseUrl={`/categories/${categoryId}`}
      />
    </>
  );
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { page?: string };
}) {
  const categoryId = params.categoryId;
  const page = Number(searchParams.page) || 1;
  const category = await getCategory(categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductList categoryId={categoryId} page={page} />
      </Suspense>
    </div>
  );
}
