import React from 'react';
import { IoCartSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const CartIcon = () => {
    const cartStorage = JSON.parse(localStorage.getItem('cartItem'));

    return (
        <div className='grid place-items-center'>
            <NavLink
                to='/cart'
                className='inline-block hover:text-violet-500 duration-200 relative'
            >
                <IoCartSharp className='text-[1.6rem]' />
                <p className='absolute -top-2 left-5 px-1 text-xs rounded bg-violet-600 text-white flex justify-center items-center'>
                    {cartStorage?.length}
                </p>
            </NavLink>
        </div>
    );
};

export default CartIcon;