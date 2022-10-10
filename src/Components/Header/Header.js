import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-banner flex justify-end items-center '>
            <div className='w-6/12 '>
                <h1 className='text-5xl font-bold'>Quiz Time! Are You a Headline Hero?</h1>
                <h3 className='text-3xl font-semibold'>Unlocking knowledge at the speed of thought.</h3>
            </div>
        </div>
    );
};

export default Header;