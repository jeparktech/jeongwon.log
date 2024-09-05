import Education from './Education'
import Experience from './Experience'

export default function AboutInfo() {
  return (
    <>
      <div className="m-4 dark:divide-neutral-700 md:mt-8">
        <div className="mb-8">
          <Experience />
        </div>
        <div>
          <Education />
        </div>
      </div>
    </>
  )
}
