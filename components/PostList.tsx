'use client'

import { PointerEvent, useRef } from 'react'
import Link from 'next/link'
import LanguageBadge from '@/components/LanguageBadge'

export type PostListItem = {
  href: string
  date: string
  title: string
  summary?: string
  tags?: string[]
  lang?: string
}

function formatShortDate(date: string) {
  const [year, month, day] = date.slice(0, 10).split('-')
  return `${year}.${month}.${day}`
}

function PostRow({
  post,
  index,
  showSummary,
}: {
  post: PostListItem
  index: number
  showSummary: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const onPointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  return (
    <li className="rise" style={{ animationDelay: `${100 + index * 50}ms` }}>
      <Link
        ref={ref}
        href={post.href}
        onPointerMove={onPointerMove}
        className="spotlight group relative -mx-3 flex gap-4 overflow-hidden rounded-lg px-3 py-3.5"
      >
        <span className="relative hidden w-6 shrink-0 pt-0.5 font-mono text-[11px] tabular-nums text-zinc-300 transition-colors group-hover:text-zinc-500 dark:text-zinc-700 dark:group-hover:text-zinc-400 sm:block">
          {String(index + 1).padStart(2, '0')}
        </span>
        <time
          dateTime={post.date}
          className="relative hidden w-[6.5rem] shrink-0 pt-0.5 font-mono text-[13px] tabular-nums text-zinc-400 dark:text-zinc-500 sm:block"
        >
          {formatShortDate(post.date)}
        </time>
        <div className="relative min-w-0 flex-1 transition-transform duration-300 group-hover:translate-x-1">
          <h3 className="flex items-baseline gap-2 text-[15px] font-medium leading-6 text-zinc-800 dark:text-zinc-200">
            <span className="min-w-0">{post.title}</span>
            <LanguageBadge lang={post.lang} compact />
          </h3>
          <time
            dateTime={post.date}
            className="mt-1 block font-mono text-[11px] tabular-nums text-zinc-400 dark:text-zinc-500 sm:hidden"
          >
            {formatShortDate(post.date)}
          </time>
          {showSummary && post.summary && (
            <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              {post.summary}
            </p>
          )}
          {showSummary && post.tags && post.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {post.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <span
          aria-hidden
          className="relative shrink-0 translate-x-2 pt-0.5 text-sm text-zinc-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-zinc-500"
        >
          →
        </span>
      </Link>
    </li>
  )
}

export default function PostList({
  posts,
  showSummary = false,
  emptyMessage = 'No posts yet.',
}: {
  posts: PostListItem[]
  showSummary?: boolean
  emptyMessage?: string
}) {
  if (!posts.length) {
    return <p className="py-8 text-sm text-zinc-500">{emptyMessage}</p>
  }

  return (
    <ul className="mt-2 divide-y divide-zinc-100 dark:divide-zinc-900">
      {posts.map((post, index) => (
        <PostRow key={post.href} post={post} index={index} showSummary={showSummary} />
      ))}
    </ul>
  )
}
