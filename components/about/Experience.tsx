import experienceData from '@/data/experience/ExperienceData'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Experience
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              companyName={experience.companyName}
              website={experience.website}
              workFrom={experience.workFrom}
              workUntil={experience.workUntil}
              location={experience.location}
              role={experience.role}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Experience
