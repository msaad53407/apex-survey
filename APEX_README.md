# Apex Survey Project Documentation

Welcome to the **Apex Survey** project. This document provides a comprehensive overview of the project's structure, purpose, and core components to help you understand and update the code according to your needs.

## 🚀 Project Overview

**Apex Survey** is a web application designed for managing property surveys and quotes (e.g., Electrical Installation Reports, EPCs). It features a customer-facing UI for requesting instant quotes and a dashboard for administrative management of pricing, quotes, and services.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database ORM**: [Prisma](https://www.prisma.io/) (using MongoDB)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate), [Embla Carousel](https://www.embla-carousel.com/)

---

## 📂 Folder Structure

The project follows a standard Next.js App Router structure within the `src` directory:

### Root Level

- `prisma/`: Database schema and migrations.
- `public/`: Static assets (images, fonts, icons).
- `src/`: Main source code.

### Inside `src/`

- `app/`: Routing and page components.
  - `(ui)/`: Public-facing pages (Home, About, Services, Checkout).
    - `(home)/`: The main landing page.
    - `checkout/`: Multi-step checkout process.
  - `api/`: Backend API routes (Checkout processing, Pricing updates).
  - `dashboard/`: Admin panel for managing the system.
- `components/`: Reusable UI components.
  - `ui/`: Base Shadcn UI components.
  - `dialogs/`: Modal components for various actions.
- `lib/`: Utility functions, constants, and shared validation schemas.
  - `constants.ts`: Global configuration and static data.
  - `schema.ts`: Zod schemas for form validation.
- `hooks/`: Custom React hooks (e.g., for data fetching).
- `context/`: React context providers.
- `types/`: TypeScript type definitions.

---

## 📊 Data Models (Prisma)

The database structure is defined in `prisma/schema.prisma`:

- **`InstantQuote`**: Stores user requests for service pricing. Includes property details like type, area, and specific appliance counts.
- **`Service`**: Defines available services (e.g., Residential/Commercial certificates).
- **`Checkout`**: Captures final order details, contact info, and payment status.
- **`Pricing`**: Stores the pricing configuration managed via the dashboard.

---

## 🔑 Main Code Locations

### 🏠 Landing Page

The main home page is located at `src/app/(ui)/(home)/page.tsx`. It assembles section components like `Hero`, `Services`, and `Reviews`.

### 🛒 Checkout Flow

The checkout logic is split between:

- UI: `src/app/(ui)/checkout/`
- API: `src/app/api/checkout/`

### 🛠 Admin Dashboard

Located in `src/app/dashboard/`. This is where you manage:

- **Quotes**: View and manage customer inquiries.
- **Pricing**: Update costs for various survey types.

### ⚙️ Business Logic & Constants

Check `src/lib/constants.ts` for service definitions and pricing categories. This is a central place for many configuration-like details.

---

## � Backend & Data Flow

The project uses a full-stack Next.js approach where the "Backend" is integrated into the App Router via API routes and Server Actions.

### 🗄 Database: MongoDB

- **Purpose**: Persists all critical data including user quotes, checkout details, and pricing configurations.
- **Connection**: Managed via **Prisma ORM**. The database URL is sensitive and stored in the `.env` file (`DATABASE_URL`).
- **Schema**: Defined in `prisma/schema.prisma`.

### ⚡ API Routes (`src/app/api/`)

The backend logic is processed through several dedicated endpoints:

1.  **Checkout Processing** (`/api/checkout/[quoteId]`):
    - **Logic**: Receives a JSON payload containing customer details and payment info.
    - **Action**: Uses Prisma to create a `Checkout` record in MongoDB, linking it to the original `InstantQuote`.
    - **Cache Invalidation**: Triggers an update so the Admin Dashboard reflects the new order immediately.
2.  **Pricing Management** (`/api/pricing/`):
    - **Logic**: Handles updates and deletions of pricing items from the dashboard.
    - **Action**: Updates the `status` or other fields of a `Pricing` record.
    - **Sync**: Automatically refreshes both the landing page and the dashboard pricing table.
3.  **Service & Order APIs**:
    - Handle the retrieval and submission of specific survey requests.

### 🔄 How Data Moves

1.  **Customer Action**: User fills out a form on the frontend (e.g., Requesting a Quote).
2.  **Request**: The frontend sends a `POST` or `PUT` request to a route in `src/app/api/`.
3.  **Backend Processing**: The API route validates the data, interacts with MongoDB via Prisma, and performs any necessary business logic (like calculating totals or updating statuses).
4.  **Response**: The backend returns a JSON response to the frontend.
5.  **Revalidation**: The backend instructs Next.js to clear cached versions of the dashboard or home page so the data stays "fresh."

---

## �🛠 Development Guide

### Running Locally

1. Install dependencies: `pnpm install`
2. Set up environment variables in `.env` (e.g., `DATABASE_URL`).
3. Generate Prisma client: `npx prisma generate`
4. Start dev server: `pnpm run dev`

### Making Updates

- **Adding a Page**: Create a new folder in `src/app/(ui)/` with a `page.tsx`.
- **Modifying Data**: Update `prisma/schema.prisma` and run `npx prisma generate`.
- **Styling**: Use Tailwind classes directly in your component files.

---

This project is built to be modular and scalable. If you have specific needs for updates, start by identifying whether it's a UI change (in `src/components` or `src/app`), a data change (`prisma/schema.prisma`), or a logic change (`src/lib`).
