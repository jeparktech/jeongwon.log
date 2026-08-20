const LABELS = {
  ko: { full: 'Korean', short: 'KO' },
  en: { full: 'English', short: 'EN' },
}

export default function LanguageBadge({
  lang,
  compact = false,
}: {
  lang?: string
  compact?: boolean
}) {
  const label = LABELS[lang as keyof typeof LABELS]
  if (!label) return null

  return (
    <span
      title={`Written in ${label.full}`}
      className="inline-flex shrink-0 items-center rounded border border-zinc-200 px-1.5 py-px font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:border-zinc-800 dark:text-zinc-500"
    >
      {compact ? label.short : label.full}
    </span>
  )
}
