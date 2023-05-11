import React, { useState } from 'react';
import './programs.css'
import PageTitle from '../Shared/PageTitle';
import Header from '../Shared/Header/Header';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaRegPlayCircle } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { HiCodeBracket } from 'react-icons/hi2';
import { TfiInfinite } from 'react-icons/tfi';
import { BiMessageSquareDots } from 'react-icons/bi';
import { VscGithubAlt } from 'react-icons/vsc';
import { BsGraphUp } from 'react-icons/bs';
import Slider from 'react-slick';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Footer from '../Shared/Footer/Footer';

const BackendDevelopment = () => {
    const [introVideo, setIntroVideo] = useState(false);
    const [indexFaq, setIndexFaq] = useState(0);
    const [indexCC, setIndexCC] = useState(0);

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (<>
        <PageTitle title='Backend Development Program' />
        <Header />
        <section className='bg-violet-100 pt-16 pb-10 relative'>
            <div className="2xl:w-[1280px] w-[90%] mx-auto grid grid-cols-2">
                <div className='text-gray-600'>
                    <h1 className='text-[2.6rem] leading-[55px] font-semibold text-violet-600 my-5'>
                        Backend Web Development Program
                    </h1>
                    <h3 className='text-xl font-medium mt-2 mb-10'>
                        for Beginners and Experienced Learners
                    </h3>
                    <p className='text-xl font-light text-gray-700'>
                        Backend Software Developer is one of the most sought-after job roles in the tech industry. It requires you to be proficient in Backend (server-side) technologies and API development to create cloud-based tech products
                    </p>

                    <div className='mt-8'>
                        <button
                            onClick={() => setIntroVideo(!introVideo)}
                            className='flex gap-1 items-center text-lg font-semibold text-[#20D19E]'
                        >
                            <FaRegPlayCircle className='inline-block text-xl' />
                            Intro to Backend Development Program
                        </button>
                    </div>

                    <div className='mt-4'>
                        <button
                            className='w-max lg:mx-0 mx-auto px-8 py-3 text-base font-medium bg-violet-600 hover:bg-violet-700 duration-300 text-white flex items-center gap-2 rounded-md hover:shadow-[0_3px_15px_rgb(124,58,237,0.6)]'
                        >
                            Enroll Now
                            <HiArrowNarrowRight className='text-2xl font-bold' />
                        </button>
                    </div>
                </div>
                <div className='w-full h-full pl-10 grid place-items-center'>
                    <img
                        loading='lazy'
                        src="/images/backend-development/backend-dev.png"
                        alt="Rocket shape"
                        className='w-full h-auto'
                    />
                </div>
            </div>
        </section>
        <section className='flex items-center justify-center mt-24 mb-36'>
            <div className='max-w-5xl w-4/5 flex items-start justify-center gap-px'>
                <div
                    className='w-full p-10 shadow-[0px_10px_60px_0px_rgba(124,58,237,0.1)] relative after:duration-500 after:opacity-0 hover:after:opacity-100 after:absolute after:inset-12 after:bg-violet-400 after:-z-10 after:rounded-full after:blur-2xl'
                >
                    <h5 className='text-sm font-medium text-gray-500 mb-5'>
                        Course Duration
                    </h5>
                    <p className='text-5xl font-semibold text-gray-800'>
                        06 <span className='text-xl font-normal'>/months</span>
                    </p>
                </div>
                <div className='w-full p-10 shadow-[0px_10px_60px_0px_rgba(124,58,237,0.1)] relative after:duration-500 after:opacity-0 hover:after:opacity-100 after:absolute after:inset-12 after:bg-violet-400 after:-z-10 after:rounded-full after:blur-2xl'>
                    <h5 className='text-sm font-medium text-gray-500 mb-5'>
                        Trial Session
                    </h5>
                    <p className='text-5xl font-semibold text-gray-800'>
                        Free
                    </p>
                </div>
                <div className='w-full p-10 shadow-[0px_10px_60px_0px_rgba(124,58,237,0.1)] relative after:duration-500 after:opacity-0 hover:after:opacity-100 after:absolute after:inset-12 after:bg-violet-400 after:-z-10 after:rounded-full after:blur-2xl'>
                    <h5 className='text-sm font-medium text-gray-500 mb-5'>
                        Projects
                    </h5>
                    <p className='text-5xl font-semibold text-gray-800'>
                        12+
                    </p>
                </div>
                <div className='w-full p-10 shadow-[0px_10px_60px_0px_rgba(124,58,237,0.1)] relative after:duration-500 after:opacity-0 hover:after:opacity-100 after:absolute after:inset-12 after:bg-violet-400 after:-z-10 after:rounded-full after:blur-2xl'>
                    <h5 className='text-sm font-medium text-gray-500 mb-5'>
                        Lecture
                    </h5>
                    <p className='text-5xl font-semibold text-gray-800'>
                        100+
                    </p>
                </div>
            </div>
        </section>
        <section className='pt-20 pb-24 bg-[#15171F]'>
            <div className='w-[85%] mx-auto'>
                <div>
                    <h1 className='text-4xl leading-[50px] font-semibold text-gray-100 text-center'>
                        Work Experience-Based Learning Approach <br /> To Master Backend Web Developer Skills
                    </h1>
                    <p className='text-lg font-extralight text-gray-300 text-center mt-5'>
                        Build software projects like the top 1% developers and learn all the skills you need to land the best backend developer jobs.
                    </p>
                </div>
                <div className='mt-16 grid items-center grid-cols-3 gap-10 rounded'>
                    <div className='bg-[#181A22] w-auto h-full p-10'>
                        <div className='border border-gray-500 rounded-lg w-max p-3.5'>
                            <HiCodeBracket className='text-[25px] text-amber-300' />
                        </div>
                        <p className='mt-7 text-white text-base font-extralight'>
                            15+ hands-on micro-skilling exercises to learn CS Fundamentals and practical developer skills.
                        </p>
                    </div>
                    <div className='bg-[#181A22] w-auto h-full p-10'>
                        <div className='border border-gray-500 rounded-lg w-max p-3.5'>
                            <TfiInfinite className='text-[25px] text-amber-300' />
                        </div>
                        <p className='mt-7 text-white text-base font-extralight'>
                            5 work-like professional projects, with mentorship, to master Full-Stack skills in an actual developer environment.
                        </p>
                    </div>
                    <div className='bg-[#181A22] w-auto h-full p-10'>
                        <div className='border border-gray-500 rounded-lg w-max p-3.5'>
                            <BiMessageSquareDots className='text-[25px] text-amber-300' />
                        </div>
                        <p className='mt-7 text-white text-base font-extralight'>
                            Well-structured immersive workshops and live sessions from industry seasoned professionals.
                        </p>
                    </div>
                    <div className='bg-[#181A22] w-auto h-full p-10'>
                        <div className='border border-gray-500 rounded-lg w-max p-3.5'>
                            <VscGithubAlt className='text-[25px] text-amber-300' />
                        </div>
                        <p className='mt-7 text-white text-base font-extralight'>
                            Project-backed portfolio on GitHub and a work-ex certificate to impress recruiters.
                        </p>
                    </div>
                    <div className='bg-[#181A22] w-auto h-full p-10'>
                        <div className='border border-gray-500 rounded-lg w-max p-3.5'>
                            <BsGraphUp className='text-[25px] text-amber-300' />
                        </div>
                        <p className='mt-7 text-white text-base font-extralight'>
                            In-built career assistance to get your profile ready and guide you in applying for exciting roles in Backend development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='pt-20 pb-24'>
            <div className='w-[52rem] mx-auto'>
                <h1 className='text-4xl leading-[50px] font-semibold text-gray-800 text-center'>
                    Build Modern Work-Like Professional Projects
                </h1>
                <p className='text-lg font-light text-gray-600 text-center mt-5'>
                    With real-world projects and immersive content built in partnership with top-tier companies, you’ll master the tech skills companies want.
                </p>
            </div>
            <div className='2xl:w-[1280px] 2xl:mx-auto w-full mt-10'>
                <Slider {...settings}>
                    <div className='px-5'>
                        <div className='bg-violet-50 rounded-2xl py-10 px-16'>
                            <div>
                                <img loading='lazy'
                                    src="/images/mern-stack-web/e-commerce-web.png"
                                    alt="E-commerce icon"
                                    className='w-40 h-40 mx-auto'
                                />
                            </div>
                            <div className='mt-5'>
                                <h4 className='text-lg font-semibold text-gray-800 text-center'>
                                    Work like Backend Developers at Swiggy
                                </h4>
                                <p className='text-base text-gray-600 text-center'>
                                    Build a high-scale distributed web backend for a food ordering app
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-3 mt-5'>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    REST API
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    MongoDB
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Node JS
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Express JS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='bg-violet-50 rounded-2xl py-10 px-16'>
                            <div>
                                <img loading='lazy'
                                    src="/images/mern-stack-web/technology.png"
                                    alt="E-commerce icon"
                                    className='w-40 h-40 mx-auto'
                                />
                            </div>
                            <div className='mt-5'>
                                <h4 className='text-lg font-semibold text-gray-800 text-center'>
                                    Work like Backend Developers at Swiggy
                                </h4>
                                <p className='text-base text-gray-600 text-center'>
                                    Build a high-scale distributed web backend for a food ordering app
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-3 mt-5'>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    REST API
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    MongoDB
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Node JS
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Express JS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='bg-violet-50 rounded-2xl py-10 px-16'>
                            <div>
                                <img loading='lazy'
                                    src="/images/mern-stack-web/e-commerce-web.png"
                                    alt="E-commerce icon"
                                    className='w-40 h-40 mx-auto'
                                />
                            </div>
                            <div className='mt-5'>
                                <h4 className='text-lg font-semibold text-gray-800 text-center'>
                                    Work like Backend Developers at Amazon
                                </h4>
                                <p className='text-base text-gray-600 text-center'>
                                    Build a functional and scalable e-commerce app
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-3 mt-5'>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    REST API
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    MongoDB
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Node JS
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Express JS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='bg-violet-50 rounded-2xl py-10 px-16'>
                            <div>
                                <img loading='lazy'
                                    src="/images/mern-stack-web/front-end.png"
                                    alt="E-commerce icon"
                                    className='w-40 h-40 mx-auto'
                                />
                            </div>
                            <div className='mt-5'>
                                <h4 className='text-lg font-semibold text-gray-800 text-center'>
                                    Work like Backend Developers at Amazon
                                </h4>
                                <p className='text-base text-gray-600 text-center'>
                                    Build a functional and scalable e-commerce app
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-3 mt-5'>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    React JS
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    MongoDB
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Node JS
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Express JS
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
        <section
            className='py-20 bg-violet-900 bg-cover bg-no-repeat bg-center'
            style={{ backgroundImage: `url(/images/mern-stack-web/earth-shape.png)` }}
        >
            <div className='w-[90%] mx-auto'>
                <div>
                    <h1 className='text-5xl font-semibold text-white'>
                        Course Curriculum
                    </h1>
                </div>
                <div className='flex mt-10'>
                    <div className='w-4/6 bg-violet-700/50 p-5 rounded-lg'>
                        <ul className='list-none max-h-[30rem] overflow-y-auto scrollBar-sm flex flex-col gap-1'>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 1 ? 1 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Intro to nodejs
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 1 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 1 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 1 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Nodejs</li>
                                        <li>REPL</li>
                                        <li>Native modules</li>
                                        <li>Modules in nodejs</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 2 ? 2 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Node JS Modules
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 2 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 2 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 2 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Functions</li>
                                        <li>Buffer</li>
                                        <li>Module</li>
                                        <li>Modules Types</li>
                                        <li>Core Modules</li>
                                        <li>Local Modules</li>
                                        <li>Modules Exports</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 3 ? 3 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Node Package Manager
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 3 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 3 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 3 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>What is NPM</li>
                                        <li>Installing Packages Locally</li>
                                        <li>Installing package globally</li>
                                        <li>Adding dependency in package Json</li>
                                        <li>Updating packages</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 4 ? 4 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Creating Web Server
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 4 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 4 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 4 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Creating Web Server</li>
                                        <li>Sending Requests</li>
                                        <li>Handling HTTP requests</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 5 ? 5 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        File System
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 5 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 5 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 5 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Read File</li>
                                        <li>Writing a File</li>
                                        <li>Opening a File</li>
                                        <li>Deleting a File</li>
                                        <li>Writing a file asynchronously</li>
                                        <li>Other I/O Operations</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 6 ? 6 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Debugging Node JS Application
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 6 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 6 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 6 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Core Node JS Debugger</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 7 ? 7 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Events
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 7 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 7 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 7 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Event Emitter class</li>
                                        <li>Inheriting Events</li>
                                        <li>Returning event emitter</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 8 ? 8 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Express JS
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 8 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 8 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 8 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Configuring Routes</li>
                                        <li>Working with Express</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 9 ? 9 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Serving Static Resources
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 9 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 9 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 9 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Serving Static Files</li>
                                        <li>Working with Middle Ware</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 10 ? 10 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Database Connectivity
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 10 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 10 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 10 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Connecting String</li>
                                        <li>Configuring</li>
                                        <li>Updating Records</li>
                                        <li>Working with Select Command</li>
                                        <li>Deleting Records</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 11 ? 11 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Project Development
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 11 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 11 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 11 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Project Development using Node JS</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        </section >
        <section className='py-24'>
            <div>
                <h1 className='text-5xl font-semibold text-gray-800 text-center'>
                    Technologies You Will Master Hands-On
                </h1>
            </div>
            <div className='w-4/5 mx-auto mt-16 grid grid-cols-4 gap-8'>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/backend-development/rest-api.png"
                        alt="javascript"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        REST API
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/backend-development/nodejs.png"
                        alt="html5"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Node JS
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/backend-development/express-js.png"
                        alt="css3"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Express JS
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/backend-development/mongodb.png"
                        alt="React JS"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        MongoDB
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/backend-development/git.png"
                        alt="Node JS"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Git
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/backend-development/aws.png"
                        alt="Express JS"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        AWS
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/backend-development/jwt.png"
                        alt="Json Web Token"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        JWT
                    </h4>
                </div>
            </div>
        </section>
        <section
            className='py-24 bg-cover bg-no-repeat bg-bottom'
            style={{ backgroundImage: 'url(/images/bg_banner1.jpg)' }}
        >
            <div className='text-center text-white'>
                <h1 className='text-5xl font-semibold mb-12'>
                    Have any further questions?
                </h1>
                <button
                    className='border border-white py-3 px-10 text-base hover:bg-white hover:text-violet-600 duration-500'
                >
                    Contact Us
                </button>
            </div>
        </section>
        <section className='py-24'>
            <div className='xl:max-w-3xl w-3/5 mx-auto'>
                <h1 className='text-5xl font-semibold text-gray-800 text-center'>
                    FAQs
                </h1>
                <ul className='list-none flex flex-col gap-2 mt-10'>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 1 ? 1 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                How long does it take to become a back-end developer?
                            </h2>
                            <span className='w-8 h-8 text-gray-800 relative'>
                                <MdKeyboardArrowDown
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 1 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                />
                                <MdKeyboardArrowUp
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 1 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                />
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden maxH-0 pl-5 ${indexFaq === 1 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                It usually takes three months to four years to become a back-end developer depending on the skill set needed to be acquired. A coding boot camp can be an immediate option to become a back-end developer. But four-year degree courses will land the developer in a better position.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 2 ? 2 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                Is it hard to become a back-end developer?
                            </h2>
                            <span className='w-8 h-8 text-gray-800 relative'>
                                <MdKeyboardArrowDown
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 2 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                />
                                <MdKeyboardArrowUp
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 2 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                />
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden maxH-0 pl-5 ${indexFaq === 2 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                No, if the person is interested in programming and its skills, they can become a back-end developer. It might take time, but it is not more challenging.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 3 ? 3 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                Do I need a degree to become a back-end developer?
                            </h2>
                            <span className='w-8 h-8 text-gray-800 relative'>
                                <MdKeyboardArrowDown
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 3 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                />
                                <MdKeyboardArrowUp
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 3 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                />
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden maxH-0 pl-5 ${indexFaq === 3 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                No, it is not necessary. Anyone with the knowledge and skills related to programming can become a back-end developer.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 4 ? 4 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                Which language is used in back-end development?
                            </h2>
                            <span className='w-8 h-8 text-gray-800 relative'>
                                <MdKeyboardArrowDown
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 4 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                />
                                <MdKeyboardArrowUp
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 4 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                />
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden maxH-0 pl-5 ${indexFaq === 4 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                Multiple programming languages are being used in back-end development. The most common use programming languages include Node.js, Java, Python, SQL, Ruby, PHP, etc.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <Footer />


        {/* <!-- Intro Video start --> */}
        {
            introVideo && <div className='fixed inset-0 z-50 bg-black/70 grid place-items-center'>
                <div className='w-[800px] h-[70vh] p-12 bg-black rounded-xl relative'>
                    <button
                        onClick={() => setIntroVideo(false)}
                        className='absolute top-4 right-4'
                    >
                        <IoCloseSharp className='inline-block text-3xl text-white' />
                    </button>
                    <iframe
                        title='Intro to Backend Web Development Program'
                        loading='lazy'
                        className='w-full h-full rounded-xl'
                        src="https://www.youtube.com/embed/eXjECPLXZoo?autoplay=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fcrio.do"
                        frameborder="0"
                    ></iframe>
                </div>
            </div>
        }
        {/* <!-- Intro Video End --> */}
    </>);
};

export default BackendDevelopment;