<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import ProductCard from '@/components/product/ProductCard.vue';
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();

const fashionProducts = computed(() => productStore.getProductsByCategory('fashion').slice(0, 3));
const gadgetProducts = computed(() => productStore.getProductsByCategory('gadgets').slice(0, 3));
const beautyProducts = computed(() => productStore.getProductsByCategory('beauty').slice(0, 3));
import { computed } from 'vue';
</script>

<template>
  <section class="category-showcase section-spacing">
    <div class="container showcase-container">

      <!-- Block 1: Fashion -->
      <div class="showcase-block">
        <div class="block-header fashion-header">
          <div class="header-text">
            <span class="block-category">Fashion Collection</span>
            <h3 class="block-title">Everyday Elegance & Accessories</h3>
            <p class="block-desc">Curated saffiano leather totes, rose gold quartz mesh watches, and comfortable street sneakers.</p>
          </div>
          <router-link to="/category/fashion" class="btn btn--outline btn--sm">
            <span>Shop Fashion</span>
            <ArrowRight :size="14" />
          </router-link>
        </div>
        <div class="block-grid">
          <ProductCard v-for="p in fashionProducts" :key="p.id" :product="p" />
        </div>
      </div>

      <!-- Block 2: Gadgets -->
      <div class="showcase-block">
        <div class="block-header gadgets-header">
          <div class="header-text">
            <span class="block-category">Smart Tech & Gadgets</span>
            <h3 class="block-title">Connected Living & Audio Devices</h3>
            <p class="block-desc">High-definition noise cancelling headphones, AMOLED smartwatches, and MagSafe wireless power banks.</p>
          </div>
          <router-link to="/category/gadgets" class="btn btn--outline btn--sm">
            <span>Shop Gadgets</span>
            <ArrowRight :size="14" />
          </router-link>
        </div>
        <div class="block-grid">
          <ProductCard v-for="p in gadgetProducts" :key="p.id" :product="p" />
        </div>
      </div>

      <!-- Block 3: Beauty -->
      <div class="showcase-block">
        <div class="block-header beauty-header">
          <div class="header-text">
            <span class="block-category">Beauty & Self Care</span>
            <h3 class="block-title">Botanical Formulas & Radiant Glow</h3>
            <p class="block-desc">Concentrated Vitamin C serums, organic steam-distilled rosewater mists, and authentic jade rollers.</p>
          </div>
          <router-link to="/category/beauty" class="btn btn--outline btn--sm">
            <span>Discover Beauty</span>
            <ArrowRight :size="14" />
          </router-link>
        </div>
        <div class="block-grid">
          <ProductCard v-for="p in beautyProducts" :key="p.id" :product="p" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.category-showcase {
  background: var(--color-off-white);
}

.showcase-container {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.showcase-block {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  padding: 32px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);

  @media (max-width: 768px) {
    padding: 20px;
  }
}

.block-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 24px;
  border-bottom: 2px solid var(--color-off-white);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
}

.block-category {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 4px;
}

.block-title {
  font-size: 1.45rem;
  color: var(--color-charcoal);
  margin-bottom: 6px;
}

.block-desc {
  font-size: 0.88rem;
  color: var(--color-taupe);
  max-width: 580px;
}

.block-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}
</style>
