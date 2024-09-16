import type { MDXComponents } from 'mdx/types';
import NextLink from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ id, children }) => (
      <h1
        className='text-light-accent dark:text-dark-accent text-[28px] md:text-[34px] text-center mt-2 mb-6 font-medium'
        id={id}
      >
        {children}
      </h1>
    ),
    h2: ({ id, children }) => (
      <h2
        className='group text-light-accent dark:text-dark-accent font-medium text-[24px] md:text-[30px] my-6 relative pl-[1em] -ml-[1em] no-underline'
        id={id}
      >
        <span className='absolute -ml-[1em] text-light-accent dark:text-dark-accent opacity-0 group-hover:opacity-100 transition-opacity'>
          #
        </span>
        {children}
      </h2>
    ),
    h3: ({ id, children }) => (
      <h3 className='text-light-accent dark:text-dark-accent font-medium text-[20px] md:text-[26px] my-6' id={id}>
        <span className='absolute -ml-[1em] text-light-accent dark:text-dark-accent opacity-0 group-hover:opacity-100 transition-opacity'>
          #
        </span>
        {children}
      </h3>
    ),
    h4: ({ id, children }) => (
      <h4 className='text-light-accent dark:text-dark-accent font-medium text-[16px] md:text-[20px] my-6' id={id}>
        <span className='absolute -ml-[1em] text-light-accent dark:text-dark-accent opacity-0 group-hover:opacity-100 transition-opacity'>
          #
        </span>
        {children}
      </h4>
    ),
    ul: ({ children }) => <ul className='!list-disc list-inside my-6'>{children}</ul>,
    ol: ({ children }) => <ol className='list-decimal list-inside my-6'>{children}</ol>,
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-light-accent dark:border-dark-accent pl-3 italic'>{children}</blockquote>
    ),
    a: ({ href = '', ...props }) => {
      if (href.startsWith('http')) {
        return (
          <a
            className='underline text-light-accent dark:text-dark-accent'
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
    figure: ({ children }) => <figure className='my-6'>{children}</figure>,
  };
}
