import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start py-28">
      <p className="font-mono text-sm text-zinc-400 dark:text-zinc-500">404</p>
      <h1 className="rise mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        This page does not exist.
      </h1>
      <p
        className="rise mt-4 max-w-md text-[15px] leading-7 text-zinc-600 dark:text-zinc-400"
        style={{ animationDelay: '80ms' }}
      >
        The link may be broken, or the page may have been moved. Try the writing archive instead.
      </p>
      <div className="rise mt-8 flex items-center gap-3" style={{ animationDelay: '160ms' }}>
        <Link
          href="/"
          className="group inline-flex items-center gap-1 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
        >
          Home
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
        <Link
          href="/blog"
          className="text-sm text-zinc-500 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          All posts
        </Link>
      </div>
    </div>
  )
}
