import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const categories = [
    { name: 'Sets', description: 'Complete cookware sets for your kitchen' },
    { name: 'Combi', description: 'Versatile combination cookware' },
    { name: 'Free Delivery', description: 'Products with free shipping' },
    { name: 'Special Offer', description: 'Limited time deals and discounts' }
  ];

  const createdCategories = await Promise.all(
    categories.map(category =>
      prisma.category.upsert({
        where: { name: category.name },
        update: {},
        create: category
      })
    )
  );

  // Create products
  const products = [
    {
      name: 'Honeycomb 10-Piece Cookware Set',
      description: 'Complete set of Honeycomb pots and pans with advanced non-stick technology.',
      price: 599.99,
      image: 'https://picsum.photos/seed/honeycomb-set/300/200',
      categoryId: createdCategories[0].id, // Sets
    },
    {
      name: 'Renaware Pressure Cooker Deluxe',
      description: 'High-pressure cooking with smart temperature control for perfect meals every time.',
      price: 249.99,
      image: 'https://picsum.photos/seed/renaware-cooker/300/200',
      categoryId: createdCategories[2].id, // Free Delivery
    },
    {
      name: 'Camelot Smart Frying Pan',
      description: 'Bluetooth-enabled frying pan with app control for precise cooking temperatures.',
      price: 129.99,
      image: 'https://picsum.photos/seed/camelot-pan/300/200',
      categoryId: createdCategories[3].id, // Special Offer
    },
    {
      name: 'Tefal OptiGrill+ Smart Grill',
      description: 'Intelligent grill with automatic sensor cooking for various types of food.',
      price: 199.99,
      image: 'https://picsum.photos/seed/tefal-grill/300/200',
      categoryId: createdCategories[1].id, // Combi
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },
      update: {},
      create: product
    });
  }

  // Create users with roles and hashed passwords
  const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: await bcrypt.hash('adminpassword', 10),
      role: Role.ADMIN,
    },
    {
      name: 'Customer User',
      email: 'customer@example.com',
      password: await bcrypt.hash('customerpassword', 10),
      role: Role.CUSTOMER,
    },
    {
      name: 'Seller User',
      email: 'seller@example.com',
      password: await bcrypt.hash('sellerpassword', 10),
      role: Role.SELLER,
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user
    });
  }

  console.log('Seed data upserted successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });