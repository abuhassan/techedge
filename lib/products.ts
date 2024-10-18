import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

// Define a simplified Category type that matches your Prisma schema
type Category = {
  id: string;
  name: string;
};

// Update ProductWithCategory type if stock is not already included
export type ProductWithCategory = Omit<Product, "categoryId"> & {
  category: Category | null;
  stock: number; // Add this line if not already present in the Product type
};

const mockProducts: ProductWithCategory[] = [
  {
    id: "1",
    name: "Smart Sous Vide Cooker",
    description: "Precision cooking made easy with WiFi connectivity.",
    price: 199.99,
    image: "/images/sous-vide.webp",
    createdAt: new Date(),
    updatedAt: new Date(),
    category: { id: "1", name: "Cooking Appliances" },
    stock: 10, // Add stock property
  },
  {
    id: "2",
    name: "AI-Powered Food Processor",
    description: "Intelligent food processing with recipe suggestions.",
    price: 299.99,
    image: "/images/food-processor.webp",
    createdAt: new Date(),
    updatedAt: new Date(),
    category: { id: "1", name: "Cooking Appliances" },
    stock: 20, // Add stock property
  },
  {
    id: "3",
    name: "Smart Coffee Maker",
    description: "Brew perfect coffee with smartphone control.",
    price: 149.99,
    image: "/images/coffee-maker.webp",
    createdAt: new Date(),
    updatedAt: new Date(),
    category: { id: "2", name: "Beverage Appliances" },
    stock: 30,
  },
  {
    id: "4",
    name: "Digital Kitchen Scale",
    description: "Precise measurements with nutritional information display.",
    price: 49.99,
    image: "/images/kitchen-scale.webp",

    createdAt: new Date(),
    updatedAt: new Date(),
    category: { id: "3", name: "Kitchen Tools" },
    stock: 40, // Add stock property
  },
  {
    id: "5",
    name: "Smart Refrigerator",
    description: "Keep track of your groceries with built-in cameras and AI.",
    price: 2499.99,
    image: "/images/smart-fridge.webp",

    createdAt: new Date(),
    updatedAt: new Date(),
    category: { id: "4", name: "Large Appliances" },
    stock: 50, // Add stock property
  },
];

export async function getFeaturedProducts(): Promise<ProductWithCategory[]> {
  try {
    const featuredProducts = await prisma.product.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
      include: { category: true },
    });
    return featuredProducts;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return mockProducts.slice(0, 3);
  }
}

export async function getAllProducts(
  page: number = 1,
  limit: number = 10
): Promise<{ products: ProductWithCategory[]; total: number }> {
  const skip = (page - 1) * limit;

  try {
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        skip,
        take: limit,
        include: { category: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.product.count(),
    ]);

    return { products, total };
  } catch (error) {
    console.error("Error fetching all products:", error);
    const mockTotal = mockProducts.length;
    const mockPaginatedProducts = mockProducts.slice(skip, skip + limit);
    return { products: mockPaginatedProducts, total: mockTotal };
  }
}

export async function getProductById(
  id: string
): Promise<ProductWithCategory | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
    return product;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return mockProducts.find((p) => p.id === id) || null;
  }
}
