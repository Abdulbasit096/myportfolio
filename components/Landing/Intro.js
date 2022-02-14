import Link from 'next/link'

function Intro() {
  return (
    <div className="relative mt-2 flex flex-col sm:mt-32 sm:flex-row sm:justify-evenly ">
      <div className="m-20 flex flex-col ">
        <h1 className="text-center text-4xl font-bold text-gray-400 sm:text-left">
          Abdul Basit
        </h1>
        <p className="mt-2 text-center text-xl font-bold text-gray-400 sm:text-left">
          Hey, I am a Full stack Web developer.
        </p>
        <Link href="/contact">
          <p className="mt-4 w-full rounded-md bg-purple-500 p-2 text-center font-bold text-white transition duration-300 hover:bg-purple-900  sm:w-40 ">
            Contact me
          </p>
        </Link>
      </div>
      <img
        className="-mt-12  w-full object-cover sm:h-80 sm:w-96"
        src="/me.svg"
      />
    </div>
  )
}

export default Intro
