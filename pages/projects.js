import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../projects'
import Link from 'next/link'

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col font-body m-4 sm:m-10 text-white  items-start justify-center space-y-10 bg-gray-900 py-4 px-8">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h1 className="text-4xl font-extrabold">My Projects</h1>
          <p className="font-bold text-gray-400">
            View all of them on{' '}
            <Link href="https://github.com/Abdulbasit096/">
              <span className="text-purple-600 underline">Github</span>
            </Link>
          </p>
        </div>
        <div className="group grid grid-cols-1 gap-x-6  gap-y-8 sm:grid-cols-2 md:grid-cols-3 ">
          {projects.map((project) => (
            <ProjectCard
              key={project.githubLink}
              title={project.title}
              desc={project.description}
              src={project.src}
              gLink={project.githubLink}
              Llink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects

const ProjectCard = ({ title, desc, src, gLink, Llink }) => {
  return (
    <div className="col-span-1   mb-8 flex h-full w-full cursor-pointer flex-col items-start justify-center space-y-4 overflow-hidden rounded-xl bg-gray-800 px-0 py-0 shadow-xl  transition-all duration-300 hover:bg-gray-600 hover:text-white">
      <Link href={Llink}>
        <img
          className="h-full w-full object-cover group-hover:opacity-75"
          src={src}
          alt=""
        />
      </Link>
      <div className="space-y-4 p-2">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="font-semibold text-gray-400">{desc}</p>
        <div className="flex items-center space-x-4 ">
          <Link href={gLink}>
            <p className="rounded-lg bg-gray-900 p-2 font-bold text-white">
              View Code
            </p>
          </Link>
          <Link href={Llink}>
            <p className="rounded-lg bg-purple-500 p-2 font-bold text-white hover:bg-purple-900">
              Live Demo
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
