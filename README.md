This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

My Planned Stages

Stage 1: Initial Setup and Authentication
Goal: Establish the foundational structure and user authentication.

- Deliverables: 1. Next.js setup with App Router and TypeScript. 2. Install and configure Tailwind CSS for styling. 3. Implement NextAuth for authentication, using JWT and bcryptjs for secure password storage. 4. Set up basic roles: Customer and Master Admin. 5. Create the following pages:
  _ Login page.
  _ Registration page (with password confirmation). \* Home page (landing page). 6. Implement a simple navigation bar with links for Home, Login, and Register. 7. Set up a basic UI using Shadcn UI components.
  Outcome: Working authentication flow with a basic layout.

Stage 2: User Role and Access Control (RBAC)
Goal: Implement RBAC to manage permissions for different roles.

- Deliverables: 1. Extend NextAuth to support role-based access (Master Admin, Admin, User (Seller), Customer). 2. Create protected routes for admin roles, restricting access based on roles. 3. Implement master admin dashboard with the ability to create and assign admin roles. 4. Create role-based landing pages:
  _ Admin Dashboard: Overview of users, orders, and products.
  _ Seller Dashboard: For adding and managing products. \* Customer Dashboard: A personalized customer area.
  Outcome: Role-based access control working, with each role having access to different pages.

Stage 3: Product Management System
Goal: Enable product management for sellers and display products to customers.

- Deliverables: 1. Product model and database setup using Prisma (Product schema includes fields like name, price, description, images, category, etc.). 2. Implement Admin Product Management:
  _ Add/Edit/Delete products.
  _ Set special categories like "On Offer," "New Arrivals," and "Packaged Products." 3. Allow sellers to add and manage their own products. 4. Implement a customer product catalog that displays available products with filters for categories (offers, new arrivals, packaged products).
  Outcome: Product management system in place with products viewable by customers.

Stage 4: Shopping Cart and Checkout Process
Goal: Implement the core e-commerce functionality for customers.

- Deliverables: 1. Implement a shopping cart system for customers (using local storage or session state). 2. Develop the checkout process (guest checkout or authenticated checkout). 3. Integrate payment gateways (e.g., Stripe or PayPal). 4. Create order history for customers to view past purchases. 5. Set up basic email notifications for order confirmation.
  Outcome: Fully functional cart and checkout process with order tracking for customers.

Stage 5: User Experience Enhancements
Goal: Refine the UI/UX and improve performance.

- Deliverables: 1. Enhance the UI design using Shadcn UI for a more polished look. 2. Optimize the product catalog page with better filters, search capabilities, and sorting. 3. Improve responsiveness for mobile and tablet views. 4. Implement lazy loading for images and components to enhance performance.
  Outcome: A highly responsive, visually appealing e-commerce app with improved user experience.

Stage 6: Analytics and Admin Tools
Goal: Provide the master admin with tools to analyze and manage the platform.

- Deliverables: 1. Create a dashboard for admins to monitor platform activity:
  _ Sales analytics.
  _ User statistics. \* Product performance. 2. Implement report generation for admins (e.g., export sales data). 3. Set up logging and error monitoring for admins to monitor app stability.
  Outcome: Full admin control and analytics tools available for managing the app.
