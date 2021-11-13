const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <div className="bg-white w-screen md:w-auto fixed bottom-0 pt-4 pb-4 dark:bg-gray-800">
            <p className="text-center text-xs">
              &copy; {YEAR} Michael Yang
            </p>
    </div>
  );
}