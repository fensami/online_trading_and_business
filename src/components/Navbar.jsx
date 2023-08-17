"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {user, logout} = useAuth();
  console.log(user);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout()
      toast.success("successfully logout")
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <nav className=" container mx-auto p-4 flex justify-between items-center relative bg-[#212b39] text-white">
      <Link href="/" className='text-3xl font-bold'> OTAB </Link>
      <div className="hidden md:flex space-x-5">
        <Link href="/trade" className="block hover:text-red-500  my-2">Trades</Link>
        <Link href="/markets" className="block hover:text-red-500  my-2">Markets</Link>
        <Link href="/about" className="block hover:text-red-500  my-2">About Us</Link>
        <Link href="/resource" className="block hover:text-red-500  my-2">Resources</Link>
        <Link href="/dashboard" className="block hover:text-red-500  my-2">dashboard</Link>
      </div>
      <div className="flex items-center space-x-4">
        {
          user? 
          <div className='flex justify-center items-center gap-5'>
            {
            user.displayName ? <h3 className='font-semibold'>{user.displayName}</h3> :
            <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" />
            }
            <Link className='hidden md:block' href="/"><button onClick={handleLogout} className="text-red-500 border-[3px] border-red-500 hover:bg-red-100 py-1 px-4 rounded-2xl font-semibold">Logout</button></Link>
          </div> :
          <Link href="/login"><button className="text-red-500 border-[3px] border-red-500 hover:bg-red-100 py-1 px-4 rounded-2xl font-semibold">Login</button></Link>
        }
        <button className="text-white hidden font-semibold md:block bg-red-500  px-4 py-2 rounded-2xl">
          Create Demo Account
        </button>
        <button className=" font-bold">EN</button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="text-white"
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
        className={`md:hidden absolute -top-[133px] right-0 bg-slate-950 p-4 shadow-lg rounded w-full transition-transform ${menuOpen ? 'transform translate-y-full' : '-transform -translate-y-24'
          }`}
      >
        <Link href="/trades" className="block hover:text-red-500  my-2">Trades</Link>
        <Link href="/markets" className="block hover:text-red-500  my-2">Markets</Link>
        <Link href="/about" className="block hover:text-red-500  my-2">About Us</Link>
        <Link href="/resource" className="block hover:text-red-500  my-2">Resources</Link>
        <Link href="/dashboard" className="block hover:text-red-500  my-2">dashboard</Link>
        {
          user?
          <Link href="/"><button onClick={handleLogout} className="text-red-500 border-[3px] border-red-500 hover:bg-red-100 py-1 px-4 rounded-2xl font-semibold">Logout</button></Link>:
          <Link href="/login"><button className="text-red-500 border-[3px] border-red-500 hover:bg-red-100 py-1 px-4 rounded-2xl font-semibold">Login</button></Link>        
          }
      </div>
    </nav>
  );
};

export default Navbar;
