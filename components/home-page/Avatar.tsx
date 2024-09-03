import Image from 'next/image'
import avatar from 'public/static/images/avatar.jpg'

export default function Avatar() {
  return (
    <div className="relative mb-3 h-[364px] w-[364px]">
      <Image src={avatar} alt="Avatar" fill className="object-cover" />
    </div>
  )
}
