"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" container mx-auto p-4 flex justify-between items-center relative">
      <Link href="/" className='text-3xl font-bold text-red-600'> OTAB </Link>
      <div className="hidden md:flex space-x-5">
          <Link href="/trade" className="block hover:text-red-500 text-gray-800 my-2">Trades</Link>
          <Link href="/markets" className="block hover:text-red-500 text-gray-800 my-2">Markets</Link>
          <Link href="/about" className="block hover:text-red-500 text-gray-800 my-2">About Us</Link>
          <Link href="/resource" className="block hover:text-red-500 text-gray-800 my-2">Resources</Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-red-500 border-[3px] border-red-500 hover:bg-red-100 py-1 px-4 rounded-2xl font-semibold">Login</button>
        <button className="text-white hidden font-semibold md:block bg-red-500  px-4 py-2 rounded-2xl">
          Create Demo Account
        </button>
        <button className=" font-bold">EN</button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="text-black"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      <div
        className={`md:hidden absolute top-16 right-0 bg-white p-4 shadow-lg rounded w-full transition-transform ${menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
      >
        <Link href="/trades" className="block hover:text-red-500  my-2">Trades</Link>
        <Link href="/markets" className="block hover:text-red-500  my-2">Markets</Link>
        <Link href="/about" className="block hover:text-red-500  my-2">About Us</Link>
        <Link href="/resource" className="block hover:text-red-500  my-2">Resources</Link>
      </div>
    </nav>
  );
};

export default Navbar;
