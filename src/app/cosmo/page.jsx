import Image from 'next/image';
import React from 'react';
import netflixImg from '../../../public/assets/projects/web/8.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

export const metadata = {
    title: 'Cosmopolitan 2024'
}

const page = () => {
    return (
        <div>
            <div className='h-[50vh] relative'>
                <div className='top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1 opacity-50'
                    layout='fill'
                    objectFit='cover'
                    src={netflixImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold z-10 p-2'>
                    <h2 className='py-2'>Roots 2023 Official Website</h2>
                    <h3>React JS / TailwindCSS / UI</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className='text-2xl mt-2 font-extrabold'>Team Project</p>
                    <h2 className='text-xl mt-2 italic'>Overview</h2>
                    <p className='mt-2'>
                        Developed a responsive web application for the Cosmopolitan Festival at my institute, working with a team of developers and designers. The app provided a detailed festival schedule, speaker information, and event descriptions. Users could easily navigate and filter the schedule, view speaker bios and session details, and access event information with visual aids. The design was responsive, ensuring compatibility across various devices. Our collaborative effort enhanced the attendee experience, contributing to the festival's success.
                    </p>
                    {/* <a
                        href='https://github.com/biswajeetbehera123/weather-app'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>Code</button>
                    </a> */}
                    <a
                        href='https://multiethnicfest.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>Demo</button>
                    </a>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 text-white'>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> ReactJS
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> TailwindCSS
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/portfolio'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
};

export default page;