<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import CartDrawer from '@/components/cart/CartDrawer.vue';
import QuickViewModal from '@/components/common/QuickViewModal.vue';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp.vue';
import BackToTop from '@/components/common/BackToTop.vue';
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
    <CartDrawer />
    <QuickViewModal />
    <FloatingWhatsApp />
    <BackToTop />
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
