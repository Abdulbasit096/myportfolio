import Head from 'next/head'
import Header from '../components/Layout/Header'
import Hero from '../components/Sections/Hero'
import About from '../components/Sections/About'
import Experience from '../components/Sections/Experience'
import Projects from '../components/Sections/Projects'
import Contact from '../components/Sections/Contact'
import Footer from '../components/Layout/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdul Basit - Full-Stack Developer</title>
        <meta name="description" content="CS undergrad at KSBL passionate about building efficient, real-world software. Expertise in full-stack development with Java, Python, React, Spring Boot, and Django." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Abdul Basit - Full-Stack Developer" />
        <meta property="og:description" content="CS undergrad passionate about building efficient, real-world software solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}