import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { VscClose } from 'react-icons/vsc';
import navLogo from '../../../Images/ecera-system-logo.png';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

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
            <nav className={`w-full backdrop-blur-sm bg-white/50 ${scroll ? 'fixed top-0 left-0 right-0 z-40 shadow' : 'relative z-40'}`}>
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

                    {/* <!-- Mobile view --> */}
                    <div className='lg:hidden relative grid place-items-center'>
                        <button
                            onClick={() => setOpenMenu(!openMenu)}
                            className='w-10 h-10 relative'
                        >
                            <VscClose
                                className={`absolute inset-0 text-[40px] leading-none duration-300 ${openMenu ? 'opacity-100 visible rotate-0' : 'opacity-0 invisible rotate-90'}`}
                            />
                            <HiBars3CenterLeft
                                className={`absolute inset-0 text-[40px] leading-none duration-300 ${openMenu ? 'opacity-0 invisible rotate-90' : 'opacity-100 visible rotate-0'}`}
                            />
                        </button>

                        <MobileView
                            openMenu={openMenu}
                            setOpenMenu={setOpenMenu}
                        />
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;