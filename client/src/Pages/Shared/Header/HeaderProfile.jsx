import React, { useState } from 'react';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import avatar from '../../../Images/Nav/avatar.png';
import CartIcon from './CartIcon';
import NotificationIcon from './NotificationIcon';
import useGetProfile from '../../../API/useGetProfile';

const HeaderProfile = ({ setIsAuthenticated }) => {
    const [profileData] = useGetProfile();
    const [openProfile, setOpenProfile] = useState(false);


    return (<>
        <li className='relative flex items-center justify-center gap-7 pl-5'>

            {/* <!-- Cart --> */}
            <CartIcon />

            {/* <!-- Notifications --> */}
            <NotificationIcon />

            {/* <!-- Profile --> */}
            <button
                onClick={() => setOpenProfile(!openProfile)}
                className='w-10 h-10 border-2 border-violet-600 hover:border-violet-400 duration-300 rounded-full overflow-hidden'
            >
                <img
                    src={profileData?.avatar ?
                        (process.env.REACT_APP_API_V1_URL + profileData?.avatar) : avatar
                    }
                    alt="avatar"
                    className='w-10 h-10 max-w-full object-cover'
                />
            </button>

            <ul
                className={`list-none absolute top-12 right-0 w-72 h-auto p-5 bg-white rounded-md shadow-[0_8px_15px_-1px_rgb(0,0,0,0.3)] ${openProfile ? 'scale-100' : 'scale-0'} origin-top-right duration-300`}
            >
                <li className='h-auto p-5 shadow-[0_2px_10px_5px_rgb(0,0,0,0.1)] rounded-md text-center mb-5'>
                    <div className='w-20 h-20 mx-auto border-2 border-violet-600 rounded-full overflow-hidden'>
                        <img
                            src={profileData?.avatar ?
                                (process.env.REACT_APP_API_V1_URL + profileData?.avatar) : avatar
                            }
                            alt="avatar"
                            className='w-20 h-20 max-w-full object-cover'
                        />
                    </div>
                    <h2 className='text-lg font-medium mt-3 capitalize'>
                        {profileData?.userId?.role === 'admin' ? 'Admin' : profileData?.userId?.name}
                    </h2>
                    {
                        profileData?.userId?.role !== 'admin' &&
                        <p className='text-sm mt-1'>
                            {profileData?.userId?.role}
                        </p>
                    }
                </li>
                <li>
                    <Link
                        to='/profile'
                        className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                    >
                        <FiUser className='text-lg' />My Profile
                    </Link>
                </li>
                <li>
                    <button
                        onClick={() => {
                            localStorage.removeItem('auth_token');
                            setIsAuthenticated(false);
                        }}
                        className='w-full h-auto py-3 px-5 text-base hover:text-violet-600 hover:bg-violet-100 duration-300 relative rounded flex items-center gap-3'
                    >
                        <FiLogOut className='text-lg' />Sign Out
                    </button>
                </li>
            </ul>
        </li>
    </>);
};

export default HeaderProfile;