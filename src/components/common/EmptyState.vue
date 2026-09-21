<script setup lang="ts">
import { ShoppingBag } from 'lucide-vue-next';

interface Props {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'No Items Found',
  description: 'We couldn’t find any products matching your criteria.',
  ctaText: 'Continue Shopping',
  ctaLink: '/shop'
});
</script>

<template>
  <div class="empty-state">
    <div class="icon-wrapper">
      <slot name="icon">
        <ShoppingBag :size="48" class="empty-icon" />
      </slot>
    </div>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <router-link v-if="ctaLink" :to="ctaLink" class="btn btn--primary btn--md">
      {{ ctaText }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;
  text-align: center;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  border: 1px dashed var(--color-border);
  margin: 20px 0;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--color-off-white);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--color-primary);
}

.title {
  font-size: 1.25rem;
  margin-bottom: 8px;
  color: var(--color-charcoal);
}

.description {
  font-size: 0.95rem;
  color: var(--color-taupe);
  max-width: 420px;
  margin-bottom: 24px;
}
</style>
