import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import { RiErrorWarningFill } from 'react-icons/ri';
import { contextProvider } from '../../Context/ContextProvider';
import SpinnerBtn from '../Shared/Spinner/SpinnerBtn';

const BookAFreeCounselling = () => {
    const { showToast } = useContext(contextProvider);
    const [isBooking, setIsBooking] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        resume: ''
    });
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        setTimeout(() => {
            if (isSuccess) {
                setIsSuccess(false);
                setIsBooking(false);
            }
        }, 8000);
    }, [isSuccess]);


    // <!-- onChange input -->
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // <!-- Validate form function -->
    const validateForm = (data) => {
        let errors = {};

        if (!data.name) {
            errors.name = 'Name is required!';
        }
        if (!data.email) {
            errors.email = 'Email is required!';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid!';
        }
        if (!data.contactNumber) {
            errors.contactNumber = 'Contact Number is required!';
        } else if (!/^-?\d+\.?\d*$/.test(data.contactNumber)) {
            errors.contactNumber = 'Contact Number is invalid!';
        }
        if (!data.resume) {
            errors.resume = 'Resume is required!';
        }

        return errors;
    };


    // <!-- Submit Form Data -->
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            setFormErrors({});
            setLoading(true);
            await axios.post(`${process.env.REACT_APP_API_V1_URL}/book-counselling`, formData)
                .then(res => {
                    res?.data?.success && setIsSuccess(true);
                })
                .catch(err => {
                    showToast({
                        succuss: '', error: err?.response?.data?.error,
                    });
                });
            setLoading(false);
        } else {
            setFormErrors(errors);
        }
    };


    return (<>
        <div className='flex justify-end'>
            <button
                onClick={() => setIsBooking(true)}
                className='px-8 py-3 text-base font-medium bg-[#FFD500] text-black hover:shadow-[0_3px_15px_rgb(255,213,0.5)] duration-300 flex items-center gap-2 rounded-full'
            >
                Book a Free Counselling Session Now
                <HiArrowNarrowRight className='text-2xl font-bold' />
            </button>
        </div>

        {isBooking &&
            <div className='fixed inset-0 z-50 bg-black/60 grid place-items-center overflow-y-auto py-5'>
                <div className='w-[35rem] bg-white p-10 rounded-lg relative'>

                    {/* <!-- Close btn --> */}
                    <div
                        onClick={() => setIsBooking(false)}
                        className='absolute top-5 right-5 z-50 rounded-full hover:bg-violet-100 duration-300 p-1 cursor-pointer'
                    >
                        <IoCloseSharp className='text-3xl text-gray-700' />
                    </div>
                    {
                        isSuccess ?
                            <div className=''>
                                <div>
                                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                    </svg>
                                </div>
                                <p className='text-base text-center mt-5 text-gray-600'>
                                    The request has been submitted. Someone from the team will contact you shortly.
                                </p>
                            </div> :
                            <form
                                onSubmit={handleSubmit}
                                className='w-full h-full flex flex-col gap-6'
                            >


                                <div>
                                    <h1 className='text-2xl font-semibold text-violet-600'>
                                        Book a Free Counselling Session
                                    </h1>
                                </div>
                                <div>
                                    <label htmlFor='name' className="px-1">Full Name</label>
                                    <input
                                        onChange={handleChange}
                                        placeholder=""
                                        type="text" name='name' id='name'
                                        className="block mt-2 px-3 py-2 rounded-lg w-full bg-white text-gray-600 border border-violet-300 placeholder-violet-600 shadow-[5px_5px_0px_rgb(124,58,237,0.5)] focus:shadow-[5px_5px_0px_rgb(124,58,237)] focus:placeholder-violet-500 focus:bg-white focus:border-violet-600 focus:outline-none"
                                    />
                                    {
                                        formErrors?.name &&
                                        <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                                            <RiErrorWarningFill className="text-base mt-0.5" />
                                            {formErrors?.name}
                                        </p>
                                    }
                                </div>
                                <div>
                                    <label htmlFor='email' className="px-1">Email</label>
                                    <input
                                        onChange={handleChange}
                                        placeholder=""
                                        type="text" name='email' id='email'
                                        className="block mt-2 px-3 py-2 rounded-lg w-full bg-white text-gray-600 border border-violet-300 placeholder-violet-600 shadow-[5px_5px_0px_rgb(124,58,237,0.5)] focus:shadow-[5px_5px_0px_rgb(124,58,237)] focus:placeholder-violet-500 focus:bg-white focus:border-violet-600 focus:outline-none"
                                    />
                                    {
                                        formErrors?.email &&
                                        <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                                            <RiErrorWarningFill className="text-base mt-0.5" />
                                            {formErrors?.email}
                                        </p>
                                    }
                                </div>
                                <div>
                                    <label htmlFor='contactNumber' className="px-1">Contact Number</label>
                                    <input
                                        onChange={handleChange}
                                        placeholder=""
                                        type="text" name='contactNumber' id='contactNumber'
                                        className="block mt-2 px-3 py-2 rounded-lg w-full bg-white text-gray-600 border border-violet-300 placeholder-violet-600 shadow-[5px_5px_0px_rgb(124,58,237,0.5)] focus:shadow-[5px_5px_0px_rgb(124,58,237)] focus:placeholder-violet-500 focus:bg-white focus:border-violet-600 focus:outline-none"
                                    />
                                    {
                                        formErrors?.contactNumber &&
                                        <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                                            <RiErrorWarningFill className="text-base mt-0.5" />
                                            {formErrors?.contactNumber}
                                        </p>
                                    }
                                </div>
                                <div>
                                    <label htmlFor='resume' className="px-1">Resume</label>
                                    <input
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            const reader = new FileReader();
                                            reader.readAsDataURL(file);
                                            reader.onloadend = () => {
                                                setFormData({
                                                    ...formData,
                                                    resume: {
                                                        data: reader.result,
                                                        type: file.type,
                                                        size: file.size
                                                    }
                                                });
                                            };
                                        }}
                                        placeholder=""
                                        type="file" name='resume' id='resume'
                                        className="block mt-2 px-3 py-1.5 rounded-lg w-full bg-white text-gray-600 border border-violet-300 placeholder-violet-600 shadow-[5px_5px_0px_rgb(124,58,237,0.5)] focus:shadow-[5px_5px_0px_rgb(124,58,237)] focus:placeholder-violet-500 focus:bg-white focus:border-violet-600 focus:outline-none"
                                    />
                                    {
                                        formErrors?.resume &&
                                        <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                                            <RiErrorWarningFill className="text-base mt-0.5" />
                                            {formErrors?.resume}
                                        </p>
                                    }
                                </div>
                                <div>
                                    <button
                                        type='submit'
                                        disabled={loading}
                                        className='w-max mt-3 px-8 py-3 text-base font-medium bg-violet-600 hover:bg-violet-700 duration-300 text-white flex items-center gap-2 rounded-md hover:shadow-[0_3px_15px_rgb(124,58,237,0.5)]'
                                    >
                                        {loading ?
                                            <SpinnerBtn
                                                parentClass={'w-14'}
                                                childClass={'bg-white'}
                                            />
                                            : 'Submit'
                                        }
                                    </button>
                                </div>
                            </form>
                    }
                </div>
            </div>
        }
    </>);
};

export default BookAFreeCounselling;