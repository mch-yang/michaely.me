export default function Track(track) {
  return (
      <a
        className="flex flex-row items-baseline border-b rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 border-gray-200 dark:border-gray-800 max-w-3xl w-full pt-4 mt-4"
        href={track.songUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
              {track.ranking.toString().padStart(2, '0')}
        </p>

        <div className="flex flex-col pl-3">
          <p
          className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
          color="gray.500"
          >
            {track.title}
          </p>
          <p
          className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
          color="gray.500"
          >
            {track.artist}
          </p>
        </div>

      </a>
  );
}