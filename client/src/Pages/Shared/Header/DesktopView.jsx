import React, { useContext } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import { contextProvider } from '../../../Context/ContextProvider';
import HeaderProfile from './HeaderProfile';

const DesktopView = () => {
    const { isLoggedIn } = useContext(contextProvider);

    return (
        <ul className='list-none hidden lg:flex items-center justify-between gap-10 text-lg font-normal'>
            <li className='relative group/overview'>
                <NavLink
                    to='/overview'
                    className='py-2 group-hover/overview:text-violet-600 duration-300 relative hover-border flex items-center gap-1'
                >
                    Overview <RiArrowDownSLine className='text-xl'/>
                </NavLink>

                <ul className='w-64 list-none absolute top-12 left-0 scale-x-100 scale-y-0 group-hover/overview:scale-y-100 duration-300 origin-top rounded-lg bg-white overflow-hidden shadow-[0_1px_5px_0_rgb(0,0,0,0.2)]'>
                    <li className='w-full'>
                        <Link
                            to='/overview'
                            className='block w-full h-auto py-3 px-8 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300'
                            end
                        >
                            React.js
                        </Link>
                    </li>
                    <li className='w-full'>
                        <Link
                            to='/overview'
                            className='block w-full h-auto py-3 px-8 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300'
                            end
                        >
                            Node.js
                        </Link>
                    </li>
                    <li className='w-full'>
                        <Link
                            to='/overview'
                            className='block w-full h-auto py-3 px-8 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300'
                            end
                        >
                            Express.js
                        </Link>
                    </li>
                    <li className='w-full'>
                        <Link
                            to='/overview'
                            className='block w-full h-auto py-3 px-8 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300'
                            end
                        >
                            MongoDB
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <NavLink
                    to='/featured-students'
                    className='py-2 hover:text-violet-600 duration-300 relative hover-border'
                >
                    Featured Students
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/placements'
                    className='py-2 hover:text-violet-600 duration-300 relative hover-border'
                >
                    Placements
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/syllabus'
                    className='py-2 hover:text-violet-600 duration-300 relative hover-border'
                >
                    Syllabus
                </NavLink>
            </li>
            {
                isLoggedIn ?
                    <HeaderProfile />
                    :
                    <li className='flex items-center justify-between gap-5'>
                        <Link
                            to='/sign-in'
                            className='text-base font-medium py-1.5 px-6 bg-transparent hover:bg-violet-600 duration-300 text-violet-600 hover:text-white border-2 border-violet-600 rounded-full'
                        >
                            Sign in
                        </Link>
                        <Link
                            to='/sign-up'
                            className='text-base font-medium py-1.5 px-6 bg-violet-600 hover:bg-violet-500 border-2 border-violet-600 duration-300 text-white rounded-full'
                        >
                            Sign Up
                        </Link>
                    </li>

            }
        </ul >
    );
};

export default DesktopView;