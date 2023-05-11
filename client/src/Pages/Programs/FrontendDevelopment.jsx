import React from 'react';
import './programs.css'
import PageTitle from '../Shared/PageTitle';
import Header from '../Shared/Header/Header';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { GiCheckMark } from 'react-icons/gi';
import Footer from '../Shared/Footer/Footer';
import { BsGraphUp } from 'react-icons/bs';
import { VscGithubAlt } from 'react-icons/vsc';
import { BiMessageSquareDots } from 'react-icons/bi';
import { TfiInfinite } from 'react-icons/tfi';
import { HiCodeBracket } from 'react-icons/hi2';
import Slider from 'react-slick';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const FrontendDevelopment = () => {
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
        <PageTitle title='Frontend Development Program' />
        <Header />
        <section className='bg-violet-800 pt-16 pb-20 relative'>
            <div className="2xl:w-[1280px] w-[90%] mx-auto grid grid-cols-2">
                <div className='text-gray-100'>
                    <h1 className='text-[2.6rem] leading-[55px] font-semibold text-white my-5'>
                        The Complete Frontend Web Development Program
                    </h1>
                    <h3 className='text-xl font-medium mb-10 text-yellow-400'>
                        for Beginners and Experienced Learners
                    </h3>
                    <p className='text-xl font-light'>
                        Learn how to build high quality websites and dynamic applications to create stunning user experiences for the web.
                    </p>

                    {/* <div className='mt-8'>
                        <button
                            onClick={() => setIntroVideo(!introVideo)}
                            className='flex gap-1 items-center text-lg font-semibold text-[#20D19E]'
                        >
                            <FaRegPlayCircle className='inline-block text-xl' />
                            Intro to Backend Development Program
                        </button>
                    </div> */}

                    <div className='mt-12'>
                        <button
                            className='w-max lg:mx-0 mx-auto px-8 py-3 text-base font-medium bg-white duration-300 text-violet-800 flex items-center gap-2 rounded-md hover:shadow-[0_3px_15px_rgb(255,255,255,0.5)]'
                        >
                            Enroll Now
                            <HiArrowNarrowRight className='text-2xl font-bold' />
                        </button>
                    </div>
                </div>
                <div className='w-full h-full pl-10 grid place-items-center'>
                    <img
                        loading='lazy'
                        src="/images/frontend-development/frontend-dev.png"
                        alt="Rocket shape"
                        className='w-full h-auto'
                    />
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
                                Understand the fundamentals of Frontend Web Development
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Create a web page using HTML5 & CSS3 from scratch, & build a full working website
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Build a front-end Reactive Web applications with CRUD
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Master on JavaScript + ECMA Script 6 (ES6) from scratch
                            </li>
                            <li className='flex items-start'>
                                <span className='w-max h-full mr-3'>
                                    <GiCheckMark className='text-xl mt-1' />
                                </span>
                                Become a professional Frontend Web Developer and get hired
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
        <section className='pt-20 pb-24 bg-[#15171F]'>
            <div className='w-[85%] mx-auto'>
                <div>
                    <h1 className='text-4xl leading-[50px] font-semibold text-gray-100 text-center'>
                        Work Experience-Based Learning Approach <br /> To Master Frontend Web Developer Skills
                    </h1>
                    <p className='text-lg font-extralight text-gray-300 text-center mt-5'>
                        Build software projects like the top 1% developers and learn all the skills you need to land the best frontend developer jobs.
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
                            5 work-like professional projects, with mentorship, to master Front-end skills in an actual developer environment.
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
                            In-built career assistance to get your profile ready and guide you in applying for exciting roles in Frontend development.
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
                                        Introduction to HTML
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
                                        <li>Create a programming project with a code editor.</li>
                                        <li>Construct nested websites with HTML tags and elements.</li>
                                        <li>Troubleshoot and debug HTML errors and bugs.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 2 ? 2 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Introduction to CSS
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
                                        <li>Style website components by ID, class, and type.</li>
                                        <li>Connect CSS to a website.</li>
                                        <li>Position and display website elements</li>
                                        <li>Modify and control website typography.</li>
                                        <li>Troubleshoot and debug issues with stylesheets.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 3 ? 3 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Introducing Flexbox
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
                                        <li>Control web elements orientation and layout with Flexbox.</li>
                                        <li>Control ordering of web elements with Flexbox.</li>
                                        <li>Align and justify web elements with Flexbox.</li>
                                        <li>Transform and resize web elements with Flexbox</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 4 ? 4 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        CSS Grid
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
                                        <li>Compare and contrast the use cases for CSS Grid and Flexbox.</li>
                                        <li>Structure the layout of a web page using grid columns and rows.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 5 ? 5 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Creating Responsive Layouts
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
                                        <li>Define custom styles for different screen sizes using media queries.</li>
                                        <li>Observe and create breakpoints in a website to change layout and styling as a page is resized.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 6 ? 6 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        JavaScript-I
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
                                        <li>Inline javascript</li>
                                        <li>Internal javascript</li>
                                        <li>Accessing elements</li>
                                        <li>Onclick event</li>
                                        <li>Changing Website content</li>
                                        <li>Manipulating styles with javascript</li>
                                        <li>Disappearing circles</li>
                                        <li>Variables</li>
                                        <li>Array</li>
                                        <li>If statement</li>
                                        <li>Random number guessing game</li>
                                        <li>For loop</li>
                                        <li>While loop</li>
                                        <li>PROJECT-Reaction tester project</li>
                                        <li>External javascript</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 7 ? 7 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        JavaScript-II
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
                                        <li>DOM intro</li>
                                        <li>Naming conventions</li>
                                        <li>String concat</li>
                                        <li>Length property in strings</li>
                                        <li>Slicing</li>
                                        <li>Changing Case of string</li>
                                        <li>Operators in js</li>
                                        <li>Functions</li>
                                        <li>Objects</li>
                                        <li>How to add event listener in js</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 8 ? 8 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Creating Content with JavaScript
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
                                        <li>Modify HTML content with JavaScript.</li>
                                        <li>Create HTML content and elements with JavaScript.</li>
                                        <li>Remove HTML content with JavaScript.</li>
                                        <li>Style HTML content with JavaScript and CSS.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 9 ? 9 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Working with Browser Events
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
                                        <li>Describe and explain the phases of browser events.</li>
                                        <li>Create event listeners that handle browser events by writing code that runs when an event is triggered.</li>
                                        <li>Describe and explain the events that are fired as a web page loads.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 10 ? 10 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Performance
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
                                        <li>Manage website performance by controlling content creation efficiently.</li>
                                        <li>Describe what happens when a webpage has to be redrawn.</li>
                                        <li>Describe and explain the JavaScript call stack.</li>
                                        <li>Describe and explain the JavaScript event loop.</li>
                                        <li>Write efficient code by analyzing the call stack and event loop.</li>
                                        <li>Delay code execution with setTimeout.</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 11 ? 11 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        React-js
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
                                        <li>Intro to React-js</li>
                                        <li>Code sandbox</li>
                                        <li>JSX and babel</li>
                                        <li>JSX practice</li>
                                        <li>Javascript expression in JSX practice</li>
                                        <li>Javascript expression in jsx</li>
                                        <li>JSX styling React elements</li>
                                        <li>Inline style for React elements</li>
                                        <li>React styling practice</li>
                                        <li>React Components</li>
                                        <li>React Component Practice</li>
                                        <li>Import and export</li>
                                        <li>Export and import Practice</li>
                                        <li>Keeper app Project Part-1</li>
                                        <li>Props in react-js</li>
                                        <li>Adding React js developer tools</li>
                                        <li>Mapping Data to components</li>
                                        <li>Map function Practice challenge</li>
                                        <li>Map reduce and filter function In js ES6</li>
                                        <li>Arrow function in ES6</li>
                                        <li>Keeper App project Part-2</li>
                                        <li>React Conditional rendering</li>
                                        <li>ReactJs states</li>
                                        <li>React Hooks UseState</li>
                                        <li>Hooks use state practice</li>
                                        <li>Destructure Concept in ES6</li>
                                        <li>Handling events in React</li>
                                        <li>Form Events</li>
                                        <li>Class component Vs Hooks</li>
                                        <li>Handling multiple states in react js app</li>
                                        <li>Spread operator</li>
                                        <li>Component tree structure</li>
                                        <li>Keeper app project-3</li>
                                        <li>Material UI</li>
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
                        src="/images/frontend-development/javascript.png"
                        alt="javascript"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        JavaScript
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/frontend-development/html-5.png"
                        alt="html5"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        HTML 5
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/frontend-development/css-3.png"
                        alt="css3"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        CSS 3
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/frontend-development/react-js.png"
                        alt="React JS"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        React JS
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/frontend-development/jwt.png"
                        alt="Json Web Token"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        JWT
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/frontend-development/bootstrap.png"
                        alt="Bootstrap"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Bootstrap
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/frontend-development/tailwind.png"
                        alt="Tailwind"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Tailwind
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/frontend-development/next-js.png"
                        alt="Next JS"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Next JS
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/frontend-development/redux.png"
                        alt="Redux"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Redux
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/frontend-development/layout.png"
                        alt="Redux"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Website Layout
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md'>
                    <img loading='lazy'
                        src="/images/frontend-development/responsive.png"
                        alt="Redux"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Responsive
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
                                What are the prerequisites to learn the free Front End Developer course?
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
                                There are no prerequisites to learn Front End Development. This Front End Development free course has been designed to cater to beginners.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 2 ? 2 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                How do beginners learn Front End Development?
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
                                Beginners who want to learn Front End Development can start with the basics first. Once you have mastered the basics of Front End Development you can move on to advanced topics.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 3 ? 3 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                How long does it take to learn Front End Development from scratch?
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
                                This free Front End Development training consists of 12 hours of video content that will help you understand the concepts thoroughly.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 4 ? 4 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                What should I learn first in a free Front End Development course?
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
                                It is recommended that you always start with the basics of Front End Development first. For a better understanding, watch the learning videos in sequence without skipping any.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 5 ? 5 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                Is Front End Development for Beginners easy to learn?
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
                            className={`overflow-hidden maxH-0 pl-5 ${indexFaq === 5 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                The videos that you find as a part of this free Front End Development course are created by mentors who are industry leaders with vast experience in the field. They are aware of the needs of different learners and have designed the course to be easy to learn.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 6 ? 6 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                Will I get a certificate after completing the Front End Development course?
                            </h2>
                            <span className='w-8 h-8 text-gray-800 relative'>
                                <MdKeyboardArrowDown
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 6 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                />
                                <MdKeyboardArrowUp
                                    className={`absolute inset-0 text-3xl duration-500 ${indexFaq === 6 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                />
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden maxH-0 pl-5 ${indexFaq === 6 ? 'maxH-full' : ''}`}
                        >
                            <p className='text-base font-light text-gray-600 mt-2'>
                                Yes, you will receive a course completion certificate after completing the free Front End Development
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <Footer />
    </>);
};

export default FrontendDevelopment;