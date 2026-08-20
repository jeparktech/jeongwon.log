import Education from './Education'
import Experience from './Experience'

export default function AboutInfo() {
  return (
    <div className="mt-12 space-y-14">
      <Experience />
      <Education />
    </div>
  )
}
