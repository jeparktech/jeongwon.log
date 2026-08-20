'use client'

import React, { PointerEvent, useRef } from 'react'

interface ExperienceCardProps {
  companyName: string
  website: string
  workFrom: string
  workUntil?: string
  location: string
  role: string
  team?: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyName,
  website,
  workFrom,
  workUntil,
  location,
  role,
  team,
}) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const isCurrent = !workUntil

  const onPointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  return (
    <a
      ref={ref}
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={onPointerMove}
      className="spotlight group relative -mx-3 block overflow-hidden rounded-lg px-3 py-5 no-underline"
    >
      <div className="relative flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h3 className="flex items-center gap-2 text-base font-medium text-zinc-900 dark:text-zinc-50">
            {role}
            {isCurrent && (
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                Now
              </span>
            )}
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {companyName}
            {team && <span className="text-zinc-400 dark:text-zinc-500"> · {team}</span>}
            <span className="text-zinc-400 dark:text-zinc-500"> · {location}</span>
          </p>
        </div>
        <p className="shrink-0 font-mono text-[13px] tabular-nums text-zinc-400 dark:text-zinc-500">
          {workFrom} – {workUntil || 'Present'}
        </p>
      </div>
    </a>
  )
}

export default ExperienceCard
