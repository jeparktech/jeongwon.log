'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 -mx-5 border-b border-zinc-200/80 bg-white/80 px-5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 sm:-mx-6 sm:px-6">
      <div className="flex h-14 items-center justify-between">
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          className="text-[15px] font-medium tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {siteMetadata.headerTitle}
        </Link>
        <div className="flex items-center gap-1">
          <nav className="hidden items-center sm:flex">
            {headerNavLinks.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? 'text-zinc-900 dark:text-zinc-50'
                      : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
                  }`}
                >
                  {link.title}
                </Link>
              )
            })}
          </nav>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
