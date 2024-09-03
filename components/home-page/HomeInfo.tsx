import GitHubGraph from '@/components/home-page/GitHubGraph'
import Greeting from './Greeting'
import TypedBios from './TypedBios'
import Heading from './Heading'
import ShortDescription from './ShortDiscription'
import Avatar from './Avatar'
import MoreInfo from './MoreInfo'

export default function HomeInfo() {
  return (
    <>
      <div className="mt-8 dark:divide-gray-700 md:mt-8">
        <Greeting />
        <div className="flex flex-col justify-between md:my-4 md:pb-8 xl:flex-row">
          <div className="my-auto flex flex-col text-lg leading-8 text-gray-600 dark:text-gray-400">
            <Heading />
            <TypedBios />
            <ShortDescription />
            <MoreInfo />
          </div>
          <div className="my-auto flex flex-col text-lg leading-8 text-gray-600 dark:text-gray-400">
            <div className="mb-4 xl:h-[364px] xl:w-[364px]">
              <Avatar />
            </div>
            {/* <GitHubGraph /> */}
          </div>
        </div>
      </div>
    </>
  )
}
