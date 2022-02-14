import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Desktopcontact from '../components/Contact/Desktopcontact'
import Mobilecontact from '../components/Contact/Mobilecontact'

function Contact() {
  const [width, setWidth] = useState(400)
  const [contact, setContact] = useState(<div></div>)

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    if (parseFloat(width) > 640) {
      setContact(<Desktopcontact />)
    } else {
      setContact(<Mobilecontact />)
    }
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [width])

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="overflow-hidden">{contact}</div>;
    </motion.div>
  )
}

export default Contact
