'use client';

import { createContext, useContext } from 'react';
import type { Photo } from '@/types';

type GalleryContextType = {
  selectedPhoto: Photo | null;
  setSelectedPhoto: (photo: Photo | null) => void;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
};

export const GalleryContext = createContext<GalleryContextType | null>(null);

export function useGallery(): GalleryContextType {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
}