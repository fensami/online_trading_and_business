import Link from "next/link";
import React from "react";
import { FaDotCircle } from "react-icons/fa";
import "../dashboard/sidebarLink.css";
import { BiHome, BiStore } from "react-icons/bi";
import { RiLiveLine } from "react-icons/ri";
import { AiOutlineSwap } from "react-icons/ai";
import { SiLiquibase } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { MdHowToVote } from "react-icons/md";
import { GiSecurityGate } from "react-icons/gi";

const SidebarLink = () => {
  return (
    <div className="flex flex-col">
      <div className="sidebar-link">
        <BiHome className="icon" />
        <Link href="/adminDashboard/adminHome" className="">
          {" "}
          Home
        </Link>
      </div>
      <div className="sidebar-link">
        <RiLiveLine className="icon" />
        <Link href="/adminDashboard/livePricing" className="">
          {" "}
          Live Pricing
        </Link>
      </div>
      <div className="sidebar-link">
        <BiStore className="icon" />
        <Link href="/adminDashboard/farm" className="">
          Farm
        </Link>
      </div>
      <div className="sidebar-link">
        <AiOutlineSwap className="icon" />
        <Link href="/adminDashboard/swap" className="">
          Swap
        </Link>
      </div>
      <div className="sidebar-link">
        <SiLiquibase className="icon" />
        <Link href="/adminDashboard/liquidity" className="">
          Liquidity
        </Link>
      </div>

      <div className="sidebar-link">
        <details>
          <summary className="cursor-pointer">NFTs</summary>
          <ul className="p-2 text-right">
            <li>
              <Link
                href="/adminDashboard/explore-nfts"
                className="flex items-center"
              >
                {" "}
                <FaDotCircle></FaDotCircle>Explore NFTs
              </Link>
            </li>
            <li>
              <Link
                href="/adminDashboard/create-nfts"
                className="flex items-center my-2"
              >
                {" "}
                <FaDotCircle></FaDotCircle>Create NFTs
              </Link>
            </li>
            <li>
              <Link
                href="/adminDashboard/details-nfts"
                className="flex items-center"
              >
                {" "}
                <FaDotCircle></FaDotCircle>NFTs Details
              </Link>
            </li>
          </ul>
        </details>
      </div>

      <div className="sidebar-link">
        <CgProfile className="icon" />
        <Link href="/adminDashboard/profile" className="">
          Profile
        </Link>
      </div>
      <div className="sidebar-link">
        <MdHowToVote className="icon" />
        <Link href="/adminDashboard/vote" className="">
          Vote
        </Link>
      </div>
      <div className="sidebar-link">
        <GiSecurityGate className="icon" />
        <Link href="/adminDashboard/authentication" className="">
          Authentication
        </Link>
      </div>
    </div>
  );
};

export default SidebarLink;
