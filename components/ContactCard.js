export default function ContactCard() {
  return (
    <div className="flex flex-col sm:w-3/6 pt-2 mt-2">
      <div className="items-left sm:m-4 border rounded-lg border-gray-200 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 hover:shadow">
        <div className="flex flex-row m-4">
          <div className="flex flex-col m-2"> 
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              Name
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              Email
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              LinkedIn
            </p>
          </div>

          <div className="flex flex-col m-2"> 
            <p>
              Michael Yang
            </p>
            <a href="mailto:michael@michaely.me" className="hover:text-blue-500">
              michael@michaely.me
            </a>
            <a href="https://linkedin.com/in/mchyang" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
              /in/mchyang
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}