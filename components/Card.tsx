import Image from 'next/image'
import Link from 'next/link'

const Card = ({ title, description, imgSrc, href, slug }) => (
  <div className="w-full p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-xl border-0 bg-neutral-100 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-neutral-900 dark:shadow-gray-700/25`}
    >
      {imgSrc &&
        (slug ? (
          <Link href={`/projects/${slug}`} aria-label={`Link to ${title}`}>
            <div className="relative h-60 w-full overflow-hidden flex items-center justify-center p-4">
              <div className="relative w-full h-full max-h-52">
                <Image
                  alt={title}
                  src={imgSrc}
                  className="object-contain"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 544px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          </Link>
        ) : (
          <div className="relative h-60 w-full overflow-hidden flex items-center justify-center p-4">
            <div className="relative w-full h-full max-h-52">
              <Image
                alt={title}
                src={imgSrc}
                className="object-contain"
                fill={true}
                sizes="(max-width: 768px) 100vw, 544px"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
          </div>
        ))}
      <div className="p-6">
        {/* <div className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
          Project
        </div> */}
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          {slug ? (
            <Link href={`/projects/${slug}`} aria-label={`Link to ${title}`} className="transition-colors duration-200 hover:text-primary-500">
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-5 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {slug && (
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
            aria-label={`Link to ${title}`}
          >
            View Details
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        )}
        {href && !slug && (
          <a
            href={href}
            className="inline-flex items-center rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
            aria-label={`Link to ${title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  </div>
)

export default Card
