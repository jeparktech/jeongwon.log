import experienceData from '@/data/experience/ExperienceData'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <section>
      <div className="flex items-baseline justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
        <h2 className="text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          Experience
        </h2>
        <span className="font-mono text-[11px] tabular-nums text-zinc-400 dark:text-zinc-600">
          {String(experienceData.length).padStart(2, '0')}
        </span>
      </div>
      <div className="mt-2 divide-y divide-zinc-100 dark:divide-zinc-900">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            companyName={experience.companyName}
            website={experience.website}
            workFrom={experience.workFrom}
            workUntil={experience.workUntil}
            location={experience.location}
            role={experience.role}
            team={experience.team}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
