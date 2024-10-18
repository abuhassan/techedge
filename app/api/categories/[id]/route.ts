import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Define the basic structure of a Category
interface Category {
  id: string;
  name: string;
  description?: string | null;
  // Add other category fields as needed
}

// Define the basic structure of a Product
interface Product {
  id: string;
  name: string;
  price: number;
  // Add other product fields as needed
}

// Extend Category to include products
interface CategoryWithProducts extends Category {
  products: Product[];
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const category = (await prisma.category.findUnique({
      where: { id },
      include: { products: true },
    })) as CategoryWithProducts | null;

    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const body = (await request.json()) as Partial<Category>;

  try {
    const updatedCategory = (await prisma.category.update({
      where: { id },
      data: body,
    })) as Category;

    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    await prisma.category.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
