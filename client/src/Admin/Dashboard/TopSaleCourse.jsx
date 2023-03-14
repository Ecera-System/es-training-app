import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TopSaleCourse = () => {
    return (
        <div className="mt-5 bg-white text-gray-600 border rounded-lg">
            <div className="p-5 border-b">
                <h1 className="text-xl font-semibold">
                    Best Selling Courses
                </h1>
            </div>
            <div className="">
                <table className="table-auto w-full">
                    <thead className="bg-violet-50 text-left">
                        <tr>
                            <th className="text-sm py-3 pl-5">COURSES</th>
                            <th className="text-sm py-3">SALES</th>
                            <th className="text-sm py-3 pr-5">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b'>
                            <td className='py-3 pl-5'>
                                <div className='flex items-center gap-5' >
                                    <div>
                                        <img
                                            src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
                                            alt="course"
                                            className="w-20 h-auto"
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2">
                                            <Link
                                                className="text-base font-medium hover:text-violet-600 duration-300"
                                                to={`#`}
                                            >
                                                Full Stack Web Development
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-between gap-5">
                                            <div className="flex items-center gap-2">
                                                <MdOutlinePlayLesson className='text-xl' />
                                                <span className="text-sm">10+ Lessons</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <IoTimeOutline className='text-xl' />
                                                <span className="text-sm">7hr 20min</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className='py-3'>
                                <span className="text-sm ">
                                    sales
                                </span>
                            </td>
                            <td className='py-3 pr-5'>
                                <span className="inline-block text-sm">
                                    ${10 * 10}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopSaleCourse;