import React, { useState } from 'react';
import './programs.css'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiCodeBracket } from 'react-icons/hi2';
import { TfiInfinite } from 'react-icons/tfi';
import { BiMessageSquareDots } from 'react-icons/bi';
import { VscGithubAlt } from 'react-icons/vsc';
import { BsGraphUp } from 'react-icons/bs';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Footer from '../Shared/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import useGetAllCourses from '../../API/useGetAllCourses';
import PageTitle from '../Shared/PageTitle';
import Header from '../Shared/Header/Header';

const MERNStackWebDevelopment = () => {
    const [coursesData] = useGetAllCourses();
    const { pathname } = window.location;
    // const [indexCC, setIndexCC] = useState(0);
    const [indexFaq, setIndexFaq] = useState(0);
    const navigate = useNavigate();

    // <!-- Find url path name of course page -->
    const course = coursesData?.find(f =>
        f.src_path === pathname ||
        f.src_path === '"' + pathname + '"' ||
        f.src_path === "'" + pathname + "'"
    );

    // const settings = {
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 4000,
    //     autoplaySpeed: 4000,
    //     cssEase: "linear",
    //     pauseOnHover: false,
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 1023,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         }
    //     ]
    // };

    return (<>
        <PageTitle title='MERN Stack Web Development Program' />
        <section
            style={{ backgroundImage: 'url(/images/mern-stack-web/shapes.png)' }}
            className="bg-violet-800 relative bg-no-repeat bg-cover lg:[backgroundSize:140%_auto] [backgroundPositionX:center] [backgroundPositionY:top]"
        >
            <Header textColor='text-white' />
            <div className="max-w-4xl w-[90%] mx-auto md:pt-16 pt-12 md:pb-32 pb-20">
                <div className='text-center'>
                    <h3 className='text-xl font-medium mb-5'>
                        For Beginners and Experienced Learners
                    </h3>
                    <h1 className='lg:text-5xl lg:leading-[1.2] md:text-4xl text-3xl font-semibold text-white'>
                        Full Stack Web Development Program — MERN Stack
                    </h1>
                    <p className='max-w-2xl mx-auto text-lg font-light text-gray-100 md:mt-12 mt-10 mb-10'>
                        The MERN stack refers to a set of tools used to build powerful web applications from end to end. It includes MongoDB, Express, React, and Node.js, and is useful in many development roles.
                    </p>

                    <button
                        disabled={!course}
                        onClick={() => navigate(`/course/checkout/${course?._id}`)}
                        className='w-max mx-auto px-12 py-3 text-base font-medium border border-white hover:bg-white duration-300 text-white hover:text-violet-800 flex items-center gap-2 rounded'
                    >
                        Enroll Now
                        <HiArrowNarrowRight className='text-2xl font-bold' />
                    </button>
                </div>
            </div>
        </section>
        <section className='lg:my-36 md:my-28 my-20'>
            <div className='lg:max-w-5xl lg:w-11/12 w-max mx-auto flex lg:flex-row flex-col items-start justify-center gap-px'>
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
        <section className='pt-20 md:pb-28 pb-20 bg-[#15171F]' >
            <div>
                <div className='max-w-7xl w-4/5 mx-auto'>
                    <h1 className='md:text-4xl md:leading-[1.2] text-2xl sm:font-semibold font-medium text-gray-100 text-center'>
                        Work Experience-Based Learning Approach <br className='lg:block hidden' /> To Master Full Stack Developer Skills
                    </h1>
                    <p className='md:text-lg text-base font-light text-gray-300 text-center mt-5'>
                        Build software projects like the top 1% developers and learn all the skills you need to land the best full stack developer jobs.
                    </p>
                </div>
                <div className='max-w-7xl md:w-[85%] sm:w-3/5 w-[85%] mx-auto mt-16 grid items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 rounded'>
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
                            7 work-like professional projects, with mentorship, to master Full-Stack skills in an actual developer environment.
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
                            In-built career assistance to get your profile ready and guide you in applying for exciting roles in Full-Stack development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className='pt-20 pb-24'>
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
                                    Work like Full Stack Developers at Amazon
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
                                    Work like Full Stack Developers at Amazon
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
                                    Work like Full Stack Developers at Amazon
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
                                    Work like Full Stack Developers at Amazon
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
        </section> */}
        {/* <section
            className='py-20 bg-violet-900 bg-cover bg-no-repeat bg-center'
            style={{ backgroundImage: `url(/images/mern-stack-web/earth-shape.png)` }}
        >
            <div className='max-w-7xl w-[90%] mx-auto'>
                <div>
                    <h1 className='text-5xl font-semibold text-white text-center'>
                        Course Curriculum
                    </h1>
                </div>
                <div className='flex justify-center mt-10'>
                    <div className='w-4/6 bg-violet-700/50 p-5 rounded-lg'>
                        <ul className='list-none max-h-[30rem] overflow-y-auto scrollBar-sm flex flex-col gap-1'>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 1 ? 1 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Introduction
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
                                        <li>
                                            Introduction to the course
                                        </li>
                                        <li>
                                            How internet works
                                        </li>
                                        <li>
                                            What is web development
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 2 ? 2 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        HTML
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
                                        <li>Your first webpage</li>
                                        <li>The structure of a Webpage</li>
                                        <li>Creating a full webpage</li>
                                        <li>Header tags</li>
                                        <li>Paragraph tags</li>
                                        <li>Formatting tags</li>
                                        <li>Unordered list</li>
                                        <li>Ordered list</li>
                                        <li>Image tags</li>
                                        <li>Forms in HTML</li>
                                        <li>Tables</li>
                                        <li>Links</li>
                                        <li>HTML entities</li>
                                        <li>iFrame</li>
                                        <li>PROJECT- Putting it all together</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 3 ? 3 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        CSS
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
                                        <li>What is CSS</li>
                                        <li>Inline CSS</li>
                                        <li>Internal CSS</li>
                                        <li>Class and id</li>
                                        <li>Div</li>
                                        <li>Color</li>
                                        <li>Floating</li>
                                        <li>Positions</li>
                                        <li>Margins</li>
                                        <li>Padding</li>
                                        <li>Borders</li>
                                        <li>Font style</li>
                                        <li>Styling text</li>
                                        <li>Aligning text</li>
                                        <li>Styling links</li>
                                        <li>FlexBox in CSS</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 4 ? 4 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        JavaScript-I
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
                                    onClick={() => setIndexCC(pre => pre !== 5 ? 5 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        JavaScript-II
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
                                    onClick={() => setIndexCC(pre => pre !== 6 ? 6 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        jQuery
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
                                        <li>What is jQuery</li>
                                        <li>Including jQuery on our webpage</li>
                                        <li>Detecting a click</li>
                                        <li>Changing website content using jQuery</li>
                                        <li>Changing website styles</li>
                                        <li>Fading content</li>
                                        <li>Regular expression</li>
                                        <li>PROJECT-Form Validation</li>
                                        <li>Intro to jquery Ui Plugin</li>
                                        <li>Droppable</li>
                                        <li>Jqui widget</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 7 ? 7 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Bootstrap
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
                                        <li>Intro to Bootstrap</li>
                                        <li>Your first bootstrap site</li>
                                        <li>Grid</li>
                                        <li>Card in bootstrap</li>
                                        <li>Tables and Form</li>
                                        <li>Modals,popover and tooltips</li>
                                        <li>Scrollspy</li>
                                        <li>PROJECT-App landing project</li>
                                        <li>Themes in bootstrap</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 8 ? 8 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        React-js
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
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 9 ? 9 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Intro to nodejs
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
                                        <li>Nodejs</li>
                                        <li>REPL</li>
                                        <li>Native modules</li>
                                        <li>Modules in nodejs</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 10 ? 10 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Express with Nodejs
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
                                        <li>Express framework</li>
                                        <li>Creating a server using express</li>
                                        <li>Request and response using express</li>
                                        <li>Routes</li>
                                        <li>Sending html file as a response</li>
                                        <li>Post request in express</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 11 ? 11 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        API
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
                                        <li>API</li>
                                        <li>Authentication and JSON</li>
                                        <li>Weather app</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 12 ? 12 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Git and Github
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 12 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 12 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 12 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Git</li>
                                        <li>Version control using git</li>
                                        <li>Github and remote repositories</li>
                                        <li>Cloning</li>
                                        <li>Forking and pulling request</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 13 ? 13 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        EJS
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 13 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 13 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 13 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>EJS</li>
                                        <li>Creating Ejs template</li>
                                        <li>Creating a Todo list project Part-1</li>
                                        <li>Creating a Todo list Part-2</li>
                                        <li>Layouts In ejs</li>
                                        <li>Creating our own modules</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 14 ? 14 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Mongodb Database
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 14 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 14 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 14 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>What is database</li>
                                        <li>Installing mongodb</li>
                                        <li>Create In CRUD</li>
                                        <li>Read In CRUD</li>
                                        <li>Update and Delete In CRUD</li>
                                        <li>Relationship In mongodb</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='bg-violet-900 p-5'>
                                <div
                                    onClick={() => setIndexCC(pre => pre !== 15 ? 15 : 0)}
                                    className='flex items-center justify-between cursor-pointer'
                                >
                                    <h2 className='text-lg font-medium text-white'>
                                        Mongoose
                                    </h2>
                                    <span className='w-8 h-8 text-white relative'>
                                        <MdKeyboardArrowDown
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 15 ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                                        />
                                        <MdKeyboardArrowUp
                                            className={`absolute inset-0 text-3xl duration-500 ${indexCC === 15 ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                                        />
                                    </span>
                                </div>
                                <div
                                    className={`overflow-hidden maxH-0 pl-5 ${indexCC === 15 ? 'maxH-full' : ''}`}
                                >
                                    <ul className='text-base font-light text-gray-100 mt-2 list-disc'>
                                        <li>Mongoose</li>
                                        <li>Retrieving Data from Database</li>
                                        <li>Data Validation</li>
                                        <li>Delete and Update</li>
                                        <li>Connecting documents</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section > */}
        <section className='md:py-32 py-24'>
            <div>
                <h1 className='w-4/5 mx-auto lg:text-5xl md:text-4xl lg:leading-[1.2] text-3xl font-semibold text-gray-800 text-center'>
                    Technologies You Will Master Hands-On
                </h1>
            </div>
            <div className='max-w-7xl xl:w-4/5 lg:w-[90%] w-3/4 mx-auto mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/javascript.png"
                        alt="javascript"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        JavaScript
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/html-5.png"
                        alt="html5"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        HTML 5
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/css-3.png"
                        alt="css3"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        CSS 3
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/react-js.png"
                        alt="React JS"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        React JS
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/nodejs.png"
                        alt="Node JS"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Node JS
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/express-js.png"
                        alt="Express JS"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Express JS
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/jwt.png"
                        alt="Json Web Token"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        JWT
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/bootstrap.png"
                        alt="Bootstrap"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Bootstrap
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/tailwind.png"
                        alt="Tailwind"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Tailwind
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/git.png"
                        alt="Redux"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        Git & GitHub
                    </h4>
                </div>
                <div className='shadow-[0_2px_40px_rgba(124,58,237,0.1)] text-center py-12 px-4 rounded-md bg-white'>
                    <img loading='lazy'
                        src="/images/mern-stack-web/mongodb.png"
                        alt="MongoDB"
                        className='w-[70px] h-[70px] m-auto mb-5'
                    />
                    <h4 className='text-sm font-semibold'>
                        MongoDB
                    </h4>
                </div>
            </div>
        </section>
        <section
            className='sm:py-24 py-20 bg-cover bg-no-repeat bg-bottom'
            style={{ backgroundImage: 'url(/images/bg_banner1.jpg)' }}
        >
            <div className='text-center text-white'>
                <h1 className='lg:text-5xl md:text-4xl text-2xl font-semibold mb-12'>
                    Have any further questions?
                </h1>
                <button
                    className='border border-white py-3 px-10 text-base hover:bg-white hover:text-violet-600 duration-500'
                >
                    Contact Us
                </button>
            </div>
        </section>
        <section className='md:py-32 py-20'>
            <div className='max-w-3xl sm:w-4/5 w-[90%] mx-auto'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-gray-800 text-center'>
                    FAQs
                </h1>
                <ul className='list-none flex flex-col gap-2 mt-10'>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 1 ? 1 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                What is the meaning of MERN Stack?
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
                            <p className='text-base text-gray-600 mt-2'>
                                MERN Stack means the combination of four different technologies used for full-stack web development. These technologies include MongoDB, ExpressJS, ReactJS, and NodeJS. All the technologies in the MERN are based on JavaScript. It can be used easily for developing the front-end, back-end, and database of a project.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 2 ? 2 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                How to learn MERN stack development?
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
                            <p className='text-base text-gray-600 mt-2'>
                                You must follow a good learning path to learn MERN stack web development. First, start with the basics, including HTML, CSS, and JavaScript. Then move to the other components of this tech stack which are MongoDB, Express, React, and Node.
                                <br /> <br />
                                Our’s well-structured and practical MERN Stack courses for beginners is always a great choice to start learning every concept of this popular tech stack.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 3 ? 3 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                How much time is required to learn MERN stack web development?
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
                            <p className='text-base text-gray-600 mt-2'>
                                It takes at least six months to learn MERN stack development.
                            </p>
                        </div>
                    </li>
                    <li className='p-4 bg-violet-50 rounded'>
                        <div
                            onClick={() => setIndexFaq(pre => pre !== 4 ? 4 : 0)}
                            className='flex items-center justify-between cursor-pointer'
                        >
                            <h2 className='text-lg font-medium text-gray-800'>
                                Will I get a certificate after the MERN stack training?
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
                            <p className='text-base text-gray-600 mt-2'>
                                Yes. You will be rewarded with an industry-recognized certificate that helps you get jobs at top-level companies.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <Footer />
    </>);
};

export default MERNStackWebDevelopment;