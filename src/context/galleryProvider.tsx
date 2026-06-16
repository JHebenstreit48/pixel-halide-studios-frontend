'use client';

import { useState } from 'react';
import { GalleryContext } from '@/context/galleryContext';
import type { Photo } from '@/types';

type GalleryProviderProps = {
  children: React.ReactNode;
};

export default function GalleryProvider({ children }: GalleryProviderProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <GalleryContext.Provider
      value={{
        selectedPhoto,
        setSelectedPhoto,
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}