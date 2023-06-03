import React from 'react';
import { BsJournalCode } from 'react-icons/bs';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { MdOutlineAssignment } from 'react-icons/md';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useGetProfile from '../../API/useGetProfile';
import Spinner from '../Shared/Spinner/Spinner';

const Sidebar = () => {
    const [profileData, loading] = useGetProfile();
    const navigate = useNavigate();

    if (loading) return <Spinner />;

    const { name, avatar, userId } = profileData;


    const handleSignOut = () => {
        localStorage.removeItem('auth_token');
        navigate('/sign-in');
    };

    return (<>
        <ul className='list-none h-screen max-h-full overflow-y-auto scrollBar-sm p-6 text-gray-600'>
            <li className='pt-2 pb-6 border-b mb-4'>
                <div className='flex justify-center'>
                    <img
                        src={avatar ?
                            (avatar.includes("/images/") ? process.env.REACT_APP_API_V1_URL + avatar : avatar)
                            : '/images/nav/avatar.png'
                        }
                        alt="Avatar"
                        className='w-20 h-20 max-w-full object-cover rounded-full'
                    />
                </div>
                <h3 className='text-base font-semibold text-center mt-3'>
                    {name}
                </h3>
                <p className='text-sm text-gray-500 text-center mt-1'>
                    {userId?.role}
                </p>
            </li>
            <li>
                <NavLink
                    to='/profile'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                    end
                >
                    <FiUser className='text-lg' />My Profile
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/profile/course'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <BsJournalCode className='text-lg' />Course
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/profile/assignments'
                    className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 side-nav hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                >
                    <MdOutlineAssignment className='text-lg' />Assignments
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