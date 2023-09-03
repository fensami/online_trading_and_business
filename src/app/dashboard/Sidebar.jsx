"use client";
import Link from "next/link";
import React from "react";
// import { FaExchangeAlt } from 'react-icons/fa';
// import { MdDashboardCustomize } from 'react-icons/md';
import { GiPriceTag, GiCrossedChains, GiHamburgerMenu } from "react-icons/gi";
// import { LiaWalletSolid } from 'react-icons/lia';
// import { MdOutlinePercent } from 'react-icons/md';
// import { TbActivityHeartbeat } from 'react-icons/tb';
// import { MdOutlineNotificationsActive } from 'react-icons/md';
// import { TbSettings,TbBrandOauth } from 'react-icons/tb';
import SidebarLink from "./sidebarLink";

const dashboardLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-[#131720] h-screen">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="lg:hidden">
            <GiHamburgerMenu className="text-2xl top-0 left-0 fixed"></GiHamburgerMenu>
            {/* close icon */}
          </label>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content fixed bg-[#212b39] flex flex-col items-center justify-center">
              {/* Page content here */}
              <label htmlFor="my-drawer-2" className="lg:hidden">
                <GiHamburgerMenu className="text-3xl m-3"></GiHamburgerMenu>
                {/* close icon */}
              </label>
            </div>

            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

              <div className="my-2 w-52 bg-[#212b39] text-white pl-4 py-4 gap-5">
                <Link href="/" className="text-center my-5 text-2xl font-bold">
                  OTAB
                </Link>
                <SidebarLink></SidebarLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
