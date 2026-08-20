import EducationCard from './EducationCard'
import educationData from '@/data/education/EducationData'

const Education = () => {
  return (
    <section>
      <div className="flex items-baseline justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
        <h2 className="text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          Education
        </h2>
        <span className="font-mono text-[11px] tabular-nums text-zinc-400 dark:text-zinc-600">
          {String(educationData.length).padStart(2, '0')}
        </span>
      </div>
      <div className="mt-2 divide-y divide-zinc-100 dark:divide-zinc-900">
        {educationData.map((education, index) => (
          <EducationCard
            key={index}
            schoolName={education.schoolName}
            degree={education.degree}
            gpa={education.gpa}
            startDate={education.startDate}
            endDate={education.endDate}
            logo={education.logo}
            description={education.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Education
