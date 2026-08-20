import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/blog?tag=${slug(text)}`}
      className="rounded-full border border-zinc-200 px-2.5 py-1 text-[12px] text-zinc-500 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
    >
      {text}
    </Link>
  )
}

export default Tag
