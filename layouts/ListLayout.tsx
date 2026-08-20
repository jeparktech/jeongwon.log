'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import PostList from '@/components/PostList'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  description?: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
  showTagFilter?: boolean
}

/** Tags with a single post are noise in the filter row, so they stay behind a toggle. */
const PRIMARY_TAG_MIN_COUNT = 2

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <nav className="mt-10 flex items-center justify-between border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
      {prevPage ? (
        <Link
          href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
          rel="prev"
          className="text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
        >
          ← Previous
        </Link>
      ) : (
        <span className="text-zinc-300 dark:text-zinc-700">← Previous</span>
      )}
      <span className="font-mono text-[13px] tabular-nums text-zinc-400 dark:text-zinc-500">
        {currentPage} / {totalPages}
      </span>
      {nextPage ? (
        <Link
          href={`/${basePath}/page/${currentPage + 1}`}
          rel="next"
          className="text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
        >
          Next →
        </Link>
      ) : (
        <span className="text-zinc-300 dark:text-zinc-700">Next →</span>
      )}
    </nav>
  )
}

function TagChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count?: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? 'inline-flex items-center gap-1.5 rounded-full border border-zinc-900 bg-zinc-900 px-3 py-1 text-[13px] text-white transition-colors dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
          : 'inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 text-[13px] text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100'
      }
    >
      {label}
      {count !== undefined && (
        <span
          className={
            active
              ? 'font-mono text-[11px] tabular-nums text-zinc-400 dark:text-zinc-500'
              : 'font-mono text-[11px] tabular-nums text-zinc-400 dark:text-zinc-600'
          }
        >
          {count}
        </span>
      )}
    </button>
  )
}

export default function ListLayout({
  posts,
  title,
  description,
  initialDisplayPosts = [],
  pagination,
  showTagFilter = false,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [showAllTags, setShowAllTags] = useState(false)

  // The filter lives in the URL so it can be shared and stepped through with the back button.
  useEffect(() => {
    if (!showTagFilter) return
    const sync = () => setActiveTag(new URLSearchParams(window.location.search).get('tag'))
    sync()
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [showTagFilter])

  const selectTag = (tagSlug: string | null) => {
    const url = new URL(window.location.href)
    if (tagSlug) url.searchParams.set('tag', tagSlug)
    else url.searchParams.delete('tag')
    window.history.pushState(null, '', url)
    setActiveTag(tagSlug)
  }

  const tags = useMemo(() => {
    const counts = new Map<string, { name: string; count: number }>()
    posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        const tagSlug = slug(tag)
        const existing = counts.get(tagSlug)
        if (existing) existing.count += 1
        else counts.set(tagSlug, { name: tag, count: 1 })
      })
    })
    return Array.from(counts, ([tagSlug, value]) => ({ slug: tagSlug, ...value })).sort(
      (a, b) => b.count - a.count || a.name.localeCompare(b.name)
    )
  }, [posts])

  const primaryTags = tags.filter((tag) => tag.count >= PRIMARY_TAG_MIN_COUNT)
  const tailTags = tags.filter((tag) => tag.count < PRIMARY_TAG_MIN_COUNT)
  const activeTagName = tags.find((tag) => tag.slug === activeTag)?.name

  const filteredBlogPosts = posts.filter((post) => {
    if (activeTag && !post.tags?.some((tag) => slug(tag) === activeTag)) return false
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const isFiltering = Boolean(searchValue || activeTag)
  const displayPosts =
    initialDisplayPosts.length > 0 && !isFiltering ? initialDisplayPosts : filteredBlogPosts

  const subtitle = () => {
    if (activeTag && searchValue) {
      return `${filteredBlogPosts.length} posts tagged ${activeTagName} matching "${searchValue}"`
    }
    if (activeTag) return `${filteredBlogPosts.length} posts tagged ${activeTagName}`
    if (searchValue) return `${filteredBlogPosts.length} posts matching "${searchValue}"`
    return description ?? `${posts.length} posts on engineering, research, and problem solving.`
  }

  return (
    <div className="py-12">
      <div className="rise">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{subtitle()}</p>
      </div>

      <div className="rise relative mt-6 max-w-md" style={{ animationDelay: '80ms' }}>
        <label>
          <span className="sr-only">Search articles</span>
          <input
            aria-label="Search articles"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search posts"
            className="block w-full rounded-full border-zinc-200 bg-zinc-50 py-2 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-0 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          />
        </label>
        <svg
          className="pointer-events-none absolute left-3.5 top-2.5 h-4 w-4 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      {showTagFilter && tags.length > 0 && (
        <div className="rise mt-5 flex flex-wrap gap-2" style={{ animationDelay: '120ms' }}>
          <TagChip label="All" active={!activeTag} onClick={() => selectTag(null)} />
          {primaryTags.map((tag) => (
            <TagChip
              key={tag.slug}
              label={tag.name}
              count={tag.count}
              active={activeTag === tag.slug}
              onClick={() => selectTag(activeTag === tag.slug ? null : tag.slug)}
            />
          ))}
          {(showAllTags || (activeTag && tailTags.some((tag) => tag.slug === activeTag))) &&
            tailTags.map((tag) => (
              <TagChip
                key={tag.slug}
                label={tag.name}
                count={tag.count}
                active={activeTag === tag.slug}
                onClick={() => selectTag(activeTag === tag.slug ? null : tag.slug)}
              />
            ))}
          {tailTags.length > 0 && !showAllTags && (
            <button
              type="button"
              onClick={() => setShowAllTags(true)}
              className="inline-flex items-center rounded-full px-2 py-1 text-[13px] text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-700 hover:underline dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              +{tailTags.length} more
            </button>
          )}
        </div>
      )}

      <div className="mt-8 border-t border-zinc-200 pt-2 dark:border-zinc-800">
        <PostList
          showSummary
          emptyMessage="No posts match that filter."
          posts={displayPosts.map((post) => ({
            href: `/${post.path}`,
            date: post.date,
            title: post.title,
            summary: post.summary,
            tags: post.tags,
            lang: post.lang,
          }))}
        />
      </div>

      {pagination && pagination.totalPages > 1 && !isFiltering && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
