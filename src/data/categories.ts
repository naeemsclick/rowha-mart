import type { Category } from '@/types';

export const categoriesData: Category[] = [
  {
    id: 'cat-fashion',
    slug: 'fashion',
    name: 'Fashion',
    description: 'Elevate your everyday wardrobe with curated luxury handbags, premium watches, elegant footwear, and essential accessories.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    icon: 'ShoppingBag',
    itemCount: 24,
    subcategories: [
      { name: "Women's Bags", slug: 'womens-bags' },
      { name: "Accessories", slug: 'accessories' },
      { name: "Footwear", slug: 'footwear' },
      { name: "Watches & Jewelry", slug: 'watches-jewelry' }
    ]
  },
  {
    id: 'cat-gadgets',
    slug: 'gadgets',
    name: 'Gadgets',
    description: 'Innovative tech accessories designed for seamless connectivity, wireless freedom, and high-performance daily living.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    icon: 'Smartphone',
    itemCount: 18,
    subcategories: [
      { name: "Smart Gadgets", slug: 'smart-gadgets' },
      { name: "Audio Devices", slug: 'audio-devices' },
      { name: "Mobile Accessories", slug: 'mobile-accessories' },
      { name: "Lifestyle Tech", slug: 'lifestyle-tech' }
    ]
  },
  {
    id: 'cat-beauty',
    slug: 'beauty',
    name: 'Beauty & Care',
    description: 'Clean skincare formulations, nourishing botanical serums, and radiant beauty rituals that make you shine effortlessly.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    icon: 'Sparkles',
    itemCount: 20,
    subcategories: [
      { name: "Skincare", slug: 'skincare' },
      { name: "Serums & Oils", slug: 'serums-oils' },
      { name: "Makeup Essentials", slug: 'makeup' },
      { name: "Self Care", slug: 'self-care' }
    ]
  }
];
