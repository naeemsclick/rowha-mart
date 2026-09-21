<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale';

const localeStore = useLocaleStore();
</script>

<template>
  <div class="language-toggle-group">
    <button
      type="button"
      :class="['lang-toggle-btn', { active: localeStore.currentLocale === 'bn' }]"
      title="বাংলায় দেখুন"
      @click="localeStore.setLocale('bn')"
    >
      <span>বাংলা</span>
    </button>

    <span class="lang-divider">|</span>

    <button
      type="button"
      :class="['lang-toggle-btn', { active: localeStore.currentLocale === 'en' }]"
      title="View in English"
      @click="localeStore.setLocale('en')"
    >
      <span>English</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.language-toggle-group {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2px 6px;
  border-radius: var(--radius-full);
}

.lang-toggle-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.74rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-white);
  }

  &.active {
    background: var(--color-accent);
    color: var(--color-white);
    font-weight: 600;
  }
}

.lang-divider {
  opacity: 0.35;
  font-size: 0.7rem;
  color: var(--color-white);
}
</style>
