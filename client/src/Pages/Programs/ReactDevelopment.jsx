import React from 'react';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import { useState } from 'react';
import { FaReact, FaRegPlayCircle } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { GiCheckMark } from 'react-icons/gi';
import { HiCodeBracket } from 'react-icons/hi2';
import { TfiInfinite } from 'react-icons/tfi';
import { BiMessageSquareDots } from 'react-icons/bi';
import { VscGithubAlt } from 'react-icons/vsc';
import { BsGraphUp } from 'react-icons/bs';
import Slider from 'react-slick';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Footer from '../Shared/Footer/Footer';

const ReactDevelopment = () => {
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
        <PageTitle title="React-JS Development" />
        <Header />
        <section className='bg-gradient-to-r from-violet-800 via-violet-700 to-violet-500 pt-16 pb-24 relative'>
            <div className="2xl:w-[1280px] w-[90%] mx-auto grid grid-cols-2">
                <div className=''>
                    <h1 className='text-[2.6rem] leading-[55px] font-semibold text-white my-5'>
                        The Complete React.js Development Program
                    </h1>
                    <h3 className='text-xl font-medium mt-2 mb-10 text-yellow-400'>
                        - for Beginners and Experienced Learners
                    </h3>
                    <p className='text-xl font-light text-gray-100'>
                        In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries.
                    </p>

                    <div className='mt-8'>
                        <button
                            onClick={() => setIntroVideo(!introVideo)}
                            className='flex gap-1 items-center text-lg font-semibold text-[#00D8FF]'
                        >
                            <FaRegPlayCircle className='inline-block text-xl' />
                            Intro to React.js Development Program
                        </button>
                    </div>

                    <div className='mt-4'>
                        <button
                            className='w-max lg:mx-0 mx-auto px-8 py-3 text-base font-medium bg-white duration-300 text-violet-800 flex items-center gap-2 rounded-md hover:shadow-[0_3px_15px_rgb(255,255,255,0.5)]'
                        >
                            Enroll Now
                            <HiArrowNarrowRight className='text-2xl font-bold' />
                        </button>
                    </div>
                </div>
                <div className='w-full h-full pl-10'>
                    <div className='w-full h-full grid place-items-center [background-image:radial-gradient(#9372f5,_#5B21B6)]'>
                        <img
                            loading='lazy'
                            src="/images/react-development/react-icon.png"
                            alt="React Icon"
                            className='w-72 h-auto animate-spin [animation:_spin_20s_linear_infinite]'
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className='py-20'>
            <div className='2xl:w-[1280px] w-[90%] mx-auto'>
                <h1 className='text-5xl font-semibold text-gray-800 text-center'>
                    Course Overview
                </h1>
                <div className='grid grid-cols-2 items-center mt-16'>
                    <div className='bg-violet-50 p-8'>
                        <h3 className='text-lg font-semibold text-gray-800'>
                            By the end of the course, you should be able to:
                        </h3>
                        <ul className='list-none pl-2 mt-3 flex flex-col gap-3 text-base text-gray-600'>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Interact with a remote server and fetch and post data via an API
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Seamlessly test React applications with React Testing Library
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Integrate commonly used React libraries to streamline your application development
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Become a professional React-JS Developer and get hired
                            </li>
                        </ul>
                    </div>
                    <div className='pl-8'>
                        <p className='text-lg text-gray-600 mt-0'>
                            This course was designed to be extremely beginner friendly who want to learn Frontend Development. The course covers the fundamentals of HTML, CSS, JavaScript, and React which are the building blocks of modern web development. The course will start with an introduction to web development and then move on to the basics of HTML, CSS (also have Bootstrap and Tailwind), and JavaScript. After that, you will jump to React.js, Redux, and Next.js. Throughout the course, you will apply the concepts you have learned to create a responsive, Dynamic, and interactive web page.
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
                    <div className='w-3/5 grid grid-cols-2 text-lg text-gray-900'>
                        <ul className='list-none flex flex-col gap-4'>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                React Hooks
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                Redux in React
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                React Context
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                Job interview strategies
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                React Fragment
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                shouldComponentUpdate()
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                React.memo()
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                Optimization
                            </li>
                        </ul>
                        <ul className='list-none flex flex-col gap-4'>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                React Router
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                Plain JS Redux
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                Render props
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                Higher order components
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                defaultProps & propTypes
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                PureComponent
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                Children
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-2 mt-1'>
                                    <FaReact />
                                </span>
                                And a lot more!
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
                        Work Experience-Based Learning Approach <br /> To Master React.js Developer Skills
                    </h1>
                    <p className='text-lg font-extralight text-gray-300 text-center mt-5'>
                        Build software projects like the top 1% developers and learn all the skills you need to land the best React developer jobs.
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
                            5 work-like professional projects, with mentorship, to master React skills in an actual developer environment.
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
                            In-built career assistance to get your profile ready and guide you in applying for exciting roles in React.js development.
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
                                    Work like Frontend Developers at Swiggy
                                </h4>
                                <p className='text-base text-gray-600 text-center'>
                                    Build a high-scale distributed web backend for a food ordering app
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-3 mt-5'>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    HTML
                                </div>
                                <div className='border-2 rounded-full border-violet-600 text-sm font-semibold text-violet-600 text-center p-1'>
                                    Tailwind CSS
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
                                    src="/images/mern-stack-web/technology.png"
                                    alt="E-commerce icon"
                                    className='w-40 h-40 mx-auto'
                                />
                            </div>
                            <div className='mt-5'>
                                <h4 className='text-lg font-semibold text-gray-800 text-center'>
                                    Work like Frontend Developers at Swiggy
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
                                        Getting Started
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
                                        <li>What Is React</li>
                                        <li>Environment Setup</li>
                                        <li>ES6 Refresher - Part 1</li>
                                        <li>ES6 Refresher - Part 2</li>
                                        <li>ES6 Refresher - Part 3</li>
                                        <li>Create React App vs Manual Setup</li>
                                        <li>Installing & Using The CLI</li>
                                        <li>A Look At The Initial React Files & How They Work</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 2 ? 2 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Components, JSX & Props
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
                                        <li>Thinking In Components</li>
                                        <li>What Is JSX</li>
                                        <li>JSX Expressions</li>
                                        <li>Creating Your First Component</li>
                                        <li>Functional Components</li>
                                        <li>Working With Props</li>
                                        <li>Typechecking With PropTypes</li>
                                        <li>CSS In React</li>
                                        <li>Adding Bootstrap</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 3 ? 3 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        State & The Context API
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
                                        <li>Changing State From Another Component</li>
                                        <li>Using The Context API & Provider State</li>
                                        <li>Adding A Context Reducer For Actions</li>
                                        <li>Creating State</li>
                                        <li>Events In React</li>
                                        <li>Changing State</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 4 ? 4 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Working With Forms
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
                                        <li>Creating A Form With State</li>
                                        <li>Controlled Components & onChange</li>
                                        <li>TextInputGroup Component For DRY Code</li>
                                        <li>Uncontrolled Components & Refs</li>
                                        <li>Form Submit Action To Context</li>
                                        <li>Error Checking & Display</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 5 ? 5 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        React Router v4
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
                                        <li>React Router Setup</li>
                                        <li>Links, Params & Redirect</li>
                                        <li>404 Not Found Page</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 6 ? 6 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Lifecycle, HTTP & Deployment
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
                                        <li>Lifecycle Methods</li>
                                        <li>GET Requests</li>
                                        <li>POST & DELETE Requests</li>
                                        <li>Using AsyncAwait</li>
                                        <li>EditContact Component & Fetch Contact</li>
                                        <li>PUT Request & Update Action</li>
                                        <li>Deploy To Github Pages</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 7 ? 7 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Learning Redux
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
                                        <li>A Note On Redux</li>
                                        <li>App Starting Point For Redux</li>
                                        <li>Redux Store Setup & Contact Reducer</li>
                                        <li>Connecting Components & Dispatching Actions</li>
                                        <li>Creating A Separate Actions File</li>
                                        <li>Delete & Add Contact Action</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 8 ? 8 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Redux Thunk & HTTP
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
                                        <li>GET Request Dispatch</li>
                                        <li>POST & DELETE Request Dispatch</li>
                                        <li>Get Single Contact For Edit</li>
                                        <li>PUT Request & Dispatch</li>
                                        <li>Deploy To Apache</li>
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
                                What is React?
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
                            className={`overflow-hidden maxH-0 ${indexFaq === 1 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                React is a JavaScript library used to build websites and web applications. Facebook created it in 2013, and today, it’s one of the most popular web development libraries in the world, used by companies like Meta, Netflix, Uber, Yahoo, and more.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 2 ? 2 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                Why is React called a library?
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
                            className={`overflow-hidden maxH-0 ${indexFaq === 2 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                A library is a set of pre-written code that streamlines development, expands functionality, and resolves common issues. They help save time and energy since you don’t have to write everything from scratch.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 3 ? 3 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                Can I learn React without knowing JavaScript?
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
                            className={`overflow-hidden maxH-0 ${indexFaq === 3 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                React doesn't rely on any advanced, mind-boggling JavaScript features but you absolutely should know the basics of JavaScript before attempting learning React; otherwise, you're in for a hard time.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 4 ? 4 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                What kind of jobs can React get me?
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
                            className={`overflow-hidden maxH-0 ${indexFaq === 4 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                React was the most in-demand web framework in 2023, so it’s a great skill for Web Developers — specifically Front-End and Full-Stack Developers. It can also be helpful if you want a career in Android or iOS development.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 5 ? 5 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                What else should I study if I am learning React?
                            </h2>
                            <span className='w-8 h-8 text-gray-800 relative'>
                                <MdKeyboardArrowDown
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 5 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                />
                                <MdKeyboardArrowUp
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 5 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                />
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden maxH-0 ${indexFaq === 5 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                React is a JavaScript library, so you’ll need to know JavaScript (along with HTML and CSS). If you want to learn how to build dynamic web pages, you may also want to learn how to use the React Router library. And if you’re more into mobile development, try the React Native framework.
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

export default ReactDevelopment;