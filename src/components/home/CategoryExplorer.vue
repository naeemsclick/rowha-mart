<script setup lang="ts">
import { ArrowRight, ShoppingBag, Smartphone, Sparkles } from 'lucide-vue-next';
import { categoriesData } from '@/data/categories';

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'ShoppingBag': return ShoppingBag;
    case 'Smartphone': return Smartphone;
    case 'Sparkles': return Sparkles;
    default: return ShoppingBag;
  }
};
</script>

<template>
  <section class="category-explorer section-spacing">
    <div class="container">
      <div class="section-header">
        <div>
          <span class="sub-heading">Browse By Collection</span>
          <h2 class="main-title">Explore Main Categories</h2>
        </div>
        <router-link to="/shop" class="view-all-link">
          <span>View All Categories</span>
          <ArrowRight :size="16" />
        </router-link>
      </div>

      <div class="category-grid">
        <div
          v-for="cat in categoriesData"
          :key="cat.id"
          class="category-card"
        >
          <div class="card-bg-image">
            <img :src="cat.image" :alt="cat.name" loading="lazy" />
            <div class="card-overlay"></div>
          </div>

          <div class="card-content">
            <div class="icon-badge">
              <component :is="getIcon(cat.icon)" :size="22" />
            </div>

            <h3 class="category-name">{{ cat.name }}</h3>
            <p class="category-desc">{{ cat.description }}</p>

            <div class="subcats-list">
              <router-link
                v-for="sub in cat.subcategories.slice(0, 3)"
                :key="sub.slug"
                :to="`/category/${cat.slug}?sub=${sub.slug}`"
                class="subcat-chip"
              >
                {{ sub.name }}
              </router-link>
            </div>

            <router-link :to="`/category/${cat.slug}`" class="explore-btn">
              <span>Explore {{ cat.name }}</span>
              <ArrowRight :size="14" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.category-explorer {
  background: var(--color-off-white);
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 36px;
}

.sub-heading {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 6px;
}

.main-title {
  font-size: 1.8rem;
  color: var(--color-charcoal);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
}

.view-all-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary-dark);

  &:hover {
    color: var(--color-primary);
    gap: 10px;
  }
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.category-card {
  position: relative;
  height: 380px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);

    .card-bg-image img {
      transform: scale(1.08);
    }
  }
}

.card-bg-image {
  position: absolute;
  inset: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(37, 38, 46, 0.2) 0%,
      rgba(37, 38, 46, 0.85) 100%
    );
  }
}

.card-content {
  position: relative;
  height: 100%;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--color-white);
  z-index: 2;
}

.icon-badge {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(104, 143, 122, 0.4);
}

.category-name {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 8px;
}

.category-desc {
  font-size: 0.88rem;
  color: var(--color-beige);
  line-height: 1.45;
  margin-bottom: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.subcats-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.subcat-chip {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  transition: var(--transition-fast);

  &:hover {
    background: white;
    color: var(--color-charcoal);
  }
}

.explore-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-beige);

  &:hover {
    color: white;
    gap: 12px;
  }
}
</style>
