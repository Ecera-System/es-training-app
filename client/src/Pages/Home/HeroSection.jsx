import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { CiLocationArrow1 } from 'react-icons/ci';

const HeroSection = () => {
    return (
        <section className='py-10 w-full h-auto flex justify-center'>
            <div className='2xl:w-[1200px] w-[90%] grid grid-cols-2 items-center'>
                <div>
                    <h1 className='text-4xl font-semibold text-violet-600 my-5'>
                        Fullstack <span className='bg-violet-600 text-white'>MERN</span> Developer
                    </h1>
                    <h4 className='text-lg text-gray-500'>
                        Real Project Based Learning | Agile Methology
                    </h4>
                    <p className='text-base text-gray-500 mt-8 mb-10'>
                        <span className='font-semibold'>
                            The Full Stack MERN Developer Program
                        </span> is an intense bootcamp offering a complete suite of software development skills. Get job-ready with front end & backend development skills. Complete the course to get an assured job with an average salary of 3-6 LPA.
                    </p>
                    <button
                        className='px-8 py-3 text-base font-medium bg-violet-600 hover:bg-violet-700 duration-300 text-white flex items-center gap-2 rounded-md shadow-[0_3px_15px_rgb(124,58,237,0.5)]'
                    >
                        Get Started
                        <HiArrowNarrowRight className='text-2xl font-bold' />
                    </button>
                    <div className='flex items-center gap-2 mt-10'>
                        <span className='text-4xl font-semibold'>
                            5.0
                        </span>
                        <span className='flex items-center gap-2 text-yellow-500'>
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                        </span>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end'>
                        <button
                            className='px-8 py-3 text-base font-medium bg-[#FFD500] text-black hover:shadow-[0_3px_15px_rgb(255,213,0.5)] duration-300 flex items-center gap-2 rounded-full'
                        >
                            Book a Free Counselling Session Now
                            <HiArrowNarrowRight className='text-2xl font-bold' />
                        </button>
                    </div>
                    <div className='flex justify-end mt-20'>
                        <form onSubmit="return false;" className='w-[30rem] p-8 pt-12 rounded-md bg-violet-50 text-base text-gray-500 flex flex-col gap-5 relative'>
                            <div className='absolute -top-6 left-0 w-full flex justify-center'>
                                <div
                                    className='px-8 py-3 text-base font-medium bg-slate-700 hover:bg-slate-800 duration-300 text-white flex items-center gap-2 rounded-md cursor-pointer shadow-md'
                                >
                                    Download Brochure
                                </div>
                            </div>
                            <div>
                                <label htmlFor='email' class="px-1">Email</label>
                                <input
                                    placeholder="" required
                                    type="email" id='email'
                                    class="block px-3 py-2 rounded-lg w-full bg-white border-2 border-violet-300 placeholder-violet-600 shadow-md focus:placeholder-violet-500 focus:bg-white focus:border-violet-600 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor='phone' class="px-1 text-gray-500">Phone</label>
                                <div className='flex items-center gap-5'>
                                    <select
                                        name="country"
                                        className='block px-3 py-2.5 rounded-lg text-sm bg-white border-2 border-violet-300 placeholder-violet-600 shadow-md focus:placeholder-violet-500 focus:bg-white focus:border-violet-600 focus:outline-none'
                                    >
                                        <option value="">Select Country</option>
                                        <option value="+91">
                                            India (+91)
                                        </option>
                                    </select>
                                    <input
                                        placeholder="" required
                                        type="text" id='phone'
                                        class="block px-3 py-2 rounded-lg w-full bg-white border-2 border-violet-300 placeholder-violet-600 shadow-md focus:placeholder-violet-500 focus:bg-white focus:border-violet-600 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    type='submit'
                                    className='px-8 py-3 mt-3 text-base font-medium bg-violet-600 hover:bg-violet-700 duration-300 text-white flex items-center gap-2 rounded-md shadow-[0_3px_15px_rgb(124,58,237,0.5)]'
                                >
                                    Send Me Brochure
                                    <CiLocationArrow1 className='text-xl font-bold' strokeWidth={0.8} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;