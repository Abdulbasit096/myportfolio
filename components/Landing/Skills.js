import React from "react";

function Skills() {
  const skills = [
    {
      title: "html",
      years: "2",
    },
    {
      title: "css",
      years: "2",
    },
    {
      title: "javascript",
      years: "2",
    },
    {
      title: "react-js",
      years: "2",
    },
    {
      title: "redux-js",
      years: "1.5",
    },
    {
      title: "node-js",
      years: "1",
    },
    {
      title: "express-js",
      years: "1",
    },
    
    {
      title: "tailwind-css",
      years: "0.5",
    },
    {
      title: "wordpress",
      years: "2",
    },
    {
      title: "elementor",
      years: "2",
    },
    {
      title: "woocommerce",
      years: "2",
    },
    {
      title: "material-Ui",
      years: "1",
    },
    {
      title: "bootstrap",
      years: "1",
    },
    {
      title: "firebase",
      years: "2",
    },
    {
      title: "mysql",
      years: "1",
    },
  ];

  return (
    <div className="mt-20">
      <h1 className=" text-center text-gray-700 font-black text-4xl">Skills I acquire</h1>
      <div
        className="grid grid-cols-2 place-items-center mt-10 
sm:grid-cols-4 cursor-pointer relative "
      >
        {skills.map(({ title, years }) => (
          <div className="group flex flex-col items-center justify-center relative">
            <img
              className="h-20 w-20 mt-6 mb-6"
              src={`/skills/${title}.svg`}
              alt=""
            />
            <p className="text-xl capitalize mb-6 font-bold">{title}</p>
            <div
              style={{ boxShadow: "1px 1px 6px 1px gray " }}
              className="opacity-0 hidden group-hover:opacity-90  bg-white p-1 w-min rounded-lg  text-black font-bold  absolute top-6 -right-20 sm:block"
            >
              {years === "1"
                ? `${years} year of experience`
                : `${years} years of experience`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
