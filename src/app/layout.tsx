import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Socials from '@/components/Socials';
import ScrollToTop from '@/components/ScrollToTop';

const siteUrl = 'https://diana-vitanyi.vercel.app';
const title = 'Diana Vitanyi · Full-Stack Developer · React · TypeScript';
const description =
  'Full-stack developer with 5 years of experience building production applications, focused on React and TypeScript.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s · Diana Vitanyi',
  },
  description,
  applicationName: 'Diana Vitanyi',
  authors: [{ name: 'Diana Vitanyi', url: siteUrl }],
  creator: 'Diana Vitanyi',
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Diana Vitanyi',
    locale: 'en',
    title,
    description,
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5949KJXS" />
      <body className={`bg-neutral-50 min-h-screen flex flex-col md:flex-row`}>
        <Socials />
        <div className="flex flex-col w-full">
          <NavBar />
          <>{children}</>
        </div>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
