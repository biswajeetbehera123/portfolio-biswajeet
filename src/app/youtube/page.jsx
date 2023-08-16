import Image from 'next/image';
import React from 'react';
import netflixImg from '../../../public/assets/projects/web/4.png';
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
                    <h2 className='py-2'>YouTube Lite</h2>
                    <h3>React JS / Tailwind / Axios</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className='text-2xl mt-2 font-extrabold'>Project</p>
                    <h2 className='text-xl mt-2 italic'>Overview</h2>
                    <p className='mt-2'>
                        Introducing our YouTube Clone web application - a platform for seamless video sharing and exploration. With a familiar interface, users can upload, view, and engage with videos effortlessly. Our application supports user profiles, subscriptions, and comments, fostering a vibrant community. Equipped with responsive design and efficient video streaming, it offers an authentic YouTube experience. Discover, create, and connect through our feature-rich YouTube Clone web application.
                    </p>
                    <a
                        href='https://github.com/biswajeetbehera123/youtube-clone'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>Code</button>
                    </a>
                    <a
                        href='https://youtube-lite-x.vercel.app/'
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
                                <RiRadioButtonFill className='pr-1' /> Tailwind
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React-Player
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> moment
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