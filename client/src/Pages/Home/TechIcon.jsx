import React from 'react';
import Slider from 'react-slick';
import html from '../../Images/tech-icon/html-5.png'
import css from '../../Images/tech-icon/css-3.png'
import bootstrap from '../../Images/tech-icon/bootstrap.png'
import tailwind from '../../Images/tech-icon/tailwind.png'
import javascript from '../../Images/tech-icon/javascript.png'
import react from '../../Images/tech-icon/react.png'
import nodejs from '../../Images/tech-icon/nodejs.png'
import redux from '../../Images/tech-icon/redux.png'
import expressjs from '../../Images/tech-icon/expressjs.png'
import mongodb from '../../Images/tech-icon/mongodb.png'
import git from '../../Images/tech-icon/git.png'

const TechIcon = () => {
    const data = [
        {
            img: html,
            title: 'HTML'
        },
        {
            img: css,
            title: 'CSS'
        },
        {
            img: bootstrap,
            title: 'Bootstrap'
        },
        {
            img: tailwind,
            title: 'TailwindCSS'
        },
        {
            img: javascript,
            title: 'JavaScript'
        },
        {
            img: react,
            title: 'React.js'
        },
        {
            img: nodejs,
            title: 'Node.js'
        },
        {
            img: redux,
            title: 'Redux'
        },
        {
            img: expressjs,
            title: 'Express.js'
        },
        {
            img: mongodb,
            title: 'MongoDB'
        },
        {
            img: git,
            title: 'Git'
        },
    ];


    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <section className='pb-16'>
            <div className='2xl:w-[1200px] sm:w-11/12 w-4/5 mx-auto text-center'>
                <div className='w-full'>
                    <Slider {...settings}>
                        {
                            data.map((item, index) =>
                                <div key={index}>
                                    <div className='my-10 sm:mx-3 mx-6'>
                                        <div className='rounded-xl shadow-[0px_2px_20px_0_rgb(124,58,237,0.2)] p-7'>
                                            <div className='w-32 h-32 mx-auto rounded-full bg-violet-50 p-7'>
                                                <img
                                                    className='w-full h-full'
                                                    src={item.img}
                                                    alt={item.title}
                                                />
                                            </div>
                                            <h1 className='text-center text-lg font-medium text-black pt-5'>
                                                {
                                                    item.title
                                                }
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TechIcon;