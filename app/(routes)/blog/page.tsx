import { getPosts } from '@/app/(routes)/blog/data';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { hubotSans } from '@/lib/fonts';

export default async function Blog() {
  const posts = await getPosts();

  if (posts.length === 0) return <div className='text-center'>No posts found :(</div>;

  return (
    <>
      {posts.map(({ title, description, publishDate, slug }) => (
        <div key={slug} className='flex flex-col gap-4'>
          <Link href={`/blog/${slug}`}>
            <div className='flex flex-col gap-1'>
              <p className='text-[14px]'>{publishDate}</p>
              <h2
                className={`${hubotSans.className} + text-light-accent dark:text-dark-accent text-[24px] font-medium hover:underline`}
              >
                {title}
              </h2>
              <p className='text-[16px]'>{description}</p>
            </div>
          </Link>

          <Separator />
        </div>
      ))}
    </>
  );
}
