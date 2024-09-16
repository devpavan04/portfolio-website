import { FaLinkedinIn, FaGithub, FaXTwitter, FaYoutube, FaCode } from 'react-icons/fa6';
import { playwriteCuba } from '@/app/fonts';

export const Socials = () => {
  return (
    <div className='flex justify-between items-baseline'>
      <div className={playwriteCuba.className + ' text-light-accent dark:text-dark-accent flex gap-2'}>
        <FaCode size={24} />
      </div>

      <div className='flex justify-start items-center gap-4'>
        <a
          href='https://www.youtube.com/@pavansoratur9475'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-light-accent dark:hover:text-dark-accent transition-colors'
        >
          <FaYoutube size={24} />
        </a>
        <a
          href='https://x.com/pavansoratur'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-light-accent dark:hover:text-dark-accent transition-colors'
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href='https://www.linkedin.com/in/pavansoratur/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-light-accent dark:hover:text-dark-accent transition-colors'
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href='https://github.com/devpavan04'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-light-accent dark:hover:text-dark-accent transition-colors'
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};
