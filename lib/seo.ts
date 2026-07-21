import type { Metadata } from 'next';

const fallbackBase = 'https://convivier-porto.vercel.app';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackBase;

export function pageMetadata(title: string, description: string, path = '/'): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'CONVIVER | Casa dos Livros',
      type: 'website',
    },
  };
}
