"use client";

import { useGetCategoriesQuery } from "../../redux/apiSlice";
import CategoryHighlights from "../components/CategoryHighlights";

export default function CategorySection() {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories</div>;

  return <CategoryHighlights categories={categories || []} />;
}
