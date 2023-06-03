import React from 'react';
import PageTitle from '../../Pages/Shared/PageTitle';
import OrderList from './OrderList';
import TopSaleCourse from './TopSaleCourse';

const Dashboard = () => {
    return (<>
        <PageTitle title="Admin Dashboard" />
        <div className='my-5'>
        {/* <!-- Top Sale Courses area --> */}
            <TopSaleCourse />

        {/* <!-- Recent Order list area --> */}
            <OrderList />
        </div>
    </>);
};

export default Dashboard;