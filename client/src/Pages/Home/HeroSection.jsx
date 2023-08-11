import React, { useContext, useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import BookAFreeCounselling from './BookAFreeCounselling';
import { contextProvider } from '../../Context/ContextProvider';
import Header from '../Shared/Header/Header';
import SignUp from '../Auth/SignUp';
// import Chatbot from './Chatbot';

const HeroSection = () => {
    const { isLoggedIn } = useContext(contextProvider);
    const [signUpPopUp, setSignUpPopUp] = useState(false);
    useEffect(() => {
        const gradient = document.querySelector(".hero_gradient");
        function onMouseMove(event) {
            gradient.style.backgroundImage = `radial-gradient(circle at ${event.clientX}px ${event.clientY}px, transparent 0, rgb(50, 5, 123, 0.9) 50%)`;
        };
        document.addEventListener("mousemove", onMouseMove);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (<>
        <section
            style={{ backgroundImage: `url(/images/home/banner_code.jpg)` }}
            className='w-full h-auto bg-no-repeat bg-center bg-cover'
        >
            <div className='hero_gradient'>
                <Header textColor="text-white" />
                <div className='max-w-3xl w-[90%] mx-auto text-center md:py-20 py-16'>
                    <h4 className='text-lg font-medium text-[#FFD500]'>
                        With Our Training Platform
                    </h4>
                    <h1 className='lg:text-5xl lg:leading-[1.2] text-3xl font-semibold text-white mt-5'>
                        Discover Endless Possibilities in Web Development
                    </h1>
                    <p className='md:text-lg text-base font-light text-gray-200 mt-12 mb-10'>
                        Learn, Create, Innovate, and Unleash Your Creativity and Technical Expertise in the World of Web Development with Our Programs.
                    </p>
                    <Link
                        onClick={() => setSignUpPopUp(true)}
                        className='w-max mx-auto px-10 py-3 mb-8 text-base font-medium border border-white hover:bg-white duration-300 text-white hover:text-violet-800 flex items-center gap-2 rounded'
                    >
                        Enroll Now
                        <HiArrowNarrowRight className='text-2xl font-bold' />
                    </Link>
                    {
                        signUpPopUp && <SignUp signUpPopUp={signUpPopUp} setSignUpPopUp={setSignUpPopUp} />
                    }
                </div>
            </div>
        </section>
        <div className='relative -top-6'>
            <BookAFreeCounselling />
        </div>

        {/* <div>
            <Chatbot/>
        </div> */}

    </>);
};

export default HeroSection;