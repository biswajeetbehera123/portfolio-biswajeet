import Image from 'next/image';
import React from 'react';
import netflixImg from '../../../public/assets/projects/web/2.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

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
                    <h2 className='py-2'>Code Nexus-A Online IDE</h2>
                    <h3>React JS / Styled Components / Rapid API</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className='text-2xl mt-2 font-extrabold'>Project</p>
                    <h2 className='text-xl mt-2 italic'>Overview</h2>
                    <p className='mt-2'>
                        Experience seamless coding with our intuitive Code Nexus-An Online IDE. With a feature-rich interface, syntax highlighting, and real-time collaboration, it's perfect for individual developers and teams. Write, debug, and test code in various programming languages, all within your browser. Boost productivity with auto-suggestions, version history, and a user-friendly design. Elevate your coding experience with our powerful yet accessible web-based code editor.
                    </p>
                    <a
                        href='https://github.com/biswajeetbehera123/code-nexus'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>Code</button>
                    </a>
                    <a
                        href='https://code-nexus-editor.vercel.app/'
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
                                <RiRadioButtonFill className='pr-1' /> Styled Components
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Judge0 CE API
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Rapid API
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Axios
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