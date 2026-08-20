import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * Read blog frontmatter straight from disk, newest first.
 *
 * Contentlayer generates ESM that imports JSON with `assert { type: 'json' }`, a syntax Node 22
 * no longer accepts. Anything that only needs frontmatter (tag counts, search index, RSS) reads
 * the source files here instead, so all three stay in sync without going through that output.
 */
export function readBlogFrontmatter({ root = process.cwd(), includeDrafts = true } = {}) {
  const blogDir = path.join(root, 'data', 'blog')

  return readdirSync(blogDir, { recursive: true })
    .map((entry) => entry.split(path.sep).join('/'))
    .filter((entry) => entry.endsWith('.mdx'))
    .map((entry) => {
      const { data } = matter(readFileSync(path.join(blogDir, entry), 'utf8'))
      const flattenedPath = `blog/${entry.replace(/\.mdx$/, '')}`

      return {
        ...data,
        tags: data.tags ?? [],
        path: flattenedPath,
        slug: flattenedPath.replace(/^.+?(\/)/, ''),
      }
    })
    .filter((post) => includeDrafts || post.draft !== true)
    .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime())
}
