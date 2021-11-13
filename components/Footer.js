const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] absolute bottom-0 w-full dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-4">

        <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700">
        </div>

        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-4">
          <div>
            <p>&copy; {YEAR} Michael Yang</p>
          </div>
        </div>

      </div>
    </div>
  );
}