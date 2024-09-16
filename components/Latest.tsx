import { getPosts } from '@/app/(routes)/blog/data';
import { projects } from '@/app/(routes)/projects/data';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export const Latest = async () => {
  const posts = await getPosts();

  return (
    <div className='flex flex-col gap-4'>
      <Separator />

      {posts.length > 0 && (
        <>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='text-light-accent dark:text-dark-accent text-[24px] font-medium'>Blog</h2>

            <ol className='flex flex-col gap-2'>
              {posts.map(({ title, slug }) => (
                <Link href={`/blog/${slug}`} key={slug}>
                  <li className='flex flex-col gap-1 hover:underline'>
                    <p>{title}</p>
                  </li>
                </Link>
              ))}
            </ol>
          </div>

          <Separator />
        </>
      )}

      {projects.length > 0 && (
        <>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='text-light-accent dark:text-dark-accent text-[24px] font-medium'>Projects</h2>

            <ol className='flex flex-col gap-2'>
              {projects.map(({ title, href }) => (
                <Link key={title} href={href} target='_blank' rel='noopener noreferrer'>
                  <li className='flex flex-col gap-1 hover:underline'>
                    <p>{title}</p>
                  </li>
                </Link>
              ))}
            </ol>
          </div>
        </>
      )}
    </div>
  );
};
