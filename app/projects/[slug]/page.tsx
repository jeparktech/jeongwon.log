import Image from 'next/image'
import Link from 'next/link'
import projectsData from '@/data/projectsData'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }
  return (
    <div className="divide-y divide-neutral-400 dark:divide-neutral-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {project.title}
        </h1>
      </div>
      <div className="items-start space-y-8 py-8">
        <div className="flex flex-col items-center">
          {project.imgSrc && (
            <div className="w-full max-w-md">
              <Image
                src={project.imgSrc}
                alt={project.title}
                width={400}
                height={400}
                className="mx-auto rounded-lg"
                style={{ objectFit: 'contain' }}
              />
            </div>
          )}
        </div>

        <div className="dark:prose-dark prose max-w-none">
          <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {project.detailedDescription || project.description}
          </p>
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <>
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              Screenshots
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.screenshots.map((screenshot, index) => (
                <Image
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  width={300}
                  height={600}
                  className="rounded-lg"
                />
              ))}
            </div>
          </>
        )}

        {project.appStoreLink && (
          <>
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              Download
            </h2>
            <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="/static/images/app-store-badge.svg"
                alt="Download on the App Store"
                width={200}
                height={60}
              />
            </a>
          </>
        )}

        {project.privacyPolicy && (
          <>
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              Privacy Policy
            </h2>
            <div className="text-gray-700 dark:text-gray-300">{project.privacyPolicy}</div>
          </>
        )}

        {project.contactEmail && (
          <>
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              Contact
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              For support or inquiries, please contact us at{' '}
              <a
                href={`mailto:${project.contactEmail}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {project.contactEmail}
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
