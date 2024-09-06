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
    <div className="mb-4 w-full max-w-full overflow-hidden rounded-lg border-2 border-neutral-300 bg-neutral-300 p-2 shadow-md dark:border-neutral-700 dark:bg-neutral-700">
      <div className="flex items-center">
        {logo && (
          <div className="ml-2 flex-shrink-0">
            <Image
              src={logo}
              alt={`${schoolName} logo`}
              width={60}
              height={60}
              className="h-16 w-16 object-contain"
            />
          </div>
        )}
        <div className="ml-4 flex-1">
          <h3 className="mt-0 text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
            {schoolName}
          </h3>
          <div className="flex items-center justify-between text-gray-900 dark:text-gray-100">
            <p className="m-0 text-sm leading-tight text-gray-700 dark:text-gray-300">{degree}</p>
            <p className="m-0 text-sm leading-tight text-gray-500 dark:text-gray-400">
              {startDate} - {endDate}
            </p>
          </div>
          <div className="m-0 leading-tight">
            <p className="m-0 text-sm text-gray-500 dark:text-gray-400">GPA: {gpa}</p>
          </div>
        </div>
      </div>
      {description && (
        <div className="ml-8 mr-4 mt-2">
          <p className="text-sm leading-tight text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      )}
    </div>
  )
}

export default EducationCard
