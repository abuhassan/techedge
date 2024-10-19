import prisma from "./prisma";

export async function getUsers() {
  return prisma.user.findMany();
}

export async function createUser(data: { email: string; name?: string }) {
  return prisma.user.create({ data });
}
