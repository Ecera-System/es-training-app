import React from 'react';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import HeroSection from './HeroSection';
import TechIcon from './TechIcon';
import { GiTrophy } from 'react-icons/gi';
import Footer from '../Shared/Footer/Footer';
import Courses from './Courses';
import SuccessStories from './SuccessStories';

const Home = () => {
    return (<>
        <PageTitle title="MERN Training Center" />
        <Header />
        <HeroSection />
        <TechIcon />
        <section
            style={{ backgroundImage: `url(/images/bg_img1.jpg)` }}
            className='py-20 bg-no-repeat bg-cover'
        >
            <div className='2xl:w-[1280px] w-[90%] mx-auto text-center'>
                <h1 className='md:text-4xl text-3xl font-semibold text-gray-700'>
                    Why Join This Full Stack MERN Developer Program?
                </h1>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-16'>
                    <div className='hover:-translate-y-2 border border-violet-600 group/card hover:bg-violet-600 duration-300 rounded-xl p-7'>
                        <div className='w-max mx-auto border border-violet-600 group-hover/card:border-white bg-white p-6 rounded-full'>
                            <GiTrophy className='text-5xl text-violet-700' />
                        </div>
                        <h1 className='text-lg font-medium text-gray-600 group-hover/card:text-white pt-5 pb-3'>
                            Decade's Hottest Career
                        </h1>
                        <p className='text-base text-gray-500 group-hover/card:text-white'>
                            2021 witnessed a 21% jump in professionals. Earn an average salary of INR 6.7 LPA.
                        </p>
                    </div>
                    <div className='hover:-translate-y-2 border border-violet-600 group/card hover:bg-violet-600 duration-300 rounded-xl p-7'>
                        <div className='w-max mx-auto border border-violet-600 group-hover/card:border-white bg-white p-6 rounded-full'>
                            <GiTrophy className='text-5xl text-violet-700' />
                        </div>
                        <h1 className='text-lg font-medium text-gray-600 group-hover/card:text-white pt-5 pb-3'>
                            Decade's Hottest Career
                        </h1>
                        <p className='text-base text-gray-500 group-hover/card:text-white'>
                            2021 witnessed a 21% jump in professionals. Earn an average salary of INR 6.7 LPA.
                        </p>
                    </div>
                    <div className='hover:-translate-y-2 border border-violet-600 group/card hover:bg-violet-600 duration-300 rounded-xl p-7'>
                        <div className='w-max mx-auto border border-violet-600 group-hover/card:border-white bg-white p-6 rounded-full'>
                            <GiTrophy className='text-5xl text-violet-700' />
                        </div>
                        <h1 className='text-lg font-medium text-gray-600 group-hover/card:text-white pt-5 pb-3'>
                            Decade's Hottest Career
                        </h1>
                        <p className='text-base text-gray-500 group-hover/card:text-white'>
                            2021 witnessed a 21% jump in professionals. Earn an average salary of INR 6.7 LPA.
                        </p>
                    </div>
                    <div className='hover:-translate-y-2 border border-violet-600 group/card hover:bg-violet-600 duration-300 rounded-xl p-7'>
                        <div className='w-max mx-auto border border-violet-600 group-hover/card:border-white bg-white p-6 rounded-full'>
                            <GiTrophy className='text-5xl text-violet-700' />
                        </div>
                        <h1 className='text-lg font-medium text-gray-600 group-hover/card:text-white pt-5 pb-3'>
                            Decade's Hottest Career
                        </h1>
                        <p className='text-base text-gray-500 group-hover/card:text-white'>
                            2021 witnessed a 21% jump in professionals. Earn an average salary of INR 6.7 LPA.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Courses />
        <section className='mb-10 py-20 bg-[#f9f8fe] md:rounded-[8rem] rounded-[4rem]'>
            <div className='2xl:w-[1280px] w-[90%] mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='lg:text-start text-center'>
                        <h4 className='text-lg font-medium text-violet-600'>
                            Full Stack MERN Developer Course Overview
                        </h4>
                        <h1 className='text-4xl font-semibold text-gray-700 py-3'>
                            Featured Courses
                        </h1>
                        <p className='lg:w-3/5 text-base text-gray-500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
                        </p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                    <div className='border rounded-xl p-6 border-violet-600 flex items-center gap-5 hover:-translate-y-1 duration-300'>
                        <div>
                            <img src="/Images/book_icon.png" alt="" className='w-32 h-auto' />
                        </div>
                        <p className='text-sm text-gray-500'>
                            8X higher engagement in live online classes by industry professionals.
                        </p>
                    </div>
                    <div className='border rounded-xl p-6 border-violet-600 flex items-center gap-5 hover:-translate-y-1 duration-300'>
                        <div>
                            <img src="/Images/book_icon.png" alt="" className='w-32 h-auto' />
                        </div>
                        <p className='text-sm text-gray-500'>
                            8X higher engagement in live online classes by industry professionals.
                        </p>
                    </div>
                    <div className='border rounded-xl p-6 border-violet-600 flex items-center gap-5 hover:-translate-y-1 duration-300'>
                        <div>
                            <img src="/Images/book_icon.png" alt="" className='w-32 h-auto' />
                        </div>
                        <p className='text-sm text-gray-500'>
                            8X higher engagement in live online classes by industry professionals.
                        </p>
                    </div>
                    <div className='border rounded-xl p-6 border-violet-600 flex items-center gap-5 hover:-translate-y-1 duration-300'>
                        <div>
                            <img src="/Images/book_icon.png" alt="" className='w-32 h-auto' />
                        </div>
                        <p className='text-sm text-gray-500'>
                            8X higher engagement in live online classes by industry professionals.
                        </p>
                    </div>
                    <div className='border rounded-xl p-6 border-violet-600 flex items-center gap-5 hover:-translate-y-1 duration-300'>
                        <div>
                            <img src="/Images/book_icon.png" alt="" className='w-32 h-auto' />
                        </div>
                        <p className='text-sm text-gray-500'>
                            8X higher engagement in live online classes by industry professionals.
                        </p>
                    </div>
                    <div className='border rounded-xl p-6 border-violet-600 flex items-center gap-5 hover:-translate-y-1 duration-300'>
                        <div>
                            <img src="/Images/book_icon.png" alt="" className='w-32 h-auto' />
                        </div>
                        <p className='text-sm text-gray-500'>
                            8X higher engagement in live online classes by industry professionals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <SuccessStories />
        <hr className='bg-violet-500 h-0.5' />
        <Footer />
    </>);
};

export default Home;