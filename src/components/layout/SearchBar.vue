<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { Search, X, TrendingUp } from 'lucide-vue-next';
import { useProductStore } from '@/stores/product';
import { useLocaleStore } from '@/stores/locale';
import { formatPrice } from '@/utils/formatters';

const router = useRouter();
const productStore = useProductStore();
const localeStore = useLocaleStore();

const query = ref('');
const isFocused = ref(false);
const searchContainer = ref<HTMLElement | null>(null);

const popularTags = ['Headphones', 'Smartwatch', 'Sage Leather Bag', 'Vitamin C Serum', 'Gua Sha'];

const suggestions = computed(() => {
  if (!query.value.trim()) return [];
  return productStore.filterProducts({ searchQuery: query.value }).slice(0, 5);
});

function handleSearch() {
  if (query.value.trim()) {
    router.push({ path: '/search', query: { q: query.value.trim() } });
    isFocused.value = false;
  }
}

function selectTag(tag: string) {
  query.value = tag;
  handleSearch();
}

function clearQuery() {
  query.value = '';
}

function handleClickOutside(event: MouseEvent) {
  if (searchContainer.value && !searchContainer.value.contains(event.target as Node)) {
    isFocused.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div ref="searchContainer" class="search-bar-wrapper">
    <form class="search-form" @submit.prevent="handleSearch">
      <input
        v-model="query"
        type="text"
        class="search-input"
        :placeholder="localeStore.t('header.searchPlaceholder')"
        @focus="isFocused = true"
      />
      <button v-if="query" type="button" class="clear-btn" aria-label="Clear search" @click="clearQuery">
        <X :size="16" />
      </button>
      <button type="submit" class="search-submit-btn" aria-label="Submit search">
        <Search :size="18" />
      </button>
    </form>

    <!-- Suggestions dropdown -->
    <Transition name="dropdown">
      <div v-if="isFocused" class="search-suggestions-dropdown">
        <!-- Popular tags when query is short -->
        <div v-if="!query.trim()" class="popular-section">
          <p class="section-title">
            <TrendingUp :size="14" /> Popular Searches
          </p>
          <div class="tags-cloud">
            <button
              v-for="tag in popularTags"
              :key="tag"
              type="button"
              class="tag-pill"
              @click="selectTag(tag)"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <!-- Matching product suggestions -->
        <div v-else-if="suggestions.length" class="results-section">
          <p class="section-title">Product Suggestions</p>
          <div class="suggestions-list">
            <router-link
              v-for="item in suggestions"
              :key="item.id"
              :to="`/product/${item.slug}`"
              class="suggestion-item"
              @click="isFocused = false"
            >
              <img :src="item.images[0]" :alt="item.name" class="item-img" />
              <div class="item-info">
                <span class="item-title">{{ item.name }}</span>
                <span class="item-price">{{ formatPrice(item.price) }}</span>
              </div>
            </router-link>
          </div>
        </div>

        <!-- No results -->
        <div v-else class="no-results">
          <p>No products found matching "<strong>{{ query }}</strong>"</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.search-bar-wrapper {
  position: relative;
  width: 100%;
  max-width: 540px;
}

.search-form {
  display: flex;
  align-items: center;
  background: var(--color-white);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: 4px 6px 4px 18px;
  transition: var(--transition-fast);

  &:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(104, 143, 122, 0.15);
  }
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
  color: var(--color-charcoal);

  &::placeholder {
    color: var(--color-taupe);
  }
}

.clear-btn {
  background: none;
  border: none;
  color: var(--color-taupe);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--color-charcoal);
  }
}

.search-submit-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-fast);

  &:hover {
    background: var(--color-primary-dark);
  }
}

.search-suggestions-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  padding: 16px;
  z-index: 900;
}

.section-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-taupe);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-pill {
  padding: 5px 12px;
  border-radius: var(--radius-full);
  background: var(--color-off-white);
  border: 1px solid var(--color-border);
  font-size: 0.82rem;
  color: var(--color-charcoal);
  cursor: pointer;
  transition: var(--transition-fast);

  &:hover {
    background: var(--color-primary-subtle);
    border-color: var(--color-primary);
    color: var(--color-primary-dark);
  }
}

.suggestions-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.suggestion-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: var(--radius-sm);
  transition: var(--transition-fast);

  &:hover {
    background: var(--color-off-white);
  }
}

.item-img {
  width: 44px;
  height: 44px;
  object-fit: contain;
  border-radius: var(--radius-sm);
  background: white;
}

.item-info {
  display: flex;
  flex-direction: column;
}

.item-title {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--color-charcoal);
}

.item-price {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-primary-dark);
}

.no-results {
  padding: 12px 0;
  text-align: center;
  font-size: 0.88rem;
  color: var(--color-taupe);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
