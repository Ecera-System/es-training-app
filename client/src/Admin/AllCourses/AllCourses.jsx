import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoTimeOutline } from 'react-icons/io5';
import { MdOutlinePlayLesson } from 'react-icons/md';
import { SlClose } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import useGetAllCourses from '../../API/useGetAllCourses';
import { contextProvider } from '../../Context/ContextProvider';
import PageTitle from '../../Pages/Shared/PageTitle';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const AllCourses = () => {
    const { showToast } = useContext(contextProvider);
    const [coursesData, loading] = useGetAllCourses();
    const [statusLoading, setStatusLoading] = useState(false);
    const [isDelete, setIsDelete] = useState('');
    const [dLoading, setDLoading] = useState(false);
    const navigate = useNavigate();

    if (loading) return <Spinner />


    // <!-- Handle Change Status -->
    const handleStatus = async (e, id) => {
        const data = e.target.value;
        if (!data) return;
        try {
            setStatusLoading(true);
            const res = await axios.patch(`${process.env.REACT_APP_API_V1_URL}/course/${id}`, {
                status: data,
            }, {
                method: 'PATCH',
                headers: {
                    'Authorization': localStorage.getItem('auth_token')
                }
            });
            const success = res.data.success;
            showToast({
                success: success,
                error: ''
            });
        } catch (err) {
            showToast({
                succuss: '', error: err?.response?.data?.error,
            });
            if (err?.response?.data?.notExist) {
                localStorage.removeItem('auth_token');
                return navigate('/sign-in');
            }
        };
        setStatusLoading(false);
    };


    // <!-- Handle Delete Course -->
    const handleDelete = async (id) => {
        try {
            setDLoading(true);
            const res = await axios.delete(`${process.env.REACT_APP_API_V1_URL}/course/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': localStorage.getItem('auth_token')
                }
            });
            const success = res.data.success;
            showToast({
                success: success,
                error: ''
            });
            setIsDelete('')
        } catch (err) {
            showToast({
                succuss: '', error: err?.response?.data?.error,
            });
            if (err?.response?.data?.notExist) {
                localStorage.removeItem('auth_token');
                return navigate('/sign-in');
            }
        };
        setDLoading(false);
    };

    return (<>
        <PageTitle title="All Courses" />
        {coursesData.length !== 0 ?
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
                                <th className="text-sm py-3 pr-5">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coursesData.map((data) =>
                                <tr key={data._id} className='border-b'>
                                    <td className='py-3 px-5'>
                                        <div className='w-[42rem] flex items-center gap-5'>
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
                                        <select
                                            name="status"
                                            id="status"
                                            className="py-2 px-3 border border-violet-500 rounded bg-none cursor-pointer outline-none"
                                            onChange={(e) => handleStatus(e, data._id)}
                                        >
                                            <option selected={data.status === "pending"} value="pending">
                                                Pending
                                            </option>
                                            <option selected={data.status === "active"} value="active">
                                                Active
                                            </option>
                                            <option selected={data.status === "inactive"} value="inactive">
                                                Inactive
                                            </option>
                                        </select>
                                    </td>
                                    <td className='py-3 pr-5 text-center'>
                                        <button
                                            onClick={() => setIsDelete(data._id)}
                                            className='w-max hover:text-red-500 duration-300'
                                        >
                                            <FaTrashAlt className='text-xl' />
                                        </button>
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div> :
            <div className='w-full h-screen max-h-full grid place-items-center'>
                <p className='md:text-3xl text-xl text-gray-400'>No Course has been created yet!</p>
            </div>
        }
        {
            isDelete && <div className='fixed inset-0 bg-black/60 grid place-items-center'>
                <div className='sm:w-[30rem] w-11/12 h-auto bg-white sm:p-10 p-6 rounded-lg flex flex-col gap-5'>
                    <div className='text-5xl flex justify-center text-red-500'>
                        <SlClose />
                    </div>
                    <h2 className='text-center text-3xl text-gray-600'>
                        Are you sure?
                    </h2>
                    <p className='text-base text-gray-500 text-center'>
                        Do you really want to delete this course? This course cannot be undone.
                    </p>
                    <div className='flex items-center justify-center gap-10'>
                        <button
                            onClick={() => setIsDelete('')}
                            className='py-2.5 px-10 text-base font-medium bg-gray-400 hover:bg-gray-500 duration-300 text-white rounded'
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => { handleDelete(isDelete) }}
                            className='py-2.5 px-10 text-base font-medium bg-red-500 hover:bg-red-600 duration-300 text-white rounded'
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        }
        {
            (statusLoading || dLoading) && <Spinner />
        }
    </>);
};

export default AllCourses;