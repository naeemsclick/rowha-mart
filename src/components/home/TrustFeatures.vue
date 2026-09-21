<script setup lang="ts">
import { computed } from 'vue';
import { Truck, ShieldCheck, CreditCard, RefreshCw } from 'lucide-vue-next';
import { useLocaleStore } from '@/stores/locale';

const localeStore = useLocaleStore();

const features = computed(() => [
  {
    icon: Truck,
    title: localeStore.t('trust.freeShippingTitle'),
    desc: localeStore.t('trust.freeShippingDesc')
  },
  {
    icon: ShieldCheck,
    title: localeStore.t('trust.originalTitle'),
    desc: localeStore.t('trust.originalDesc')
  },
  {
    icon: CreditCard,
    title: localeStore.t('trust.paymentTitle'),
    desc: localeStore.t('trust.paymentDesc')
  },
  {
    icon: RefreshCw,
    title: localeStore.t('trust.supportTitle'),
    desc: localeStore.t('trust.supportDesc')
  }
]);
</script>

<template>
  <section class="trust-features-section">
    <div class="container">
      <div class="trust-grid">
        <div v-for="item in features" :key="item.title" class="trust-card">
          <div class="icon-circle">
            <component :is="item.icon" :size="22" />
          </div>
          <div class="trust-text">
            <h4 class="trust-title">{{ item.title }}</h4>
            <p class="trust-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.trust-features-section {
  background: var(--color-white);
  padding: 40px 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.trust-card {
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    background: var(--color-off-white);
    padding: 14px;
    border-radius: var(--radius-md);
  }
}

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary-subtle);
  color: var(--color-primary-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.trust-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-charcoal);
  margin-bottom: 2px;
}

.trust-desc {
  font-size: 0.8rem;
  color: var(--color-taupe);
  line-height: 1.4;
}
</style>
