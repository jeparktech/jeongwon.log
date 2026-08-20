import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-5 sm:px-6 lg:max-w-4xl">
      {children}
    </div>
  )
}
