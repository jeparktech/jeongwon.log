import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface ExperienceCardProps {
  companyName: string
  website: string
  workFrom: string
  workUntil?: string
  location: string
  role: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyName,
  website,
  workFrom,
  workUntil,
  location,
  role,
}) => {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline hover:no-underline"
    >
      <div className="flex h-full flex-col space-y-2 rounded-lg border-2 border-neutral-300 bg-neutral-300 p-4 shadow-md transition duration-300 hover:border-emerald-500 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-700 dark:hover:border-emerald-500 dark:hover:shadow-lg">
        <div className="text-center">
          <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            {companyName}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {workFrom} - {workUntil || 'Present'}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
        </div>
      </div>
    </a>
  )
}

export default ExperienceCard
