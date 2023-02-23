import React from 'react';
import { Link } from 'react-router-dom';

const DesktopView = () => {
    return (
        <ul className='flex items-center justify-between gap-10 text-lg font-normal'>
            <li>
                <Link
                    to='/'
                    className='py-2 hover:text-violet-600 duration-300 relative hover-border'
                >
                    Overview
                </Link>
            </li>
            <li>
                <Link
                    to='#'
                    className='py-2 hover:text-violet-600 duration-300 relative hover-border'
                >
                    Featured Students
                </Link>
            </li>
            <li>
                <Link
                    to='#'
                    className='py-2 hover:text-violet-600 duration-300 relative hover-border'
                >
                    Placements
                </Link>
            </li>
            <li>
                <Link
                    to='#'
                    className='py-2 hover:text-violet-600 duration-300 relative hover-border'
                >
                    Syllabus
                </Link>
            </li>
            <li className='flex items-center justify-between gap-5'>
                <button
                    className='text-base font-medium py-1.5 px-6 bg-white hover:bg-violet-600 duration-300 text-violet-600 hover:text-white border-2 border-violet-600 rounded-full'
                >
                    Sign in
                </button>
                <button
                    className='text-base font-medium py-1.5 px-6 bg-violet-600 hover:bg-violet-500 border-2 border-violet-600 duration-300 text-white rounded-full'
                >
                    Sign Up
                </button>
            </li>
        </ul>
    );
};

export default DesktopView;