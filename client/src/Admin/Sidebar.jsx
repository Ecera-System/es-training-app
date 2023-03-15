import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { MdOutlineAssignment } from 'react-icons/md';
import { SlBadge } from 'react-icons/sl';
import { BsJournalCode } from 'react-icons/bs';
import { RiCoupon2Line } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';

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
                        to='/admin/add-new-course'
                        className='px-5 py-2.5 text-sm bg-violet-600 hover:bg-violet-700 duration-300 text-white rounded'
                    >
                        Create New Course
                    </Link>
                </div>
            </li>
            <li>
                <Link
                    to='/admin'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <RxDashboard className='text-lg' />Dashboard
                </Link>
            </li>
            <li>
                <Link
                    to='/admin/all-courses'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <BsJournalCode className='text-lg' />All Courses
                </Link>
            </li>
            <li>
                <Link
                    to='/admin/students'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <FiUsers className='text-lg' />Students
                </Link>
            </li>
            <li>
                <Link
                    to='/admin/assignments'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <MdOutlineAssignment className='text-lg' />Assignments
                </Link>
            </li>
            <li>
                <Link
                    to='/admin/coupon-code'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <RiCoupon2Line className='text-lg' />Coupon Code
                </Link>
            </li>
            <li>
                <Link
                    to='/admin/certificate'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <SlBadge className='text-lg' />Certificate
                </Link>
            </li>
            <li>
                <Link
                    to='/admin'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <IoSettingsOutline className='text-lg' />Settings
                </Link>
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