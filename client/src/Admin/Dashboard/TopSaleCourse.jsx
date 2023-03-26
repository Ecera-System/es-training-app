import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../Context/ContextProvider';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const TopSaleCourse = () => {
    const { showToast } = useContext(contextProvider);
    const navigate = useNavigate();
    const [topSales, setTopSales] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_V1_URL}/course/top-sale`, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('auth_token')
            }
        })
            .then(res => {
                setTopSales(res.data);
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
    }, [topSales, showToast, navigate]);

    if (loading) return <Spinner />;


    return (
        <div className="mt-5 bg-white text-gray-600 border rounded-lg">
            <div className="p-5 border-b">
                <h1 className="text-xl font-semibold">
                    Best Selling Courses
                </h1>
            </div>
            {topSales.length !== 0 ?
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="bg-violet-50 text-left uppercase">
                            <tr>
                                <th className="text-sm py-3 px-5">COURSES</th>
                                <th className="text-sm py-3 pr-5">SALES</th>
                                <th className="text-sm py-3 pr-5">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topSales.map(({ _id, coverImage, title, sales, price }) =>
                                <tr key={_id} className='border-b'>
                                    <td className='py-3 px-5'>
                                        <div className='w-max flex items-center gap-5' >
                                            <div className='w-20 h-auto'>
                                                <img
                                                    src={process.env.REACT_APP_API_V1_URL + coverImage}
                                                    alt="course"
                                                    className="w-20 h-14 object-cover"
                                                />
                                            </div>
                                            <div>
                                                <Link
                                                    className="inline-block text-base font-medium hover:text-violet-600 duration-300"
                                                    to={`/course/${_id}`}
                                                >
                                                    {title}
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-3 pr-5'>
                                        <span className="w-32 inline-block text-sm">
                                            {sales}
                                        </span>
                                    </td>
                                    <td className='py-3 pr-5'>
                                        <span className="w-32 inline-block text-sm">
                                            ${price}
                                        </span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div> :
                <div className='mt-20 w-full grid place-items-center'>
                    <p className='md:text-3xl text-xl font-medium text-gray-400'>No Course has been sold yet!</p>
                </div>
            }
        </div>
    );
};

export default TopSaleCourse;