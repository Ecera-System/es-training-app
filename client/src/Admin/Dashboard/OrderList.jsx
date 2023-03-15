import axios from 'axios';
import moment from 'moment/moment';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../Context/ContextProvider';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const OrderList = () => {
    const { showToast } = useContext(contextProvider);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_V1_URL}/course-enroll/recent-orders`, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('auth_token')
            }
        })
            .then(res => {
                setOrders(res.data);
                setLoading(false)
            })
            .catch(err => {
                showToast({
                    succuss: '', error: err?.response?.data?.error,
                });
                setLoading(false);
                if (err?.response?.data?.notExist) {
                    localStorage.removeItem('auth_token');
                    return navigate('/sign-in');
                }
            });
    }, [orders, showToast, navigate]);

    if (loading) return <Spinner />;

    return (
        <div className="mt-5 bg-white text-gray-600 border rounded-lg">
            <div className="p-5 border-b">
                <h1 className="text-xl text-content-secondary font-semibold mb-2">
                    Orders
                </h1>
                <p className="text-content text-sm">
                    Order Dashboard is a quick overview of all current orders.
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="bg-violet-50 text-left uppercase">
                        <tr>
                            <th className="text-sm py-3 px-5">COURSES</th>
                            <th className="text-sm py-3 pr-5">SALES</th>
                            <th className="text-sm py-3 pr-5">Price</th>
                            <th className="text-sm py-3 pr-5">INVOICE</th>
                            <th className="text-sm py-3 pr-5">METHOD</th>
                            <th className="text-sm py-3 pr-5">DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(({ _id, courseId, createdAt, paymentMethod, price, transactionId }) =>
                            <tr key={_id} className='border-b'>
                                <td className='py-3 px-5'>
                                    <Link
                                        to={`/course/${courseId._id}`}
                                        className="w-[26rem] inline-block text-base font-medium hover:text-violet-600 duration-300"
                                    >
                                        {courseId.title}
                                    </Link>
                                </td>
                                <td className='py-3 pr-5'>
                                    <span className="w-max inline-block text-sm">
                                        {courseId.sales}
                                    </span>
                                </td>
                                <td className='py-3 pr-5'>
                                    <span className="w-max inline-block text-sm font-medium">
                                        ${price}
                                    </span>
                                </td>
                                <td className='py-3 pr-5'>
                                    <span className="w-max inline-block text-sm font-medium">
                                        {transactionId}
                                    </span>
                                </td>
                                <td className='py-3 pr-5'>
                                    <span className="w-max inline-block text-sm">
                                        {paymentMethod}
                                    </span>
                                </td>
                                <td className='py-3 pr-5'>
                                    <span className="w-max inline-block text-sm">
                                        {moment(createdAt).format('DD-MM-YYYY')}
                                    </span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="text-center py-5">
                <Link
                    className="inline-block py-2.5 px-6 bg-slate-800 hover:bg-slate-900 duration-300 text-white rounded"
                    to="/dashboard/orders"
                >
                    View All Orders
                </Link>
            </div>
        </div>
    );
};

export default OrderList;