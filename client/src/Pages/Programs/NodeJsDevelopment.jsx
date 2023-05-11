import React from 'react';
import PageTitle from '../Shared/PageTitle';
import Header from '../Shared/Header/Header';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaNodeJs, FaRegPlayCircle } from 'react-icons/fa';
import { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { VscGithubAlt } from 'react-icons/vsc';
import { BsGraphUp } from 'react-icons/bs';
import { BiMessageSquareDots } from 'react-icons/bi';
import { TfiInfinite } from 'react-icons/tfi';
import { HiCodeBracket } from 'react-icons/hi2';
import Slider from 'react-slick';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Footer from '../Shared/Footer/Footer';

const NodeJsDevelopment = () => {
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
        <PageTitle title='Node-js Development Program' />
        <Header />
        <section className='bg-violet-50 pt-16 pb-20 relative'>
            <div className="2xl:w-[1280px] w-[90%] mx-auto grid grid-cols-2">
                <div className='text-gray-600'>
                    <h1 className='text-[2.6rem] leading-[55px] font-semibold text-violet-600 my-5'>
                        The Complete Node.js Development Program
                    </h1>
                    <h3 className='text-xl font-medium mt-2 mb-10'>
                        -for Beginners and Experienced Learners
                    </h3>
                    <p className='text-xl font-light text-gray-700'>
                        Take your JavaScript skills to the server-side! Learn how to fully craft your site's backend using Express, the most popular back-end JavaScript framework!
                    </p>

                    <div className='mt-8'>
                        <button
                            onClick={() => setIntroVideo(!introVideo)}
                            className='flex gap-1 items-center text-lg font-semibold text-[#00D8FF]'
                        >
                            <FaRegPlayCircle className='inline-block text-xl' />
                            Intro to Full Stack Web Development Program
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
                        src="/images/node-js-development/node-js.png"
                        alt="Node js icon"
                        className='w-96 h-auto'
                    />
                </div>
            </div>
        </section>
        <section className='py-20'>
            <div className='2xl:w-[1280px] w-[90%] mx-auto'>
                <h1 className='text-5xl font-semibold text-gray-800 text-center'>
                    Course Overview
                </h1>
                <div className='grid grid-cols-2 items-start mt-16'>
                    <div className='bg-violet-50 p-8'>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            By the end of the course, you should be able to:
                        </h3>
                        <ul className='list-none pl-2 mt-3 flex flex-col gap-4 text-base text-gray-600'>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Understand the fundamentals of Node.js, including its event-driven, non-blocking I/O model and the role of the V8 JavaScript engine.
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Integrate Node.js with front-end frameworks, such as React, Vue.js, and Angular, to create full-stack applications.
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Build server-side applications using Node.js, including web servers and command-line tools.
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Understand how to debug, test, and deploy Node.js applications.
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Work with databases, such as MySQL, PostgreSQL, and MongoDB, using Node.js.
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                application development Become a professional Node.JS Developer and get hired
                            </li>
                        </ul>
                    </div>
                    <div className='pl-8 text-lg text-gray-600'>
                        <p className='mt-8'>
                            This introductory course offers a comprehensive overview of server-side web development concepts.
                        </p>
                        <p className='mt-4'>
                            Through this course, you'll be introduced to the fundamental components that comprise the back-end of websites and web applications, and you'll gain practical experience working with the Node.js runtime environment.
                        </p>
                        <p className='mt-4'>
                            With the knowledge you acquire, you'll be equipped to dive into popular Node frameworks such as Express.js, enabling you to create robust and dynamic web applications.
                        </p>
                    </div>
                </div>
            </div>
            <div className='max-w-5xl w-4/5 mx-auto flex items-start justify-center gap-px mt-28 mb-20'>
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
        <section className='py-20 bg-blue-100'>
            <div className='2xl:w-[1280px] w-[90%] mx-auto'>
                <h1 className='text-5xl font-semibold text-gray-800 text-center'>
                    You'll learn
                </h1>
                <div className='flex items-center mt-12'>
                    <div className='w-3/5 grid grid-cols-2 gap-10 text-lg text-gray-900'>
                        <ul className='list-none flex flex-col gap-4'>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                All about Node module system
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Use existing Node packages or publish your own
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Write asynchronous JavaScript code (promises and async/await)
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Implement CRUD operations
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Store complex, relational data in MongoDB using Mongoose
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Implement data validation
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Implement authentication and authorization
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Handle and log errors effectively
                            </li>
                        </ul>
                        <ul className='list-none flex flex-col gap-4'>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Set up configuration for various environments (dev, test, prod)
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Write unit and integration tests
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Build features using test-driven development
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                Deploy your Node apps to vercel
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaNodeJs />
                                </span>
                                And much more!
                            </li>
                        </ul>
                    </div>
                    <div className='w-2/5 h-full grid place-items-center'>
                        <img
                            src="/images/react-development/learn-code.png"
                            alt="Learn React"
                            className='w-full h-auto'
                            loading='lazy'
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className='pt-20 pb-24 bg-[#15171F]'>
            <div className='w-[85%] mx-auto'>
                <div>
                    <h1 className='text-4xl leading-[50px] font-semibold text-gray-100 text-center'>
                        Work Experience-Based Learning Approach <br /> To Master Node.js Developer Skills
                    </h1>
                    <p className='text-lg font-extralight text-gray-300 text-center mt-5'>
                        Build software projects like the top 1% developers and learn all the skills you need to land the best node.js developer jobs.
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
                            5 work-like professional projects, with mentorship, to master Node.js skills in an actual developer environment.
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
                            In-built career assistance to get your profile ready and guide you in applying for exciting roles in Node.js development.
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
                        <div className='bg-violet-50 rounded-2xl py-10 px-12'>
                            <div>
                                <img loading='lazy'
                                    src="/images/mern-stack-web/e-commerce-web.png"
                                    alt="E-commerce icon"
                                    className='w-40 h-40 mx-auto'
                                />
                            </div>
                            <div className='mt-5'>
                                <h4 className='text-lg font-semibold text-gray-800 text-center'>
                                    Work like Node.js Developers at Netflix
                                </h4>
                                <p className='text-base text-gray-600 text-center'>
                                    Build a high-scale distributed web backend for high performance
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-3 mt-5'>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Node JS
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Node Modules
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    NPM Packages
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    MVC Pattern
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='bg-violet-50 rounded-2xl py-10 px-12'>
                            <div>
                                <img loading='lazy'
                                    src="/images/mern-stack-web/technology.png"
                                    alt="E-commerce icon"
                                    className='w-40 h-40 mx-auto'
                                />
                            </div>
                            <div className='mt-5'>
                                <h4 className='text-lg font-semibold text-gray-800 text-center'>
                                    Work like Node.js Developers at Swiggy
                                </h4>
                                <p className='text-base text-gray-600 text-center'>
                                    Build a high-scale distributed web backend for a food ordering app
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-3 mt-5'>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    React JS
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Bootstrap
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Redux
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    API
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='bg-violet-50 rounded-2xl py-10 px-12'>
                            <div>
                                <img loading='lazy'
                                    src="/images/mern-stack-web/e-commerce-web.png"
                                    alt="E-commerce icon"
                                    className='w-40 h-40 mx-auto'
                                />
                            </div>
                            <div className='mt-5'>
                                <h4 className='text-lg font-semibold text-gray-800 text-center'>
                                    Work like Frontend Developers at Amazon
                                </h4>
                                <p className='text-base text-gray-600 text-center'>
                                    Build a functional and scalable e-commerce app
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-3 mt-5'>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    HTML
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Bootstrap 5
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    JavaScript
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Fully Responsive
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='bg-violet-50 rounded-2xl py-10 px-12'>
                            <div>
                                <img loading='lazy'
                                    src="/images/mern-stack-web/front-end.png"
                                    alt="E-commerce icon"
                                    className='w-40 h-40 mx-auto'
                                />
                            </div>
                            <div className='mt-5'>
                                <h4 className='text-lg font-semibold text-gray-800 text-center'>
                                    Work like Frontend Developers at Amazon
                                </h4>
                                <p className='text-base text-gray-600 text-center'>
                                    Build a functional and scalable e-commerce app
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-3 mt-5'>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Next JS
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Bootstrap
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Redux
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    API
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
        <Footer />
    </>);
};

export default NodeJsDevelopment;