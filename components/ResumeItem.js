export default function ResumeItem({company, text, year}) {
  return (
      <div className="max-w-6xl mx-auto mb-8 items-center py-6">
        <div className="flex flex-col justify-between items-center md:flex-row">
          <h4 className="flex mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
            {company}
          </h4>
          <p className="w-32 mb-4 text-gray-500 md:text-right text-center md:mb-0">
            {year}
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400 md:text-left text-center">
          {text}
        </p>
      </div>
  )
}