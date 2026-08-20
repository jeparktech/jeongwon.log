import Image from 'next/image'
import avatar from 'public/static/images/avatar.jpg'

export default function Avatar() {
  return (
    <div className="group relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-zinc-300 via-transparent to-zinc-400 opacity-0 blur-[6px] transition-opacity duration-500 group-hover:opacity-100 dark:from-zinc-600 dark:to-zinc-500" />
      <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-zinc-200 transition-transform duration-500 group-hover:scale-[1.04] dark:ring-zinc-800">
        <Image src={avatar} alt="Jeongwon Park" fill className="object-cover" priority />
      </div>
    </div>
  )
}
