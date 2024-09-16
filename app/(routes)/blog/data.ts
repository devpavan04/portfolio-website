import { readdir } from 'fs/promises';
import { notFound } from 'next/navigation';
import path from 'path';

interface Post {
  title: string;
  description: string;
  publishDate: string;
  slug: string;
  content: string;
}

export async function getPosts(): Promise<Post[]> {
  const posts = await readdir(path.join(process.cwd(), 'content'));
  const postsWithMetadata = await Promise.all(
    posts.map(async (post) => {
      const imported = await import(`@/content/${post}`);
      const metadata = imported.metadata;
      const content = imported.default;
      return { ...metadata, content } as Post;
    })
  );
  postsWithMetadata.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return postsWithMetadata;
}

export async function getPost(slug: string): Promise<Post> {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }
  return post;
}
