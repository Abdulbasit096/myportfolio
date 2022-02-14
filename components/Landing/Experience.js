import {
  CodeIcon,
  DeviceMobileIcon,
  DatabaseIcon,
} from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ExperinceCard from './ExperinceCard'

function Experience() {
  const iconStyle = 'h-10 mt-6 text-gray-400 group-hover:text-white'
  const [width, setWidth] = useState();
  const [exp, setExp] = useState(<p></p>)
  const [desc, setDesc] = useState(<h2></h2>)
  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    if (parseFloat(width) > 640) {
      setExp(
        <p className="mt-3 text-lg font-bold text-gray-400">
          Years <br /> Experience <br /> Working
        </p>
      )
      setDesc(
        <h2 className="text-lg font-black text-gray-900">
          Web Developer, specialized in React and Next js <br />.
        </h2>
      )
    } else {
      setExp(
        <p className="mt-3 text-lg font-bold text-gray-400">
          Years experience working
        </p>
      )
      setDesc(
        <h2 className="text-lg font-black text-gray-400">
          Web Developer,specialized in React and Next js. 
        </h2>
      )
    }
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [width])

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  return (
    <div
      className="m-5 mt-10 flex flex-col items-center space-x-6
    sm:m-20 sm:grid sm:grid-cols-3 sm:flex-row  sm:items-start sm:space-x-0"
    >
      <div className="flex items-center   justify-center sm:col-span-1 sm:flex-col">
        <h1 className="m-4 text-6xl font-bold text-purple-500 sm:text-8xl">
          2+
        </h1>
        {exp}
      </div>

      <div className="col-span-1 mt-4  sm:col-span-2">
        {desc}
        <div className="flex flex-col items-center justify-center  sm:flex-row sm:justify-start sm:space-x-10">
          <ExperinceCard
            title="Web Development"
            icon={<CodeIcon className={iconStyle} />}
            link="/projects"
          />
          <ExperinceCard
            title="Backend Development"
            icon={<DatabaseIcon className={iconStyle} />}
            link="/projects"
          />
        </div>
      </div>
    </div>
  )
}

export default Experience
