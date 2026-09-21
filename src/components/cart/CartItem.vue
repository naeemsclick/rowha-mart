<script setup lang="ts">
import { Trash2 } from 'lucide-vue-next';
import type { CartItem } from '@/types';
import { useCartStore } from '@/stores/cart';
import { formatPrice } from '@/utils/formatters';

const props = defineProps<{
  item: CartItem;
}>();

const cartStore = useCartStore();

function increment() {
  cartStore.updateQuantity(props.item.product.id, props.item.quantity + 1, props.item.selectedSize, props.item.selectedColor);
}

function decrement() {
  cartStore.updateQuantity(props.item.product.id, props.item.quantity - 1, props.item.selectedSize, props.item.selectedColor);
}

function remove() {
  cartStore.removeItem(props.item.product.id, props.item.selectedSize, props.item.selectedColor);
}
</script>

<template>
  <div class="cart-item-row">
    <img :src="item.product.images[0]" :alt="item.product.name" class="item-img" />

    <div class="item-details">
      <router-link :to="`/product/${item.product.slug}`" class="item-title">
        {{ item.product.name }}
      </router-link>

      <div v-if="item.selectedSize || item.selectedColor" class="item-meta">
        <span v-if="item.selectedColor">Color: {{ item.selectedColor }}</span>
        <span v-if="item.selectedSize">Size: {{ item.selectedSize }}</span>
      </div>

      <div class="item-price">
        {{ formatPrice(item.product.price) }}
      </div>

      <div class="item-controls">
        <div class="qty-btn-group">
          <button type="button" :disabled="item.quantity <= 1" @click="decrement">-</button>
          <span>{{ item.quantity }}</span>
          <button type="button" @click="increment">+</button>
        </div>

        <button type="button" class="remove-btn" aria-label="Remove item" @click="remove">
          <Trash2 :size="16" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-item-row {
  display: flex;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);
}

.item-img {
  width: 72px;
  height: 72px;
  object-fit: contain;
  background: var(--color-off-white);
  border-radius: var(--radius-sm);
  padding: 4px;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
}

.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-charcoal);
  line-height: 1.3;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: var(--color-primary);
  }
}

.item-meta {
  font-size: 0.75rem;
  color: var(--color-taupe);
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
}

.item-price {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 8px;
}

.item-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.qty-btn-group {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);

  button {
    width: 26px;
    height: 26px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: bold;

    &:disabled {
      opacity: 0.3;
    }
  }

  span {
    width: 24px;
    text-align: center;
    font-size: 0.82rem;
    font-weight: 600;
  }
}

.remove-btn {
  background: none;
  border: none;
  color: var(--color-taupe);
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: var(--color-error);
  }
}
</style>
