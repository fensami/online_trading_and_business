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
      
      <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTciIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA5NyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzMzODhfMTk0ODkpIj4KPHBhdGggZD0iTTE5LjMyMDggMS4wMDk0MUwxNy42Njk3IDEwLjM2OTNIMTEuOTM4M0M2LjU5MTMyIDEwLjM2OTMgMS40OTQ3NyAxNC42OTk4IDAuNTUwMTU2IDIwLjA0NDdMMC4xNTAzMyAyMi4zMTk3Qy0wLjc4OTg4MiAyNy42NjQ3IDIuNzc3NjkgMzEuOTk1MiA4LjEyNDY5IDMxLjk5NTJIMTIuOTA0OUMxNi44MDIgMzEuOTk1MiAyMC41MTQ2IDI4Ljg0MTcgMjEuMiAyNC45NDYyTDI1LjYwMjMgMEwxOS4zMjA4IDEuMDA5NDFaTTE1LjI1NDEgMjQuMDYzM0MxNS4wNDMyIDI1LjI2NjcgMTMuOTU5NCAyNi4yNDYyIDEyLjc1NTUgMjYuMjQ2Mkg5Ljg1MTM3QzcuNDQ4MDggMjYuMjQ2MiA1Ljg0MDA0IDI0LjI5NjEgNi4yNjE4IDIxLjg4OTNMNi41MTIyNSAyMC40NzA3QzYuOTM4NDEgMTguMDY4MyA5LjIzMTg2IDE2LjExMzkgMTEuNjM1MiAxNi4xMTM5SDE2LjY1NjNMMTUuMjU0MSAyNC4wNjMzWk02My40NjAxIDMxLjk5NDdMNjcuMjIxIDEwLjY2NzVINzMuMTY5OEw2OS40MDg5IDMxLjk5NDdINjMuNDYwMVpNNjQuMTAzNSAxMC45MTM0QzYzLjgwNTMgMTIuNjA1IDYzLjUwNTkgMTQuMjk2NyA2My4yMDc3IDE1Ljk4ODNDNjAuMzg5NCAxNS4xMTI5IDU3LjQ4MTYgMTUuMzkxNyA1Ni41ODgzIDE1LjU2OTdDNTUuNjIzNSAyMS4wNDYxIDU0LjY1NzUgMjYuNTIzNyA1My42OTE0IDMySDQ3LjczODZDNDguNTQ2OSAyNy40MTc5IDUxLjMwODcgMTEuNzY5MiA1MS4zMDg3IDExLjc2OTJDNTMuMjQ0OCAxMC45Njc3IDU3Ljk5OTQgOS4zNDExNyA2NC4xMDM1IDEwLjkxMzRaTTM5Ljk4MzUgMTAuMzY1N0gzNS4zNTI3QzMwLjg0MDUgMTAuMzY1NyAyNi41Mzk0IDE0LjAxOTggMjUuNzQ0IDE4LjUzMDJMMjQuODA4MiAyMy44MzEzQzI0LjAxMjkgMjguMzQxOCAyNy4wMjI2IDMxLjk5NTkgMzEuNTM0OSAzMS45OTU5SDQxLjM4NTJMNDIuMzk1OCAyNi4yNjQ1SDMzLjEzODNDMzEuNjM1OCAyNi4yNjQ1IDMwLjYyOTYgMjUuMDQ3OSAzMC44OTc3IDIzLjU0MTRMMzAuOTI4NSAyMy4zNjE0SDQ1Ljg1MzVMNDYuNzA1OCAxOC41MzAyQzQ3LjUwMDkgMTQuMDE5OCA0NC40OTE0IDEwLjM2NTcgMzkuOTc5MiAxMC4zNjU3SDM5Ljk4MzVaTTQwLjczNDkgMTguMDczNUw0MC42OTk3IDE4LjM4MDlIMzEuODI0OEwzMS44NzMyIDE4LjEwODZDMzIuMTQxIDE2LjYwNjYgMzMuNTEyIDE1LjI4NDYgMzUuMDE4OCAxNS4yODQ2SDM4LjQ4NTRDMzkuOTc0OCAxNS4yODQ2IDQwLjk4MSAxNi41ODQ2IDQwLjczNDkgMTguMDczNVpNOTAuNDI3OCAxMC42Njc1SDk2LjM4MUM5NC4zNTMgMTYuMDU3MSA4OS43MDU2IDI1LjIyNTIgODUuMjAzNyAzMS45OTQ3SDc5LjI1MDVDNzcuMTg0IDI1LjU1MTggNzUuODQ5NSAxNi41NzQ3IDc1LjU5NDkgMTAuNjY3NUg4MS41NDgzQzgxLjY1NTggMTIuNTk0NCA4Mi41MTg3IDE5Ljc0MTYgODMuNTAzNSAyNC43MzQ3Qzg2LjIwNDYgMTkuODc3MiA4OS4xODI0IDEzLjUwNCA5MC40MjMyIDEwLjY2NzVIOTAuNDI3OFoiIGZpbGw9IiNGRjQ0NEYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zMzg4XzE5NDg5Ij4KPHJlY3Qgd2lkdGg9Ijk2LjQ0NDUiIGhlaWdodD0iMzIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==" alt="" />
      </div>
      <div className="hidden md:flex space-x-5">
          <Link href="/trades" className="block hover:text-red-500 text-gray-800 my-2">Trades</Link>
          <Link href="/markets" className="block hover:text-red-500 text-gray-800 my-2">Markets</Link>
          <Link href="/about" className="block hover:text-red-500 text-gray-800 my-2">About Us</Link>
          <Link href="/resource" className="block hover:text-red-500 text-gray-800 my-2">Resources</Link>
      </div>
      <div className="flex items-center space-x-4">
      <button className="text-red-500 border-[3px] border-red-500 hover:bg-red-100 py-1 px-4 rounded-2xl font-semibold">Login</button>
        <button className="text-white hidden font-semibold md:block bg-red-500  px-4 py-2 rounded-2xl">
          Create Demo Account
        </button>
        <button className="text-black font-bold">EN</button>
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
        className={`md:hidden absolute top-16 right-0 bg-white p-4 shadow-lg rounded w-full transition-transform ${
          menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
          <Link href="/trades" className="block hover:text-red-500 text-gray-800 my-2">Trades</Link>
          <Link href="/markets" className="block hover:text-red-500 text-gray-800 my-2">Markets</Link>
          <Link href="/about" className="block hover:text-red-500 text-gray-800 my-2">About Us</Link>
          <Link href="/resource" className="block hover:text-red-500 text-gray-800 my-2">Resources</Link>
      </div>
    </nav>
  );
};

export default Navbar;

