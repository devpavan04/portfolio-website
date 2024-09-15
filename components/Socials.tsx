import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { playwriteCuba } from '@/app/fonts';
import { FaCode } from 'react-icons/fa6';

export const Socials = () => {
  return (
    <div className='flex justify-between items-baseline'>
      <div className='flex justify-start items-center gap-4'>
        <Link
          href='https://www.linkedin.com/in/pavansoratur/'
          target='_blank'
          className='hover:text-light-accent dark:hover:text-dark-accent transition-colors'
        >
          <FaLinkedinIn size={24} />
        </Link>
        <Link
          href='https://github.com/devpavan04'
          target='_blank'
          className='hover:text-light-accent dark:hover:text-dark-accent transition-colors'
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href='https://x.com/pavansoratur'
          target='_blank'
          className='hover:text-light-accent dark:hover:text-dark-accent transition-colors'
        >
          <FaXTwitter size={24} />
        </Link>
        <Link
          href='https://www.youtube.com/@pavansoratur9475'
          target='_blank'
          className='hover:text-light-accent dark:hover:text-dark-accent transition-colors'
        >
          <FaYoutube size={24} />
        </Link>
      </div>

      <div className={playwriteCuba.className + ' text-light-accent dark:text-dark-accent flex gap-2'}>
        <FaCode size={24} />
      </div>
    </div>
  );
};
