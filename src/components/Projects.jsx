import React from "react";

import { MdExpandMore } from "react-icons/md";

import codenexus from "../../public/assets/projects/web/2.png"
import netflix from "../../public/assets/projects/web/3.png"
import mask from "../../public/assets/projects/opencv/1.png"
import student from "../../public/assets/projects/ml/2.png"

import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      title: "Code Nexus-An Online IDE",
      imageSrc: codenexus,
      url: "code",
    },
    {
      id: 2,
      title: "Netflix Lite",
      imageSrc: netflix,
      url: "netflix",
    },
    {
      id: 3,
      title: "Mask Detection Model",
      imageSrc: mask,
      url: "mask",
    },
    {
      id: 4,
      title: "Student Mark Prediction Model",
      imageSrc: student,
      url: "mark-prediction",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          projects
        </h2>
        <p className="py-4 max-w-lg">
          Showcasing a selection of innovative and impactful undertakings, highlighting technical prowess, creativity, and problem-solving abilities in diverse contexts.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              all projects
              <span className="-rotate-90 duration-200 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
