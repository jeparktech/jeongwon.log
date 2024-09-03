import siteMetadata from '@/data/siteMetadata'

const Heading = () => {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      I'm <span>{siteMetadata.author}</span> - ML / Backend Engineer in Brooklyn, NY.
    </h1>
  )
}

export default Heading
