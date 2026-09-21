import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Category } from '@/types';
import { categoriesData } from '@/data/categories';

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>(categoriesData);

  function getCategoryBySlug(slug: string): Category | undefined {
    return categories.value.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
  }

  return {
    categories,
    getCategoryBySlug
  };
});
