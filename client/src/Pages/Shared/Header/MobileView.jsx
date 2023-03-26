import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { contextProvider } from '../../../Context/ContextProvider';
import CartIcon from './CartIcon';
import HeaderProfile from './HeaderProfile';
import NotificationIcon from './NotificationIcon';

const MobileView = ({ openMenu }) => {
    const { isLoggedIn } = useContext(contextProvider);

    return (
        <ul
            className={`fixed left-1/2 -translate-x-1/2 w-[94%] h-auto list-none bg-white border shadow-lg rounded-md duration-300 flex flex-col
                ${openMenu ?
                    'top-[74px] opacity-100 visible' :
                    '-top-[24rem] opacity-0 invisible'
                }`
            }
        >
            {isLoggedIn &&
                <li className='border-b py-3'>
                    <HeaderProfile />
                </li>
            }
            <li className='border-b'>
                <NavLink
                    to='/#'
                    className='block w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300'
                    end
                >
                    Overview
                </NavLink>
            </li>
            <li className='border-b'>
                <NavLink
                    to='/featured-students'
                    className='block w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300'
                >
                    Featured Students
                </NavLink>
            </li>
            <li className='border-b'>
                <NavLink
                    to='/placements'
                    className='block w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300'
                >
                    Placements
                </NavLink>
            </li>
            <li className='border-b'>
                <NavLink
                    to='/syllabus'
                    className='block w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300'
                >
                    Syllabus
                </NavLink>
            </li>

            {isLoggedIn ? <>
                <li className='border-b'>
                    <div className='flex justify-start px-5 py-3'>
                        <CartIcon />
                    </div>
                </li>
                <li className=''>
                    <div className='flex justify-start px-5 py-3'>
                        <NotificationIcon />
                    </div>
                </li>
            </> : <>
                <li className='border-b py-1.5 px-5'>
                    <Link
                        to='/sign-in'
                        className='inline-block text-base font-medium py-1.5 px-6 bg-transparent hover:bg-violet-600 duration-300 text-violet-600 hover:text-white border-2 border-violet-600 rounded-full'
                    >
                        Sign in
                    </Link>
                </li>
                <li className='py-1.5 px-5'>
                    <Link
                        to='/sign-up'
                        className='inline-block text-base font-medium py-1.5 px-6 bg-violet-600 hover:bg-violet-500 border-2 border-violet-600 duration-300 text-white rounded-full'
                    >
                        Sign Up
                    </Link>
                </li>
            </>}
        </ul>
    );
};

export default MobileView;