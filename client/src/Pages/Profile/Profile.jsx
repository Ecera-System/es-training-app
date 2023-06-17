import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Sidebar from './Sidebar';

const Profile = () => {
    return (<>
        <Header profile={true} />
        <div className="w-full h-auto bg-violet-50">
            <div className="2xl:w-[1280px] w-full h-full mx-auto flex items-start sm:flex-row flex-col gap-8">
                <div className='lg:block hidden sticky top-[72px] left-0 w-1/5 h-full border bg-white'>
                    <Sidebar />
                </div>
                <div className='lg:w-4/5 w-11/12 mx-auto lg:pr-8'>
                    <Outlet />
                </div>
            </div>
        </div>
        <Footer />
    </>);
};

export default Profile;