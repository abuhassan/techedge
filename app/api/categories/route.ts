import { NextResponse } from "next/server";

export async function GET() {
  // This is a mock implementation. Replace with actual data fetching logic.
  const categories = [
    { id: "1", name: "Electronics" },
    { id: "2", name: "Clothing" },
    { id: "3", name: "Books" },
    // Add more categories as needed
  ];

  return NextResponse.json(categories);
}
