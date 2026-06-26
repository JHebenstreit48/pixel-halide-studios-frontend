export type PhotoCategory =
  | "landscapes"
  | "portraits"
  | "products"
  | "architecture"
  | "film";

export type Photo = {
  id: string;
  title: string;
  category: PhotoCategory;
  storageUrl: string;
  description?: string;
  dateTaken?: string;
  dateScanned?: string;
  location?: string;
  camera?: string;
  gear?: string;
  iso?: number;
  aperture?: string;
  filmStock?: string;
  format?: string;
  tags?: string[];
  featured?: boolean;
  order?: number;
};