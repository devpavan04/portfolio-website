import type { MDXComponents } from 'mdx/types';
import NextLink from 'next/link';
import Balancer from 'react-wrap-balancer';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className='text-light-accent dark:text-dark-accent text-4xl text-center mt-2 mb-6 font-medium'>
        <Balancer>{children}</Balancer>
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-light-accent dark:text-dark-accent font-medium text-3xl my-6'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-light-accent dark:text-dark-accent font-medium text-2xl my-6'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-light-accent dark:text-dark-accent font-medium text-xl my-6'>{children}</h4>
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
    figure: ({ children }) => <figure className='my-6'>{children}</figure>,
  };
}
