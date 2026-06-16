export type PhotoCategory =
  | 'landscape'
  | 'portraits'
  | 'products'
  | 'architecture'
  | 'film';

export type Photo = {
  id: string;
  title: string;
  category: PhotoCategory;
  storageUrl: string;
  description?: string;
  dateTaken?: string;
  location?: string;
  gear?: string;
  tags?: string[];
  featured?: boolean;
  order?: number;
};