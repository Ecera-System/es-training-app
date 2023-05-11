import React from 'react';
import './Home.css'
import { BsFillStarFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useGetAllCourses from '../../API/useGetAllCourses';

const Courses = () => {
    const [coursesData, loading] = useGetAllCourses();
    const navigate = useNavigate();

    return (
        <section className='py-20'>
            <div className='2xl:w-[1280px] w-[90%] mx-auto text-gray-600'>
                <div className='flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-6 lg:gap-0'>
                    <div className='lg:text-start text-center'>
                        <h4 className='text-lg font-medium text-violet-600'>
                            What’s New
                        </h4>
                        <h1 className='text-4xl font-semibold text-gray-700 py-3'>
                            Featured Courses
                        </h1>
                        <p className='lg:w-3/5 text-base text-gray-500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.
                        </p>
                    </div>
                    <div className=''>
                        <button
                            onClick={() => navigate('/course')}
                            className='w-max px-8 py-3 text-base bg-violet-600 hover:bg-violet-700 duration-300 text-white flex items-center gap-2 rounded-md shadow-[0_3px_15px_rgb(124,58,237,0.5)]'
                        >
                            All Courses
                        </button>
                    </div>
                </div>
                {loading ?
                    <div className='grid place-items-center h-52'>
                        <div className="loader1 border-[#7C3AED_!important]" />
                    </div>
                    :
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-10'>
                        {
                            coursesData.slice(0, 4).map(data =>
                                <div
                                    key={data._id}
                                    className="w-full h-full shadow-[0px_2px_20px_0_rgb(124,58,237,0.2)] group/course"
                                >
                                    <div
                                        onClick={() => navigate(`/course/${data._id}`, { state: data })}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src={`${process.env.REACT_APP_API_V1_URL}/${data?.coverImage}`}
                                            alt="Course" className='w-full h-44 object-cover'
                                        />
                                    </div>
                                    <div className='p-5'>
                                        <h1
                                            onClick={() => navigate(`/course/${data._id}`, { state: data })}
                                            title={data?.title}
                                            className='text-lg font-semibold mb-1 group-hover/course:text-violet-600 duration-300 course-card-title cursor-pointer'
                                        >
                                            {data?.title}
                                        </h1>
                                        <p className='mb-3 text-sm'>
                                            {data?.creator?.name}
                                        </p>
                                        <p className='flex items-center gap-2 mt-1'>
                                            <span className='font-bold text-base'>5.0</span>
                                            <span className='flex items-center gap-1 text-sm'>
                                                <BsFillStarFill className='text-yellow-500' />
                                                <BsFillStarFill className='text-yellow-500' />
                                                <BsFillStarFill className='text-yellow-500' />
                                                <BsFillStarFill className='text-yellow-500' />
                                                <BsFillStarFill className='text-yellow-500' />
                                            </span>
                                            <span className='text-sm font-light'>
                                                (20)
                                            </span>
                                        </p>
                                        <div className='flex items-center justify-between mt-3'>
                                            <h4 className='text-xl font-semibold'>
                                                ${data?.price}
                                            </h4>
                                            <button
                                                onClick={() =>
                                                    navigate(`/course/checkout/${data._id}`, { state: data })
                                                }
                                                className='px-6 py-2 text-base font-medium bg-white hover:bg-violet-700 duration-300 text-violet-600 hover:text-white border border-violet-700'
                                            >
                                                Enroll Now
                                            </button>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                }
            </div>
        </section>
    );
};

export default Courses;