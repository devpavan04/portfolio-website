import { getPosts } from '@/app/(routes)/blog/data';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { fjallaOne } from '@/app/fonts';

export default async function Blog() {
  const posts = await getPosts();

  return (
    <ol className='flex flex-col gap-4'>
      {posts.map(({ title, description, publishDate, slug }) => (
        <>
          <Link href={`/blog/${slug}`}>
            <li key={slug} className='flex flex-col gap-1'>
              <p className='text-[14px] flex items-center gap-2'>{publishDate}</p>
              <h2 className={`${fjallaOne.className} text-light-accent dark:text-dark-accent text-[24px]`}>{title}</h2>
              <p className='text-[16px]'>{description}</p>
            </li>
          </Link>

          <Separator />
        </>
      ))}
    </ol>
  );
}
