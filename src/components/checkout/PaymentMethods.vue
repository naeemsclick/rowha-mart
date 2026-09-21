<script setup lang="ts">
import { Wallet, CreditCard, ShieldCheck } from 'lucide-vue-next';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']);

function select(method: string) {
  emit('update:modelValue', method);
}
</script>

<template>
  <div class="payment-methods-component">
    <h4 class="section-subtitle">Payment Method</h4>

    <div class="methods-grid">
      <!-- Option 1: Cash on Delivery -->
      <label :class="['method-card', { active: modelValue === 'cod' }]" @click="select('cod')">
        <input type="radio" name="payment" value="cod" :checked="modelValue === 'cod'" />
        <div class="icon-box">
          <Wallet :size="20" />
        </div>
        <div class="method-text">
          <span class="method-name">Cash on Delivery</span>
          <span class="method-desc">Pay in cash when your parcel is delivered</span>
        </div>
      </label>

      <!-- Option 2: Mobile Banking -->
      <label :class="['method-card', { active: modelValue === 'mfs' }]" @click="select('mfs')">
        <input type="radio" name="payment" value="mfs" :checked="modelValue === 'mfs'" />
        <div class="icon-box mfs-box">
          <span>mFS</span>
        </div>
        <div class="method-text">
          <span class="method-name">bKash / Nagad / Rocket</span>
          <span class="method-desc">Instant online payment via Mobile Financial Service</span>
        </div>
      </label>

      <!-- Option 3: Card Payment -->
      <label :class="['method-card', { active: modelValue === 'card' }]" @click="select('card')">
        <input type="radio" name="payment" value="card" :checked="modelValue === 'card'" />
        <div class="icon-box">
          <CreditCard :size="20" />
        </div>
        <div class="method-text">
          <span class="method-name">Credit / Debit Card</span>
          <span class="method-desc">Visa, Mastercard, AMEX cards accepted</span>
        </div>
      </label>
    </div>

    <div v-if="modelValue === 'mfs'" class="method-detail-box">
      <p>💡 Mobile Banking instructions will be sent to your phone after confirming order details.</p>
    </div>

    <div v-else-if="modelValue === 'card'" class="method-detail-box">
      <p>🔒 You will be securely redirected to SSLCommerz SSL Payment Gateway upon clicking confirm.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-subtitle {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.methods-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.method-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  background: white;
  cursor: pointer;
  transition: var(--transition-fast);

  input { accent-color: var(--color-primary); }

  &.active {
    border-color: var(--color-primary);
    background: var(--color-primary-subtle);
  }
}

.icon-box {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--color-off-white);
  color: var(--color-primary-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
}

.method-text {
  display: flex;
  flex-direction: column;

  .method-name { font-size: 0.92rem; font-weight: 600; color: var(--color-charcoal); }
  .method-desc { font-size: 0.78rem; color: var(--color-taupe); }
}

.method-detail-box {
  margin-top: 12px;
  padding: 12px 16px;
  background: var(--color-beige);
  border-radius: var(--radius-md);
  font-size: 0.82rem;
  color: var(--color-charcoal);
}
</style>
