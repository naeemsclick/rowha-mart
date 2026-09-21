<script setup lang="ts">
import type { Product } from '@/types';
import ProductCard from './ProductCard.vue';

defineProps<{
  products: Product[];
  columns?: number;
}>();
</script>

<template>
  <div class="product-grid" :style="{ '--grid-cols': columns || 4 }">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped lang="scss">
.product-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-cols, 4), 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
}
</style>
