import { Fjalla_One, Poppins, Inter, Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';

// Title & Headings
export const fjallaOne = Fjalla_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fjallaOne',
  display: 'swap',
});

// Body
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-poppins',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-openSans',
  display: 'swap',
});

// Logo
export const playwriteCuba = localFont({
  src: './fonts/PlaywriteCubaVar.ttf',
  variable: '--font-playwriteCuba',
  display: 'swap',
});
