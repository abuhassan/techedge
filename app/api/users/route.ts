import { NextResponse } from "next/server";
import { getUsers, createUser } from "@/lib/db";

export async function GET() {
  const users = await getUsers();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const user = await createUser(body);
  return NextResponse.json(user);
}
