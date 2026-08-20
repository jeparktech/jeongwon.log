import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import ReadingProgress from '@/components/ReadingProgress'
import LanguageBadge from '@/components/LanguageBadge'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { path, slug, date, title, tags, readingTime, lang } = content
  const basePath = path.split('/')[0]
  const author = authorDetails[0]

  return (
    <SectionContainer>
      <ReadingProgress />
      <ScrollTopAndComment />

      <article className="py-12">
        <header className="rise border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="flex items-center gap-2 font-mono text-[13px] text-zinc-400 dark:text-zinc-500">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
            {readingTime?.text && (
              <>
                <span aria-hidden>·</span>
                <span>{readingTime.text}</span>
              </>
            )}
            <LanguageBadge lang={lang} />
          </div>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {title}
          </h1>

          {tags && tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          )}

          {author && (
            <div className="mt-6 flex items-center gap-3">
              {author.avatar && (
                <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800">
                  <Image src={author.avatar} alt="avatar" fill className="object-cover" />
                </div>
              )}
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{author.name}</span>
            </div>
          )}
        </header>

        <div className="prose max-w-none py-10 dark:prose-invert">{children}</div>

        <footer className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
          {(prev || next) && (
            <nav className="grid gap-4 sm:grid-cols-2">
              {prev && prev.path ? (
                <Link
                  href={`/${prev.path}`}
                  className="group rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900/60"
                >
                  <span className="text-xs uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                    ← Previous
                  </span>
                  <p className="mt-1.5 text-[15px] font-medium leading-6 text-zinc-800 dark:text-zinc-200">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
              {next && next.path && (
                <Link
                  href={`/${next.path}`}
                  className="group rounded-xl border border-zinc-200 p-4 text-right transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900/60"
                >
                  <span className="text-xs uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                    Next →
                  </span>
                  <p className="mt-1.5 text-[15px] font-medium leading-6 text-zinc-800 dark:text-zinc-200">
                    {next.title}
                  </p>
                </Link>
              )}
            </nav>
          )}

          <div className="mt-8">
            <Link
              href={`/${basePath}`}
              className="text-sm text-zinc-500 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
              aria-label="Back to the blog"
            >
              ← Back to all posts
            </Link>
          </div>

          {siteMetadata.comments && (
            <div className="pt-10" id="comment">
              <Comments slug={slug} />
            </div>
          )}
        </footer>
      </article>
    </SectionContainer>
  )
}
