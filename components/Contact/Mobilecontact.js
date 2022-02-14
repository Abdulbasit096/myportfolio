import React from "react";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline";
import Link from "next/link";

function Mobilecontact() {
  const sendEmail = (e) => {
    e.preventDefault();

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
    e.target.reset();
  };

  return (
    <div className="mt-16">
      <h1 className="text-6xl  text-gray-600 font-black text-center ">Get in touch</h1>
      <div className=" m-2 mt-20 mr-5 grid grid-cols-2">
        <div className="flex flex-col items-center">
          <PhoneIcon className="h-8 text-gray-400" />
          <p className="font-semibold text-md text-gray-500">+92313-2521309</p>
        </div>
        <div className="flex flex-col items-center">
          <MailIcon className="h-8 text-gray-400" />
          <p className="font-semibold text-md text-gray-500">
            abdlbasit003@gmail.com
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 place-items-center mt-8">
        <Link
          target="_blank"
          href="https://www.facebook.com/people/Abdul-Basit/100012117186393/"
        >
          <img className="h-10 cursor-pointer" src="/facebook.svg" alt="" />
        </Link>
        <Link  target="_blank" href="https://chatwith.io/s/abdul-basit">
          <img
            className="h-16 -mt-3 cursor-pointer"
            src="/whatsapp.svg"
            alt=""
          />
        </Link>

        <Link  target="_blank" href="https://www.instagram.com/a.bdul_b.asit/">
          <img className="h-10 cursor-pointer" src="/instagram.svg" alt="" />
        </Link>
        <Link  target="_blank" href="https://github.com/Abdulbasit096">
          <img className="h-10 cursor-pointer" src="/github.svg" alt="" />
        </Link>
        <Link  target="_blank" href="https://www.fiverr.com/abdul_basit2">
          <img className="h-10 cursor-pointer" src="/fiverr.svg" alt="" />
        </Link>
      </div>

      <div className="mt-12 mx-4 rounded-lg bg-gray-800 p-4">
        <form
          onSubmit={sendEmail}
          className="grid grid-cols-1 place-items-start mt-6  m-2 gap-4 ml-4 "
        >
          <h1 className="font-semibold text-white text-2xl">Send me a direct message</h1>
          <input
            className=" bg-gray-700 p-2 rounded-lg w-4/5 focus:outline-none focus:ring focus:border-purple-500"
            type="text"
            placeholder="Your name"
            name="name"
          />
          <input
            className="outline-none bg-gray-700 p-2 rounded-lg w-4/5 focus:outline-none focus:ring focus:border-purple-500"
            type="text"
            placeholder="Email Address"
            name="mail"
          />

          <input
            className="outline-none bg-gray-700 p-2 rounded-lg w-4/5 focus:outline-none focus:ring focus:border-purple-500"
            type="text"
            placeholder="Phone numeber"
            name="number"
          />

          <textarea
            className="outline-none bg-gray-700 p-2 rounded-sm w-4/5 focus:outline-none focus:ring focus:border-purple-500"
            type="text"
            placeholder="Your Messege"
            name="message"
          />
          <input
            type="submit"
            className="mt-1 text-white bg-purple-500 p-2 w-3/5 rounded-lg font-black text-md hover:bg-purple-900 transform duration-300"
            placeholder="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Mobilecontact;
