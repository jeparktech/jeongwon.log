import GitHubGraph from '@/components/home-page/GitHubGraph'

export default function HomeInfo() {
  return (
    <>
      <div className="mt-8 dark:divide-gray-700 md:mt-8">
        <div className="flex flex-col justify-between md:my-4 md:pb-8 xl:flex-row">
          <GitHubGraph />
        </div>
      </div>
    </>
  )
}
