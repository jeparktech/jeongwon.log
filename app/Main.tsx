import Link from '@/components/Link'
import HomeInfo from '@/components/home-page/HomeInfo'
import DotField from '@/components/home-page/DotField'
import PostList from '@/components/PostList'

const MAX_DISPLAY = 8

export default function Home({ posts }) {
  const latest = posts.slice(0, MAX_DISPLAY)

  return (
    <div className="relative">
      <DotField className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px] w-full [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="gap-12 py-10 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:py-16">
        <HomeInfo />

        <section className="mt-14 lg:mt-0">
          <div className="rise flex items-baseline justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
            <h2 className="text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
              Writing
              <span className="ml-2 font-mono text-[11px] tabular-nums text-zinc-400 dark:text-zinc-600">
                {String(posts.length).padStart(2, '0')}
              </span>
            </h2>
            {posts.length > 0 && (
              <Link
                href="/blog"
                className="group text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                aria-label="All posts"
              >
                All posts
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            )}
          </div>

          <PostList
            posts={latest.map((post) => ({
              href: `/blog/${post.slug}`,
              date: post.date,
              title: post.title,
              lang: post.lang,
            }))}
          />
        </section>
      </div>
    </div>
  )
}
