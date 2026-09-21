import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export type SupportedLocale = 'bn' | 'en';

const translations: Record<string, { bn: string; en: string }> = {
  // Announcement Bar
  'announcement.slogan': {
    bn: '“ছোট ছোট পছন্দেই সুন্দর আপনি।”',
    en: '“Small Choices Make a Brighter You.”'
  },
  'announcement.freeDelivery': {
    bn: '🚚 সারা বাংলাদেশে ফ্রি হোম ডেলিভারি ৳২,০০০+ টাকার কেনাকাটায়!',
    en: '🚚 Free Home Delivery all over Bangladesh on orders above ৳2,000!'
  },
  'announcement.bKashOffer': {
    bn: '🔥 বিকাশ ও নগদ পেমেন্টে ১০% ইন্সট্যান্ট ছাড়!',
    en: '10% Instant Discount on bKash & Nagad Payments!'
  },
  'announcement.specialOffer': {
    bn: '⚡ নতুন কালেকশনে ২০% পর্যন্ত স্পেশাল অফার!',
    en: '⚡ Up to 20% Special Discount on New Collections!'
  },
  'announcement.customerCare': {
    bn: 'কাস্টমার কেয়ার',
    en: 'Customer Care'
  },
  'announcement.trackOrder': {
    bn: 'অর্ডার ট্র্যাকিং',
    en: 'Track My Order'
  },

  // Navigation
  'nav.home': { bn: 'হোম', en: 'Home' },
  'nav.shop': { bn: 'সব পণ্য', en: 'Shop All' },
  'nav.fashion': { bn: 'ফ্যাশন', en: 'Fashion' },
  'nav.gadgets': { bn: 'স্মার্ট গ্যাজেট', en: 'Smart Gadgets' },
  'nav.beauty': { bn: 'বিউটি ও কেয়ার', en: 'Beauty & Care' },
  'nav.newArrivals': { bn: 'নতুন কালেকশন', en: 'New Arrivals' },
  'nav.offers': { bn: 'স্পেশাল অফার', en: 'Special Offers' },
  'nav.about': { bn: 'আমাদের সম্পর্কে', en: 'About Us' },
  'nav.contact': { bn: 'যোগাযোগ', en: 'Contact' },

  // Header & Search
  'header.searchPlaceholder': {
    bn: 'ফ্যাশন, স্মার্ট গ্যাজেট, বিউটি পণ্য খুঁজুন...',
    en: 'Search Fashion, Smart Gadgets, Beauty & Care...'
  },
  'header.account': { bn: 'অ্যাকাউন্ট', en: 'Account' },
  'header.wishlist': { bn: 'উইশলিস্ট', en: 'Wishlist' },
  'header.cart': { bn: 'কার্ট', en: 'Cart' },

  // Hero Section
  'hero.slide1Tag': { bn: 'প্রিমিয়াম হ্যান্ডব্যাগ কালেকশন', en: 'PREMIUM HANDBAG COLLECTION' },
  'hero.slide1Title': { bn: 'মার্জিত ফ্যাশন ও আধুনিক স্টাইল', en: 'Elegance Redefined for Modern Living' },
  'hero.slide1Subtitle': { bn: 'রৌহা মার্টের এক্সক্লুসিভ লেদার হ্যান্ডব্যাগ ও ওয়্যার কালেকশনে ২০% পর্যন্ত স্পেশাল অফার।', en: 'Discover handcrafted leather bags & watches curated for your confident lifestyle.' },
  'hero.slide2Tag': { bn: 'স্মার্ট টেক লাইফস্টাইল', en: 'SMART TECH LIFESTYLE' },
  'hero.slide2Title': { bn: 'স্মার্ট গ্যাজেট ও প্রিমিয়াম সাউন্ড', en: 'Future Tech at Your Fingertips' },
  'hero.slide2Subtitle': { bn: 'এইচডি অডিও এএনসি হেডফোন, অয়ারলেস চার্জার ও হেলথ ট্র্যাকিং স্মার্টওয়াচ।', en: 'Experience studio-grade active noise-cancelling headphones & AMOLED smartwatches.' },
  'hero.slide3Tag': { bn: 'অর্গানিক বিউটি ও স্কিনকেয়ার', en: 'ORGANIC BEAUTY & CARE' },
  'hero.slide3Title': { bn: 'প্রাকৃতিক রূপচর্চা ও ত্বক সচেতনতা', en: 'Nurture Your Natural Glow Every Day' },
  'hero.slide3Subtitle': { bn: 'ভিটামিন সি সিরাম, ন্যাচারাল ময়েশ্চারাইজার ও বোটানিক্যাল বিউটি এসেনশিয়াল।', en: 'Hydrating Vitamin C serums & glowing skin rituals crafted with pure organic ingredients.' },
  'hero.shopNow': { bn: 'এখনই কিনুন', en: 'Shop Now' },
  'hero.exploreCollection': { bn: 'কালেকশন দেখুন', en: 'Explore Collection' },

  // Home Sections & Buttons
  'section.shopByCategory': { bn: 'ক্যাটাগরি অনুযায়ী কেনাকাটা করুন', en: 'Shop by Category' },
  'section.featuredProducts': { bn: 'সেরা পছন্দের পণ্যসমূহ', en: 'Featured Products' },
  'section.bestSellers': { bn: 'জনপ্রিয় বেস্ট সেলার', en: 'Best Sellers' },
  'section.newArrivals': { bn: 'নতুন কালেকশন', en: 'New Arrivals' },
  'section.flashSale': { bn: 'ধামাকা ফ্ল্যাশ সেল অফার', en: 'Flash Sale Deals' },
  'section.viewAll': { bn: 'সব দেখুন', en: 'View All' },
  'section.addToCart': { bn: 'কার্টে যোগ করুন', en: 'Add to Cart' },
  'section.buyNow': { bn: 'এখনই অর্ডার করুন', en: 'Buy Now' },
  'section.inStock': { bn: 'স্টকে আছে', en: 'In Stock' },
  'section.outOfStock': { bn: 'স্টক আউট', en: 'Out of Stock' },
  'section.reviews': { bn: 'রিভিউ', en: 'Reviews' },
  'section.quickView': { bn: 'কুইক ভিউ', en: 'Quick View' },

  // Trust Badges
  'trust.freeShippingTitle': { bn: 'ফ্রি হোম ডেলিভারি', en: 'Free Home Delivery' },
  'trust.freeShippingDesc': { bn: '৳২,০০০+ টাকার অর্ডারে সারা বাংলাদেশে ফ্রি ডেলিভারি', en: 'Free delivery all over Bangladesh on orders over ৳2,000' },
  'trust.originalTitle': { bn: '১০০% অরিজিনাল গ্যারান্টি', en: '100% Genuine Guarantee' },
  'trust.originalDesc': { bn: 'প্রিমিয়াম কোয়ালিটি নিয়ন্ত্রিত সোর্স থেকে সংগৃহীত', en: 'Sourced directly from verified premium brand suppliers' },
  'trust.paymentTitle': { bn: 'নিরাপদ ক্যাশ অন ডেলিভারি', en: 'Safe Cash on Delivery' },
  'trust.paymentDesc': { bn: 'পণ্য হাতে পেয়ে দেখে মূল্য পরিশোধের সুযোগ', en: 'Pay cash safely at your doorstep after inspecting items' },
  'trust.supportTitle': { bn: '২৪/৭ কাস্টমার সাপোর্ট', en: '24/7 Dedicated Support' },
  'trust.supportDesc': { bn: 'হোয়াটসঅ্যাপ ও সরাসরি ফোনে সার্বক্ষণিক সহায়তা', en: 'Instant support via WhatsApp & direct phone calls' },

  // Cart Drawer
  'cart.title': { bn: 'আপনার শপিং কার্ট', en: 'Your Shopping Cart' },
  'cart.empty': { bn: 'আপনার কার্টে কোনো পণ্য নেই', en: 'Your cart is currently empty' },
  'cart.subtotal': { bn: 'মোট মূল্য:', en: 'Subtotal:' },
  'cart.delivery': { bn: 'ডেলিভারি চার্জ:', en: 'Delivery Charge:' },
  'cart.total': { bn: 'সর্বমোট:', en: 'Grand Total:' },
  'cart.checkout': { bn: 'অর্ডার সম্পন্ন করুন', en: 'Proceed to Checkout' },
  'cart.continue': { bn: 'আরও কেনাকাটা করুন', en: 'Continue Shopping' },

  // Checkout Page
  'checkout.title': { bn: 'অর্ডার কনফার্মেশন ও চেকআউট', en: 'Checkout & Order Confirmation' },
  'checkout.shippingTitle': { bn: 'ডেলিভারি তথ্য', en: 'Shipping & Delivery Info' },
  'checkout.fullName': { bn: 'আপনার সম্পূর্ণ নাম', en: 'Full Name' },
  'checkout.phone': { bn: 'মোবাইল নম্বর', en: 'Mobile Number' },
  'checkout.address': { bn: 'সম্পূর্ণ ঠিকানা (বাসা/রোড নম্বর)', en: 'Full Address' },
  'checkout.district': { bn: 'জেলা / এলাকা', en: 'District / Area' },
  'checkout.dhakaInside': { bn: 'ঢাকার ভেতরে (৳৬০)', en: 'Inside Dhaka (৳60)' },
  'checkout.dhakaOutside': { bn: 'ঢাকার বাইরে (৳১২০)', en: 'Outside Dhaka (৳120)' },
  'checkout.paymentMethod': { bn: 'পেমেন্ট পদ্ধতি', en: 'Payment Method' },
  'checkout.cod': { bn: 'ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে টাকা দিন)', en: 'Cash on Delivery' },
  'checkout.bKash': { bn: 'বিকাশ / নগদ (১০% ক্যাশব্যাক অফার)', en: 'bKash / Nagad Payment' },
  'checkout.placeOrder': { bn: 'অর্ডার কনফার্ম করুন', en: 'Place Order Now' },

  // Footer
  'footer.slogan': { bn: '“ছোট ছোট পছন্দেই সুন্দর আপনি।”', en: '“Small Choices Make a Brighter You.”' },
  'footer.desc': {
    bn: 'রৌহা মার্ট হচ্ছে আধুনিক ফ্যাশন, স্মার্ট গ্যাজেট এবং ন্যাচারাল বিউটি পণ্যের জন্য আপনার নির্ভরযোগ্য অনলাইন শপিং গন্তব্য।',
    en: 'Rowha Mart is your curated e-commerce destination for modern fashion, smart tech gadgets, and botanical beauty essentials.'
  },
  'footer.quickLinks': { bn: 'দ্রুত লিংক', en: 'Quick Links' },
  'footer.categories': { bn: 'শপ ক্যাটাগরি', en: 'Shop Categories' },
  'footer.customerCare': { bn: 'কাস্টমার কেয়ার', en: 'Customer Care' },
  'footer.contact': { bn: 'সরাসরি যোগাযোগ', en: 'Direct Contact' },
  'footer.rights': { bn: '© ২০২৬ রৌহা মার্ট | সর্বস্বত্ব সংরক্ষিত।', en: '© 2026 Rowha Mart | All Rights Reserved.' },
  'footer.creator': { bn: 'Created by | Naeem Nahiyan', en: 'Created by | Naeem Nahiyan' }
};

export const useLocaleStore = defineStore('locale', () => {
  // Default locale is strictly 'en' (English)
  const savedLocale = localStorage.getItem('rowha_locale_v2') as SupportedLocale;
  const currentLocale = ref<SupportedLocale>(savedLocale || 'en');

  function setLocale(locale: SupportedLocale) {
    currentLocale.value = locale;
    localStorage.setItem('rowha_locale_v2', locale);
    document.documentElement.lang = locale;
  }

  function toggleLocale() {
    setLocale(currentLocale.value === 'bn' ? 'en' : 'bn');
  }

  const isBangla = computed(() => currentLocale.value === 'bn');

  function t(key: string): string {
    const entry = translations[key];
    if (!entry) return key;
    return entry[currentLocale.value] || entry.bn || key;
  }

  return {
    currentLocale,
    isBangla,
    setLocale,
    toggleLocale,
    t
  };
});
