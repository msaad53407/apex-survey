# 🏢 Apex Survey — Property Inspection & Instant Quote Platform

**Apex Survey** is a full-stack, enterprise property survey and inspection booking platform built with **Next.js 15 (Turbopack)**, **React 19**, **Prisma ORM**, and **MongoDB**. 

It provides prospective property buyers, sellers, and landlords with instant, multi-tiered survey quotes, automated checkout pipelines, and an administrative management dashboard.

---

## ✨ Key Features

- **⚡ Instant Survey Quoting Engine:** Dynamic quote calculation based on property type (residential vs. commercial), area, age, appliances, electrical circuits, and location (postcode).
- **📊 Interactive Admin Dashboard:** Analytics and order tracking powered by **Recharts**, with status filtering (Pending, Confirmed, Completed) and pricing configuration.
- **💳 Multi-Method Checkout:** Support for card and direct bank payment processing, identity verification, and contact-role mapping (Buyer, Seller, Landlord, Tenant, Agent).
- **📱 Responsive & Accessible UI:** Modern component library built on top of **Radix UI**, **Tailwind CSS**, and **Embla Carousel**.
- **🛡️ Strict Data Validation:** Full type-safety across client forms and server routes via **Zod** and **React Hook Form**.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Frontend Library:** [React 19](https://react.dev/)
- **Database & ORM:** [MongoDB](https://www.mongodb.com/) via [Prisma ORM](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + `tailwindcss-animate`
- **UI Primitives:** [Radix UI](https://www.radix-ui.com/)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **Validation & Forms:** [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)
- **Carousel & Media:** [Embla Carousel](https://www.embla-carousel.com/) + [Sharp](https://sharp.pixelplumbing.com/)

---

## 📁 Architecture Overview

```text
src/
├── app/
│   ├── (ui)/           # Public-facing application pages (landing, quote builder, checkout)
│   ├── api/            # Serverless API routes (quotes, checkout, pricing management)
│   ├── dashboard/      # Admin analytics, order tracking & service management
│   ├── layout.tsx      # Root layout & providers
│   └── globals.css     # Global styles and Tailwind directives
├── components/         # Reusable UI primitives & compound widgets
├── lib/                # Database clients, Prisma instances, and helper utilities
└── prisma/
    └── schema.prisma   # Data models (InstantQuote, Service, Checkout, Pricing)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 20.x` or Bun
- [pnpm](https://pnpm.io/) (`pnpm@11.x` recommended)
- MongoDB instance (local or Atlas)

### Installation
```bash
# Clone the repository
git clone https://github.com/msaad53407/apex-survey.git
cd apex-survey

# Install dependencies using pnpm
pnpm install
```

### Environment Configuration
Create a `.env` file in the root directory:
```env
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/apex_survey?retryWrites=true&w=majority"
```

### Database Setup
Generate the Prisma client:
```bash
pnpm prisma generate
```

### Running Locally
```bash
# Run the Next.js Turbopack development server
pnpm dev

# Build for production
pnpm build

# Start the production server
pnpm start
```

---

## 📜 License
Private / Proprietary
