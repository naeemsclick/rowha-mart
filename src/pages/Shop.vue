<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Filter, Grid, List, X, SlidersHorizontal } from 'lucide-vue-next';
import ProductCard from '@/components/product/ProductCard.vue';
import EmptyState from '@/components/common/EmptyState.vue';
import { useProductStore } from '@/stores/product';
import { useCategoryStore } from '@/stores/category';
import { useSeo } from '@/composables/useSeo';
import type { FilterOptions } from '@/types';
import { formatPrice } from '@/utils/formatters';

const route = useRoute();
const productStore = useProductStore();
const categoryStore = useCategoryStore();

useSeo({
  title: 'Shop All Products',
  description: 'Browse our complete catalog of Fashion, Smart Gadgets, and Beauty & Care essentials.'
});

const isMobileFilterOpen = ref(false);
const viewMode = ref<'grid' | 'list'>('grid');

const selectedCategory = ref<string>((route.query.category as string) || '');
const selectedSort = ref<FilterOptions['sortBy']>((route.query.sortBy as FilterOptions['sortBy']) || 'featured');
const minPrice = ref<number>(0);
const maxPrice = ref<number>(5000);
const inStockOnly = ref<boolean>(false);
const discountOnly = ref<boolean>(false);

watch(
  () => route.query,
  (newQuery) => {
    if (newQuery.category) selectedCategory.value = newQuery.category as string;
    if (newQuery.sortBy) selectedSort.value = newQuery.sortBy as FilterOptions['sortBy'];
  },
  { immediate: true }
);

const filteredProducts = computed(() => {
  return productStore.filterProducts({
    categorySlug: selectedCategory.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
    inStockOnly: inStockOnly.value,
    discountOnly: discountOnly.value,
    sortBy: selectedSort.value
  });
});

function resetFilters() {
  selectedCategory.value = '';
  minPrice.value = 0;
  maxPrice.value = 5000;
  inStockOnly.value = false;
  discountOnly.value = false;
  selectedSort.value = 'featured';
}
</script>

<template>
  <div class="shop-page section-spacing">
    <div class="container">
      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span class="sep">/</span>
        <span class="current">Shop All Products</span>
      </nav>

      <!-- Header row -->
      <div class="shop-header">
        <div>
          <h1 class="page-title">Shop Collection</h1>
          <p class="results-count">Showing <strong>{{ filteredProducts.length }}</strong> items</p>
        </div>

        <div class="shop-controls">
          <!-- Mobile filter button -->
          <button type="button" class="btn btn--outline btn--sm mobile-filter-btn" @click="isMobileFilterOpen = true">
            <SlidersHorizontal :size="16" />
            <span>Filters</span>
          </button>

          <!-- Sorting -->
          <div class="sort-wrapper">
            <label for="sort-select">Sort By:</label>
            <select id="sort-select" v-model="selectedSort" class="sort-select">
              <option value="featured">Featured Picks</option>
              <option value="newest">New Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <!-- Grid/List Switcher -->
          <div class="view-mode-toggle">
            <button
              type="button"
              :class="['mode-btn', { active: viewMode === 'grid' }]"
              aria-label="Grid View"
              @click="viewMode = 'grid'"
            >
              <Grid :size="18" />
            </button>
            <button
              type="button"
              :class="['mode-btn', { active: viewMode === 'list' }]"
              aria-label="List View"
              @click="viewMode = 'list'"
            >
              <List :size="18" />
            </button>
          </div>
        </div>
      </div>

      <!-- Shop Content Layout -->
      <div class="shop-layout">
        <!-- Sidebar Filters -->
        <aside :class="['filter-sidebar', { 'mobile-open': isMobileFilterOpen }]">
          <div class="sidebar-header">
            <h3 class="filter-title">
              <Filter :size="18" /> Filters
            </h3>
            <button type="button" class="mobile-close-btn" aria-label="Close filter" @click="isMobileFilterOpen = false">
              <X :size="20" />
            </button>
          </div>

          <!-- Category filter -->
          <div class="filter-group">
            <h4 class="group-label">Categories</h4>
            <div class="radios-list">
              <label class="radio-label">
                <input type="radio" v-model="selectedCategory" value="" />
                <span>All Categories</span>
              </label>
              <label
                v-for="cat in categoryStore.categories"
                :key="cat.id"
                class="radio-label"
              >
                <input type="radio" v-model="selectedCategory" :value="cat.slug" />
                <span>{{ cat.name }}</span>
              </label>
            </div>
          </div>

          <!-- Price filter -->
          <div class="filter-group">
            <h4 class="group-label">Price Range</h4>
            <div class="price-inputs">
              <span>{{ formatPrice(minPrice) }}</span>
              <span>-</span>
              <span>{{ formatPrice(maxPrice) }}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              v-model.number="maxPrice"
              class="range-slider"
            />
          </div>

          <!-- Status checkboxes -->
          <div class="filter-group">
            <h4 class="group-label">Availability</h4>
            <label class="checkbox-label">
              <input type="checkbox" v-model="inStockOnly" />
              <span>In Stock Only</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" v-model="discountOnly" />
              <span>On Sale Deals</span>
            </label>
          </div>

          <button type="button" class="btn btn--outline btn--sm w-full reset-btn" @click="resetFilters">
            Reset Filters
          </button>
        </aside>

        <!-- Product Grid Area -->
        <main class="products-area">
          <div v-if="filteredProducts.length === 0" class="no-products">
            <EmptyState
              title="No Products Match Your Filter"
              description="Try adjusting your price range or category filter to discover more products."
              ctaText="Reset All Filters"
              @click="resetFilters"
            />
          </div>

          <div v-else :class="['products-container', `view-${viewMode}`]">
            <ProductCard
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
            />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--color-taupe);
  margin-bottom: 24px;

  .sep { opacity: 0.5; }
  .current { color: var(--color-charcoal); font-weight: 600; }
}

.shop-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

.page-title {
  font-size: 2rem;
  margin-bottom: 4px;
}

.results-count {
  font-size: 0.88rem;
  color: var(--color-taupe);
}

.shop-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.mobile-filter-btn {
  display: none;
  @media (max-width: 992px) {
    display: inline-flex;
  }
}

.sort-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--color-taupe);
}

.sort-select {
  padding: 8px 12px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  background: white;
  font-size: 0.88rem;
  outline: none;
}

.view-mode-toggle {
  display: flex;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: white;
  overflow: hidden;

  .mode-btn {
    padding: 8px 10px;
    border: none;
    background: transparent;
    color: var(--color-taupe);
    cursor: pointer;

    &.active {
      background: var(--color-primary-subtle);
      color: var(--color-primary-dark);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
}

.shop-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 36px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.filter-sidebar {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 24px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    z-index: 1050;
    box-shadow: var(--shadow-lg);
    overflow-y: auto;
    transform: translateX(-100%);
    transition: transform 0.3s ease;

    &.mobile-open {
      transform: translateX(0);
    }
  }
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .filter-title {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.mobile-close-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 992px) {
    display: block;
  }
}

.group-label {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--color-charcoal);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.radios-list, .checkbox-label {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.radio-label, .checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--color-taupe);
  cursor: pointer;

  &:hover { color: var(--color-charcoal); }

  input {
    accent-color: var(--color-primary);
  }
}

.price-inputs {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 8px;
}

.range-slider {
  width: 100%;
  accent-color: var(--color-primary);
}

.w-full {
  width: 100%;
}

.products-container {
  &.view-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
  }

  &.view-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
