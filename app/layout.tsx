import type { Metadata } from 'next';
import './globals.css';
import { hubotSans } from '@/lib/fonts';
import { Providers } from '@/app/providers';
import { NavBar } from '@/components/NavBar';
import clsx from 'clsx';
import { Separator } from '@/components/ui/separator';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'Pavan Soratur',
  description: 'Pavan Soratur - Full Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const className = clsx(
    hubotSans.className,
    'h-screen',
    'max-w-xl mx-auto',
    'py-2 px-6',
    'bg-light-bg dark:bg-dark-bg',
    'text-light-text dark:text-dark-text'
  );

  return (
    <html lang='en' suppressHydrationWarning className={`${GeistMono.variable}`}>
      <body className={className}>
        <Providers>
          <div className='flex flex-col gap-8'>
            <NavBar />
            <Separator />
            {children}
            {/* Footer */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
