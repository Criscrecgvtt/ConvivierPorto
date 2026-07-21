import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { SiteNav } from '@/components/layout/SiteNav';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://convivier-porto.vercel.app'),
  title: {
    default: 'CONVIVER | Casa dos Livros',
    template: '%s | CONVIVER',
  },
  description:
    'A Digital Humanities communication ecosystem for Casa dos Livros and Palacete Burmester in Porto.',
  keywords: ['digital humanities', 'Casa dos Livros', 'Palacete Burmester', 'Porto Cultural Passport'],
  openGraph: {
    title: 'CONVIVER | Casa dos Livros',
    description: 'Stay. Read. Breathe. A house where books live.',
    url: '/',
    siteName: 'CONVIVER',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${inter.variable}`}>
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
