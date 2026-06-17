'use client';

import { useState, useEffect } from 'react';
import { fetchPhotoById } from '@/api/photosApi';
import type { Photo } from '@/types/photo';
import type { ApiResponse } from '@/types/api';

export default function usePhotoById(id: string): ApiResponse<Photo> {
  const [data, setData] = useState<Photo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        const photo = await fetchPhotoById(id);
        if (!cancelled) {
          setData(photo);
          setError(null);
        }
      } catch {
        if (!cancelled) {
          setError('Failed to load photo');
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