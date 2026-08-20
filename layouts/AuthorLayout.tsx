import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, linkedin, github } = content

  return (
    <div className="py-12">
      <div className="rise flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        {avatar && (
          <div className="group relative h-24 w-24 shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-zinc-300 via-transparent to-zinc-400 opacity-0 blur-[8px] transition-opacity duration-500 group-hover:opacity-100 dark:from-zinc-600 dark:to-zinc-500" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
              <Image src={avatar} alt="avatar" fill className="object-cover" />
            </div>
          </div>
        )}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {name}
          </h1>
          <p className="mt-1.5 text-zinc-600 dark:text-zinc-400">
            {occupation} at {company}
          </p>
          <div className="mt-4 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
            <SocialIcon kind="github" href={github} size={5} />
            <SocialIcon kind="linkedin" href={linkedin} size={5} />
          </div>
        </div>
      </div>

      <div className="rise" style={{ animationDelay: '90ms' }}>
        {children}
      </div>
    </div>
  )
}
