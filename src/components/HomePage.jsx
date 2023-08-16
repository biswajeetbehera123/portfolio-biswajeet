import React from "react";
import heroImage from "../../public/assets/about.jpg";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-auto mx-auto overflow-hidden rounded-xl">
          <Image src={heroImage} alt="me" />
        </div>

        <h2 className="uppercase font-bold text-slate-200 text-3xl mt-2">
          Biswajeet Behera
        </h2>
        <h5 className="uppercase font-bold text-slate-200 text-5xl">
          full stack developer
        </h5>
        <p className="text-slate-200 text-md max-w-sm mx-auto mt-2">
          Experienced developer with a passion for crafting efficient and innovative solutions. Proficient in multiple programming languages and frameworks, adept at problem-solving and collaborative teamwork.
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
