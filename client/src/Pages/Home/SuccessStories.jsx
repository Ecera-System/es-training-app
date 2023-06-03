import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import Slider from 'react-slick';


const reviews = [
    {
        name: 'John Doe',
        avatar: '/images/nav/avatar.png',
        position: 'Software Engineer',
        company: 'Microsoft',
        feedback: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique laudantium odit quo cum quis, maxime sed! Provident modi eligendi veritatis odio natus facere nulla! Voluptatibus reprehenderit corporis quos provident deserunt explicabo! Voluptatibus fugiat porro autem, qui possimus eum eius dolor magnam dicta vero incidunt doloremque alias sapiente. Nobis, veritatis minus',
    },
    {
        name: 'Daniel Henry',
        avatar: '/images/nav/avatar.png',
        position: 'MERN Stack Developer',
        company: 'Google',
        feedback: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique laudantium odit quo cum quis, maxime sed! Provident modi eligendi veritatis odio natus facere nulla! Voluptatibus reprehenderit corporis quos provident deserunt explicabo! Voluptatibus fugiat porro autem, qui possimus eum eius dolor magnam dicta vero incidunt doloremque alias sapiente. Nobis, veritatis minus',
    },
    {
        name: 'Jackson Mateo',
        avatar: '/images/nav/avatar.png',
        position: 'Web Developer',
        company: 'LinkedIn',
        feedback: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique laudantium odit quo cum quis, maxime sed! Provident modi eligendi veritatis odio natus facere nulla! Voluptatibus reprehenderit corporis quos provident deserunt explicabo! Voluptatibus fugiat porro autem, qui possimus eum eius dolor magnam dicta vero incidunt doloremque alias sapiente. Nobis, veritatis minus',
    },
    {
        name: 'David Hudson',
        avatar: '/images/nav/avatar.png',
        position: 'Full Stack Web Developer',
        company: 'Ubar',
        feedback: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique laudantium odit quo cum quis, maxime sed! Provident modi eligendi veritatis odio natus facere nulla! Voluptatibus reprehenderit corporis quos provident deserunt explicabo! Voluptatibus fugiat porro autem, qui possimus eum eius dolor magnam dicta vero incidunt doloremque alias sapiente. Nobis, veritatis minus',
    }
];

const SuccessStories = () => {
    // Next button Display none for perfect width
    const SampleNextArrow = (props) => {
        const { className, style } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
            />
        );
    }
    // Prev button Display none for perfect width
    const SamplePrevArrow = (props) => {
        const { className, style } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
            />
        );
    }

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <section className='py-20 mb-20'>
            <div className='w-full mx-auto'>
                <div>
                    <h1 className='text-5xl font-semibold text-center text-gray-800'>
                        Successful Students
                    </h1>
                </div>
                <Slider {...settings} className=''>
                    {
                        reviews.map((item, index) =>
                            <div className='w-full' key={index}>
                                <div className='max-w-3xl mx-auto mt-10 p-8 text-center'>
                                    <p className='text-base text-gray-600 relative'>
                                        <span className='absolute -top-12 -left-10 text-9xl text-gray-100 -z-10'>
                                            <RiDoubleQuotesL />
                                        </span>
                                        {item.feedback}
                                    </p>
                                    <img
                                        src={item.avatar}
                                        alt="Student avatar"
                                        className='w-16 h-16 mx-auto rounded-full inline-block mt-8 mb-3 border-2 border-black'
                                    />
                                    <h4 className='text-base font-medium text-gray-800'>
                                        {item.name}
                                    </h4>
                                    <p className='text-sm text-gray-600'>
                                        {item.position}, {item.company}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </section>
    );
};

export default SuccessStories;