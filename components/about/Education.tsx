import EducationCard from './EducationCard'
import educationData from '@/data/education/EducationData'

const Education = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Education
        </h1>
        <div className="gap mt-8">
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
            ></EducationCard>
          ))}
        </div>
      </div>
    </>
  )
}

export default Education
