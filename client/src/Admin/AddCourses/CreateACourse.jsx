import React, { useContext, useState } from 'react';
import PageTitle from '../../Pages/Shared/PageTitle';
import { AiOutlineWarning } from 'react-icons/ai';
import { contextProvider } from '../../Context/ContextProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SpinnerBtn from '../../Pages/Shared/Spinner/SpinnerBtn';

const CreateACourse = ({ setUpload }) => {
    const { showToast } = useContext(contextProvider);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // <!-- Handle Submit -->
    const handleSubmit = async (event) => {
        event.preventDefault();
        const title = event.target.courseTitle.value;
        const price = event.target.price.value;
        if (!title) return setError({ ...error, title: 'Course title is required!' });
        if (!price) return setError({ ...error, title: '', price: 'Course price is required!' });
        setError('');
        setLoading(true);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_V1_URL}/course/title`, {
                title, price
            }, {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.getItem('auth_token')
                }
            });
            showToast({
                success: res.data.success,
                error: ''
            });
            res.data.success && setUpload('video');
        } catch (err) {
            showToast({
                succuss: '', error: err?.response?.data?.error,
            });
            if (err?.response?.data?.notExist) {
                localStorage.removeItem('auth_token');
                return navigate('/sign-in');
            }
        };
        setLoading(false);
    };


    return (<>
        <PageTitle title="Add a new course title" />
        <div className="mt-5 pt-10 pb-20 px-8 w-full mx-auto border bg-white text-gray-600 rounded-lg">
            <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto text-center">
                <h2
                    className="font-semibold block mb-10 text-content text-xl"
                >
                    Add a new Course
                </h2>
                <div>
                    <input
                        id="courseTitle" name='courseTitle' type='text'
                        className="block w-full border rounded outline-none py-2 px-3 text-base focus:border-violet-600"
                        placeholder='Course Title'
                    >
                    </input>
                    {
                        error?.title &&
                        <p className='relative top-0 mt-1 text-sm text-red-400 flex gap-2 items-start'>
                            <AiOutlineWarning className="text-base mt-0.5" />
                            {error?.title}
                        </p>
                    }
                </div>
                <div className='mt-5'>
                    <input
                        id="price" name='price' type='number' min={0}
                        className="block w-full border rounded outline-none py-2 px-3 text-base focus:border-violet-600"
                        placeholder='Price'
                    >
                    </input>
                    {
                        error?.price &&
                        <p className='relative top-0 mt-1 text-sm text-red-400 flex gap-2 items-start'>
                            <AiOutlineWarning className="text-base mt-0.5" />
                            {error?.price}
                        </p>
                    }
                </div>
                <div className="mt-7 flex justify-center">
                    <button
                        disabled={loading}
                        type="submit"
                        className='px-8 py-3 text-base font-medium bg-violet-600 hover:bg-violet-700 duration-300 text-white flex items-center gap-2 rounded'
                    >
                        {loading ?
                            <SpinnerBtn
                                parentClass={'w-20'}
                                childClass={'bg-gray-200'}
                            />
                            : 'New Course'
                        }
                    </button>
                </div>
            </form>
        </div>
    </>);
};

export default CreateACourse;