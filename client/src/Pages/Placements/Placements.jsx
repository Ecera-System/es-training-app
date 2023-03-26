import React from 'react';
import Header from '../Shared/Header/Header';
import PageTitle from '../Shared/PageTitle';

const Placements = () => {
    return (<>
        <PageTitle title="Placements" />
        <Header />
        <div className='w-full h-[30rem] grid place-items-center'>
            <div className='text-gray-400 text-center uppercase'>
                <h4 className='text-sm tracking-widest mb-8'>
                    Site under construction
                </h4>
                <h1 className='text-6xl tracking-[2rem]'>
                    Coming soon
                </h1>
            </div>
        </div>
    </>);
};

export default Placements;