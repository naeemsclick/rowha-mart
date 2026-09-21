import type { Product } from '@/types';

export const productsData: Product[] = [
  // GADGETS
  {
    id: 'prod-g1',
    slug: 'rowha-pro-anc-wireless-headphones',
    name: 'Rowha Pro Active Noise Cancelling Wireless Headphones',
    category: 'Gadgets',
    categorySlug: 'gadgets',
    subcategory: 'audio-devices',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 3450,
    compareAtPrice: 4200,
    discount: 18,
    rating: 4.9,
    reviewsCount: 38,
    stock: 15,
    isBestSeller: true,
    isFeatured: true,
    isFlashSale: true,
    badge: 'Best Seller',
    description: 'Immerse yourself in pure studio-grade audio quality with the Rowha Pro ANC Wireless Headphones. Featuring deep bass boost, 40-hour continuous battery life, and ergonomic plush memory foam earcups.',
    shortDescription: '40-Hour Battery Life • Hybrid ANC Noise Cancellation • Ultra Soft Memory Foam Earcups',
    specifications: {
      'Bluetooth Version': '5.3',
      'Battery Life': '40 Hours (ANC Off), 28 Hours (ANC On)',
      'Driver Size': '40mm Neodymium Dynamic Drivers',
      'Charging Time': '1.5 Hours via USB-C Quick Charge',
      'Warranty': '1 Year Official Rowha Mart Warranty'
    },
    colors: ['Matte Black', 'Sage Green', 'Silver Grey'],
    tags: ['Headphones', 'Audio', 'Wireless', 'ANC', 'Tech']
  },
  {
    id: 'prod-g2',
    slug: 'rowha-smart-watch-ultra-series',
    name: 'Rowha Smartwatch Ultra Edition with AMOLED Display',
    category: 'Gadgets',
    categorySlug: 'gadgets',
    subcategory: 'smart-gadgets',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 2890,
    compareAtPrice: 3500,
    discount: 17,
    rating: 4.8,
    reviewsCount: 52,
    stock: 22,
    isBestSeller: true,
    isFeatured: true,
    isFlashSale: true,
    badge: 'Popular',
    description: 'Track your health, fitness, and daily notifications seamlessly. Features a vibrant 1.96" HD AMOLED display, SpO2 monitor, continuous heart rate sensor, and waterproof aluminum alloy body.',
    shortDescription: '1.96" AMOLED Touchscreen • Bluetooth Calling • 100+ Sports Modes • IP68 Waterproof',
    specifications: {
      'Display': '1.96 inch Retina AMOLED Touch Screen',
      'Battery': '380mAh (7-10 days typical usage)',
      'Water Resistance': 'IP68 Swim-proof',
      'Sensors': 'Optical Heart Rate, Blood Oxygen SpO2, Sleep Monitor',
      'Compatibility': 'iOS & Android'
    },
    colors: ['Titanium Grey', 'Blush Rose Gold', 'Midnight Black'],
    sizes: ['44mm', '49mm'],
    tags: ['Smartwatch', 'Fitness Tracker', 'Gadget', 'Wearable']
  },
  {
    id: 'prod-g3',
    slug: 'rowha-tws-air-buds-pro',
    name: 'Rowha Air Buds Pro Wireless Earbuds with Dual Mic',
    category: 'Gadgets',
    categorySlug: 'gadgets',
    subcategory: 'audio-devices',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 1650,
    compareAtPrice: 2200,
    discount: 25,
    rating: 4.7,
    reviewsCount: 29,
    stock: 30,
    isNew: true,
    badge: 'Hot Deal',
    description: 'Crystal clear phone calls and punchy bass in a lightweight ergonomic design. Touch controls, environmental noise cancellation (ENC), and instant auto-pairing.',
    shortDescription: 'Dual Mic ENC Noise Cancellation • 32 Hours Total Playtime • Touch Controls',
    specifications: {
      'Bluetooth': 'V5.3 True Wireless',
      'Playtime': '6 hours per charge + 26 hours case',
      'Waterproof': 'IPX5 Sweat Resistant',
      'Weight': '3.8g per earbud'
    },
    colors: ['Ceramic White', 'Sage Green'],
    tags: ['Earbuds', 'TWS', 'Wireless', 'Audio']
  },
  {
    id: 'prod-g4',
    slug: 'rowha-magnetic-powerbank-10000mah',
    name: 'Rowha MagCharge 10000mAh Magnetic Wireless Power Bank',
    category: 'Gadgets',
    categorySlug: 'gadgets',
    subcategory: 'mobile-accessories',
    images: [
      'https://images.unsplash.com/photo-1609592424074-90409a8043df?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622445268465-84024684877f?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 2150,
    compareAtPrice: 2800,
    discount: 23,
    rating: 4.9,
    reviewsCount: 19,
    stock: 12,
    isFeatured: true,
    badge: 'Fast Charge',
    description: 'Snap on wireless fast charging for your smart devices. 20W PD Type-C fast output combined with 15W wireless MagSafe magnetic alignment.',
    shortDescription: '15W Magnetic Wireless Charging • 20W PD Type-C Output • Compact Leather Finish',
    specifications: {
      'Capacity': '10,000mAh Li-Polymer',
      'Wireless Output': '15W / 10W / 7.5W',
      'Wired Output': '20W Power Delivery USB-C',
      'Dimensions': '104 x 68 x 16 mm'
    },
    colors: ['Sage Green', 'Taupe Grey'],
    tags: ['PowerBank', 'Wireless Charger', 'Mobile Accessories']
  },

  // FASHION
  {
    id: 'prod-f1',
    slug: 'rowha-signature-sage-leather-tote',
    name: 'Rowha Signature Sage Structured Leather Handbag',
    category: 'Fashion',
    categorySlug: 'fashion',
    subcategory: 'womens-bags',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 3200,
    compareAtPrice: 3950,
    discount: 19,
    rating: 4.9,
    reviewsCount: 44,
    stock: 8,
    isBestSeller: true,
    isFeatured: true,
    isFlashSale: true,
    badge: 'Editorial Pick',
    description: 'Crafted from premium vegan saffiano leather in Rowha Mart signature Sage Green. Perfect blend of elegance and roomy daily functionality for work or outings.',
    shortDescription: 'Premium Saffiano Leather • Gold Hardware • Detachable Shoulder Strap',
    specifications: {
      'Material': 'High-Grade Vegan Saffiano Leather',
      'Dimensions': '32cm x 24cm x 13cm',
      'Closure': 'Secure Metallic Zipper',
      'Compartments': 'Main Zipped Section, 2 Interior Pockets, 1 Card Slot'
    },
    colors: ['Sage Green', 'Warm Beige', 'Blush Pink', 'Taupe'],
    tags: ['Handbag', 'Tote', 'Fashion', 'Leather', 'Women']
  },
  {
    id: 'prod-f2',
    slug: 'rowha-minimalist-rose-gold-watch',
    name: 'Rowha Classique Rose Gold & Emerald Mesh Watch',
    category: 'Fashion',
    categorySlug: 'fashion',
    subcategory: 'watches-jewelry',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 2450,
    compareAtPrice: 3100,
    discount: 21,
    rating: 4.8,
    reviewsCount: 31,
    stock: 14,
    isFeatured: true,
    badge: 'Trending',
    description: 'Timeless elegance meets modern aesthetic. Deep emerald green dial framed in brushed rose gold case with an adjustable stainless steel mesh strap.',
    shortDescription: 'Japanese Quartz Movement • 3ATM Water Resistant • Scratch-Resistant Sapphire Glass',
    specifications: {
      'Movement': 'Precision Japanese Quartz',
      'Case Diameter': '36mm',
      'Strap Width': '18mm Mesh Strap',
      'Water Resistance': '3ATM'
    },
    colors: ['Rose Gold Emerald', 'Rose Gold Pearl', 'Silver Navy'],
    tags: ['Watch', 'Jewelry', 'Accessories', 'Fashion']
  },
  {
    id: 'prod-f3',
    slug: 'rowha-chic-casual-street-sneakers',
    name: 'Rowha Urban Chic Soft Cushion Leather Sneakers',
    category: 'Fashion',
    categorySlug: 'fashion',
    subcategory: 'footwear',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 2750,
    compareAtPrice: 3400,
    discount: 19,
    rating: 4.7,
    reviewsCount: 23,
    stock: 18,
    isNew: true,
    badge: 'New Arrival',
    description: 'Walk in total comfort and effortless style. Designed with breathable micro-perforations, shock-absorbing insoles, and subtle blush taupe accent overlays.',
    shortDescription: 'Memory Foam Insole • Anti-Slip Rubber Outsole • Premium Breathable Lining',
    specifications: {
      'Upper': 'Synthetic Leather & Suede Trims',
      'Insole': 'Cushion Memory Foam',
      'Outsole': 'Non-slip Lightweight TPR'
    },
    colors: ['White & Blush Pink', 'Off White & Sage Green'],
    sizes: ['36', '37', '38', '39', '40'],
    tags: ['Footwear', 'Sneakers', 'Shoes', 'Fashion']
  },
  {
    id: 'prod-f4',
    slug: 'rowha-compact-tri-fold-wallet',
    name: 'Rowha Soft Grain Leather Crossbody Card Wallet',
    category: 'Fashion',
    categorySlug: 'fashion',
    subcategory: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 1350,
    compareAtPrice: 1750,
    discount: 22,
    rating: 4.9,
    reviewsCount: 16,
    stock: 25,
    badge: 'Essential',
    description: 'Sleek compact wallet designed with RFID protection, zipper coin compartment, and multiple card slots. Comes with detachable wristlet strap.',
    shortDescription: 'RFID Blocking Technology • 8 Card Slots • Soft Pebble Leather',
    specifications: {
      'Dimensions': '14cm x 9.5cm x 2cm',
      'Material': 'Pebble Grain Vegan Leather',
      'RFID Protection': 'Yes'
    },
    colors: ['Blush Pink', 'Taupe Beige', 'Sage Green'],
    tags: ['Wallet', 'Accessories', 'Fashion']
  },

  // BEAUTY
  {
    id: 'prod-b1',
    slug: 'rowha-botanical-radiance-glow-serum',
    name: 'Rowha Botanical Radiance Vitamin C & Hyaluronic Serum',
    category: 'Beauty & Care',
    categorySlug: 'beauty',
    subcategory: 'serums-oils',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248597261-8332586b3235?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 1450,
    compareAtPrice: 1850,
    discount: 21,
    rating: 4.9,
    reviewsCount: 61,
    stock: 35,
    isBestSeller: true,
    isFeatured: true,
    isFlashSale: true,
    badge: 'Bestseller',
    description: 'Transform your skin glow with concentrated 15% Vitamin C, pure Hyaluronic Acid, and Niacinamide. Fades dark spots, hydrates deeply, and improves skin texture.',
    shortDescription: '15% Stabilized Vitamin C • Hyaluronic Acid Deep Moisture • Paraben & Cruelty Free',
    specifications: {
      'Volume': '30ml Dropper Bottle',
      'Skin Type': 'All Skin Types (Including Sensitive)',
      'Key Ingredients': 'Vitamin C, Niacinamide, Hyaluronic Acid, Rosehip Extract',
      'Formulation': 'Lightweight Fast-Absorbing Fluid'
    },
    tags: ['Serum', 'Skincare', 'Beauty', 'Vitamin C', 'Glow']
  },
  {
    id: 'prod-b2',
    slug: 'rowha-soothing-rosewater-hydrating-mist',
    name: 'Rowha Organic Rosewater Hydrating Face & Body Mist',
    category: 'Beauty & Care',
    categorySlug: 'beauty',
    subcategory: 'skincare',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 890,
    compareAtPrice: 1200,
    discount: 25,
    rating: 4.8,
    reviewsCount: 37,
    stock: 40,
    isNew: true,
    badge: 'Clean Beauty',
    description: 'Pure steam-distilled Damask rosewater infused with aloe vera extract. Instantly cools, refreshes, hydrates makeup, and balances skin pH.',
    shortDescription: '100% Steam-Distilled Organic Rose Water • Alcohol-Free • Instant Refreshment',
    specifications: {
      'Volume': '120ml Spray Bottle',
      'Scent': 'Natural Fresh Rose',
      'Origin': 'Clean Organic Botanical Blend'
    },
    tags: ['Face Mist', 'Skincare', 'Beauty', 'Organic']
  },
  {
    id: 'prod-b3',
    slug: 'rowha-velvet-matte-lip-tint-combo',
    name: 'Rowha Velvet Matte Moisturizing Lip Tint Duo',
    category: 'Beauty & Care',
    categorySlug: 'beauty',
    subcategory: 'makeup',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 1190,
    compareAtPrice: 1500,
    discount: 20,
    rating: 4.9,
    reviewsCount: 28,
    stock: 20,
    isFeatured: true,
    badge: 'Duo Pack',
    description: 'Featherlight non-drying matte texture infused with Jojoba Oil and Vitamin E. Delivers long-lasting rich pigment with a silky comfortable feel.',
    shortDescription: '2 Shades (Blush Rose & Dusty Nude) • Transfer-Resistant • Jojoba Oil Infused',
    specifications: {
      'Net Weight': '4.5g x 2',
      'Finish': 'Velvet Soft Matte',
      'Key Ingredients': 'Jojoba Oil, Vitamin E, Shea Butter'
    },
    colors: ['Blush Rose & Dusty Nude Set'],
    tags: ['Lip Tint', 'Lipstick', 'Makeup', 'Beauty']
  },
  {
    id: 'prod-b4',
    slug: 'rowha-soothing-jade-facial-roller-set',
    name: 'Rowha Natural Xiuyan Jade Facial Roller & Gua Sha Set',
    category: 'Beauty & Care',
    categorySlug: 'beauty',
    subcategory: 'self-care',
    images: [
      'https://images.unsplash.com/photo-1608248597261-8332586b3235?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&h=1000&fit=crop&q=80'
    ],
    price: 1250,
    compareAtPrice: 1600,
    discount: 22,
    rating: 4.8,
    reviewsCount: 19,
    stock: 14,
    badge: 'Self-Care',
    description: 'Promote lymphatic drainage, sculpt jawline contours, and boost skincare product absorption with authentic 100% natural Xiuyan Jade stone.',
    shortDescription: '100% Genuine Natural Jade Stone • Reduces Facial Puffiness • Dual Ended Roller',
    specifications: {
      'Material': '100% Authentic Natural Xiuyan Jade',
      'Includes': '1 Dual-Head Roller + 1 Curved Gua Sha Tool',
      'Packaging': 'Rowha Mart Premium Velvet Gift Box'
    },
    tags: ['Jade Roller', 'Gua Sha', 'Self Care', 'Skincare Tool']
  }
];
