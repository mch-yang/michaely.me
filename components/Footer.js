const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <div className="bg-white absolute bottom-0 dark:bg-gray-800">
      <div className="max-w-6xl pb-8">
        <div className="flex w-screen space-y-2 md:space-y-0 md:flex-row justify-between md:items-center mt-4">
          <div>
            <p className="text-xs">
              &copy; {YEAR} Michael Yang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}