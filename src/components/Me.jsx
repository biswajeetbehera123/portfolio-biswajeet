import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="about" className="w-full pt-4">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl tracking-wider uppercase text-blue-500 font-bold">
          about me
        </h2>
        
        <div className="shadow-xl shadow-blue-300 my-8 px-8 rounded-xl">
          <p className="py-4 max-w-2xl mx-auto">
            Welcome to my portfolio! I'm an experienced developer driven by a relentless curiosity for technology. With a strong foundation in various programming languages and frameworks, I thrive on solving complex challenges and crafting elegant solutions. My journey is marked by a commitment to continuous learning, which fuels my passion for staying at the forefront of technological advancements.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Collaboration is at the heart of my approach. I value teamwork and believe that diverse perspectives lead to superior outcomes. Whether it's contributing to a team project or leading an initiative, I bring a collaborative spirit that fosters innovation and growth.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            Throughout my career, I've embarked on projects that have not only showcased my technical expertise but also demonstrated my ability to think creatively and adapt to evolving landscapes. Each project is a testament to my dedication to producing robust, efficient, and user-centric solutions.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-150 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#projects">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my projects
              <span className="-rotate-90 duration-150 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
