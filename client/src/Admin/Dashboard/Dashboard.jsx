import React from 'react';
import PageTitle from '../../Pages/Shared/PageTitle';
import OrderList from './OrderList';
import TopSaleCourse from './TopSaleCourse';

const Dashboard = () => {
    return (<>
        <PageTitle title="Admin Dashboard" />
        <div>
            <TopSaleCourse />
            <OrderList />
        </div>
    </>);
};

export default Dashboard;