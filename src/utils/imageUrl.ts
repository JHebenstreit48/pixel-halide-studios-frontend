const STORAGE_BASE_URL =
  'https://firebasestorage.googleapis.com/v0/b/' +
  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET +
  '/o/';

export default function getPhotoImageUrl(path: string): string {
  if (!path) return '';

  if (/^https?:\/\//i.test(path) || path.startsWith('data:')) {
    return path;
  }

  const encoded = encodeURIComponent(path);
  return `${STORAGE_BASE_URL}${encoded}?alt=media`;
}