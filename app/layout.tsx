import type { Metadata } from 'next';
import './globals.css';
import { poppins } from '@/app/fonts';
import { Providers } from '@/app/providers';
import { NavBar } from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'Pavan Soratur',
  description: 'Pavan Soratur - Full Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={
          poppins.className +
          ' bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text max-w-xl mx-auto h-screen py-2 px-6'
        }
      >
        <Providers>
          <div className='flex flex-col gap-10'>
            <NavBar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
