import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

    return (
        <nav className='md:flex items-center justify-between px-20 py-4 bg-slate-400'>
            <h1 className='text-1xl md:text-3xl font-bold'>Quiz Quark</h1>
            <div className='font-bold flex flex-col justify-center md:flex-row'>
                <Link className='mr-5' to={"/"}>Home</Link>
                <Link className='mr-5' to={"/topics"}>Topics</Link>
                <Link className='mr-5' to={"/statistics"}>Statistics</Link>
                <Link className='mr-5' to={"/blog"}>Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;