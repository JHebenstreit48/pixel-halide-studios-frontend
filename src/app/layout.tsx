import type { Metadata } from 'next';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import GalleryProvider from '@/context/galleryProvider';
import '@/app/globals.scss';

export const metadata: Metadata = {
  title: 'Pixel Halide Studios',
  description: 'Photography portfolio — landscapes, portraits, products, architecture, and film photography by Justin Hebenstreit.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GalleryProvider>
          <div className="appContainer">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </GalleryProvider>
      </body>
    </html>
  );
}