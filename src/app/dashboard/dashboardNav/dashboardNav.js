import Image from "next/image";
import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AdminSidebar from "@/app/adminDashboard/adminSidebar";

const DashboardNav = () => {
  return (
    <div className="navbar bg-[#212b39] justify-end h-[56px]">
      {/* <AdminSidebar></AdminSidebar> */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <AiOutlineShoppingCart size={28} />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>

          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end lg:w-auto w-full">
          <label tabIndex={0} className="mx-8 mr-4">
            <IoMdNotifications size={28} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[300px] justify-end md:w-96"
          >
            <h1 className="text-center text-lg">Notifications</h1>
            <hr className="my-2"></hr>
            <li className="flex-row">
              <Image
                width={50}
                height={50}
                alt=""
                className="rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1vKaWhtVyD5P7_-1CATcpNU79Ssf2LBxuQ&usqp=CAU"
              />
              <div>
                <p>Asad</p>
                <p className="text-xs">Commented On your Post</p>
              </div>
            </li>
            <li className="flex-row">
              <Image
                width={50}
                height={50}
                alt=""
                className="rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1vKaWhtVyD5P7_-1CATcpNU79Ssf2LBxuQ&usqp=CAU"
              />
              <div>
                <p>Asad</p>
                <p className="text-xs">Commented On your Post</p>
              </div>
            </li>
            <li className="flex-row">
              <Image
                width={50}
                height={50}
                alt=""
                className="rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1vKaWhtVyD5P7_-1CATcpNU79Ssf2LBxuQ&usqp=CAU"
              />
              <div>
                <p>Asad</p>
                <p className="text-xs">Commented On your Post</p>
              </div>
            </li>
            <li className="flex-row">
              <Image
                width={50}
                height={50}
                alt=""
                className="rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1vKaWhtVyD5P7_-1CATcpNU79Ssf2LBxuQ&usqp=CAU"
              />
              <div>
                <p>Asad</p>
                <p className="text-xs">Commented On your Post</p>
              </div>
            </li>

            {/* <li><a>Item 2</a></li> */}
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar online"
          >
            <div className="w-10 rounded-full">
              <Image
                width={50}
                height={50}
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1vKaWhtVyD5P7_-1CATcpNU79Ssf2LBxuQ&usqp=CAU"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge font-semibold">Abu Sayed</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
