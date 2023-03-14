import React from 'react';
import moment from 'moment/moment';
import { GoLocation } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import useGetAllStudents from '../../API/useGetAllStudents';
import PageTitle from '../../Pages/Shared/PageTitle';
import avatar from '../../Images/Nav/avatar.png'
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const Students = () => {
    const [studentsData, loading] = useGetAllStudents();
    const navigate = useNavigate();

    if (loading) return <Spinner />

    return (<>
        <PageTitle title="Students" />
        <div className="mt-5 p-5 border-b bg-white text-gray-600 rounded-lg border">
            <h3 className="font-semibold text-xl">
                Students
            </h3>
            <div className="mt-4">
                <input
                    className="block w-full border rounded py-2 px-4 text-sm outline-none"
                    type="text"
                    required
                    placeholder="Search Student..."
                />
            </div>
        </div>
        <div className="mt-5 text-gray-600">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                {studentsData?.map(data =>
                    <div key={data._id} className="rounded border bg-white p-5">
                        <div className="text-center border-b pb-5">
                            <div>
                                <img
                                    className="w-20 h-20 max-w-full object-cover rounded-full mx-auto"
                                    src={data?.profileId?.avatar ?
                                        process.env.REACT_APP_API_V1_URL + '/' + data?.profileId?.avatar
                                        : avatar
                                    }
                                    alt="user"
                                />
                            </div>
                            <h4 className="font-semibold text-lg mt-2">
                                {data?.profileId?.name}
                            </h4>
                            <span className="flex items-center gap-1 justify-center text-xs text-content">
                                <GoLocation />
                                <span>
                                    {data?.profileId?.country}
                                </span>
                            </span>
                        </div>
                        <div className="py-3 border-b text-xs">
                            Enrolled : {moment(data?.createdAt).format('DD-MMM-YYYY')}
                        </div>
                        <div className="py-3">
                            <h4
                                title={data?.courseId?.title}
                                onClick={() => navigate(`/course/${data?.courseId?._id}`)}
                                className='text-sm text-start font-semibold hover:text-emerald-500 duration-300 cursor-pointer course-card-title-2'
                            >
                                {data?.courseId?.title}
                            </h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>);
};

export default Students;