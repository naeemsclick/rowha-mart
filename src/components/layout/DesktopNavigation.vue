<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useLocaleStore } from '@/stores/locale';

const route = useRoute();
const localeStore = useLocaleStore();

export interface NavItem {
  key: string;
  label: string;
  link: string;
  badge?: string;
}

const navItems = computed<NavItem[]>(() => [
  { key: 'home', label: localeStore.t('nav.home'), link: '/' },
  { key: 'shop', label: localeStore.t('nav.shop'), link: '/shop' },
  { key: 'fashion', label: localeStore.t('nav.fashion'), link: '/category/fashion' },
  { key: 'gadgets', label: localeStore.t('nav.gadgets'), link: '/category/gadgets' },
  { key: 'beauty', label: localeStore.t('nav.beauty'), link: '/category/beauty' },
  { key: 'newArrivals', label: localeStore.t('nav.newArrivals'), link: '/shop?sortBy=newest', badge: 'NEW' },
  { key: 'offers', label: localeStore.t('nav.offers'), link: '/offers', badge: 'HOT' },
  { key: 'about', label: localeStore.t('nav.about'), link: '/about' },
  { key: 'contact', label: localeStore.t('nav.contact'), link: '/contact' }
]);

function isActive(link: string): boolean {
  if (link === '/') return route.path === '/';
  return route.fullPath === link || route.path.startsWith(link);
}
</script>

<template>
  <nav class="desktop-navigation">
    <ul class="nav-list">
      <li v-for="item in navItems" :key="item.label" class="nav-item">
        <router-link
          :to="item.link"
          :class="['nav-link', { active: isActive(item.link) }]"
        >
          {{ item.label }}
          <span v-if="item.badge" :class="['nav-badge', `nav-badge--${item.badge.toLowerCase()}`]">
            {{ item.badge }}
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.desktop-navigation {
  background: transparent;
  border: none;
  box-shadow: none;

  @media (max-width: 992px) {
    display: none;
  }
}

.nav-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1200px) {
    gap: 12px;
  }
}

.nav-item {
  position: relative;
  flex-shrink: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-charcoal);
  white-space: nowrap;
  transition: var(--transition-fast);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2.5px;
    background-color: var(--color-accent);
    border-radius: 2px;
    transition: var(--transition-fast);
  }

  &:hover, &.active {
    color: var(--color-primary-dark);

    &::after {
      width: 100%;
    }
  }
}

.nav-badge {
  font-size: 0.58rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: var(--radius-full);
  letter-spacing: 0.05em;
  line-height: 1;
  text-transform: uppercase;
  animation: badgePulseBlink 1.6s infinite cubic-bezier(0.4, 0, 0.6, 1);
  display: inline-flex;
  align-items: center;

  &--new {
    background: linear-gradient(135deg, #4E856D 0%, #2A5A46 100%);
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(78, 133, 109, 0.4);
  }

  &--hot {
    background: linear-gradient(135deg, #EE6D75 0%, #D63843 100%);
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(238, 109, 117, 0.4);
  }
}

@keyframes badgePulseBlink {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.12);
  }
}
</style>
