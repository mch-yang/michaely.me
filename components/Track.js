import Image from 'next/image'

export default function Track(track) {
  return (
      <a
        className="flex flex-row items-center border-b rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 border-gray-200 dark:border-gray-800 w-full pt-2 mt-2"
        href={track.songUrl}
        target="_blank"
        rel="noopener noreferrer"
      >

        <p className="text-sm font-bold w-4 mx-2 pb-2 text-right text-gray-400 dark:text-gray-600">
              {track.ranking}
        </p>

        <div className="mx-2">
          <Image
                alt={track.title}
                height={64}
                width={64}
                src={track.imageUrl}
          />
        </div>

        <div className="flex flex-col pl-2 pb-2">
          <p
          className="font-medium text-gray-900 dark:text-gray-100 truncate sm:w-96 md:w-full"
          color="gray.500"
          >
            {track.title}
          </p>
          <p
          className="text-gray-500 truncate sm:w-96 md:w-full"
          color="gray.500"
          >
            {track.artist}
          </p>
        </div>

      </a>
  );
}