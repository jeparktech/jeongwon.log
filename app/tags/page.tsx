import Link from '@/components/Link'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tags = tagData as Record<string, { name: string; count: number }>
  const sortedSlugs = Object.keys(tags).sort((a, b) => tags[b].count - tags[a].count)
  const max = sortedSlugs.length ? tags[sortedSlugs[0]].count : 1

  return (
    <div className="py-12">
      <div className="rise">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Tags
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {sortedSlugs.length} topics I have written about.
        </p>
      </div>

      <div
        className="rise mt-8 flex flex-wrap gap-2 border-t border-zinc-200 pt-8 dark:border-zinc-800"
        style={{ animationDelay: '80ms' }}
      >
        {sortedSlugs.length === 0 && <p className="text-sm text-zinc-500">No tags found.</p>}
        {sortedSlugs.map((tagSlug) => {
          const { name, count } = tags[tagSlug]
          return (
            <Link
              key={tagSlug}
              href={`/tags/${tagSlug}`}
              aria-label={`View posts tagged ${name}`}
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3.5 py-1.5 text-sm text-zinc-600 transition-all hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
              style={{ opacity: 0.65 + (count / max) * 0.35 }}
            >
              {name}
              <span className="font-mono text-[11px] tabular-nums text-zinc-400 dark:text-zinc-600">
                {count}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
