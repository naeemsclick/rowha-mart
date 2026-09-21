import type { Category } from '@/types';
import { categoriesData } from '@/data/categories';
import { apiFetch } from './api';

export async function fetchCategories(): Promise<Category[]> {
  try {
    return await apiFetch<Category[]>('/categories');
  } catch {
    return categoriesData;
  }
}
