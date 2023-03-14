import React from 'react';
import { Link } from 'react-router-dom';

const OrderList = () => {
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
            <div className="">
                <table className="table-auto w-full">
                    <thead className="bg-violet-50 text-left">
                        <tr>
                            <th className="text-sm py-3 pl-5">COURSES</th>
                            <th className="text-sm py-3">SALES</th>
                            <th className="text-sm py-3">INVOICE</th>
                            <th className="text-sm py-3">DATE</th>
                            <th className="text-sm py-3 pr-5">METHOD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='py-3 pl-5'>
                                <Link
                                    className="text-base font-medium hover:text-violet-600 duration-300"
                                >
                                    This Order Title
                                </Link>
                            </td>
                            <td className='py-3'>
                                <span className="text-sm">
                                    sales
                                </span>
                            </td>
                            <td className='py-3'>
                                <span className="text-sm">#_id</span>
                            </td>
                            <td className='py-3'>
                                <span className="text-sm">
                                    02-03-2023
                                </span>
                            </td>
                            <td className='py-3 pr-5'>
                                <span className="text-sm">paymentMethod</span>
                            </td>
                        </tr>
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