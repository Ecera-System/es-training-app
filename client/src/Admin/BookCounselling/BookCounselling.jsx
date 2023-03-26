import React, { useState } from 'react';
import useGetAllBookCounselling from '../../API/useGetAllBookCounselling';
import PageTitle from '../../Pages/Shared/PageTitle';
import Spinner from '../../Pages/Shared/Spinner/Spinner';
import ViewResume from './ViewResume';

const BookCounselling = () => {
    const [bookCData, loading] = useGetAllBookCounselling();
    const [isResume, setIsResume] = useState(null);

    if (loading) return <Spinner />

    console.log(bookCData);


    return (<>
        <PageTitle title='Book Counselling' />
        {bookCData.length !== 0 ?
            <div className="my-5 w-full bg-white text-gray-600 rounded-lg border">
                <div className="p-5 border-b">
                    <h1 className="text-xl font-semibold">
                        Courses
                    </h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="bg-violet-50 text-left uppercase">
                            <tr>
                                <th className="text-sm py-3 px-5">
                                    <h2 className='w-max'>Name</h2>
                                </th>
                                <th className="text-sm py-3 pr-5">
                                    <h2 className='w-max'>Email</h2>
                                </th>
                                <th className="text-sm py-3 pr-5">
                                    <h2 className='w-max'>Contact Number</h2>
                                </th>
                                <th className="text-sm py-3 pr-5">
                                    <h2 className='w-max'>Resume</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookCData.map((data) =>
                                <tr key={data._id} className='border-b'>
                                    <td className='py-3 px-5'>
                                        <div className="w-max text-base">
                                            {data?.name}
                                        </div>
                                    </td>
                                    <td className='py-3 pr-5'>
                                        <div className="w-max text-sm">
                                            {data?.email}
                                        </div>
                                    </td>
                                    <td className='py-3 pr-5'>
                                        <div className="w-max text-sm">
                                            {data?.contactNumber}
                                        </div>
                                    </td>
                                    <td className='py-3 pr-5'>
                                        <button
                                            onClick={() => setIsResume(data?.resume)}
                                            className='w-max py-0.5 px-4 rounded font-medium bg-emerald-50 text-emerald-500 hover:text-emerald-600 duration-300'
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div> :
            <div className='w-full pt-20 grid place-items-center'>
                <p className='md:text-3xl text-xl text-gray-400'>No Book Counselling has been created yet!</p>
            </div>
        }
        {
            isResume &&
            <ViewResume
                isResume={isResume}
                setIsResume={setIsResume}
            />
        }
    </>);
};

export default BookCounselling;