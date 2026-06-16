import { useState, useEffect } from 'react';
import type { Photo } from '@/types';
import type { ApiResponse } from '@/types';

export default function usePhotos(category?: string): ApiResponse<Photo[]> {
  const [data, setData] = useState<Photo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // TODO: implement once Firebase is connected
    setLoading(false);
  }, [category]);

  return { data, error, loading };
}