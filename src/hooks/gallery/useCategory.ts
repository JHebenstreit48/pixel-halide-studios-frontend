import { useState, useEffect } from 'react';
import type { Category } from '@/types';
import type { ApiResponse } from '@/types';

export default function useCategory(id: string): ApiResponse<Category> {
  const [data, setData] = useState<Category | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // TODO: implement once Firebase is connected
    setLoading(false);
  }, [id]);

  return { data, error, loading };
}