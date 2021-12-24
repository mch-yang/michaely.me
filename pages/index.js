import Container from '../components/Container'
import Image from 'next/image'

export default function Home() {
  return(
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl sm:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Michael Yang
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Data Scientist at{' '}
              <span className="font-semibold">Amazon</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Welcome to my personal website! I will be using this site to share about things I'm interested in such as music, film, photography, and data science. 
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Michael Yang"
              height={176}
              width={176}
              src="/images/profile.jpg"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}