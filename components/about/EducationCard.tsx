import Image, { StaticImageData } from 'next/image'

interface EducationCardProps {
  logo?: StaticImageData
  schoolName: string
  degree: string
  gpa: string
  description?: string
  startDate: string
  endDate: string
}

const EducationCard: React.FC<EducationCardProps> = ({
  logo,
  schoolName,
  degree,
  gpa,
  description,
  startDate,
  endDate,
}) => {
  return (
    <div className="-mx-3 flex items-start gap-4 rounded-lg px-3 py-5">
      {logo && (
        <Image
          src={logo}
          alt={`${schoolName} logo`}
          width={36}
          height={36}
          className="mt-0.5 h-9 w-9 shrink-0 object-contain"
        />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-50">{degree}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {schoolName}
              <span className="text-zinc-400 dark:text-zinc-500"> · GPA {gpa}</span>
            </p>
          </div>
          <p className="shrink-0 font-mono text-[13px] tabular-nums text-zinc-400 dark:text-zinc-500">
            {startDate} – {endDate}
          </p>
        </div>
        {description && (
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{description}</p>
        )}
      </div>
    </div>
  )
}

export default EducationCard
