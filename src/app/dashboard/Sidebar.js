"use client";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarLink from "./sidebarLink";

const AdminSidebar = () => {
  return (
    <div className=" bg-[#131720] w-full h-full">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content fixed bg-[#212b39] flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="sticky  top-0 z-10 lg:hidden">
            <GiHamburgerMenu className="text-3xl m-3"></GiHamburgerMenu>
          </label>
        </div>

        <div className="drawer-side fixed z-10 ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="w-52 bg-[#212b39] text-white p-4 gap-5">
            <Link href="/" className="text-center mt-5 text-2xl font-bold">
              <p className="text-center">OTAB</p>
            </Link>
            <SidebarLink></SidebarLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
