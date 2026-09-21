<script setup lang="ts">
import HeroSlider from '@/components/home/HeroSlider.vue';
import CategoryExplorer from '@/components/home/CategoryExplorer.vue';
import BestSellingSection from '@/components/home/BestSellingSection.vue';
import FeaturedCollection from '@/components/home/FeaturedCollection.vue';
import FlashSaleSection from '@/components/home/FlashSaleSection.vue';
import CategoryShowcase from '@/components/home/CategoryShowcase.vue';
import BrandStorySection from '@/components/home/BrandStorySection.vue';
import TestimonialSlider from '@/components/home/TestimonialSlider.vue';
import TrustFeatures from '@/components/home/TrustFeatures.vue';
import NewsletterSection from '@/components/home/NewsletterSection.vue';
import { useSeo } from '@/composables/useSeo';

useSeo({
  title: 'Rowha Mart | Fashion • Gadgets • Beauty',
  description: 'Small Choices Make a Brighter You. Explore curated fashion, smart tech gadgets, and clean beauty essentials online.'
});
</script>

<template>
  <div class="home-page">
    <HeroSlider />
    <CategoryExplorer />
    <BestSellingSection />
    <FeaturedCollection />
    <FlashSaleSection />
    <CategoryShowcase />
    <BrandStorySection />
    <TestimonialSlider />
    <TrustFeatures />
    <NewsletterSection />
  </div>
</template>

<style scoped lang="scss">
.home-page {
  overflow-x: hidden;
}
</style>
