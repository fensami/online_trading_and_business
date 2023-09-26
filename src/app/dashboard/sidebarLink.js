'use client'
import Link from "next/link";
import "./sidebarLink.css";
import { BiSolidDashboard, BiWallet } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { FcSupport } from "react-icons/fc";
import { VscVmActive } from "react-icons/vsc";
import { IoMdNotifications } from "react-icons/io";
import { SiSpringsecurity } from "react-icons/si";
import {
  AiOutlineAreaChart,
  AiOutlineDollar,
  AiOutlineToTop,
  AiFillSetting,
} from "react-icons/ai";
import { MdConnectWithoutContact } from "react-icons/md";
// import { usePathname } from 'next/navigation'

const SidebarLink = () => {
  // const pathname = usePathname()
  // const isActive = pathname === link.href
  return (
    <div className="flex gap-0 flex-col mt-3 ">
      <div className="sidebar-link mt-5">
        <BiSolidDashboard className="icon" />
        <Link href="/dashboard" >

          Dashboard
        </Link>
      </div>

      <div className="sidebar-link">
        <BsCurrencyExchange className="icon" />
        <Link href="/dashboard/exchange" >
          Exchange
        </Link>
      </div>

      <div className="sidebar-link">
        <AiOutlineAreaChart className="icon" />
        <Link className=" " href="/dashboard/forex">

          Forex
        </Link>
      </div>
      {/* <div className='border p-3 rounded-xl'><Link className=' ' href='/dashboard/marketsOverviews'>  Markets Overview</Link></div> */}

      <div className="sidebar-link">
        <AiOutlineDollar className="icon" />
        <Link href="/dashboard/prices" className="">

          Prices
        </Link>
      </div>

      <div className="sidebar-link">
        <BiWallet className="icon" />
        <Link href="/dashboard/wallets" className="">
          Wallets
        </Link>
      </div>

      <div className="sidebar-link">
        <AiOutlineToTop className="icon" />
        <Link href="/dashboard/promotions" className="">

          Promotions
        </Link>
      </div>

      <div className="sidebar-link">
        <VscVmActive className="icon" />
        <Link href="/dashboard/activities" className="">

          Activities
        </Link>
      </div>

      <div className="sidebar-link">
        <IoMdNotifications className="icon" />
        <Link href="/dashboard/notifications" className="">

          Notifications
        </Link>
      </div>

      <div className="sidebar-link">
        <AiFillSetting className="icon" />
        <Link href="/dashboard/settings" className="">

          Settings
        </Link>
      </div>

      <div className="sidebar-link">
        <FcSupport className="icon" />
        <Link href="/dashboard/utilities" className="">

          Utilities
        </Link>
      </div>

      <div className="sidebar-link">
        <SiSpringsecurity className="icon" />
        <Link href="/dashboard/authentication" className="">

          Authentication
        </Link>
      </div>

      <div className="sidebar-link">
        <MdConnectWithoutContact className="icon" />
        <Link href="/dashboard/expertise" className="">

          Expert
        </Link>
      </div>
    </div>
  );
};

export default SidebarLink;
