import Link from 'next/link'

const MoreInfo = () => {
  return (
    <div>
      <Link href="/about">
        <p className="font-semibold text-emerald-500 hover:text-emerald-600">More info about me</p>
      </Link>
    </div>
  )
}

export default MoreInfo
