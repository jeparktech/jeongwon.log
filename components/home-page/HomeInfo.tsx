import Link from 'next/link'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import Avatar from './Avatar'

export default function HomeInfo() {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rise flex items-center gap-4 lg:flex-col lg:items-start">
        <Avatar />
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {siteMetadata.author}
          </h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            ML Engineer at Coupang
          </p>
        </div>
      </div>

      <p
        className="rise mt-6 max-w-sm text-[15px] leading-7 text-zinc-600 dark:text-zinc-400"
        style={{ animationDelay: '90ms' }}
      >
        I am a Machine Learning Engineer on Coupang's Search &amp; Discovery team. Previously I was
        a backend engineer at Whitecube and an ML/backend engineer at EarthMera. This is where I
        write about engineering and what I am learning.
      </p>

      <div className="rise mt-6 flex items-center gap-4" style={{ animationDelay: '160ms' }}>
        <Link
          href="/about"
          className="group inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
        >
          About
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
        <div className="flex items-center gap-3">
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
        </div>
      </div>
    </aside>
  )
}
