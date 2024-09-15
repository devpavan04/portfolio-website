import { getPosts } from '@/app/blog/posts';
import Link from 'next/link';

export default async function Posts() {
  const posts = await getPosts();

  return (
    <ol>
      {posts.map(({ slug, title, publishDate }) => (
        <li key={slug}>
          <h2>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong> {new Date(publishDate).toLocaleDateString()} <strong>Categories:</strong>{' '}
          </p>
        </li>
      ))}
    </ol>
  );
}
