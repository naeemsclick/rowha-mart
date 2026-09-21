import { ref, onMounted, onUnmounted } from 'vue';

export function useScroll(threshold: number = 200) {
  const isScrolled = ref(false);
  const scrollY = ref(0);

  const handleScroll = () => {
    scrollY.value = window.scrollY;
    isScrolled.value = window.scrollY > threshold;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    isScrolled,
    scrollY,
    scrollToTop
  };
}
