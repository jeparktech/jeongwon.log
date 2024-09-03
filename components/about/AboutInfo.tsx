import Education from './Education'
import Experience from './Experience'

export default function AboutInfo() {
  return (
    <>
      <div className="mt-8 dark:divide-gray-700 md:mt-8">
        <Experience />
        <Education />
      </div>
    </>
  )
}
