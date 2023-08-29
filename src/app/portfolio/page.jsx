import React from 'react'

import { IoChevronBackOutline } from "react-icons/io5";

import image from "../../../public/assets/projects/web/1.png"
import codenexus from "../../../public/assets/projects/web/2.png"
import netflix from "../../../public/assets/projects/web/3.png"
import youtube from "../../../public/assets/projects/web/4.png"
import weather from "../../../public/assets/projects/web/5.png"
import blood from "../../../public/assets/projects/web/6.png"

import mask from "../../../public/assets/projects/opencv/1.png"
import object from "../../../public/assets/projects/opencv/2.png"

import mobile from "../../../public/assets/projects/ml/1.png"
import student from "../../../public/assets/projects/ml/2.png"
import flight from "../../../public/assets/projects/ml/3.png"

import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    const portfolios = [
        {
            id: 1,
            title: "Image To Text",
            imageSrc: image,
            url: "image",
        },
        {
            id: 2,
            title: "Code Nexus-An Online IDE",
            imageSrc: codenexus,
            url: "code",
        },
        {
            id: 3,
            title: "Netflix Lite",
            imageSrc: netflix,
            url: "netflix",
        },
        {
            id: 4,
            title: "Youtube Lite",
            imageSrc: youtube,
            url: "youtube",
        },
        {
            id: 5,
            title: "Weather App",
            imageSrc: weather,
            url: "weather",
        },
        {
            id: 6,
            title: "Blood Thirst Game",
            imageSrc: blood,
            url: "blood",
        },
        {
            id: 7,
            title: "Mask Detection Model",
            imageSrc: mask,
            url: "mask",
        },
        {
            id: 8,
            title: "Object Detection Model",
            imageSrc: object,
            url: "object",
        },
        {
            id: 9,
            title: "Student Mark Prediction Model",
            imageSrc: student,
            url: "mark-prediction",
        },
        {
            id: 10,
            title: "Mobile Price Prediction Model",
            imageSrc: mobile,
            url: "price-prediction",
        },
        {
            id: 11,
            title: "Flight Price Prediction Model",
            imageSrc: flight,
            url: "flight-prediction",
        },
    ];

    return (
        <div id="projects" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold mt-8">
                    all projects
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
                    <Link href="/#projects">
                        <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
                            <span className="-rotate-225 duration-200 ease-in group-hover:-translate-x-5">
                                <IoChevronBackOutline size={25} />
                            </span>
                            back
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page