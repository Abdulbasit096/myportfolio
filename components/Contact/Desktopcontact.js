import React from 'react'
import { PhoneIcon, MailIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function Desktopcontact() {
  const sendEmail = (e) => {
    e.preventDefault()

    // emailjs
    //   .sendForm(
    //     "service_5ray1we",
    //     "template_ngejndt",
    //     e.target,
    //     "user_xO7tM6HrurU6mY00ZEVYR"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    e.target.reset()
  }

  return (
    <div className="mt-20">
      <h1 className="text-center text-6xl font-black uppercase text-gray-800 ">
        Get in touch
      </h1>
      <div className="mt-4 grid grid-cols-2 place-content-center">
        <div className="m-8 rounded-xl bg-gray-800 p-5 shadow-xl">
          <form
            onSubmit={sendEmail}
            className="m-2 mt-6 ml-4 grid  grid-cols-1 place-items-start gap-4 "
          >
            <h1 className="text-2xl text-white font-semibold">Send me a direct message</h1>
            <input
              className=" w-4/5 rounded-lg bg-gray-700 p-2 focus:border-purple-500 focus:outline-none focus:ring"
              type="text"
              placeholder="Your name"
              name="name"
            />
            <input
              className="w-4/5 rounded-lg bg-gray-700 p-2 outline-none focus:border-purple-500 focus:outline-none focus:ring"
              type="text"
              placeholder="Email Address"
              name="mail"
            />

            <textarea
              className="w-4/5 rounded-sm bg-gray-700 p-2 outline-none focus:border-purple-500 focus:outline-none focus:ring"
              type="text"
              placeholder="Your Messege"
              name="message"
            />
            <input
              type="submit"
              placeholder="Submit"
              className="text-md mt-1 w-3/5 transform rounded-lg bg-purple-500 p-2 font-black text-white duration-300 hover:bg-purple-900"
            />
          </form>
        </div>
        <div className="m-12 p-8">
          <div className="flex items-center space-x-2  ">
            <PhoneIcon className="h-8 text-gray-400" />
            <p className="text-md font-semibold text-gray-500">
              +92313-2521309
            </p>
            <MailIcon className="h-8 text-gray-700" />
            <p className="text-md font-semibold text-gray-500">
              abdlbasit003@gmail.com
            </p>
          </div>
          <div className="mt-4 flex space-x-4">
            <Link
              target="_blank"
              href="https://www.facebook.com/people/Abdul-Basit/100012117186393/"
              >
              <img className="h-10 cursor-pointer" src="/facebook.svg" alt="" />
            </Link>
            <Link target="_blank" href="https://chatwith.io/s/abdul-basit">
              <img
                className="-mt-4 h-16 cursor-pointer"
                src="/whatsapp.svg"
                alt=""
              />
            </Link>

            <Link
              target="_blank"
              href="https://www.instagram.com/a.bdul_b.asit/"
            >
              <img
                className="h-10 cursor-pointer"
                src="/instagram.svg"
                alt=""
              />
            </Link>
            <Link target="_blank" href="https://github.com/Abdulbasit096">
              <img className="h-10 cursor-pointer" src="/github.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desktopcontact
