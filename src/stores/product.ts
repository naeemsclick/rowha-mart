import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product, FilterOptions } from '@/types';
import { productsData } from '@/data/products';

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>(productsData);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const bestSellers = computed(() => products.value.filter((p) => p.isBestSeller));
  const featuredProducts = computed(() => products.value.filter((p) => p.isFeatured));
  const flashSaleProducts = computed(() => products.value.filter((p) => p.isFlashSale));
  const newArrivals = computed(() => products.value.filter((p) => p.isNew));

  function getProductBySlug(slug: string): Product | undefined {
    return products.value.find((p) => p.slug === slug);
  }

  function getProductsByCategory(categorySlug: string): Product[] {
    return products.value.filter((p) => p.categorySlug.toLowerCase() === categorySlug.toLowerCase());
  }

  function filterProducts(options: FilterOptions): Product[] {
    let result = [...products.value];

    if (options.categorySlug) {
      result = result.filter((p) => p.categorySlug.toLowerCase() === options.categorySlug?.toLowerCase());
    }

    if (options.subcategorySlug) {
      result = result.filter((p) => p.subcategory?.toLowerCase() === options.subcategorySlug?.toLowerCase());
    }

    if (options.minPrice !== undefined) {
      result = result.filter((p) => p.price >= options.minPrice!);
    }

    if (options.maxPrice !== undefined) {
      result = result.filter((p) => p.price <= options.maxPrice!);
    }

    if (options.inStockOnly) {
      result = result.filter((p) => p.stock > 0);
    }

    if (options.discountOnly) {
      result = result.filter((p) => p.discount && p.discount > 0);
    }

    if (options.searchQuery) {
      const q = options.searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (options.sortBy) {
      switch (options.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
          break;
        case 'featured':
        default:
          result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
          break;
      }
    }

    return result;
  }

  return {
    products,
    loading,
    error,
    bestSellers,
    featuredProducts,
    flashSaleProducts,
    newArrivals,
    getProductBySlug,
    getProductsByCategory,
    filterProducts
  };
});
