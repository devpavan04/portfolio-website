import type { MDXComponents } from 'mdx/types';
import { fjallaOne } from '@/app/fonts';
import NextLink from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1
        className={`${fjallaOne.className} text-light-accent dark:text-dark-accent text-4xl font-bold my-6 leading-normal`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className={`${fjallaOne.className} text-light-accent dark:text-dark-accent text-3xl font-bold my-6`}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className={`${fjallaOne.className} text-light-accent dark:text-dark-accent text-2xl font-bold my-6`}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className={`${fjallaOne.className} text-light-accent dark:text-dark-accent text-xl font-bold my-6`}>
        {children}
      </h4>
    ),
    // ul: ({ children }) => <ul className='!list-disc list-inside'>{children}</ul>,
    // ol: ({ children }) => <ol className='list-decimal list-inside'>{children}</ol>,
    // li: ({ children }) => <li className='ml-2 bg-black'>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-light-accent dark:border-dark-accent pl-3 italic'>{children}</blockquote>
    ),
    a: ({ href = '', ...props }) => {
      if (href.startsWith('http')) {
        return (
          <a
            className='underline text-light-accent dark:text-dark-accent '
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            {...props}
          />
        );
      }

      return <NextLink href={href} className='underline text-light-accent dark:text-dark-accent' {...props} />;
    },
    p: ({ children }) => <p className='my-6'>{children}</p>,
  };
}
