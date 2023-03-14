import moment from 'moment';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useGetEnrolledCourse from '../../../API/useGetEnrolledCourse';
import PageTitle from '../../Shared/PageTitle';
import Spinner from '../../Shared/Spinner/Spinner';

const MyCourse = () => {
    const [enrolledData, loading] = useGetEnrolledCourse();
    const navigate = useNavigate();

    return (<>
        <PageTitle title="Course" />
        <div className="my-5 w-full bg-white text-gray-600 rounded-lg border">
            <div className="p-5 border-b">
                <h1 className="text-xl text-content-secondary font-semibold">
                    My Course
                </h1>
            </div>
            {enrolledData.length !== 0 ?
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="bg-violet-50 uppercase text-left">
                            <tr>
                                <th className="text-sm py-3 px-5">COURSES</th>
                                <th className="text-sm py-3 pr-5">Price</th>
                                <th className="text-sm py-3 pr-5">Payment Status</th>
                                <th className="text-sm py-3 pr-5">Enroll Date</th>
                                <th className="text-sm py-3 pr-5">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enrolledData?.map((data) =>
                                <tr className='border-b'>
                                    <td className='py-3 px-5'>
                                        <div className='w-[25rem] flex items-center gap-5'>
                                            <div className="mb-2">
                                                <button
                                                    onClick={() => navigate(`/course/${data?.courseId?._id}`)}
                                                    className="text-base text-start font-medium text-emerald-500 hover:text-violet-600 duration-300"
                                                >
                                                    {data?.courseId?.title}
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-3 pr-5'>
                                        <span className="w-max text-sm font-semibold">
                                            ${data?.price}
                                        </span>
                                    </td>
                                    <td className='py-3 pr-5'>
                                        <span className="w-max text-sm font-medium capitalize text-emerald-500">
                                            {data?.paymentStatus}
                                        </span>
                                    </td>
                                    <td className='py-3 pr-5'>
                                        <span className="w-max text-sm font-medium">
                                            {moment(data?.courseId?.createdAt).format("DD-MMM-YYYY")}
                                        </span>
                                    </td>
                                    <td className='py-3 pr-5'>
                                        <span className="w-max inline-block py-1.5 px-6 bg-violet-200 text-sm font-medium capitalize rounded">
                                            Enrolled
                                        </span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div> :
                <div className='text-center py-40 px-5'>
                    <p className='text-lg text-gray-500 sm:w-96 w-full mx-auto mb-6'>
                        Currently no course data exists! To enroll course click on the following button
                    </p>
                    <Link
                        to='course'
                        className='inline-block px-6 py-2.5 text-base font-medium bg-violet-600 hover:bg-violet-700 text-white duration-300 rounded'
                    >
                        See Courses
                    </Link>
                </div>
            }
        </div>
        {
            loading && <Spinner />
        }
    </>);
};

export default MyCourse;