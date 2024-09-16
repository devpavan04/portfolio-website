import { getPost } from '@/app/(routes)/blog/data';

export default async function Post({ params }: { params: { slug: string[] } }) {
  const { publishDate, content: Content } = await getPost(params.slug[0]);

  return (
    <div className='pb-20'>
      <p className='text-center'>{publishDate}</p>
      <Content />
    </div>
  );
}
