import type { Metadata } from 'next';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import GalleryProvider from '@/context/galleryProvider';
import '@/app/globals.scss';

export const metadata: Metadata = {
  title: 'Pixel Halide Studios',
  description: 'Photography portfolio — landscapes, portraits, products, architecture, and film photography by Justin Hebenstreit.',
  applicationName: 'Pixel Halide Studios',
  openGraph: {
    siteName: 'Pixel Halide Studios',
    title: 'Pixel Halide Studios — Photography Portfolio',
    description: 'Landscapes, portraits, products, architecture, and film photography by Justin Hebenstreit.',
    type: 'website',
    url: 'https://pixel-halide-studios.netlify.app/',
    images: [
      {
        url: 'https://pixel-halide-studios.netlify.app/og/pixel-halide-studios-1200x630.png?v=1',
        secureUrl: 'https://pixel-halide-studios.netlify.app/og/pixel-halide-studios-1200x630.png?v=1',
        width: 1200,
        height: 630,
        alt: 'Pixel Halide Studios — Photography Portfolio',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Halide Studios — Photography Portfolio',
    description: 'Landscapes, portraits, products, architecture, and film photography by Justin Hebenstreit.',
    images: {
      url: 'https://pixel-halide-studios.netlify.app/og/pixel-halide-studios-1200x630.png?v=1',
      alt: 'Pixel Halide Studios — Photography Portfolio',
    },
  },
  alternates: {
    canonical: 'https://pixel-halide-studios.netlify.app/',
  },
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