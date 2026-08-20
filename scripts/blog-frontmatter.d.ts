export type BlogFrontmatter = {
  title?: string
  date?: string
  tags: string[]
  summary?: string
  draft?: boolean
  path: string
  slug: string
}

export function readBlogFrontmatter(options?: {
  root?: string
  includeDrafts?: boolean
}): BlogFrontmatter[]
