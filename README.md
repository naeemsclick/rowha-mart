# Rowha Mart — Modern E-Commerce Storefront

> *"Small Choices Make a Brighter You."*

Rowha Mart is a premium, production-ready, mobile-first e-commerce web application built using **Vue.js 3**, **Vite**, **TypeScript**, **Pinia**, **Vue Router**, **Swiper.js**, and **Lucide Icons**.

---

## 🌟 Brand Identity & Aesthetic Design System

- **Categories**: Fashion • Gadgets • Beauty
- **Color Palette**:
  - **Primary**: Sage Green (`#688F7A`)
  - **Accent**: Blush Pink (`#E58B8B`)
  - **Supporting**: Warm Beige (`#F7E0DE`), Taupe (`#A6968F`), Charcoal (`#25262E`), Off White (`#FAF7F3`)
- **Typography**: `Poppins` (Body & UI) & `Montserrat` (Headings & Hero Banners)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `^18.0.0` or `^20.0.0`
- npm `^9.0.0` or `^10.0.0`

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start local development server on http://localhost:3000
npm run dev
```

### Production Build

```bash
# Run type checking and build minified production bundle
npm run build
```

---

## 📁 Project Architecture

```
src/
├── assets/
│   ├── images/         # Official logo, favicon, and 3 hero banners
│   └── styles/         # SCSS design tokens, typography, and utilities
├── components/
│   ├── common/         # Base buttons, modals, empty states, WhatsApp float & BackToTop
│   ├── layout/         # AnnouncementBar, AppHeader, DesktopNavigation, MobileNavigation, AppFooter
│   ├── home/           # HeroSlider, CategoryExplorer, BestSellingSection, FlashSaleSection, etc.
│   ├── product/        # ProductCard, ProductGrid, ProductFilterSidebar
│   ├── cart/           # CartItem, CartDrawer
│   └── checkout/       # PaymentMethods selector
├── composables/        # useSeo, useScroll, useCurrency
├── data/               # Isolated datasets (products, categories, hero slides, testimonials)
├── layouts/            # DefaultLayout with sticky header & drawer slots
├── pages/              # Vue Router views (Home, Shop, Category, ProductDetails, Cart, Checkout, etc.)
├── router/             # Vue Router 4 route configurations
├── services/           # API abstraction layers (products, categories, orders)
├── stores/             # Pinia stores (cart, wishlist, product, category, ui)
├── types/              # TypeScript definitions & interfaces
├── App.vue             # Root component
└── main.ts             # App bootstrapper
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env`:

```env
VITE_APP_TITLE=Rowha Mart | Small Choices Make a Brighter You.
VITE_API_BASE_URL=http://localhost:3000/api
VITE_WHATSAPP_NUMBER=+8801410740844
```

---

## 🔗 Future Backend & WooCommerce Integration

The frontend architecture separates UI logic from API calls via `src/services/api.ts`.
To connect Rowha Mart to a real REST API or WooCommerce backend:

1. Update `VITE_API_BASE_URL` in `.env`.
2. Connect WooCommerce REST API endpoints or Node/Laravel endpoints inside `src/services/products.ts` and `src/services/orders.ts`.

---

## 👤 Creator Credit

- **Creator**: Naeem Nahiyan
- **Facebook**: [facebook.com/naeemdaprince](https://www.facebook.com/naeemdaprince/)
