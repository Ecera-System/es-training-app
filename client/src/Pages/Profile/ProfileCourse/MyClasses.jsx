import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGetEnrolledCourse from '../../../API/useGetEnrolledCourse';
import PageTitle from '../../Shared/PageTitle';
import Spinner from '../../Shared/Spinner/Spinner';
import ClassContent from './ClassContent';

const MyClasses = () => {
    const [enrolledData, loading] = useGetEnrolledCourse();
    const [content, setContent] = useState();

    if (loading) return <Spinner />

    return (content ?
        <ClassContent content={content} setContent={setContent} />
        : <>
            <PageTitle title="Course" />
            <div className="my-5 w-full text-gray-600">
                <div className="p-5 border rounded-lg bg-white">
                    <h1 className="text-xl text-content-secondary font-semibold">
                        My Classes
                    </h1>
                    <p className='mt-1'>
                        Acquire skills to broaden your horizons and shape your future.
                    </p>
                </div>
                <div>
                    {enrolledData?.length !== 0 ?
                        <div className='grid grid-cols-2 gap-6 mt-8'>
                            {enrolledData.map(data =>
                                <div key={data._id} className='bg-white rounded-lg shadow-[0_5px_25px_-5px_rgb(0,0,0,0.1)] overflow-hidden flex items-start p-5 gap-6'>
                                    <div className='w-2/5'>
                                        <img
                                            className='object-cover w-full h-32 rounded-lg'
                                            loading='lazy'
                                            src="/images/mern-stack-web/mern-dev-class.png"
                                            alt="Mern stack web development"
                                        />
                                    </div>
                                    <div className='w-3/5'>
                                        <h2 className='text-xl font-semibold'>{data?.courseId?.title}</h2>
                                        <button
                                            onClick={() => setContent(data?.courseId)}
                                            className='bg-violet-600 hover:bg-violet-700 duration-300 text-white py-2.5 px-5 rounded-md mt-5'
                                        >
                                            Continue Learning
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        :
                        <div className='text-center pt-20 pb-40 px-5'>
                            <p className='text-lg text-gray-500 sm:w-[25rem] w-full mx-auto mb-6'>
                                Currently no course data exists! <br /> To enroll course click on the following button
                            </p>
                            <Link
                                to='/programs/mern-stack-web-development'
                                className='inline-block px-6 py-2.5 text-base font-medium bg-violet-600 hover:bg-violet-700 text-white duration-300 rounded'
                            >
                                See Course
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </>);
};

export default MyClasses;