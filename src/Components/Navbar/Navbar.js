import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-20 py-4 bg-slate-400'>
            <h1 className='text-3xl font-bold'>Quiz Quark</h1>
            <div className='font-bold'>
                <a className='mr-5' href="/">Home</a>
                <a className='mr-5' href="/">Topics</a>
                <a className='mr-5' href="/">Statistics</a>
                <a className='mr-5' href="/">Blog</a>
            </div>
        </nav>
    );
};

export default Navbar;