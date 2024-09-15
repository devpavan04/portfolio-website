import { playwriteCuba } from '@/app/fonts';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export const NavBar = () => {
  return (
    <nav className='flex justify-between items-baseline'>
      <Link href='/'>
        <div className={playwriteCuba.className + ' text-4xl font-bold text-light-accent dark:text-dark-accent'}>
          ps
        </div>
      </Link>

      <div className='flex justify-center items-center gap-4'>
        <Link href='/projects' className='hover:text-light-accent dark:hover:text-dark-accent transition-colors'>
          Projects
        </Link>
        <Link href='/blog' className='hover:text-light-accent dark:hover:text-dark-accent transition-colors'>
          Blog
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
