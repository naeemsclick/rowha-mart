import type { Product } from '@/types';
import { productsData } from '@/data/products';
import { apiFetch } from './api';

export async function fetchProducts(): Promise<Product[]> {
  try {
    return await apiFetch<Product[]>('/products');
  } catch {
    return productsData;
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | undefined> {
  try {
    return await apiFetch<Product>(`/products/${slug}`);
  } catch {
    return productsData.find((p) => p.slug === slug);
  }
}
