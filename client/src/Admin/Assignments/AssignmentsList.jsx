import React from 'react';
import { useNavigate } from 'react-router-dom';
import useGetAllAssignments from '../../API/useGetAllAssignments';
import PageTitle from '../../Pages/Shared/PageTitle';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const AssignmentsList = () => {
    const [assData, loading] = useGetAllAssignments();
    const navigate = useNavigate();

    if (loading) return <Spinner />

    return (<>
        <PageTitle title="" />
        {assData.length !== 0 ?
            <div className="mt-5 bg-white text-gray-600 border rounded-lg overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="bg-violet-100 text-left uppercase">
                        <tr>
                            <th className="text-sm py-3 px-5">Assignment</th>
                            <th className="text-sm py-3 pr-5">Course</th>
                            <th className="text-sm py-3 pr-5">Participants</th>
                            <th className="text-sm py-3 pr-5">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assData.map((data) =>
                            <tr key={data._id} className="border-b">
                                <td className='py-3 px-5'>
                                    <button
                                        onClick={() => navigate(`/admin/assignments/${data._id}`, { state: data })}
                                        className="w-max text-base text-start text-violet-600 font-semibold"
                                    >
                                        {data.name}
                                    </button>
                                </td>
                                <td className="py-3 pr-5 text-emerald-500">
                                    <button
                                        onClick={() => navigate(`/course/${data.courseId._id}`, { state: data.courseId })}
                                        className='w-96 text-sm text-start font-semibold'
                                    >
                                        {data.courseId.title}
                                    </button>
                                </td>
                                <td className="py-3 pr-5 text-emerald-500">
                                    <span className='text-sm font-semibold'>
                                        {data.submitAssignments.length}
                                    </span>
                                </td>
                                <td className="py-3 pr-5 text-sm">
                                    <p className='w-max'>
                                        {data.deadline}
                                    </p>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div> :
            <div className='mt-32 w-full grid place-items-center'>
                <p className='text-4xl font-medium text-gray-400'>No Assignment has been created yet!</p>
            </div>
        }
    </>);
};

export default AssignmentsList;