import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  theme: 'dracula',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    if (!node.properties.className) {
      node.properties.className = [];
    }
    node.properties.className.push('line-highlighted');
  },
  onVisitTitle(node) {
    node.properties.className = ['code-title'];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions], [rehypeSlug]],
  },
});

export default withMDX(nextConfig);
