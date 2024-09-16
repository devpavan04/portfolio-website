'use client';

import { playwriteCuba } from '@/app/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export const NavBar = () => {
  const pathname = usePathname();

  const getLinkClassName = (path: string) => {
    const baseClasses = 'transition-colors';
    const activeClasses = 'text-light-accent dark:text-dark-accent';
    const inactiveClasses = 'hover:text-light-accent dark:hover:text-dark-accent';

    return `${baseClasses} ${pathname.startsWith(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className='flex justify-between items-baseline'>
      <Link href='/'>
        <div className={`${playwriteCuba.className} text-4xl font-bold text-light-accent dark:text-dark-accent translate-x-3`}>
          ps
        </div>
      </Link>

      <div className='flex justify-center items-center gap-4'>
        <Link href='/about' className={getLinkClassName('/about')}>
          About
        </Link>
        <Link href='/projects' className={getLinkClassName('/projects')}>
          Projects
        </Link>
        <Link href='/blog' className={getLinkClassName('/blog')}>
          Blog
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
