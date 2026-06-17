import { collection, getDocs } from 'firebase/firestore';
import { dbPortfolio } from '@/firebase/client';
import type { Category } from '@/types/category';

type AnyObj = Record<string, unknown>;

function mapDocToCategory(id: string, data: AnyObj): Category {
  return {
    id: id as Category['id'],
    displayName: String(data.displayName ?? ''),
    description: String(data.description ?? ''),
    coverImageUrl: data.coverImageUrl ? String(data.coverImageUrl) : undefined,
  };
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const snap = await getDocs(collection(dbPortfolio, 'categories'));
    return snap.docs.map((d) =>
      mapDocToCategory(d.id, d.data() as AnyObj)
    );
  } catch (err) {
    console.error('[categoriesApi] fetchCategories error', err);
    return [];
  }
}