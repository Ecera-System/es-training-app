import React from 'react';
import { BsCart3, BsFillStarFill } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import useGetCourseById from '../../API/useGetCourseById';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';
import Spinner from '../Shared/Spinner/Spinner';

const CourseDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const cartStorage = JSON.parse(localStorage.getItem('cartItem'));
    const [courseData, loading] = useGetCourseById(location?.pathname?.split('/')[2]);

    if (loading) return <Spinner />

    const {
        _id,
        title,
        category,
        creator,
        level,
        price,
        requirements,
        //sales,
        coverImage,
        description,
        students,
    } = courseData;
    

    // <!-- AddToCart -->
    const handleAddToCart = () => {
        const isDuplicate = cartStorage && cartStorage.some(item => item._id === courseData._id);
        if (isDuplicate) return alert('This item is already in your cart.');

        const data = cartStorage ?
            [...cartStorage, courseData] :
            [courseData];
        localStorage.setItem('cartItem', JSON.stringify(data));
    };

    return (<>
        <PageTitle title="Course Details" />
        <Header />
        <section
            style={{ backgroundImage: `url(${process.env.REACT_APP_API_V1_URL + '/' + coverImage})` }}
            className='w-full h-auto bg-no-repeat bg-center bg-cover'
        >
            <div className='py-16 bg-black/60'>
                <div className='2xl:w-[1280px] w-[90%] mx-auto text-white flex justify-between'>
                    <div className='w-3/5'>
                        <p className='text-sm font-light capitalize'>
                            {category}
                        </p>
                        <h1 className='text-3xl font-semibold my-3'>
                            {title}
                        </h1>
                        <p className='text-base text-gray-50'>
                            Created by<span className='inline-block ml-2 text-orange-600'>{creator?.name}</span>
                        </p>
                        <div className='mt-10'>
                            <p className='flex items-center gap-2'>
                                <span className='font-semibold text-lg'>5.0</span>
                                <span className='flex items-center gap-1 text-sm'>
                                    <BsFillStarFill className='text-yellow-500' />
                                    <BsFillStarFill className='text-yellow-500' />
                                    <BsFillStarFill className='text-yellow-500' />
                                    <BsFillStarFill className='text-yellow-500' />
                                    <BsFillStarFill className='text-yellow-500' />
                                </span>
                                <span className='text-sm font-light'>
                                    (20 ratings)
                                </span>
                            </p>
                            <p className='text-sm font-light mt-2'>
                                ({students?.length}) Students
                            </p>
                            <p className='text-sm font-light mt-2 capitalize'>
                                {level} Level
                            </p>
                        </div>
                    </div>
                    <div className='w-2/5 relative' >
                        <div className={`absolute -bottom-[17.8rem] right-0 w-[22rem] border border-white shadow-[0_3px_15px_rgb(0,0,0,0.2)]`}>
                            <div>
                                <img src={process.env.REACT_APP_API_V1_URL + '/' + coverImage} alt="" className='w-full h-52 object-cover' />
                            </div>
                            <div className='bg-white p-6'>
                                <h4 className='text-4xl font-semibold mb-6 text-black'>
                                    ${price}
                                </h4>
                                <div className='flex flex-col gap-3'>
                                    <button
                                        onClick={handleAddToCart}
                                        className='w-full flex items-center justify-center gap-2 px-8 py-3 text-base font-medium bg-violet-600 hover:bg-violet-700 duration-300 text-white hover:shadow-[0_3px_15px_rgb(124,58,237,0.5)]'
                                    >
                                        <BsCart3 /> Add To Cart
                                    </button>
                                    <button
                                        onClick={() =>
                                            navigate(`/course/checkout/${_id}`)
                                        }
                                        className='w-full flex items-center justify-center px-8 py-3 text-base font-medium bg-slate-800 hover:bg-slate-900 duration-300 text-white'>
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-20'>
            <div className='2xl:w-[1280px] w-[80%] mx-auto h-auto flex justify-start'>
                <div className='w-3/5'>
                    <h1 className='text-4xl font-semibold text-violet-600 mb-10'>
                        Overview
                    </h1>
                    <div className='border p-6'>
                        <h1 className='text-xl font-semibold mb-3'>
                            Requirements
                        </h1>
                        <ul className='text-sm list-disc list-inside'>
                            {
                                requirements?.map(item => <li key={item}>
                                    {item}
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-xl font-semibold mb-2'>
                            Description
                        </h1>
                        <hr />
                        <div className='mt-2' dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>);
};

export default CourseDetails;