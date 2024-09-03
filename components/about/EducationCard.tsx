import Image from 'next/image'

const EducationCard = ({ logo, schoolName, degree, gpa, description, startDate, endDate }) => {
  return (
    <div className="mb-4 w-full max-w-full overflow-hidden rounded bg-gray-200 p-1 pb-4 shadow-lg dark:bg-gray-700">
      <div className="flex w-full items-center">
        {logo && <Image src={logo} alt={`${schoolName} logo`} className="ml-4 mr-4 h-24 w-24" />}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{schoolName}</h3>
          <div className="flex justify-between text-gray-900 dark:text-gray-100">
            <span className=" text-gray-600 dark:text-gray-400">
              <p className="m-1 text-gray-700 dark:text-gray-300">{degree}</p>
            </span>
            <span className="mr-4">
              {startDate} - {endDate}
            </span>
          </div>
          <div className="m-1">
            <strong>GPA:</strong> {gpa}
          </div>
        </div>
      </div>
      {description && (
        <div className="ml-8 mr-4">
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      )}
    </div>
  )
}

export default EducationCard
