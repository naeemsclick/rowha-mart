import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from '@/types';

export const useUiStore = defineStore('ui', () => {
  const isCartDrawerOpen = ref(false);
  const isMobileMenuOpen = ref(false);
  const isQuickViewOpen = ref(false);
  const quickViewProduct = ref<Product | null>(null);

  function openCartDrawer() {
    isCartDrawerOpen.value = true;
  }

  function closeCartDrawer() {
    isCartDrawerOpen.value = false;
  }

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false;
  }

  function openQuickView(product: Product) {
    quickViewProduct.value = product;
    isQuickViewOpen.value = true;
  }

  function closeQuickView() {
    isQuickViewOpen.value = false;
    quickViewProduct.value = null;
  }

  return {
    isCartDrawerOpen,
    isMobileMenuOpen,
    isQuickViewOpen,
    quickViewProduct,
    openCartDrawer,
    closeCartDrawer,
    toggleMobileMenu,
    closeMobileMenu,
    openQuickView,
    closeQuickView
  };
});
