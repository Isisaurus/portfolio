import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Socials from '@/components/Socials';

export const metadata: Metadata = {
  title: 'Diana Vitanyi',
  description: 'Web Developer portfolio of Diana Vitanyi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-50 min-h-screen flex`}>
        <Socials />
        <div className="flex flex-col w-full">
          <NavBar />
          <>{children}</>
        </div>
      </body>
    </html>
  );
}
