import Image from 'next/image';
import React from 'react';
import netflixImg from '../../../public/assets/projects/ml/3.png';
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
                    <h2 className='py-2'>Flight Price Prediction Model</h2>
                    <h3>Python / Keras / Tensorflow</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className='text-2xl mt-2 font-extrabold'>Project</p>
                    <h2 className='text-xl mt-2 italic'>Overview</h2>
                    <p className='mt-2'>
                        Navigate affordable travel with our flight price prediction model. Leveraging historical data and advanced algorithms, it forecasts flight prices with remarkable accuracy. Plan your trips confidently by tracking price trends and receiving alerts when fares are expected to change. Whether for business or leisure, our model empowers travelers to make informed decisions, ensuring optimal savings. Experience stress-free booking with our reliable flight price prediction technology.
                    </p>
                    <a
                        href='https://github.com/biswajeetbehera123/flight-prediction-model'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>Code</button>
                    </a>
                    {/* <a
                        href='https://blood-thirst-game.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>Demo</button>
                    </a> */}
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 text-white'>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Python
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Keras
                            </p>
                            <p className='py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Tensorflow
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