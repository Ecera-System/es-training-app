import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExploreProjects = ({ isTitle }) => {
    const navigate = useNavigate();

    return (
        <section className={isTitle ? 'py-20' : 'py-28'}>
            <div className='max-w-[68rem] w-[90%] mx-auto'>
                {
                    isTitle && <h1 className=' text-3xl font-medium text-gray-800 mb-8'>
                        Explore Our Projects
                    </h1>
                }
                <div className='grid grid-cols-4 gap-5'>
                    <button
                        onClick={() => navigate('/projects/mern-stack')}
                        className='p-10 bg-indigo-900 text-white text-center rounded-md hover:-translate-y-1.5 duration-300'
                    >
                        <h2 className='text-2xl font-medium'>MERN Stack</h2>
                        <h4 className='text-base uppercase mt-3'>Projects</h4>
                    </button>
                    {/* <button
                        onClick={() => navigate('/projects/frontend')}
                        className='p-10 bg-indigo-900 text-white text-center rounded-md hover:-translate-y-1.5 duration-300'
                    >
                        <h2 className='text-2xl font-medium'>Frontend</h2>
                        <h4 className='text-base uppercase mt-3'>Projects</h4>
                    </button>
                    <button
                        onClick={() => navigate('/projects/backend')}
                        className='p-10 bg-indigo-900 text-white text-center rounded-md hover:-translate-y-1.5 duration-300 cursor-pointer'
                    >
                        <h2 className='text-2xl font-medium'>Backend</h2>
                        <h4 className='text-base uppercase mt-3'>Projects</h4>
                    </button>
                    <button
                        onClick={() => navigate('/projects/react-js')}
                        className='p-10 bg-indigo-900 text-white text-center rounded-md hover:-translate-y-1.5 duration-300 cursor-pointer'
                    >
                        <h2 className='text-2xl font-medium'>React JS</h2>
                        <h4 className='text-base uppercase mt-3'>Projects</h4>
                    </button>
                    <button
                        onClick={() => navigate('/projects/node-js')}
                        className='p-10 bg-indigo-900 text-white text-center rounded-md hover:-translate-y-1.5 duration-300 cursor-pointer'
                    >
                        <h2 className='text-2xl font-medium'>Node JS</h2>
                        <h4 className='text-base uppercase mt-3'>Projects</h4>
                    </button> */}
                </div>
            </div>
        </section>
    );
};

export default ExploreProjects;