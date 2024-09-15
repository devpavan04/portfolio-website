import type { Metadata } from 'next';
import './globals.css';
import { poppins } from '@/app/fonts';
import { Providers } from '@/app/providers';
import { NavBar } from '@/components/NavBar';
import clsx from 'clsx';
import { Separator } from '@/components/ui/separator';

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
    poppins.className,
    'h-screen',
    'max-w-2xl mx-auto',
    'py-2 px-6',
    'bg-light-bg dark:bg-dark-bg',
    'text-light-text dark:text-dark-text'
  );

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={className}>
        <Providers>
          <div className='flex flex-col gap-10'>
            <NavBar />
            <Separator className='bg-light-accent dark:bg-dark-accent' />
            {children}
            {/* Footer */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
