import Head from 'next/head'
import Header from '../components/Header';
import Intro from '../components/Landing/Intro';
import Experience from '../components/Landing/Experience';
import Skills from '../components/Landing/Skills';
export default function Home() {
  return (
    <div className="bg-gray-900 font-body">
      <Intro/>
      <Experience/>
      <Skills/>
    </div>
  )
}
