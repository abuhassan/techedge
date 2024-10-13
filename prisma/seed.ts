import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);

  const masterAdmin = await prisma.user.upsert({
    where: { email: "masteradmin@example.com" },
    update: {},
    create: {
      email: "masteradmin@example.com",
      name: "Master Admin",
      password: hashedPassword,
      role: "MASTER_ADMIN",
    },
  });

  console.log({ masterAdmin });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
