import { Fjalla_One, Poppins } from 'next/font/google';
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

// Logo
export const playwriteCuba = localFont({
  src: './fonts/PlaywriteCubaVar.ttf',
  variable: '--font-playwriteCuba',
  display: 'swap',
});
