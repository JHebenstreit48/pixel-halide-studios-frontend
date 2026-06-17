'use client';

import { useState, useEffect } from 'react';
import { fetchCategories } from '@/api/categoriesApi';
import type { Category } from '@/types/category';
import type { ApiResponse } from '@/types/api';

export default function useCategory(id: string): ApiResponse<Category> {
  const [data, setData] = useState<Category | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const categories = await fetchCategories();
        const match = categories.find((c) => c.id === id) ?? null;
        if (!cancelled) {
          setData(match);
          setError(null);
        }
      } catch {
        if (!cancelled) {
          setError('Failed to load category');
          setData(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [id]);

  return { data, error, loading };
}