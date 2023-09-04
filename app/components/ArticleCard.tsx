
interface IProps {

}

const ArticleCard = ({
  portfolio = false,
  coverImage = '',
}) => {

  return (
    <div className="mb-14 flex flex-col sm:flex-row w-full">
      <Link
        href={""}
      >
        <a
          className={`w-full text-gray-500 dark:text-gray-300 ${coverImage ? 'sm:w-1/2 lg:w-1/2 xl:w-3/5' : 'sm:w-4/5'
            }`}
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
          <p className="text-base mt-2">description</p>
          <p className="text-base mt-2 underline hover:text-gray-800 dark:hover:text-gray-100 transition-colors">
            Read more
          </p>
        </a>
      </Link>
      {coverImage && (
        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-2/5 mt-4 sm:mt-0 sm:ml-4 flex items-center justify-center">
          <img src={coverImage} className="w-full rounded-sm" alt="" />
        </div>
      )}
    </div>
  )
}

export default ArticleCard
