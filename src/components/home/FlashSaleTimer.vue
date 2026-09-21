<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  targetDate?: string;
}>();

const hours = ref('08');
const minutes = ref('45');
const seconds = ref('12');

let timerInterval: ReturnType<typeof setInterval> | null = null;

function updateCountdown() {
  const target = props.targetDate
    ? new Date(props.targetDate).getTime()
    : new Date().getTime() + 8 * 3600 * 1000 + 45 * 60 * 1000;

  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    hours.value = '00';
    minutes.value = '00';
    seconds.value = '00';
    return;
  }

  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  hours.value = h < 10 ? `0${h}` : `${h}`;
  minutes.value = m < 10 ? `0${m}` : `${m}`;
  seconds.value = s < 10 ? `0${s}` : `${s}`;
}

onMounted(() => {
  updateCountdown();
  timerInterval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval);
});
</script>

<template>
  <div class="flash-sale-timer">
    <div class="time-block">
      <span class="time-val">{{ hours }}</span>
      <span class="time-unit">Hours</span>
    </div>
    <span class="colon">:</span>
    <div class="time-block">
      <span class="time-val">{{ minutes }}</span>
      <span class="time-unit">Mins</span>
    </div>
    <span class="colon">:</span>
    <div class="time-block">
      <span class="time-val">{{ seconds }}</span>
      <span class="time-unit">Secs</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.flash-sale-timer {
  display: flex;
  align-items: center;
  gap: 8px;
}

.time-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-charcoal);
  color: var(--color-white);
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);

  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
  }
}

.time-val {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
}

.time-unit {
  font-size: 0.62rem;
  color: var(--color-taupe);
  text-transform: uppercase;
  letter-spacing: 0.04em;

  @media (max-width: 480px) {
    font-size: 0.55rem;
  }
}

.colon {
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--color-charcoal);
}
</style>
