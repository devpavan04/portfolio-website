import Link from 'next/link';

export const Intro = () => {
  return (
    <p>
      Hey, I’m <span className='text-light-accent dark:text-dark-accent font-medium'>Pavan Soratur</span>, a Fullstack
      Web Developer with a focus on frontend development and a strong background in Web3. Currently, I’m working as a
      Frontend Developer at{' '}
      <Link href='https://www.webb.tools/' target='_blank'>
        <span className='text-light-accent dark:text-dark-accent underline'>Webb</span>
      </Link>
      , where I&apos;m building amazing decentralized apps on the{' '}
      <Link href='https://www.tangle.tools/' target='_blank'>
        <span className='text-light-accent dark:text-dark-accent underline'>Tangle Network</span>
      </Link>
      .
    </p>
  );
};
