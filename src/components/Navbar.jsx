"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-hot-toast";
import useTheme from "@/hooks/useTheme";
import Image from "next/image";
import "./Navbar.css";
// import { useRouter } from "next/router";


const Navbar = () => {
  // const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true)
  const [role, setRole] = useState(null)

  const isAdmin = role === 'admin';
  const isUser = role === 'user';
  // console.log(role, isAdmin, isUser);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("successfully logout");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/allUsers/${user.email}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          if (data.length > 0) {
            const userRole = data[0].role;
            setRole(userRole);
          } else {
            setRole(null);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [user]);


  return (
    <nav
      className={` text-slate-200 p-4 flex justify-between bg-slate-200 items-center relative dark:bg-slate-900 navbar ${isNavbarVisible ? "navbar-visible" : ""
        }`}
    >
      <Link href="/" className={'text-3xl white font-bold'}>
        {" "}
        OTAB{" "}
      </Link>
      <div className="hidden md:flex space-x-5 font-semibold">
        <Link href="/trade" className="block hover:text-red-500  my-2">
          Trades
        </Link>

        <Link href="/markets" className="block hover:text-red-500  my-2">
          Markets
        </Link>
        <Link href="/blogs" className="block hover:text-red-500  my-2">
          Blogs
        </Link>

        <Link href="/about" className="block hover:text-red-500  my-2">
          About Us
        </Link>
        <Link href="/resource" className="block hover:text-red-500  my-2">
          Resources
        </Link>
        {isAdmin ? (
          <Link href="/adminDashboard" className="block hover:text-red-500 my-2">
            AdminDashboard
          </Link>
        ) : isUser ? (
          <Link href="/dashboard" className="block hover:text-red-500 my-2">
            Dashboard
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex justify-center items-center gap-5">
            {user.displayName ? (
              <h3 className="font-semibold">{user.displayName}</h3>
            ) : (
              <Image
                className="w-8 h-8 rounded-full"
                src={user.photoURL}
                alt=""
              />
            )}
            <Link className="hidden md:block" href="/">
              <button
                onClick={handleLogout}
                className="text-red-500 border-[3px] border-red-500 hover:bg-red-100 py-1 px-4 rounded-2xl font-semibold"
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link href="/login">
            <button className="text-red-500 border-[3px] border-slate-200 hover:bg-red-100 py-1 px-4 rounded-2xl font-semibold">
              Login
            </button>
          </Link>
        )}
        {/* <button className="text-white hidden font-semibold md:block bg-red-500  px-4 py-2 rounded-2xl">
          Create Demo Account
        </button> */}
        <label className="swap swap-rotate lg:ml-2">
          <input
            onChange={toggleTheme}
            type="checkbox"
            checked={theme === "dark"}
          />
          <svg
            className="swap-on h-9 w-9 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off h-9 w-9 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-white" onClick={toggleMenu}>
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      <div
        className={`md: hidden absolute -top-[170px] right-0 bg-slate-950 p-4 shadow-lg rounded w-full transition-transform ${menuOpen ? 'transform translate-y-full' : '-transform -translate-y-24'
          }`}
      >
        <Link href="/trades" className="block hover:text-red-500  my-2">
          Trades
        </Link>
        <Link href="/markets" className="block hover:text-red-500  my-2">
          Markets
        </Link>
        <Link href="/blogs" className="block hover:text-red-500  my-2">
          Blogs
        </Link>
        <Link href="/about" className="block hover:text-red-500  my-2">
          About Us
        </Link>
        <Link href="/resource" className="block hover:text-red-500  my-2">
          Resources
        </Link>

        {user ? (
          <div>
            <Link href="/dashboard" className="block hover:text-red-500  my-2">
              dashboard
            </Link>
            <Link href="/">
              <button
                onClick={handleLogout}
                className="text-red-500 border-[3px] border-red-500 hover:bg-red-100 py-1 px-4 rounded-2xl font-semibold"
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link href="/login">
            <button className="text-red-500 border-[3px] border-red-500 hover:bg-red-100 py-1 px-4 rounded-2xl font-semibold">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
