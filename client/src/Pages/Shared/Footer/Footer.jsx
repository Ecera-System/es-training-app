import React from 'react';

const Footer = () => {
    return (<>
        <footer className='w-full bg-white'>
            <div className='2xl:w-[1200px] w-11/12 mx-auto'>
                <div className='w-full py-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 items-start gap-6'>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <h2 className='text-gray-600 text-xl font-medium mb-2'>
                                Learning Program
                            </h2>
                        </li>
                        <li>
                            <a
                                href="/"
                                // target={'blank'}
                                className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'
                            >
                                MERN Stack
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                // target={'blank'}
                                className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'
                            >
                                Students
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                // target={'blank'}
                                className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'
                            >
                                Syllabus
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <h2 className='text-gray-600 text-xl font-medium mb-2'>
                                Ecera System
                            </h2>
                        </li>
                        <li>
                            <a
                                className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'
                                href={'/'}
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'
                                href={'/'}
                            >
                                Success Stories
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <h2 className='text-gray-600 text-xl font-medium mb-2'>
                                Support
                            </h2>
                        </li>
                        <li>
                            <a
                                href={'/contact'}
                                className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'
                            >Contact Us</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'>
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'>
                                Cookies Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href={'/faq'}
                                className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'
                            >FAQ</a>
                        </li>
                        <li>
                            <a
                                href="/terms-of-services"
                                className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'
                            >
                                Terms of Services
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <h2 className='text-gray-600 text-xl font-medium mb-2'>
                                For Business
                            </h2>
                        </li>
                        <li>
                            <a
                                href="/remote-employees"
                                className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'
                            >
                                Hire Developers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/testimonial"
                                className='text-gray-500 text-base hover:underline hover:text-gray-600 duration-300'
                            >
                                Testimonial
                            </a>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className='py-5 flex sm:flex-row flex-col-reverse justify-between items-center gap-2'>
                    <div>
                        <p className='text-sm text-gray-500'>&copy; {new Date().getFullYear()} Ecera System™. All Rights Reserved.</p>
                    </div>
                    <ul className='flex items-center gap-x-6'>
                        <li>
                            <a
                                target={'blank'}
                                href="https://www.facebook.com/ecerasystem/"
                                className='text-xl text-gray-500 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target={'blank'}
                                href="https://www.instagram.com/ecerasystem/"
                                className='text-xl text-gray-500 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target={'blank'}
                                href="/"
                                className='text-xl text-gray-500 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                // target={'blank'}
                                href="/"
                                className='text-xl text-gray-500 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                // target={'blank'}
                                href="/"
                                className='text-xl text-gray-500 hover:text-gray-50 duration-300 cursor-pointer'
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </>);
};

export default Footer;