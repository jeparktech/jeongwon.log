import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 py-6 dark:border-zinc-800">
      <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
        <span>
          {siteMetadata.author} · {new Date().getFullYear()}
        </span>
        <div className="flex space-x-3">
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
        </div>
      </div>
    </footer>
  )
}
