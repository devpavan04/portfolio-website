import { readdir } from 'fs/promises';
import path from 'path';

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
}

export async function getPosts(): Promise<Post[]> {
  // Retrieve slugs from post routes
  const postsDir = path.join(process.cwd(), 'app', 'blog');

  const slugs = (await readdir(postsDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`../blog/${slug}/page.mdx`);
      return { slug, ...metadata } as Post;
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return posts;
}
