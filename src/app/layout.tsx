import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Socials from '@/components/Socials';

export const metadata: Metadata = {
  title: 'Diana Vitanyi',
  description: 'Portfolio of Diana Vitanyi.',
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: false,
    follow: false,
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
        <Analytics />
      </body>
    </html>
  );
}
