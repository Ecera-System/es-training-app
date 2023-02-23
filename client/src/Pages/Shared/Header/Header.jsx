import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../../Images/ecera-system-logo.png';
import DesktopView from './DesktopView';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 48) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    });

    return (
        <header className={`w-full h-[76px] text-gray-600`}>
            <nav className={`w-full bg-white ${scroll ? 'fixed top-0 left-0 right-0 z-40 shadow-md' : ''}`}>
                <div className='2xl:w-[1200px] xl:w-full mx-auto flex items-center justify-between 2xl:px-0 lg:px-14 sm:px-6 px-3 py-2'>

                    {/* <== == == == Right Logo == == == ==> */}
                    <div>
                        <Link to={'/'}>
                            <img
                                className='w-14 h-14'
                                src={navLogo}
                                alt="ecera-system-logo"
                            />
                        </Link>
                    </div>

                    {/* <== == == == Left Menu items == == == ==> */}
                    {/* <!-- Desktop view --> */}
                    <DesktopView />

                </div>
            </nav>
        </header>
    );
};

export default Header;