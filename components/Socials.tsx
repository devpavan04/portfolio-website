import { FaLinkedinIn, FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export const Socials = () => {
  return (
    <div className='flex justify-center items-center gap-4'>
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
  );
};
