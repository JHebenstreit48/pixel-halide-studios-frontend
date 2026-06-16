import type { PhotoCategory } from '@/types/photo';

export type Category = {
  id: PhotoCategory;
  displayName: string;
  description: string;
  coverImageUrl?: string;
};