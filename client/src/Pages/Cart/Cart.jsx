import React, { useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';

const Cart = () => {
    const [cartStorage, setCartStorage] = useState(
        JSON.parse(localStorage.getItem('cartItem'))
    );
    const navigate = useNavigate();

    const handleSubmit = (id) => {
        const filter = cartStorage.filter(f => f._id !== id);
        localStorage.setItem('cartItem', JSON.stringify(filter));
        setCartStorage(JSON.parse(localStorage.getItem('cartItem')))
    };

    return (<>
        <PageTitle title="Cart" />
        <Header />
        <div className='2xl:w-[1200px] w-[90%] mx-auto h-auto'>
            {cartStorage?.length !== 0 ?
                <div className='grid grid-cols-4 gap-5 my-10'>
                    {
                        cartStorage?.map(data =>
                            <div
                                key={data._id}
                                className="w-full h-full shadow-[0px_2px_20px_0_rgb(124,58,237,0.2)] group/course relative"
                            >
                                <button
                                    onClick={() => handleSubmit(data._id)}
                                    className='absolute top-3 right-3 bg-white hover:bg-gray-300 duration-300 w-9 h-9 rounded-full grid place-items-center'
                                >
                                    <IoCloseSharp className='text-xl' />
                                </button>
                                <div>
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
                            </div>
                        )
                    }
                </div> :
                <div className='text-xl text-center text-gray-500 pt-20'>
                    Your cart is empty. <br /> Keep shopping to find a course!
                </div>
            }
        </div>
    </>);
};

export default Cart;