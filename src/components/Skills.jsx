import React from "react";

import Link from "next/link";
import { MdExpandMore } from "react-icons/md";

import css from "../../public/assets/skills/css.png"
import firebase from "../../public/assets/skills/firebase.png"
import github from "../../public/assets/skills/github1.png"
import html from "../../public/assets/skills/html.png"
import javascript from "../../public/assets/skills/javascript.png"
import mongo from "../../public/assets/skills/mongo.png"
import nextjs from "../../public/assets/skills/nextjs.png"
import node from "../../public/assets/skills/node.png"
import react from "../../public/assets/skills/react.png"
import tailwind from "../../public/assets/skills/tailwind.png"
import sql from "../../public/assets/skills/sql.png"
import python from "../../public/assets/skills/python.png"

import Image from "next/image";

const Skills = () => {
    const experiences = [
        {
            id: 1,
            title: "HTML",
            src: html,
        },
        {
            id: 2,
            title: "CSS",
            src: css,
        },
        {
            id: 3,
            title: "JavaScript",
            src: javascript,
        },
        {
            id: 4,
            title: "React",
            src: react,
        },
        {
            id: 5,
            title: "Next JS",
            src: nextjs,
        },
        {
            id: 6,
            title: "Node JS",
            src: node,
        }
    ];

    return (
        <div id="skills" className="w-full pt-4">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl tracking-wider uppercase text-blue-500 font-bold">
                    skills
                </h2>
                <p className="py-4 max-w-lg">
                    Expertise in diverse programming languages, frameworks, and problem-solving. Collaborative, innovative, and dedicated to advancing technology through continuous learning
                </p>

                <div className="grid lg:grid-cols-3 gap-8">
                    {experiences.map(({ id, title, src }) => (
                        <div
                            key={id}
                            className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
                        >
                            <Image src={src} className="w-16 h-16" alt={title} />
                            <h3 className="font-light">{title}</h3>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/skill">
                        <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            all skills
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

export default Skills;
