import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { dbPortfolio, storagePortfolio } from '@/firebase/client';
import type { Photo, PhotoCategory } from '@/types/photo';

type AnyObj = Record<string, unknown>;

async function resolveStorageUrl(
  filename: string,
  category: string
): Promise<string> {
  try {
    const storageRef = ref(
      storagePortfolio,
      `images/${category}/${filename}`
    );
    return await getDownloadURL(storageRef);
  } catch {
    return '';
  }
}

function mapDocToPhoto(id: string, data: AnyObj): Photo {
  return {
    id,
    title: String(data.title ?? ''),
    category: (data.category as PhotoCategory) ?? 'products',
    storageUrl: String(data.storageUrl ?? ''),
    description: data.description ? String(data.description) : undefined,
    dateTaken: data.dateTaken ? String(data.dateTaken) : undefined,
    location: data.location ? String(data.location) : undefined,
    gear: data.gear ? String(data.gear) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    featured: typeof data.featured === 'boolean' ? data.featured : undefined,
    order: typeof data.order === 'number' ? data.order : undefined,
  };
}

export async function fetchPhotos(category?: PhotoCategory): Promise<Photo[]> {
  try {
    let q;

    if (category) {
      q = query(
        collection(dbPortfolio, 'photos'),
        where('category', '==', category),
        orderBy('order', 'asc')
      );
    } else {
      q = query(
        collection(dbPortfolio, 'photos'),
        orderBy('order', 'asc')
      );
    }

    const snap = await getDocs(q);

    const photos = await Promise.all(
      snap.docs.map(async (d) => {
        const data = d.data() as AnyObj;
        const photo = mapDocToPhoto(d.id, data);

        if (!photo.storageUrl && data.filename && data.category) {
          photo.storageUrl = await resolveStorageUrl(
            String(data.filename),
            String(data.category)
          );
        }

        return photo;
      })
    );

    return photos;
  } catch (err) {
    console.error('[photosApi] fetchPhotos error', err);
    return [];
  }
}

export async function fetchPhotoById(id: string): Promise<Photo | null> {
  try {
    const docRef = doc(dbPortfolio, 'photos', id);
    const snap = await getDoc(docRef);

    if (!snap.exists()) return null;

    const data = snap.data() as AnyObj;
    const photo = mapDocToPhoto(snap.id, data);

    if (!photo.storageUrl && data.filename && data.category) {
      photo.storageUrl = await resolveStorageUrl(
        String(data.filename),
        String(data.category)
      );
    }

    return photo;
  } catch (err) {
    console.error('[photosApi] fetchPhotoById error', err);
    return null;
  }
}