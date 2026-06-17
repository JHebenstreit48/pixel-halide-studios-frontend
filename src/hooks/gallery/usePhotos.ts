'use client';

import { useState, useEffect } from 'react';
import { fetchPhotos } from '@/api/photosApi';
import type { Photo, PhotoCategory } from '@/types/photo';
import type { ApiResponse } from '@/types/api';

export default function usePhotos(
  category?: PhotoCategory
): ApiResponse<Photo[]> {
  const [data, setData] = useState<Photo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const photos = await fetchPhotos(category);
        if (!cancelled) {
          setData(photos);
          setError(null);
        }
      } catch {
        if (!cancelled) {
          setError('Failed to load photos');
          setData(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [category]);

  return { data, error, loading };
}