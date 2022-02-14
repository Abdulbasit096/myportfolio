import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function ExperinceCard({ title, icon, link }) {
  return (
    <div className="group mt-8 flex h-52 w-48 transform cursor-pointer flex-col items-start justify-center bg-gray-700  p-4 duration-500 hover:bg-purple-500 ">
      {icon}
      <h2 className="mt-1 font-black text-gray-900 group-hover:text-white  ">
        {title}
      </h2>
      <div className="mt-5 flex items-center  justify-center">
        <Link href={link}>
          <p className="text-sm  text-gray-500 group-hover:text-white">
            Discover More
          </p>
        </Link>
        <ArrowNarrowRightIcon className="ml-1  h-5 text-gray-500 group-hover:text-white" />
      </div>
    </div>
  )
}

export default ExperinceCard
