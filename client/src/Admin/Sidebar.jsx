import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { MdOutlineAssignment } from 'react-icons/md';
import { SlBadge } from 'react-icons/sl';
import { BsFillJournalBookmarkFill, BsJournalCode } from 'react-icons/bs';
import { RiCoupon2Line } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiOutlineUserGroup } from 'react-icons/hi';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('auth_token');
        navigate('/sign-in');
    };

    return (<>
        <ul className='list-none h-screen max-h-full overflow-y-auto scrollBar-sm p-6 text-gray-600'>
            <li className='py-6 border-b mb-4'>
                <h1 className='text-center text-2xl font-medium text-gray-700'>Admin</h1>
                <div className='flex justify-center mt-6'>
                    <Link
                        to='/admin/add-course'
                        className='w-full px-5 py-2.5 text-sm text-center bg-violet-600 hover:bg-violet-700 duration-300 text-white rounded'
                    >
                        Add Course
                    </Link>
                </div>
            </li>
            <li>
                <NavLink
                    to='/admin'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                    end
                >
                    <RxDashboard className='text-lg' />Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/admin/all-courses'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <BsJournalCode className='text-lg' />All Courses
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/admin/students'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <FiUsers className='text-lg' />Students
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/admin/assignments'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <MdOutlineAssignment className='text-lg' />Assignments
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/admin/coupon-code'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <RiCoupon2Line className='text-lg' />Coupon Code
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/admin/certificate'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <SlBadge className='text-lg' />Certificate
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/admin/book-counselling'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                    end
                >
                    <BsFillJournalBookmarkFill className='text-lg' />Book Counselling
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/admin/all-users'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                    end
                >
                    <HiOutlineUserGroup className='text-lg' />All Users
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/admin/settings'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                    end
                >
                    <IoSettingsOutline className='text-lg' />Settings
                </NavLink>
            </li>
            <li>
                <button
                    onClick={handleSignOut}
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <FiLogOut className='text-lg' />Sign Out
                </button>
            </li>
        </ul>
    </>);
};

export default Sidebar;