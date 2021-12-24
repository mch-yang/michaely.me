import Link from 'next/link'

import Container from '../components/Container';
import NowPlaying from '../components/NowPlaying';
import TopTracks from '../components/TopTracks';
import Playlist from '../components/Playlist';

export default function Music() {
  return (
    <Container>
      <div className="flex flex-col grow justify-center items-start max-w-2xl mx-auto pb-16">
        <h1 className="font-bold text-3xl sm:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Music
        </h1>

        <h2 className="font-bold text-xl sm:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Now Playing
        </h2>
        <NowPlaying/>
        
        {/*
        <h2 className="font-bold text-xl sm:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Top Songs
        </h2>
        <div className="mb-[-1.4rem]">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            These are my most played songs on Spotify at the moment. {' '}
            <Link href="/contact">
              <a className="text-gray-900 dark:text-gray-100 underline">
                Get in touch
              </a>
            </Link>
            {' '}
            if you have any recommendations!
          </p>
        </div>
        <TopTracks/>
       */}
       
        <h2 className="font-bold text-xl sm:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Current Favourites
        </h2>
        <div className="mb-[-1.4rem]">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            These are some of my favourite songs at the moment. {' '}
            <Link href="/contact">
              <a className="text-gray-900 dark:text-gray-100 underline">
                Get in touch
              </a>
            </Link>
            {' '}
            if you have any recommendations!
          </p>
        </div>
        <Playlist/>
      </div>
    </Container>
  )
}