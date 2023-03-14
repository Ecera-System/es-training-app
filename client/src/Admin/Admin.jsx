import React from 'react';
import { Outlet } from 'react-router-dom';
import PageTitle from '../Pages/Shared/PageTitle';
import Sidebar from './Sidebar';

const Admin = () => {
    return (<>
        <PageTitle title="Admin Dashboard" />
        <div className="w-full h-auto bg-violet-50">
            <div className="2xl:w-[1200px] w-full h-full mx-auto flex items-start sm:flex-row flex-col gap-8">
                <div className='lg:block hidden sticky top-0 left-0 w-1/5 h-full border bg-white'>
                    <Sidebar />
                </div>
                <div className='lg:w-4/5 w-11/12 mx-auto lg:pr-8'>
                    <Outlet />
                </div>
            </div>
        </div>
    </>);
};

export default Admin;