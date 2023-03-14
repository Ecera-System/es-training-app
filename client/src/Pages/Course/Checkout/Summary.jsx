import React from 'react';

const Summary = ({ data, isDiscount }) => {
    const {
        title,
        level,
        requirements,
        coverImage,
    } = data;

    return (
        <div>
            <h2 className='text-xl text-center font-semibold text-gray-700 p-5 border-b'>
                Summary
            </h2>
            <div className='flex items-start gap-2 my-5'>
                <img
                    src={`${process.env.REACT_APP_API_V1_URL}/${coverImage}`}
                    alt="Course" className='mt-1.5 w-10 max-w-full object-cover'
                />
                <h4 className='text-base text-gray-700'>
                    {title}
                </h4>
            </div>
            <div className='text-xl font-semibold text-gray-700 flex justify-between items-center gap-5'>
                <span>Total:</span>
                <span>${isDiscount}</span>
            </div>
            <ul className='text-sm text-gray-600 list-disc list-inside my-5'>
                <h4 className='text-base font-semibold text-gray-700 mb-2'>Requirements:</h4>
                {requirements?.map(item =>
                    <li key={item}>{item}</li>
                )}
            </ul>
            <div className='my-5'>
                <h4 className='text-base font-semibold text-gray-700 mb-2'>Course level:</h4>
                <p className='pl-5 text-sm text-gray-600'>{level}</p>
            </div>
        </div>
    );
};

export default Summary;