import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useGetAllCourses from '../../API/useGetAllCourses';
import PageTitle from '../../Pages/Shared/PageTitle';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const AllCourses = () => {
    const [coursesData, loading] = useGetAllCourses();
    const navigate = useNavigate();
    if (loading) return <Spinner />

    return (<>
        <PageTitle title="All Courses" />
        <div className="my-5 w-full bg-white text-gray-600 rounded-lg border">
            <div className="p-5 border-b">
                <h1 className="text-xl text-content-secondary font-semibold mb-3">
                    Courses
                </h1>
                <p className="text-content text-sm">
                    Manage your courses and its update like live, draft and insight.
                </p>
            </div>
            <div className="p-5 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex items-center justify-between border rounded p-2 gap-2">
                    <FiSearch className="text-primary text-sm" />
                    <input
                        className="outline-none text-sm"
                        type="text"
                        placeholder="Search courses..."
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <select className="outline-none p-2 border rounded text-sm w-36">
                    <option>Choose</option>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="bg-violet-50 text-left">
                        <tr>
                            <th className="text-sm py-3 px-5">COURSES</th>
                            <th className="text-sm py-3 pr-5">STUDENTS</th>
                            <th className="text-sm py-3 pr-5">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coursesData.map((data) =>
                            <tr className='border-b'>
                                <td className='py-3 px-5'>
                                    <div className='w-[45rem] flex items-center gap-5'>
                                        <div>
                                            <img
                                                src={`${process.env.REACT_APP_API_V1_URL}${data?.coverImage}`}
                                                alt="course"
                                                className="w-20 h-auto"
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2">
                                                <button
                                                    onClick={() => navigate(`/course/${data._id}`, { state: data })}
                                                    className="text-base text-start font-medium text-emerald-500 hover:text-violet-600 duration-300"
                                                >
                                                    {data?.title}
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-5">
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
                                <td className='py-3 pr-5'>
                                    <span className="w-max text-sm">
                                        {data?.students?.length}
                                    </span>
                                </td>
                                <td className='py-3 pr-5'>
                                    <span className="w-max inline-block py-1.5 px-6 bg-emerald-500 text-white text-sm capitalize rounded">
                                        {data?.status}
                                    </span>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>);
};

export default AllCourses;