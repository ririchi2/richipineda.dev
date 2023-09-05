import Link from "next/link"
import { FaGithub } from "react-icons/fa"

interface IProps {
  title: string,
  description: string,
  portfolio?: boolean,
  coverImage?: string,
  icon?: boolean,
  url: string,
}

const ArticleCard = ({ title = '', description = '', portfolio = false, coverImage = '', icon = true }: IProps) => {

  return (
    <div className="mb-14 flex flex-row sm:flex-row w-full">
      {/* conditional in class for flex-col when coverImages are true */}
      <Link href={""} className={`w-full text-gray-500 dark:text-gray-300
        ${coverImage ? 'sm:w-1/2 lg:w-1/2 xl:w-3/5' : 'sm:w-4/5'}`}
      >
        <h3 className="text-2xl text-gray-600 dark:text-gray-100">title</h3>

        {!portfolio && (
          <p className="text-sm my-1">
            {/* <span>{moment(date).format('Do MMMM YYYY')}</span> */}<span>date</span>
            <span className="px-1">-</span>
            {/* <span>{tags.join(', ')}</span> */}
            <span>tags</span>
          </p>
        )}

        <p className="text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum omnis pariatur voluptate dolorem, est tenetur. Pariatur nesciunt, perspiciatis quibusdam, animi excepturi nemo repudiandae vel, neque optio laboriosam quisquam eaque!</p>
        <p className="text-base mt-2 underline hover:text-gray-800 dark:hover:text-gray-100 transition-colors">
          Read more
        </p>
      </Link>

      {coverImage && (
        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-2/5 mt-4 sm:mt-0 sm:ml-4 flex items-center justify-center">
          <img src={coverImage} className="w-full rounded-sm" alt="" />
        </div>
      )}

      <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-2/5 mt-4 sm:mt-0 sm:ml-4 flex justify-end">
        <div className="flex flex-row text-2xl text-gray-500 dark:text-gray-300">
          {/* map data here */}
          <a
            // key={href}
            // href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`hover:text-gray-800 dark:hover:text-white transition-colors mt-1`}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard

